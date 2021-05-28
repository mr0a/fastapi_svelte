import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, v as validate_slots, g as element, t as text, f as space, k as claim_element, l as children, m as claim_text, h as detach_dev, j as claim_space, n as attr_dev, o as add_location, p as insert_dev, r as append_dev, u as noop, I as writable, w as _createClass, C as listen_dev, D as prevent_default, z as _slicedToArray, y as set_data_dev, E as run_all, J as get_binding_group_value, x as validate_each_argument, K as prop_dev, L as empty, A as destroy_each, M as transition_out, N as check_outros, O as transition_in, P as validate_store, Q as component_subscribe, F as onMount, G as onDestroy, H as globals, R as group_outros, T as create_component, U as claim_component, V as mount_component, W as destroy_component } from './client.56a8e490.js';

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$2 = "src\\components\\Loading.svelte";

function create_fragment$2(ctx) {
  var div8;
  var div7;
  var h3;
  var t0;
  var t1;
  var div6;
  var div0;
  var t2;
  var div5;
  var div1;
  var t3;
  var div2;
  var t4;
  var div3;
  var t5;
  var div4;
  var block = {
    c: function create() {
      div8 = element("div");
      div7 = element("div");
      h3 = element("h3");
      t0 = text("Loading Question");
      t1 = space();
      div6 = element("div");
      div0 = element("div");
      t2 = space();
      div5 = element("div");
      div1 = element("div");
      t3 = space();
      div2 = element("div");
      t4 = space();
      div3 = element("div");
      t5 = space();
      div4 = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div8 = claim_element(nodes, "DIV", {
        class: true
      });
      var div8_nodes = children(div8);
      div7 = claim_element(div8_nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);
      h3 = claim_element(div7_nodes, "H3", {
        class: true
      });
      var h3_nodes = children(h3);
      t0 = claim_text(h3_nodes, "Loading Question");
      h3_nodes.forEach(detach_dev);
      t1 = claim_space(div7_nodes);
      div6 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      div0 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      children(div0).forEach(detach_dev);
      t2 = claim_space(div6_nodes);
      div5 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      div1 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      children(div1).forEach(detach_dev);
      t3 = claim_space(div5_nodes);
      div2 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      children(div2).forEach(detach_dev);
      t4 = claim_space(div5_nodes);
      div3 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      children(div3).forEach(detach_dev);
      t5 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      children(div4).forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h3, "class", "text-center text-2xl py-3");
      add_location(h3, file$2, 2, 8, 55);
      attr_dev(div0, "class", "image svelte-cfuiy7");
      add_location(div0, file$2, 4, 12, 164);
      attr_dev(div1, "class", "text-line svelte-cfuiy7");
      add_location(div1, file$2, 6, 16, 235);
      attr_dev(div2, "class", "text-line svelte-cfuiy7");
      add_location(div2, file$2, 7, 16, 278);
      attr_dev(div3, "class", "text-line svelte-cfuiy7");
      add_location(div3, file$2, 8, 16, 321);
      attr_dev(div4, "class", "text-line svelte-cfuiy7");
      add_location(div4, file$2, 9, 16, 364);
      attr_dev(div5, "class", "text svelte-cfuiy7");
      add_location(div5, file$2, 5, 12, 199);
      attr_dev(div6, "class", "wrapper-cell svelte-cfuiy7");
      add_location(div6, file$2, 3, 8, 124);
      attr_dev(div7, "class", "wrapper svelte-cfuiy7");
      add_location(div7, file$2, 1, 4, 24);
      attr_dev(div8, "class", "main svelte-cfuiy7");
      add_location(div8, file$2, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div8, anchor);
      append_dev(div8, div7);
      append_dev(div7, h3);
      append_dev(h3, t0);
      append_dev(div7, t1);
      append_dev(div7, div6);
      append_dev(div6, div0);
      append_dev(div6, t2);
      append_dev(div6, div5);
      append_dev(div5, div1);
      append_dev(div5, t3);
      append_dev(div5, div2);
      append_dev(div5, t4);
      append_dev(div5, div3);
      append_dev(div5, t5);
      append_dev(div5, div4);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div8);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$2($$self, $$props) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Loading", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Loading> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var Loading = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Loading, _SvelteComponentDev);

  var _super = _createSuper$2(Loading);

  function Loading(options) {
    var _this;

    _classCallCheck(this, Loading);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Loading",
      options: options,
      id: create_fragment$2.name
    });
    return _this;
  }

  return Loading;
}(SvelteComponentDev);

