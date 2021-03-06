// Compiled by ClojureScript 0.0-2371
goog.provide('reagent.impl.template');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.component');
goog.require('reagent.impl.util');
goog.require('reagent.ratom');
goog.require('clojure.string');
goog.require('reagent.impl.batching');
goog.require('reagent.debug');
goog.require('clojure.string');
/**
* Regular expression that parses a CSS-style id and class
* from a tag name.
*/
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
reagent.impl.template.NativeWrapper = (function (comp){
this.comp = comp;
})
reagent.impl.template.NativeWrapper.cljs$lang$type = true;
reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "reagent.impl.template/NativeWrapper";
reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__4187__auto__,writer__4188__auto__,opts__4189__auto__){return cljs.core._write.call(null,writer__4188__auto__,"reagent.impl.template/NativeWrapper");
});
reagent.impl.template.__GT_NativeWrapper = (function __GT_NativeWrapper(comp){return (new reagent.impl.template.NativeWrapper(comp));
});
reagent.impl.template.named_QMARK_ = (function named_QMARK_(x){return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol));
});
reagent.impl.template.hiccup_tag_QMARK_ = (function hiccup_tag_QMARK_(x){return (reagent.impl.template.named_QMARK_.call(null,x)) || (typeof x === 'string');
});
reagent.impl.template.valid_tag_QMARK_ = (function valid_tag_QMARK_(x){return (reagent.impl.template.hiccup_tag_QMARK_.call(null,x)) || (cljs.core.ifn_QMARK_.call(null,x)) || ((x instanceof reagent.impl.template.NativeWrapper));
});
reagent.impl.template.prop_name_cache = {"class": "className", "for": "htmlFor", "charset": "charSet"};
reagent.impl.template.obj_get = (function obj_get(o,k){if(cljs.core.truth_(o.hasOwnProperty(k)))
{return (o[k]);
} else
{return null;
}
});
reagent.impl.template.cached_prop_name = (function cached_prop_name(k){if(reagent.impl.template.named_QMARK_.call(null,k))
{var temp__4425__auto__ = reagent.impl.template.obj_get.call(null,reagent.impl.template.prop_name_cache,cljs.core.name.call(null,k));if((temp__4425__auto__ == null))
{return (reagent.impl.template.prop_name_cache[cljs.core.name.call(null,k)] = reagent.impl.util.dash_to_camel.call(null,k));
} else
{var k_SINGLEQUOTE_ = temp__4425__auto__;return k_SINGLEQUOTE_;
}
} else
{return k;
}
});
reagent.impl.template.convert_prop_value = (function convert_prop_value(x){if((typeof x === 'string') || (typeof x === 'number') || (cljs.core.fn_QMARK_.call(null,x)))
{return x;
} else
{if(reagent.impl.template.named_QMARK_.call(null,x))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.reduce_kv.call(null,(function (o,k,v){var G__15995 = o;(G__15995[reagent.impl.template.cached_prop_name.call(null,k)] = convert_prop_value.call(null,v));
return G__15995;
}),{},x);
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.clj__GT_js.call(null,x);
} else
{if(cljs.core.ifn_QMARK_.call(null,x))
{return (function() { 
var G__15996__delegate = function (args){return cljs.core.apply.call(null,x,args);
};
var G__15996 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15996__delegate.call(this,args);};
G__15996.cljs$lang$maxFixedArity = 0;
G__15996.cljs$lang$applyTo = (function (arglist__15997){
var args = cljs.core.seq(arglist__15997);
return G__15996__delegate(args);
});
G__15996.cljs$core$IFn$_invoke$arity$variadic = G__15996__delegate;
return G__15996;
})()
;
} else
{return cljs.core.clj__GT_js.call(null,x);

}
}
}
}
}
});
reagent.impl.template.set_id_class = (function set_id_class(props,id,class$){var p = (((props == null))?{}:props);if((cljs.core.some_QMARK_.call(null,id)) && (((p["id"]) == null)))
{(p["id"] = id);
} else
{}
if(cljs.core.some_QMARK_.call(null,class$))
{var old_15998 = (p["className"]);(p["className"] = ((cljs.core.some_QMARK_.call(null,old_15998))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_15998)):class$));
} else
{}
return p;
});
reagent.impl.template.convert_props = (function convert_props(props,id_class){var id = (id_class["id"]);var class$ = (id_class["className"]);var no_id_class = ((id == null)) && ((class$ == null));if((no_id_class) && (cljs.core.empty_QMARK_.call(null,props)))
{return null;
} else
{var objprops = reagent.impl.template.convert_prop_value.call(null,props);if(no_id_class)
{return objprops;
} else
{return reagent.impl.template.set_id_class.call(null,objprops,id,class$);
}
}
});
reagent.impl.template.input_unmount = (function input_unmount(this$){return (this$["cljsInputValue"] = null);
});
reagent.impl.template.input_set_value = (function input_set_value(this$){var temp__4427__auto__ = (this$["cljsInputValue"]);if((temp__4427__auto__ == null))
{return null;
} else
{var value = temp__4427__auto__;(this$["cljsInputDirty"] = false);
var node = (this$["getDOMNode"])();if(cljs.core.not_EQ_.call(null,value,(node["value"])))
{return (node["value"] = value);
} else
{return null;
}
}
});
reagent.impl.template.input_handle_change = (function input_handle_change(this$,on_change,e){var res = on_change.call(null,e);if(cljs.core.truth_((this$["cljsInputDirty"])))
{} else
{(this$["cljsInputDirty"] = true);
reagent.impl.batching.do_later.call(null,((function (res){
return (function (){return reagent.impl.template.input_set_value.call(null,this$);
});})(res))
);
}
return res;
});
reagent.impl.template.input_render_setup = (function input_render_setup(this$,jsprops){if(cljs.core.truth_((function (){var and__3595__auto__ = (jsprops["hasOwnProperty"])("onChange");if(cljs.core.truth_(and__3595__auto__))
{return (jsprops["hasOwnProperty"])("value");
} else
{return and__3595__auto__;
}
})()))
{var v = (jsprops["value"]);var value = (((v == null))?"":v);var on_change = (jsprops["onChange"]);(this$["cljsInputValue"] = value);
delete jsprops["value"];
var G__16001 = jsprops;(G__16001["defaultValue"] = value);
(G__16001["onChange"] = ((function (G__16001,v,value,on_change){
return (function (p1__15999_SHARP_){return reagent.impl.template.input_handle_change.call(null,this$,on_change,p1__15999_SHARP_);
});})(G__16001,v,value,on_change))
);
return G__16001;
} else
{return (this$["cljsInputValue"] = null);
}
});
reagent.impl.template.input_component_QMARK_ = (function input_component_QMARK_(x){return ((x === "input")) || ((x === "textarea"));
});
reagent.impl.template.reagent_input_class = null;
reagent.impl.template.input_spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ReagentInput",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),reagent.impl.template.input_set_value,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),reagent.impl.template.input_unmount,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (argv,comp,jsprops,first_child){var this$ = reagent.impl.component._STAR_current_component_STAR_;reagent.impl.template.input_render_setup.call(null,this$,jsprops);
return reagent.impl.template.make_element.call(null,argv,comp,jsprops,first_child);
})], null);
reagent.impl.template.reagent_input = (function reagent_input(argv,comp,jsprops,first_child){if((reagent.impl.template.reagent_input_class == null))
{reagent.impl.template.reagent_input_class = reagent.impl.component.create_class.call(null,reagent.impl.template.input_spec);
} else
{}
return reagent.impl.template.reagent_input_class.call(null,argv,comp,jsprops,first_child);
});
reagent.impl.template.parse_tag = (function parse_tag(hiccup_tag){var vec__16003 = cljs.core.next.call(null,cljs.core.re_matches.call(null,reagent.impl.template.re_tag,cljs.core.name.call(null,hiccup_tag)));var tag = cljs.core.nth.call(null,vec__16003,(0),null);var id = cljs.core.nth.call(null,vec__16003,(1),null);var class$ = cljs.core.nth.call(null,vec__16003,(2),null);var class_SINGLEQUOTE_ = (cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,/\./," "):null);if(cljs.core.truth_(tag))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Invalid tag: '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup_tag)+"'"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.comp_name.call(null))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"tag","tag",350170304,null))))));
}
return {"name": tag, "id": id, "className": class_SINGLEQUOTE_};
});
reagent.impl.template.fn_to_class = (function fn_to_class(f){if(cljs.core.ifn_QMARK_.call(null,f))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Expected a function, not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,f))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null)))))));
}
if((!(!((cljs.core.fn_QMARK_.call(null,f)) && (cljs.core.some_QMARK_.call(null,(f["type"])))))) && (typeof console !== 'undefined'))
{console.warn(("Warning: Using native React classes directly in Hiccup forms is not supported. Use create-element or adapt-react-class instead: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((f["type"]))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.comp_name.call(null))));
} else
{}
var spec = cljs.core.meta.call(null,f);var withrender = cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),f);var res = reagent.impl.component.create_class.call(null,withrender);var wrapf = reagent.impl.util.cached_react_class.call(null,res);reagent.impl.util.cache_react_class.call(null,f,wrapf);
return wrapf;
});
reagent.impl.template.as_class = (function as_class(tag){var temp__4425__auto__ = reagent.impl.util.cached_react_class.call(null,tag);if((temp__4425__auto__ == null))
{return reagent.impl.template.fn_to_class.call(null,tag);
} else
{var cached_class = temp__4425__auto__;return cached_class;
}
});
reagent.impl.template.get_key = (function get_key(x){if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.get.call(null,x,new cljs.core.Keyword(null,"key","key",-1516042587));
} else
{return null;
}
});
reagent.impl.template.key_from_vec = (function key_from_vec(v){var temp__4425__auto__ = (function (){var G__16005 = cljs.core.meta.call(null,v);var G__16005__$1 = (((G__16005 == null))?null:reagent.impl.template.get_key.call(null,G__16005));return G__16005__$1;
})();if((temp__4425__auto__ == null))
{return reagent.impl.template.get_key.call(null,cljs.core.nth.call(null,v,(1),null));
} else
{var k = temp__4425__auto__;return k;
}
});
reagent.impl.template.reag_element = (function reag_element(tag,v){var c = reagent.impl.template.as_class.call(null,tag);var jsprops = {"argv": v};var G__16007_16008 = v;var G__16007_16009__$1 = (((G__16007_16008 == null))?null:reagent.impl.template.key_from_vec.call(null,G__16007_16008));var G__16007_16010__$2 = (((G__16007_16009__$1 == null))?null:(jsprops["key"] = G__16007_16009__$1));return (React["createElement"])(c,jsprops);
});
reagent.impl.template.adapt_react_class = (function adapt_react_class(c){return (new reagent.impl.template.NativeWrapper({"name": c, "id": null, "class": null}));
});
reagent.impl.template.tag_name_cache = {};
reagent.impl.template.cached_parse = (function cached_parse(x){if(reagent.impl.template.hiccup_tag_QMARK_.call(null,x))
{var temp__4425__auto__ = reagent.impl.template.obj_get.call(null,reagent.impl.template.tag_name_cache,cljs.core.name.call(null,x));if((temp__4425__auto__ == null))
{return (reagent.impl.template.tag_name_cache[cljs.core.name.call(null,x)] = reagent.impl.template.parse_tag.call(null,x));
} else
{var s = temp__4425__auto__;return s;
}
} else
{if((x instanceof reagent.impl.template.NativeWrapper))
{return x.comp;
} else
{return null;
}
}
});
reagent.impl.template.native_element = (function native_element(tag,argv){var temp__4423__auto__ = reagent.impl.template.cached_parse.call(null,tag);if(cljs.core.truth_(temp__4423__auto__))
{var parsed = temp__4423__auto__;var comp = (parsed["name"]);var props = cljs.core.nth.call(null,argv,(1),null);var hasprops = ((props == null)) || (cljs.core.map_QMARK_.call(null,props));var jsprops = reagent.impl.template.convert_props.call(null,((hasprops)?props:null),parsed);var first_child = ((hasprops)?(2):(1));if(reagent.impl.template.input_component_QMARK_.call(null,comp))
{return reagent.impl.template.as_element.call(null,cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.reagent_input,argv,comp,jsprops,first_child], null),cljs.core.meta.call(null,argv)));
} else
{var p = (function (){var temp__4425__auto__ = (function (){var G__16013 = cljs.core.meta.call(null,argv);var G__16013__$1 = (((G__16013 == null))?null:reagent.impl.template.get_key.call(null,G__16013));return G__16013__$1;
})();if((temp__4425__auto__ == null))
{return jsprops;
} else
{var key = temp__4425__auto__;var G__16014 = (((jsprops == null))?{}:jsprops);(G__16014["key"] = key);
return G__16014;
}
})();return reagent.impl.template.make_element.call(null,argv,comp,p,first_child);
}
} else
{return null;
}
});
reagent.impl.template.vec_to_elem = (function vec_to_elem(v){if((cljs.core.count.call(null,v) > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Hiccup form should not be empty: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,v))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.comp_name.call(null))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"v","v",1661996586,null))))))));
}
var tag = cljs.core.nth.call(null,v,(0));if(reagent.impl.template.valid_tag_QMARK_.call(null,tag))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Invalid Hiccup form: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,v))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.comp_name.call(null))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-tag?","valid-tag?",1243064160,null),new cljs.core.Symbol(null,"tag","tag",350170304,null)))))));
}
var temp__4425__auto__ = reagent.impl.template.native_element.call(null,tag,v);if((temp__4425__auto__ == null))
{return reagent.impl.template.reag_element.call(null,tag,v);
} else
{var ne = temp__4425__auto__;return ne;
}
});
reagent.impl.template.as_element = (function as_element(x){if(typeof x === 'string')
{return x;
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return reagent.impl.template.vec_to_elem.call(null,x);
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return reagent.impl.template.expand_seq_check.call(null,x);

} else
{return x;

}
}
}
});
reagent.impl.template.expand_seq = (function expand_seq(s){var a = cljs.core.into_array.call(null,s);var n__4477__auto___16015 = a.length;var i_16016 = (0);while(true){
if((i_16016 < n__4477__auto___16015))
{(a[i_16016] = reagent.impl.template.as_element.call(null,(a[i_16016])));
{
var G__16017 = (i_16016 + (1));
i_16016 = G__16017;
continue;
}
} else
{}
break;
}
return a;
});
reagent.impl.template.expand_seq_dev = (function expand_seq_dev(s,o){var a = cljs.core.into_array.call(null,s);var n__4477__auto___16018 = a.length;var i_16019 = (0);while(true){
if((i_16019 < n__4477__auto___16018))
{var val_16020 = (a[i_16019]);if((cljs.core.vector_QMARK_.call(null,val_16020)) && ((reagent.impl.template.key_from_vec.call(null,val_16020) == null)))
{(o["no-key"] = true);
} else
{}
(a[i_16019] = reagent.impl.template.as_element.call(null,val_16020));
{
var G__16021 = (i_16019 + (1));
i_16019 = G__16021;
continue;
}
} else
{}
break;
}
return a;
});
reagent.impl.template.expand_seq_check = (function expand_seq_check(x){var ctx = {};var res = (((reagent.ratom._STAR_ratom_context_STAR_ == null))?reagent.impl.template.expand_seq_dev.call(null,x,ctx):reagent.ratom.capture_derefed.call(null,((function (ctx){
return (function (){return reagent.impl.template.expand_seq_dev.call(null,x,ctx);
});})(ctx))
,ctx));if(cljs.core.truth_(reagent.ratom.captured.call(null,ctx)))
{if(typeof console !== 'undefined')
{console.warn(("Warning: Reactive deref not supported in lazy seq, it should be wrapped in doall"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.comp_name.call(null))+". Value:\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,x))));
} else
{}
} else
{}
if(cljs.core.truth_((ctx["no-key"])))
{if(typeof console !== 'undefined')
{console.warn(("Warning: Every element in a seq should have a unique :key"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.comp_name.call(null))+". Value: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,x))));
} else
{}
} else
{}
return res;
});
reagent.impl.template.make_element = (function make_element(argv,comp,jsprops,first_child){var G__16023 = (cljs.core.count.call(null,argv) - first_child);switch (G__16023) {
case (0):
return (React["createElement"])(comp,jsprops);

break;
case (1):
return (React["createElement"])(comp,jsprops,reagent.impl.template.as_element.call(null,cljs.core.nth.call(null,argv,first_child)));

break;
default:
return (React["createElement"]).apply(null,cljs.core.reduce_kv.call(null,((function (G__16023){
return (function (a,k,v){if((k >= first_child))
{a.push(reagent.impl.template.as_element.call(null,v));
} else
{}
return a;
});})(G__16023))
,[comp,jsprops],argv));

}
});

//# sourceMappingURL=template.js.map