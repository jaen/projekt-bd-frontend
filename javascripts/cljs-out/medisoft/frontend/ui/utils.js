// Compiled by ClojureScript 0.0-2371
goog.provide('medisoft.frontend.ui.utils');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('medisoft.frontend.log');
goog.require('re_com.core');
goog.require('re_com.core');
goog.require('reagent.core');
goog.require('medisoft.frontend.ui.dropdown');
goog.require('medisoft.frontend.utils');
goog.require('cuerdas.core');
goog.require('medisoft.frontend.utils');
goog.require('medisoft.frontend.ui.dropdown');
goog.require('cuerdas.core');
goog.require('medisoft.frontend.log');
medisoft.frontend.ui.utils.node_has_parent_pred_QMARK_ = (function node_has_parent_pred_QMARK_(node,pred){var node__$1 = node.parentNode;while(true){
if(cljs.core.not_EQ_.call(null,node__$1,document))
{var or__3607__auto__ = pred.call(null,node__$1);if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{{
var G__17859 = node__$1.parentNode;
node__$1 = G__17859;
continue;
}
}
} else
{return false;
}
break;
}
});
medisoft.frontend.ui.utils.node_has_parent_QMARK_ = (function node_has_parent_QMARK_(node,parent_or_pred){if(cljs.core.fn_QMARK_.call(null,parent_or_pred))
{return medisoft.frontend.ui.utils.node_has_parent_pred_QMARK_.call(null,node,parent_or_pred);
} else
{return medisoft.frontend.ui.utils.node_has_parent_pred_QMARK_.call(null,node,(function (p1__17860_SHARP_){return cljs.core._EQ_.call(null,p1__17860_SHARP_,parent_or_pred);
}));

}
});
medisoft.frontend.ui.utils.css_transition_group = reagent.core.adapt_react_class.call(null,(React["addons"]["CSSTransitionGroup"]));
medisoft.frontend.ui.utils.loading_component = (function loading_component(is_loading_QMARK_,component){var is_loading_QMARK___$1 = medisoft.frontend.utils.realised.call(null,is_loading_QMARK_);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.loading-wrapper","div.loading-wrapper",-290822814),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.loading-element-wrapper","div.loading-element-wrapper",-567414181),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(is_loading_QMARK___$1)?"loading-active":null)], null),component], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.utils.css_transition_group,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transitionName","transitionName",-654288740),"loading-indicator-transition"], null),(cljs.core.truth_(is_loading_QMARK___$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.loading-indicator-wrapper","div.loading-indicator-wrapper",1732040087),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.loading-indicator","div.loading-indicator",2022953961)], null)], null):null)], null)], null);
});
medisoft.frontend.ui.utils.make_component_blur_notifier = (function make_component_blur_notifier(node,callback){return (function (e){if(cljs.core.truth_(medisoft.frontend.ui.utils.node_has_parent_QMARK_.call(null,e.target,node)))
{return null;
} else
{return callback.call(null);
}
});
});
/**
* @param {...*} var_args
*/
medisoft.frontend.ui.utils.detect_outside_click_component = (function() { 
var detect_outside_click_component__delegate = function (options,contents){var component_blur_notifier = cljs.core.atom.call(null,null);var callback = (function (){var or__3607__auto__ = new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(options);if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return ((function (or__3607__auto__,component_blur_notifier){
return (function (){return cljs.core.List.EMPTY;
});
;})(or__3607__auto__,component_blur_notifier))
}
})();return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (component_blur_notifier,callback){
return (function (component){return document.addEventListener("click",cljs.core.reset_BANG_.call(null,component_blur_notifier,medisoft.frontend.ui.utils.make_component_blur_notifier.call(null,reagent.core.dom_node.call(null,component),callback)));
});})(component_blur_notifier,callback))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (component_blur_notifier,callback){
return (function (_){return document.removeEventListener("click",cljs.core.deref.call(null,component_blur_notifier));
});})(component_blur_notifier,callback))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (component_blur_notifier,callback){
return (function() { 
var G__17861__delegate = function (_,contents__$1){return cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Keyword(null,"span","span",1394872991),contents__$1));
};
var G__17861 = function (_,var_args){
var contents__$1 = null;if (arguments.length > 1) {
  contents__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__17861__delegate.call(this,_,contents__$1);};
G__17861.cljs$lang$maxFixedArity = 1;
G__17861.cljs$lang$applyTo = (function (arglist__17862){
var _ = cljs.core.first(arglist__17862);
var contents__$1 = cljs.core.rest(arglist__17862);
return G__17861__delegate(_,contents__$1);
});
G__17861.cljs$core$IFn$_invoke$arity$variadic = G__17861__delegate;
return G__17861;
})()
;})(component_blur_notifier,callback))
], null));
};
var detect_outside_click_component = function (options,var_args){
var contents = null;if (arguments.length > 1) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return detect_outside_click_component__delegate.call(this,options,contents);};
detect_outside_click_component.cljs$lang$maxFixedArity = 1;
detect_outside_click_component.cljs$lang$applyTo = (function (arglist__17863){
var options = cljs.core.first(arglist__17863);
var contents = cljs.core.rest(arglist__17863);
return detect_outside_click_component__delegate(options,contents);
});
detect_outside_click_component.cljs$core$IFn$_invoke$arity$variadic = detect_outside_click_component__delegate;
return detect_outside_click_component;
})()
;
medisoft.frontend.ui.utils.labelize = (function labelize(str){return cuerdas.core.titleize.call(null,cuerdas.core.humanize.call(null,cljs.core.name.call(null,str)));
});
medisoft.frontend.ui.utils.form_field_component = (function (){var method_table__4487__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4488__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4491__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("form-field-component",((function (method_table__4487__auto__,prefer_table__4488__auto__,method_cache__4489__auto__,cached_hierarchy__4490__auto__,hierarchy__4491__auto__){
return (function (_,opts){return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(opts);
});})(method_table__4487__auto__,prefer_table__4488__auto__,method_cache__4489__auto__,cached_hierarchy__4490__auto__,hierarchy__4491__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4491__auto__,method_table__4487__auto__,prefer_table__4488__auto__,method_cache__4489__auto__,cached_hierarchy__4490__auto__));
})();
cljs.core._add_method.call(null,medisoft.frontend.ui.utils.form_field_component,new cljs.core.Keyword(null,"input","input",556931961),(function (name_SINGLEQUOTE_,p__17865){var map__17866 = p__17865;var map__17866__$1 = ((cljs.core.seq_QMARK_.call(null,map__17866))?cljs.core.apply.call(null,cljs.core.hash_map,map__17866):map__17866);var opts = map__17866__$1;var data = cljs.core.get.call(null,map__17866__$1,new cljs.core.Keyword(null,"data","data",-232669377));var errors = cljs.core.get.call(null,map__17866__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"form-group",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),medisoft.frontend.ui.utils.labelize.call(null,name_SINGLEQUOTE_)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),(function (){var or__3607__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,data),name_SINGLEQUOTE_);if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__17866,map__17866__$1,opts,data,errors){
return (function (p1__17864_SHARP_){return cljs.core.swap_BANG_.call(null,data,cljs.core.assoc,name_SINGLEQUOTE_,p1__17864_SHARP_);
});})(map__17866,map__17866__$1,opts,data,errors))
,new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"status","status",-1997798413),(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,errors),name_SINGLEQUOTE_))?new cljs.core.Keyword(null,"error","error",-978969032):null)], null),(cljs.core.truth_(name_SINGLEQUOTE_.call(null,cljs.core.deref.call(null,errors)))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),cuerdas.core.join.call(null,", ",name_SINGLEQUOTE_.call(null,cljs.core.deref.call(null,errors))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"10px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"text-danger"], null):null)], null)], null);
}));
cljs.core._add_method.call(null,medisoft.frontend.ui.utils.form_field_component,new cljs.core.Keyword(null,"password","password",417022471),(function (name_SINGLEQUOTE_,p__17868){var map__17869 = p__17868;var map__17869__$1 = ((cljs.core.seq_QMARK_.call(null,map__17869))?cljs.core.apply.call(null,cljs.core.hash_map,map__17869):map__17869);var opts = map__17869__$1;var data = cljs.core.get.call(null,map__17869__$1,new cljs.core.Keyword(null,"data","data",-232669377));var errors = cljs.core.get.call(null,map__17869__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"form-group",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),medisoft.frontend.ui.utils.labelize.call(null,name_SINGLEQUOTE_)], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),(function (){var or__3607__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,data),name_SINGLEQUOTE_);if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__17869,map__17869__$1,opts,data,errors){
return (function (p1__17867_SHARP_){return cljs.core.swap_BANG_.call(null,data,cljs.core.assoc,name_SINGLEQUOTE_,p1__17867_SHARP_);
});})(map__17869,map__17869__$1,opts,data,errors))
,new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"status","status",-1997798413),(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,errors),name_SINGLEQUOTE_))?new cljs.core.Keyword(null,"error","error",-978969032):null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"password","password",417022471)], null)], null),(cljs.core.truth_(name_SINGLEQUOTE_.call(null,cljs.core.deref.call(null,errors)))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),cuerdas.core.join.call(null,", ",name_SINGLEQUOTE_.call(null,cljs.core.deref.call(null,errors))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"10px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"text-danger"], null):null)], null)], null);
}));
cljs.core._add_method.call(null,medisoft.frontend.ui.utils.form_field_component,new cljs.core.Keyword(null,"select","select",1147833503),(function (name_SINGLEQUOTE_,p__17872){var map__17873 = p__17872;var map__17873__$1 = ((cljs.core.seq_QMARK_.call(null,map__17873))?cljs.core.apply.call(null,cljs.core.hash_map,map__17873):map__17873);var opts = map__17873__$1;var data = cljs.core.get.call(null,map__17873__$1,new cljs.core.Keyword(null,"data","data",-232669377));var errors = cljs.core.get.call(null,map__17873__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));var choices = cljs.core.get.call(null,map__17873__$1,new cljs.core.Keyword(null,"choices","choices",1385611597));var model = cljs.core.get.call(null,map__17873__$1,new cljs.core.Keyword(null,"model","model",331153215));var on_change = cljs.core.get.call(null,map__17873__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));var label_fn = cljs.core.get.call(null,map__17873__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"form-group",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),medisoft.frontend.ui.utils.labelize.call(null,name_SINGLEQUOTE_)], null),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.dropdown.single_dropdown,new cljs.core.Keyword(null,"choices","choices",1385611597),choices,new cljs.core.Keyword(null,"model","model",331153215),(function (){var or__3607__auto__ = model;if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,data),name_SINGLEQUOTE_);if(cljs.core.truth_(or__3607__auto____$1))
{return or__3607__auto____$1;
} else
{return "";
}
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),cuerdas.core.join.call(null," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,errors),name_SINGLEQUOTE_))?"has-error":null)], null)),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),(function (){var or__3607__auto__ = label_fn;if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return ((function (or__3607__auto__,map__17873,map__17873__$1,opts,data,errors,choices,model,on_change,label_fn){
return (function (p1__17870_SHARP_){return new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__17870_SHARP_);
});
;})(or__3607__auto__,map__17873,map__17873__$1,opts,data,errors,choices,model,on_change,label_fn))
}
})(),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"filter-box?","filter-box?",-1157583688),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){var or__3607__auto__ = on_change;if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return ((function (or__3607__auto__,map__17873,map__17873__$1,opts,data,errors,choices,model,on_change,label_fn){
return (function (p1__17871_SHARP_){return cljs.core.swap_BANG_.call(null,data,cljs.core.assoc,name_SINGLEQUOTE_,p1__17871_SHARP_);
});
;})(or__3607__auto__,map__17873,map__17873__$1,opts,data,errors,choices,model,on_change,label_fn))
}
})()], null),(cljs.core.truth_(name_SINGLEQUOTE_.call(null,cljs.core.deref.call(null,errors)))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),cuerdas.core.join.call(null,", ",name_SINGLEQUOTE_.call(null,cljs.core.deref.call(null,errors))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"10px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"text-danger"], null):null)], null)], null);
}));
cljs.core._add_method.call(null,medisoft.frontend.ui.utils.form_field_component,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (name_SINGLEQUOTE_,p__17875){var map__17876 = p__17875;var map__17876__$1 = ((cljs.core.seq_QMARK_.call(null,map__17876))?cljs.core.apply.call(null,cljs.core.hash_map,map__17876):map__17876);var opts = map__17876__$1;var data = cljs.core.get.call(null,map__17876__$1,new cljs.core.Keyword(null,"data","data",-232669377));var errors = cljs.core.get.call(null,map__17876__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));medisoft.frontend.log.debug.call(null,"checkbox data",opts);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"form-group",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),medisoft.frontend.ui.utils.labelize.call(null,name_SINGLEQUOTE_)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"model","model",331153215),(function (){var or__3607__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,data),name_SINGLEQUOTE_);if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return false;
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__17876,map__17876__$1,opts,data,errors){
return (function (p1__17874_SHARP_){medisoft.frontend.log.debug.call(null,"SWAPPING!",p1__17874_SHARP_);
return cljs.core.swap_BANG_.call(null,data,cljs.core.assoc,name_SINGLEQUOTE_,p1__17874_SHARP_);
});})(map__17876,map__17876__$1,opts,data,errors))
], null)], null)], null);
}));
medisoft.frontend.ui.utils.make_form_field_maker = (function make_form_field_maker(data,errors){var default_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"input","input",556931961)], null);return ((function (default_opts){
return (function (name_SINGLEQUOTE_,opts){return medisoft.frontend.ui.utils.form_field_component.call(null,name_SINGLEQUOTE_,cljs.core.merge.call(null,default_opts,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"errors","errors",-908790718),errors], null)));
});
;})(default_opts))
});
medisoft.frontend.ui.utils.key_for = (function key_for(entity){var class$ = cuerdas.core.dasherize.call(null,cljs.core.last.call(null,cuerdas.core.split.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(entity),".")));var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(entity);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
});

//# sourceMappingURL=utils.js.map