var answers = writable([]);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src\\components\\Question.svelte";

function get_each_context_1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[9] = list[i];
  return child_ctx;
}

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[9] = list[i];
  return child_ctx;
} // (27:16) {:else}


function create_else_block$1(ctx) {
  var each_1_anchor;
  var each_value_1 =
  /*message*/
  ctx[0].options;
  validate_each_argument(each_value_1);
  var each_blocks = [];

  for (var i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }

  var block = {
    c: function create() {
      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*message, answers*/
      5) {
        each_value_1 =
        /*message*/
        ctx[0].options;
        validate_each_argument(each_value_1);

        var _i4;

        for (_i4 = 0; _i4 < each_value_1.length; _i4 += 1) {
          var child_ctx = get_each_context_1(ctx, each_value_1, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);
          } else {
            each_blocks[_i4] = create_each_block_1(child_ctx);

            each_blocks[_i4].c();

            each_blocks[_i4].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        for (; _i4 < each_blocks.length; _i4 += 1) {
          each_blocks[_i4].d(1);
        }

        each_blocks.length = each_value_1.length;
      }
    },
    d: function destroy(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block$1.name,
    type: "else",
    source: "(27:16) {:else}",
    ctx: ctx
  });
  return block;
} // (20:16) {#if message.quiz_type == 'radio'}


