import json
from typing import Dict, Optional, List
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi import Cookie, Depends, Query, status
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

from starlette.config import Config
from starlette.requests import Request
from starlette.middleware.sessions import SessionMiddleware
from starlette.responses import HTMLResponse, JSONResponse, RedirectResponse
from authlib.integrations.starlette_client import OAuth, OAuthError
import requests

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/static", StaticFiles(directory="files"), name="static")

templates = Jinja2Templates(directory="files")

app.add_middleware(SessionMiddleware, secret_key="!secret")

config = Config('.env')
oauth = OAuth(config)

CONF_URL = 'https://accounts.google.com/.well-known/openid-configuration'
oauth.register(
    name='google',
    server_metadata_url=CONF_URL,
    client_kwargs={
        'scope': 'openid email profile'
    }
)


@app.route('/')
async def homepage(request: Request):
    user = request.session.get('user')
    # breakpoint()
    if user:
        data = json.dumps(user)
        html = (
            f'<pre>{data}</pre>'
            f'<a href="/logout">logout</a><img src={user["picture"]}>'
            '<form><input name="name"><input name="email"><input type=submit></form>'
        )
        print(request.query_params.get('name'))
        name = user['name']
        email = user['email']
        url = "https://script.google.com/macros/s/AKfycbydq--_cfmrvQnKCIVZMfHHY6w1VI8KfKw5czR6YhDZG0AOznh3me0ij55l4bcwDw5Q/exec"
        params = {"name": name, "email": email}
        requests.post(url, params)
        # return HTMLResponse(html)
    return templates.TemplateResponse('index.html', {"request": request})


@app.route('/login')
async def login(request: Request):
    redirect_uri = request.url_for('auth')
    return await oauth.google.authorize_redirect(request, redirect_uri)


@app.route('/auth')
async def auth(request: Request):
    try:
        token = await oauth.google.authorize_access_token(request)
    except OAuthError as error:
        return HTMLResponse(f'<h1>{error.error}</h1>')
    user = await oauth.google.parse_id_token(request, token)
    request.session['user'] = dict(user)
    return RedirectResponse(url='/')

@app.get("/chat")
async def get(request: Request):
    return templates.TemplateResponse('chat.html', {'request': request})


@app.route('/api/v1/user')
async def auth(request: Request):
    user = request.session.get('user')
    if user:
        return JSONResponse({'loggedIn': True,'name': user['name'], 'email': user['email'], 'picture': user['picture']})
    # return JSONResponse({'loggedIn': False})
    return JSONResponse({"loggedIn":True,"name":"Aravindhan A","email":"aravindhan2413km@gmail.com","picture":"https://lh3.googleusercontent.com/a-/AOh14GjLSDtZEOGdD-SkX4-HXDN4ixTkpSHxYI1x0Q1t=s96-c"})


class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []
        self.sent_connections: List[WebSocket] = []
        self.Questions: List[Dict] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)
        if websocket not in self.sent_connections and len(self.Questions) > 0:
            await self.send_personal_message(self.Questions[-1], websocket)
            self.sent_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    async def send_personal_message(self, message: str, websocket: WebSocket):
        await websocket.send_json(message)

    async def broadcast(self, message: str):
        self.Questions.append(message)
        for connection in self.active_connections:
            await connection.send_json(message)
            self.sent_connections.append(connection)
        print(self.sent_connections)

manager = ConnectionManager()



# async def get_cookie_or_token(
#     websocket: WebSocket,
#     session: Optional[str] = Cookie(None),
#     token: Optional[str] = Query(None),
# ):
#     if session is None and token is None:
#         print("Not logged in")
#         await websocket.close(code=status.WS_1008_POLICY_VIOLATION)
#     return session or token


# @app.websocket("/ws")
# async def websocket_endpoint(websocket: WebSocket, cookie_or_token: str = Depends(get_cookie_or_token)):

#     await websocket.accept()
#     await websocket.send_text("Welcome")
#     while True:
#         data = await websocket.receive_text()
#         print(data)
#         await websocket.send_text('Hello')
#         breakpoint()
#         await websocket.send_text(f"Message text was: {data} and cookie is {cookie_or_token}")

@app.websocket("/ws/demo")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_json()
            print(data)
            try:
                if data['new_question'] == True:
                    await manager.broadcast(data)
                    manager.sent_connections = []
                    # await manager.send_personal_message(f"You wrote: {data}", websocket)
            except Exception as e:
                print(e)
            try:
                if data['answer'] == True:
                    url = "https://script.google.com/macros/s/AKfycbydq--_cfmrvQnKCIVZMfHHY6w1VI8KfKw5czR6YhDZG0AOznh3me0ij55l4bcwDw5Q/exec"
                    del data['answer']
                    params = {'name': str(json.dumps(data))+'\n'}
                    print(requests.post(url, params))                
            except Exception as e:
                print(e)
                print("Some Error Occurred")
    except WebSocketDisconnect:
        manager.disconnect(websocket)
        # await manager.broadcast("Client  left the chat")

async def sendQuestion(websocket: WebSocket, question: str):
    await websocket.send_json({'question': question})

@app.route('/logout')
async def logout(request: Request):
    request.session.pop('user', None)
    return RedirectResponse(url='/')


if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, port=8000, reload=True)