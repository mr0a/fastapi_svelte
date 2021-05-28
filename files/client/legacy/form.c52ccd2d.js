import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, g as element, t as text, f as space, k as claim_element, l as children, m as claim_text, h as detach_dev, j as claim_space, n as attr_dev, o as add_location, p as insert_dev, r as append_dev, C as listen_dev, D as prevent_default, u as noop, E as run_all, v as validate_slots, F as onMount, G as onDestroy, H as globals } from './client.56a8e490.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var console_1 = globals.console;
var file = "src\\routes\\form.svelte";

function create_fragment(ctx) {
  var div4;
  var form;
  var label0;
  var t0;
  var input0;
  var t1;
  var div2;
  var div0;
  var p;
  var t2;
  var t3;
  var input1;
  var t4;
  var label1;
  var t5;
  var t6;
  var input2;
  var t7;
  var label2;
  var t8;
  var t9;
  var div1;
  var label3;
  var t10;
  var t11;
  var input3;
  var t12;
  var button0;
  var t13;
  var t14;
  var div3;
  var button1;
  var t15;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      div4 = element("div");
      form = element("form");
      label0 = element("label");
      t0 = text("Question: ");
      input0 = element("input");
      t1 = space();
      div2 = element("div");
      div0 = element("div");
      p = element("p");
      t2 = text("Quiz type:");
      t3 = space();
      input1 = element("input");
      t4 = space();
      label1 = element("label");
      t5 = text("Radio");
      t6 = space();
      input2 = element("input");
      t7 = space();
      label2 = element("label");
      t8 = text("Checkbox");
      t9 = space();
      div1 = element("div");
      label3 = element("label");
      t10 = text("Option 1:");
      t11 = space();
      input3 = element("input");
      t12 = space();
      button0 = element("button");
      t13 = text("Submit");
      t14 = space();
      div3 = element("div");
      button1 = element("button");
      t15 = text("+");
      this.h();
    },
    l: function claim(nodes) {
      div4 = claim_element(nodes, "DIV", {});
      var div4_nodes = children(div4);
      form = claim_element(div4_nodes, "FORM", {});
      var form_nodes = children(form);
      label0 = claim_element(form_nodes, "LABEL", {});
      var label0_nodes = children(label0);
      t0 = claim_text(label0_nodes, "Question: ");
      input0 = claim_element(label0_nodes, "INPUT", {
        name: true,
        type: true
      });
      label0_nodes.forEach(detach_dev);
      t1 = claim_space(form_nodes);
      div2 = claim_element(form_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {});
      var div0_nodes = children(div0);
      p = claim_element(div0_nodes, "P", {});
      var p_nodes = children(p);
      t2 = claim_text(p_nodes, "Quiz type:");
      p_nodes.forEach(detach_dev);
      t3 = claim_space(div0_nodes);
      input1 = claim_element(div0_nodes, "INPUT", {
        type: true,
        value: true,
        id: true,
        name: true
      });
      t4 = claim_space(div0_nodes);
      label1 = claim_element(div0_nodes, "LABEL", {
        for: true
      });
      var label1_nodes = children(label1);
      t5 = claim_text(label1_nodes, "Radio");
      label1_nodes.forEach(detach_dev);
      t6 = claim_space(div0_nodes);
      input2 = claim_element(div0_nodes, "INPUT", {
        type: true,
        value: true,
        id: true,
        name: true
      });
      t7 = claim_space(div0_nodes);
      label2 = claim_element(div0_nodes, "LABEL", {
        for: true
      });
      var label2_nodes = children(label2);
      t8 = claim_text(label2_nodes, "Checkbox");
      label2_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t9 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      label3 = claim_element(div1_nodes, "LABEL", {
        for: true
      });
      var label3_nodes = children(label3);
      t10 = claim_text(label3_nodes, "Option 1:");
      label3_nodes.forEach(detach_dev);
      t11 = claim_space(div1_nodes);
      input3 = claim_element(div1_nodes, "INPUT", {
        type: true,
        name: true,
        class: true
      });
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t12 = claim_space(form_nodes);
      button0 = claim_element(form_nodes, "BUTTON", {
        type: true,
        class: true
      });
      var button0_nodes = children(button0);
      t13 = claim_text(button0_nodes, "Submit");
      button0_nodes.forEach(detach_dev);
      form_nodes.forEach(detach_dev);
      t14 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      button1 = claim_element(div3_nodes, "BUTTON", {
        type: true,
        class: true
      });
      var button1_nodes = children(button1);
      t15 = claim_text(button1_nodes, "+");
      button1_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(input0, "name", "question");
      attr_dev(input0, "type", "text");
      add_location(input0, file, 55, 25, 1847);
      add_location(label0, file, 55, 8, 1830);
      add_location(p, file, 58, 16, 1965);
      attr_dev(input1, "type", "radio");
      input1.value = "radio";
      attr_dev(input1, "id", "radio");
      attr_dev(input1, "name", "quiz_type");
      add_location(input1, file, 59, 16, 2001);
      attr_dev(label1, "for", "radio");
      add_location(label1, file, 60, 16, 2081);
      attr_dev(input2, "type", "radio");
      input2.value = "checkbox";
      attr_dev(input2, "id", "checkbox");
      attr_dev(input2, "name", "quiz_type");
      add_location(input2, file, 61, 16, 2131);
      attr_dev(label2, "for", "checkbox");
      add_location(label2, file, 62, 16, 2217);
      add_location(div0, file, 57, 12, 1942);
      attr_dev(label3, "for", "option1");
      add_location(label3, file, 65, 16, 2325);
      attr_dev(input3, "type", "text");
      attr_dev(input3, "name", "option1");
      attr_dev(input3, "class", "option");
      add_location(input3, file, 66, 16, 2382);
      attr_dev(div1, "class", "py-5");
      add_location(div1, file, 64, 12, 2289);
      attr_dev(div2, "class", "py-5 options");
      add_location(div2, file, 56, 8, 1902);
      attr_dev(button0, "type", "submit");
      attr_dev(button0, "class", "btn svelte-angot5");
      add_location(button0, file, 69, 8, 2479);
      add_location(form, file, 54, 4, 1774);
      attr_dev(button1, "type", "button");
      attr_dev(button1, "class", "btn svelte-angot5");
      add_location(button1, file, 72, 8, 2575);
      attr_dev(div3, "class", "py-3");
      add_location(div3, file, 71, 4, 2547);
      add_location(div4, file, 53, 0, 1763);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div4, anchor);
      append_dev(div4, form);
      append_dev(form, label0);
      append_dev(label0, t0);
      append_dev(label0, input0);
      append_dev(form, t1);
      append_dev(form, div2);
      append_dev(div2, div0);
      append_dev(div0, p);
      append_dev(p, t2);
      append_dev(div0, t3);
      append_dev(div0, input1);
      append_dev(div0, t4);
      append_dev(div0, label1);
      append_dev(label1, t5);
      append_dev(div0, t6);
      append_dev(div0, input2);
      append_dev(div0, t7);
      append_dev(div0, label2);
      append_dev(label2, t8);
      append_dev(div2, t9);
      append_dev(div2, div1);
      append_dev(div1, label3);
      append_dev(label3, t10);
      append_dev(div1, t11);
      append_dev(div1, input3);
      append_dev(form, t12);
      append_dev(form, button0);
      append_dev(button0, t13);
      append_dev(div4, t14);
      append_dev(div4, div3);
      append_dev(div3, button1);
      append_dev(button1, t15);

      if (!mounted) {
        dispose = [listen_dev(form, "submit", prevent_default(
        /*handleSubmit*/
        ctx[0]), false, true, false), listen_dev(button1, "click",
        /*addOption*/
        ctx[1], false, false, false)];
        mounted = true;
      }
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div4);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Form", slots, []);
  var socket;
  var url = window.location.host;
  onMount(function () {
    socket = new WebSocket("ws://".concat(url, "/ws/demo"));
    socket.addEventListener("open", function (event) {
      console.log("It's open");
    });
    socket.addEventListener("message", function (event) {
      console.log(event);
    });
  });
  onDestroy(function () {
    socket.close();
    console.log("It's Closed");
  });

  var handleSubmit = function handleSubmit(event) {
    console.dir();
    var data = {};
    var options = [];
    data["new_question"] = true;
    data["question"] = document.querySelector("input[name=\"question\"]").value;
    data["quiz_type"] = event.target.elements.quiz_type.value;
    document.querySelectorAll("input.option").forEach(function (e) {
      if (e.value.length > 0) options.push(e.value);
    });
    data["options"] = options;
    console.log(data);
    if (data.question && data.options.length > 0) socket.send(JSON.stringify(data));
  };

  var addOption = function addOption(event) {
    var option = document.createElement("label");
    var options = document.querySelectorAll("input.option");
    option.innerHTML = "<div class=\"py-5\">\n                <label for=\"option".concat(options.length + 1, "\"\n                    >Option ").concat(options.length + 1, ": <input\n                        type=\"text\"\n                        name=\"option").concat(options.length + 1, "\"\n                        class=\"option\"\n                    /></label\n                >\n            </div>");
    document.querySelector("div.options").appendChild(option);
  };

  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn("<Form> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      onMount: onMount,
      onDestroy: onDestroy,
      socket: socket,
      url: url,
      handleSubmit: handleSubmit,
      addOption: addOption
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("socket" in $$props) socket = $$props.socket;
    if ("url" in $$props) url = $$props.url;
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [handleSubmit, addOption];
}

var Form = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Form, _SvelteComponentDev);

  var _super = _createSuper(Form);

  function Form(options) {
    var _this;

    _classCallCheck(this, Form);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Form",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Form;
}(SvelteComponentDev);

export default Form;