function create_if_block$1(ctx) {
  var each_1_anchor;
  var each_value =
  /*message*/
  ctx[0].options;
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var block = {
    c: function create() {
      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
        each_blocks[_i5].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        each_blocks[_i6].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      for (var _i7 = 0; _i7 < each_blocks.length; _i7 += 1) {
        each_blocks[_i7].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*message, answers*/
      5) {
        each_value =
        /*message*/
        ctx[0].options;
        validate_each_argument(each_value);

        var _i8;

        for (_i8 = 0; _i8 < each_value.length; _i8 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i8);

          if (each_blocks[_i8]) {
            each_blocks[_i8].p(child_ctx, dirty);
          } else {
            each_blocks[_i8] = create_each_block(child_ctx);

            each_blocks[_i8].c();

            each_blocks[_i8].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        for (; _i8 < each_blocks.length; _i8 += 1) {
          each_blocks[_i8].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    d: function destroy(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block$1.name,
    type: "if",
    source: "(20:16) {#if message.quiz_type == 'radio'}",
    ctx: ctx
  });
  return block;
} // (28:20) {#each message.options as option}


function create_each_block_1(ctx) {
  var div;
  var input;
  var input_id_value;
  var input_value_value;
  var t0;
  var label;
  var t1_value =
  /*option*/
  ctx[9] + "";
  var t1;
  var label_for_value;
  var t2;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      div = element("div");
      input = element("input");
      t0 = space();
      label = element("label");
      t1 = text(t1_value);
      t2 = space();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      input = claim_element(div_nodes, "INPUT", {
        type: true,
        id: true,
        value: true
      });
      t0 = claim_space(div_nodes);
      label = claim_element(div_nodes, "LABEL", {
        for: true
      });
      var label_nodes = children(label);
      t1 = claim_text(label_nodes, t1_value);
      label_nodes.forEach(detach_dev);
      t2 = claim_space(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(input, "type", "checkbox");
      attr_dev(input, "id", input_id_value =
      /*option*/
      ctx[9]);
      input.__value = input_value_value =
      /*option*/
      ctx[9];
      input.value = input.__value;
      /*$$binding_groups*/

      ctx[5][0].push(input);
      add_location(input, file$1, 29, 28, 969);
      attr_dev(label, "for", label_for_value =
      /*option*/
      ctx[9]);
      add_location(label, file$1, 30, 28, 1074);
      add_location(div, file$1, 28, 24, 934);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, input);
      input.checked = ~
      /*answers*/
      ctx[2].indexOf(input.__value);
      append_dev(div, t0);
      append_dev(div, label);
      append_dev(label, t1);
      append_dev(div, t2);

      if (!mounted) {
        dispose = listen_dev(input, "change",
        /*input_change_handler_1*/
        ctx[6]);
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*message*/
      1 && input_id_value !== (input_id_value =
      /*option*/
      ctx[9])) {
        attr_dev(input, "id", input_id_value);
      }

      if (dirty &
      /*message*/
      1 && input_value_value !== (input_value_value =
      /*option*/
      ctx[9])) {
        prop_dev(input, "__value", input_value_value);
        input.value = input.__value;
      }

      if (dirty &
      /*answers*/
      4) {
        input.checked = ~
        /*answers*/
        ctx[2].indexOf(input.__value);
      }

      if (dirty &
      /*message*/
      1 && t1_value !== (t1_value =
      /*option*/
      ctx[9] + "")) set_data_dev(t1, t1_value);

      if (dirty &
      /*message*/
      1 && label_for_value !== (label_for_value =
      /*option*/
      ctx[9])) {
        attr_dev(label, "for", label_for_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      /*$$binding_groups*/

      ctx[5][0].splice(
      /*$$binding_groups*/
      ctx[5][0].indexOf(input), 1);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_1.name,
    type: "each",
    source: "(28:20) {#each message.options as option}",
    ctx: ctx
  });
  return block;
} // (21:20) {#each message.options as option}


function create_each_block(ctx) {
  var div;
  var input;
  var input_id_value;
  var input_value_value;
  var t0;
  var label;
  var t1_value =
  /*option*/
  ctx[9] + "";
  var t1;
  var label_for_value;
  var t2;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      div = element("div");
      input = element("input");
      t0 = space();
      label = element("label");
      t1 = text(t1_value);
      t2 = space();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      input = claim_element(div_nodes, "INPUT", {
        type: true,
        id: true,
        value: true
      });
      t0 = claim_space(div_nodes);
      label = claim_element(div_nodes, "LABEL", {
        for: true
      });
      var label_nodes = children(label);
      t1 = claim_text(label_nodes, t1_value);
      label_nodes.forEach(detach_dev);
      t2 = claim_space(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(input, "type", "radio");
      attr_dev(input, "id", input_id_value =
      /*option*/
      ctx[9]);
      input.__value = input_value_value =
      /*option*/
      ctx[9];
      input.value = input.__value;
      /*$$binding_groups*/

      ctx[5][0].push(input);
      add_location(input, file$1, 22, 28, 627);
      attr_dev(label, "for", label_for_value =
      /*option*/
      ctx[9]);
      add_location(label, file$1, 23, 28, 729);
      add_location(div, file$1, 21, 24, 592);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, input);
      input.checked = input.__value ===
      /*answers*/
      ctx[2];
      append_dev(div, t0);
      append_dev(div, label);
      append_dev(label, t1);
      append_dev(div, t2);

      if (!mounted) {
        dispose = listen_dev(input, "change",
        /*input_change_handler*/
        ctx[4]);
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*message*/
      1 && input_id_value !== (input_id_value =
      /*option*/
      ctx[9])) {
        attr_dev(input, "id", input_id_value);
      }

      if (dirty &
      /*message*/
      1 && input_value_value !== (input_value_value =
      /*option*/
      ctx[9])) {
        prop_dev(input, "__value", input_value_value);
        input.value = input.__value;
      }

      if (dirty &
      /*answers*/
      4) {
        input.checked = input.__value ===
        /*answers*/
        ctx[2];
      }

      if (dirty &
      /*message*/
      1 && t1_value !== (t1_value =
      /*option*/
      ctx[9] + "")) set_data_dev(t1, t1_value);

      if (dirty &
      /*message*/
      1 && label_for_value !== (label_for_value =
      /*option*/
      ctx[9])) {
        attr_dev(label, "for", label_for_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      /*$$binding_groups*/

      ctx[5][0].splice(
      /*$$binding_groups*/
      ctx[5][0].indexOf(input), 1);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(21:20) {#each message.options as option}",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var div2;
  var div1;
  var form;
  var h2;
  var t0_value =
  /*message*/
  ctx[0].question + "";
  var t0;
  var t1;
  var div0;
  var t2;
  var button;
  var t3;
  var mounted;
  var dispose;

  function select_block_type(ctx, dirty) {
    if (
    /*message*/
    ctx[0].quiz_type == "radio") return create_if_block$1;
    return create_else_block$1;
  }

  var current_block_type = select_block_type(ctx);
  var if_block = current_block_type(ctx);
  var block = {
    c: function create() {
      div2 = element("div");
      div1 = element("div");
      form = element("form");
      h2 = element("h2");
      t0 = text(t0_value);
      t1 = space();
      div0 = element("div");
      if_block.c();
      t2 = space();
      button = element("button");
      t3 = text("Submit");
      this.h();
    },
    l: function claim(nodes) {
      div2 = claim_element(nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      form = claim_element(div1_nodes, "FORM", {});
      var form_nodes = children(form);
      h2 = claim_element(form_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      t0 = claim_text(h2_nodes, t0_value);
      h2_nodes.forEach(detach_dev);
      t1 = claim_space(form_nodes);
      div0 = claim_element(form_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      if_block.l(div0_nodes);
      t2 = claim_space(div0_nodes);
      button = claim_element(div0_nodes, "BUTTON", {
        type: true,
        class: true
      });
      var button_nodes = children(button);
      t3 = claim_text(button_nodes, "Submit");
      button_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      form_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h2, "class", "text-xl");
      add_location(h2, file$1, 17, 12, 376);
      attr_dev(button, "type", "submit");
      attr_dev(button, "class", "btn svelte-lqcmz7");
      add_location(button, file$1, 34, 12, 1210);
      attr_dev(div0, "class", "py-5 options");
      add_location(div0, file$1, 18, 12, 433);
      add_location(form, file$1, 16, 8, 290);
      attr_dev(div1, "class", "wrapper svelte-lqcmz7");
      add_location(div1, file$1, 15, 4, 259);
      attr_dev(div2, "class", "main svelte-lqcmz7");
      add_location(div2, file$1, 14, 0, 235);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div2, anchor);
      append_dev(div2, div1);
      append_dev(div1, form);
      append_dev(form, h2);
      append_dev(h2, t0);
      append_dev(form, t1);
      append_dev(form, div0);
      if_block.m(div0, null);
      append_dev(div0, t2);
      append_dev(div0, button);
      append_dev(button, t3);

      if (!mounted) {
        dispose = [listen_dev(button, "click",
        /*click_handler*/
        ctx[7], false, false, false), listen_dev(form, "submit", prevent_default(
        /*submit_handler*/
        ctx[8]), false, true, false)];
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*message*/
      1 && t0_value !== (t0_value =
      /*message*/
      ctx[0].question + "")) set_data_dev(t0, t0_value);

      if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
        if_block.p(ctx, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx);

        if (if_block) {
          if_block.c();
          if_block.m(div0, t2);
        }
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div2);
      if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Question", slots, []);
  var message = $$props.message;
  var handleSubmit = $$props.handleSubmit;
  var answers$1 = [];

  function handleUpdate() {
    answers.set(answers$1);
  }

  var writable_props = ["message", "handleSubmit"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Question> was created with unknown prop '".concat(key, "'"));
  });
  var $$binding_groups = [[]];

  function input_change_handler() {
    answers$1 = this.__value;
    $$invalidate(2, answers$1);
  }

  function input_change_handler_1() {
    answers$1 = get_binding_group_value($$binding_groups[0], this.__value, this.checked);
    $$invalidate(2, answers$1);
  }

  var click_handler = function click_handler() {
    return alert("Responded Successfully");
  };

  var submit_handler = function submit_handler() {
    handleUpdate();
    handleSubmit();
  };

  $$self.$$set = function ($$props) {
    if ("message" in $$props) $$invalidate(0, message = $$props.message);
    if ("handleSubmit" in $$props) $$invalidate(1, handleSubmit = $$props.handleSubmit);
  };

  $$self.$capture_state = function () {
    return {
      answer: answers,
      message: message,
      handleSubmit: handleSubmit,
      answers: answers$1,
      handleUpdate: handleUpdate
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("message" in $$props) $$invalidate(0, message = $$props.message);
    if ("handleSubmit" in $$props) $$invalidate(1, handleSubmit = $$props.handleSubmit);
    if ("answers" in $$props) $$invalidate(2, answers$1 = $$props.answers);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [message, handleSubmit, answers$1, handleUpdate, input_change_handler, $$binding_groups, input_change_handler_1, click_handler, submit_handler];
}

var Question = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Question, _SvelteComponentDev);

  var _super = _createSuper$1(Question);

  function Question(options) {
    var _this;

    _classCallCheck(this, Question);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      message: 0,
      handleSubmit: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Question",
      options: options,
      id: create_fragment$1.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*message*/
    ctx[0] === undefined && !("message" in props)) {
      console.warn("<Question> was created without expected prop 'message'");
    }

    if (
    /*handleSubmit*/
    ctx[1] === undefined && !("handleSubmit" in props)) {
      console.warn("<Question> was created without expected prop 'handleSubmit'");
    }

    return _this;
  }

  _createClass(Question, [{
    key: "message",
    get: function get() {
      throw new Error("<Question>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Question>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "handleSubmit",
    get: function get() {
      throw new Error("<Question>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Question>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Question;
}(SvelteComponentDev);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var console_1 = globals.console;
var file = "src\\routes\\quiz.svelte"; // (46:4) {:else}

function create_else_block(ctx) {
  var loading;
  var current;
  loading = new Loading({
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(loading.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(loading.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(loading, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(loading.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(loading.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(loading, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block.name,
    type: "else",
    source: "(46:4) {:else}",
    ctx: ctx
  });
  return block;
} // (44:4) {#if message}


function create_if_block(ctx) {
  var question;
  var current;
  question = new Question({
    props: {
      message:
      /*message*/
      ctx[0],
      handleSubmit:
      /*handleSubmit*/
      ctx[1]
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(question.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(question.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(question, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var question_changes = {};
      if (dirty &
      /*message*/
      1) question_changes.message =
      /*message*/
      ctx[0];
      question.$set(question_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(question.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(question.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(question, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(44:4) {#if message}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var div;
  var current_block_type_index;
  var if_block;
  var current;
  var if_block_creators = [create_if_block, create_else_block];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*message*/
    ctx[0]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  var block = {
    c: function create() {
      div = element("div");
      if_block.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      if_block.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(div, file, 42, 0, 1315);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      if_blocks[current_block_type_index].m(div, null);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, function () {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        } else {
          if_block.p(ctx, dirty);
        }

        transition_in(if_block, 1);
        if_block.m(div, null);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if_blocks[current_block_type_index].d();
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
  var $answers;
  validate_store(answers, "answers");
  component_subscribe($$self, answers, function ($$value) {
    return $$invalidate(4, $answers = $$value);
  });
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Quiz", slots, []);
  var socket;
  var message;
  var isLoggedIn;
  var url = window.location.host;
  onMount(function () {
    isLoggedIn = localStorage.getItem("email");

    function getData() {
      var email = prompt("Enter your email ");
      localStorage.setItem("email", email);
    }

    isLoggedIn ? "" : getData();
    socket = new WebSocket("ws://".concat(url, "/ws/demo"));
    isLoggedIn = localStorage.getItem("isLoggedIn");
    socket.addEventListener("open", function (event) {
      console.log("It's open");
    });
    socket.addEventListener("message", function (event) {
      $$invalidate(0, message = JSON.parse(event.data));
      console.log(message);
    });
  });
  onDestroy(function () {
    socket.close();
    console.log("It's Closed");
  });

  var handleSubmit = function handleSubmit() {
    // console.log($answers);
    var data = {
      "answer": true,
      "question": message.question,
      "answers": $answers,
      "email": localStorage.getItem("email")
    };
    socket.send(JSON.stringify(data));
  };

  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn("<Quiz> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      onMount: onMount,
      onDestroy: onDestroy,
      Loading: Loading,
      Question: Question,
      answers: answers,
      socket: socket,
      message: message,
      isLoggedIn: isLoggedIn,
      url: url,
      handleSubmit: handleSubmit,
      $answers: $answers
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("socket" in $$props) socket = $$props.socket;
    if ("message" in $$props) $$invalidate(0, message = $$props.message);
    if ("isLoggedIn" in $$props) isLoggedIn = $$props.isLoggedIn;
    if ("url" in $$props) url = $$props.url;
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [message, handleSubmit];
}

var Quiz = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Quiz, _SvelteComponentDev);

  var _super = _createSuper(Quiz);

  function Quiz(options) {
    var _this;

    _classCallCheck(this, Quiz);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Quiz",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Quiz;
}(SvelteComponentDev);

export default Quiz;
