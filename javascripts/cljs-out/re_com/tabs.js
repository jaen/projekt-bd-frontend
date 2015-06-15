// Compiled by ClojureScript 0.0-2371
goog.provide('re_com.tabs');
goog.require('cljs.core');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('re_com.util');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.validate');
re_com.tabs.tabs_args_desc = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_of_maps_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"one element in the vector for each tab. Typically, each element is a map with :id and :label keys"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the unique identifier of the currently selected tab"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"(unique-id) -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when user alters the selection. Passed the unique identifier of the selection"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),"(map) -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns the unique identifier for this tab"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"type","type",1174270348),"(map) -> string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns what should be displayed in the tab"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (for each individual tab rather than the container)"], null)], null);
/**
* @param {...*} var_args
*/
re_com.tabs.horizontal_tabs = (function() { 
var horizontal_tabs__delegate = function (p__18219){var map__18225 = p__18219;var map__18225__$1 = ((cljs.core.seq_QMARK_.call(null,map__18225))?cljs.core.apply.call(null,cljs.core.hash_map,map__18225):map__18225);var args = map__18225__$1;var model = cljs.core.get.call(null,map__18225__$1,new cljs.core.Keyword(null,"model","model",331153215));var tabs = cljs.core.get.call(null,map__18225__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));var on_change = cljs.core.get.call(null,map__18225__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));var id_fn = cljs.core.get.call(null,map__18225__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));var label_fn = cljs.core.get.call(null,map__18225__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));var style = cljs.core.get.call(null,map__18225__$1,new cljs.core.Keyword(null,"style","style",-496642736));if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs"))))));
}
var current = re_com.util.deref_or_value.call(null,model);var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__18225,map__18225__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (p1__18218_SHARP_){return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__18218_SHARP_));
});})(current,tabs__$1,map__18225,map__18225__$1,args,model,tabs,on_change,id_fn,label_fn,style))
,tabs__$1)))?null:(function(){throw (new Error(("Assert failed: model not found in tabs vector\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__18218#","p1__18218#",1385709507,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current","current",552492924,null),cljs.core.list(new cljs.core.Symbol(null,"id-fn","id-fn",1956754325,null),new cljs.core.Symbol(null,"p1__18218#","p1__18218#",1385709507,null)))),new cljs.core.Symbol(null,"tabs","tabs",860676173,null))))))))})());return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs nav nav-tabs noselect",new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none")], null),(function (){var iter__4346__auto__ = ((function (current,tabs__$1,_,map__18225,map__18225__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function iter__18226(s__18227){return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__18225,map__18225__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (){var s__18227__$1 = s__18227;while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__18227__$1);if(temp__4423__auto__)
{var s__18227__$2 = temp__4423__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18227__$2))
{var c__4344__auto__ = cljs.core.chunk_first.call(null,s__18227__$2);var size__4345__auto__ = cljs.core.count.call(null,c__4344__auto__);var b__18229 = cljs.core.chunk_buffer.call(null,size__4345__auto__);if((function (){var i__18228 = (0);while(true){
if((i__18228 < size__4345__auto__))
{var t = cljs.core._nth.call(null,c__4344__auto__,i__18228);cljs.core.chunk_append.call(null,b__18229,(function (){var id = id_fn.call(null,t);var label = label_fn.call(null,t);var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__18228,id,label,selected_QMARK_,t,c__4344__auto__,size__4345__auto__,b__18229,s__18227__$2,temp__4423__auto__,current,tabs__$1,_,map__18225,map__18225__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (event){on_change.call(null,id);
return null;
});})(i__18228,id,label,selected_QMARK_,t,c__4344__auto__,size__4345__auto__,b__18229,s__18227__$2,temp__4423__auto__,current,tabs__$1,_,map__18225,map__18225__$1,args,model,tabs,on_change,id_fn,label_fn,style))
:null)], null),label], null)], null);
})());
{
var G__18230 = (i__18228 + (1));
i__18228 = G__18230;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18229),iter__18226.call(null,cljs.core.chunk_rest.call(null,s__18227__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18229),null);
}
} else
{var t = cljs.core.first.call(null,s__18227__$2);return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);var label = label_fn.call(null,t);var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__18227__$2,temp__4423__auto__,current,tabs__$1,_,map__18225,map__18225__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (event){on_change.call(null,id);
return null;
});})(id,label,selected_QMARK_,t,s__18227__$2,temp__4423__auto__,current,tabs__$1,_,map__18225,map__18225__$1,args,model,tabs,on_change,id_fn,label_fn,style))
:null)], null),label], null)], null);
})(),iter__18226.call(null,cljs.core.rest.call(null,s__18227__$2)));
}
} else
{return null;
}
break;
}
});})(current,tabs__$1,_,map__18225,map__18225__$1,args,model,tabs,on_change,id_fn,label_fn,style))
,null,null));
});})(current,tabs__$1,_,map__18225,map__18225__$1,args,model,tabs,on_change,id_fn,label_fn,style))
;return iter__4346__auto__.call(null,tabs__$1);
})()], null);
};
var horizontal_tabs = function (var_args){
var p__18219 = null;if (arguments.length > 0) {
  p__18219 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return horizontal_tabs__delegate.call(this,p__18219);};
horizontal_tabs.cljs$lang$maxFixedArity = 0;
horizontal_tabs.cljs$lang$applyTo = (function (arglist__18231){
var p__18219 = cljs.core.seq(arglist__18231);
return horizontal_tabs__delegate(p__18219);
});
horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic = horizontal_tabs__delegate;
return horizontal_tabs;
})()
;
/**
* @param {...*} var_args
*/
re_com.tabs.bar_tabs = (function() { 
var bar_tabs__delegate = function (p__18233){var map__18239 = p__18233;var map__18239__$1 = ((cljs.core.seq_QMARK_.call(null,map__18239))?cljs.core.apply.call(null,cljs.core.hash_map,map__18239):map__18239);var model = cljs.core.get.call(null,map__18239__$1,new cljs.core.Keyword(null,"model","model",331153215));var tabs = cljs.core.get.call(null,map__18239__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));var on_change = cljs.core.get.call(null,map__18239__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));var id_fn = cljs.core.get.call(null,map__18239__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));var label_fn = cljs.core.get.call(null,map__18239__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));var style = cljs.core.get.call(null,map__18239__$1,new cljs.core.Keyword(null,"style","style",-496642736));var vertical_QMARK_ = cljs.core.get.call(null,map__18239__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));var current = re_com.util.deref_or_value.call(null,model);var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__18239,map__18239__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (p1__18232_SHARP_){return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__18232_SHARP_));
});})(current,tabs__$1,map__18239,map__18239__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,tabs__$1)))?null:(function(){throw (new Error(("Assert failed: model not found in tabs vector\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__18232#","p1__18232#",482424422,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current","current",552492924,null),cljs.core.list(new cljs.core.Symbol(null,"id-fn","id-fn",1956754325,null),new cljs.core.Symbol(null,"p1__18232#","p1__18232#",482424422,null)))),new cljs.core.Symbol(null,"tabs","tabs",860676173,null))))))))})());return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),("rc-tabs noselect btn-group"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(vertical_QMARK_)?"-vertical":null))),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none")], null),(function (){var iter__4346__auto__ = ((function (current,tabs__$1,_,map__18239,map__18239__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function iter__18240(s__18241){return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__18239,map__18239__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (){var s__18241__$1 = s__18241;while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__18241__$1);if(temp__4423__auto__)
{var s__18241__$2 = temp__4423__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18241__$2))
{var c__4344__auto__ = cljs.core.chunk_first.call(null,s__18241__$2);var size__4345__auto__ = cljs.core.count.call(null,c__4344__auto__);var b__18243 = cljs.core.chunk_buffer.call(null,size__4345__auto__);if((function (){var i__18242 = (0);while(true){
if((i__18242 < size__4345__auto__))
{var t = cljs.core._nth.call(null,c__4344__auto__,i__18242);cljs.core.chunk_append.call(null,b__18243,(function (){var id = id_fn.call(null,t);var label = label_fn.call(null,t);var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),new cljs.core.Keyword(null,"class","class",-2030961996),("btn btn-default "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?"active":null))),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__18242,id,label,selected_QMARK_,t,c__4344__auto__,size__4345__auto__,b__18243,s__18241__$2,temp__4423__auto__,current,tabs__$1,_,map__18239,map__18239__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){on_change.call(null,id);
return null;
});})(i__18242,id,label,selected_QMARK_,t,c__4344__auto__,size__4345__auto__,b__18243,s__18241__$2,temp__4423__auto__,current,tabs__$1,_,map__18239,map__18239__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null);
})());
{
var G__18244 = (i__18242 + (1));
i__18242 = G__18244;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18243),iter__18240.call(null,cljs.core.chunk_rest.call(null,s__18241__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18243),null);
}
} else
{var t = cljs.core.first.call(null,s__18241__$2);return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);var label = label_fn.call(null,t);var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),new cljs.core.Keyword(null,"class","class",-2030961996),("btn btn-default "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?"active":null))),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__18241__$2,temp__4423__auto__,current,tabs__$1,_,map__18239,map__18239__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){on_change.call(null,id);
return null;
});})(id,label,selected_QMARK_,t,s__18241__$2,temp__4423__auto__,current,tabs__$1,_,map__18239,map__18239__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null);
})(),iter__18240.call(null,cljs.core.rest.call(null,s__18241__$2)));
}
} else
{return null;
}
break;
}
});})(current,tabs__$1,_,map__18239,map__18239__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,null,null));
});})(current,tabs__$1,_,map__18239,map__18239__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
;return iter__4346__auto__.call(null,tabs__$1);
})()], null);
};
var bar_tabs = function (var_args){
var p__18233 = null;if (arguments.length > 0) {
  p__18233 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bar_tabs__delegate.call(this,p__18233);};
bar_tabs.cljs$lang$maxFixedArity = 0;
bar_tabs.cljs$lang$applyTo = (function (arglist__18245){
var p__18233 = cljs.core.seq(arglist__18245);
return bar_tabs__delegate(p__18233);
});
bar_tabs.cljs$core$IFn$_invoke$arity$variadic = bar_tabs__delegate;
return bar_tabs;
})()
;
/**
* @param {...*} var_args
*/
re_com.tabs.horizontal_bar_tabs = (function() { 
var horizontal_bar_tabs__delegate = function (p__18246){var map__18248 = p__18246;var map__18248__$1 = ((cljs.core.seq_QMARK_.call(null,map__18248))?cljs.core.apply.call(null,cljs.core.hash_map,map__18248):map__18248);var args = map__18248__$1;var model = cljs.core.get.call(null,map__18248__$1,new cljs.core.Keyword(null,"model","model",331153215));var tabs = cljs.core.get.call(null,map__18248__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));var on_change = cljs.core.get.call(null,map__18248__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));var id_fn = cljs.core.get.call(null,map__18248__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));var label_fn = cljs.core.get.call(null,map__18248__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));var style = cljs.core.get.call(null,map__18248__$1,new cljs.core.Keyword(null,"style","style",-496642736));if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs"))))));
}
return re_com.tabs.bar_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false);
};
var horizontal_bar_tabs = function (var_args){
var p__18246 = null;if (arguments.length > 0) {
  p__18246 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return horizontal_bar_tabs__delegate.call(this,p__18246);};
horizontal_bar_tabs.cljs$lang$maxFixedArity = 0;
horizontal_bar_tabs.cljs$lang$applyTo = (function (arglist__18249){
var p__18246 = cljs.core.seq(arglist__18249);
return horizontal_bar_tabs__delegate(p__18246);
});
horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = horizontal_bar_tabs__delegate;
return horizontal_bar_tabs;
})()
;
/**
* @param {...*} var_args
*/
re_com.tabs.vertical_bar_tabs = (function() { 
var vertical_bar_tabs__delegate = function (p__18250){var map__18252 = p__18250;var map__18252__$1 = ((cljs.core.seq_QMARK_.call(null,map__18252))?cljs.core.apply.call(null,cljs.core.hash_map,map__18252):map__18252);var args = map__18252__$1;var model = cljs.core.get.call(null,map__18252__$1,new cljs.core.Keyword(null,"model","model",331153215));var tabs = cljs.core.get.call(null,map__18252__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));var on_change = cljs.core.get.call(null,map__18252__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));var id_fn = cljs.core.get.call(null,map__18252__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));var label_fn = cljs.core.get.call(null,map__18252__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));var style = cljs.core.get.call(null,map__18252__$1,new cljs.core.Keyword(null,"style","style",-496642736));if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs"))))));
}
return re_com.tabs.bar_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
};
var vertical_bar_tabs = function (var_args){
var p__18250 = null;if (arguments.length > 0) {
  p__18250 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return vertical_bar_tabs__delegate.call(this,p__18250);};
vertical_bar_tabs.cljs$lang$maxFixedArity = 0;
vertical_bar_tabs.cljs$lang$applyTo = (function (arglist__18253){
var p__18250 = cljs.core.seq(arglist__18253);
return vertical_bar_tabs__delegate(p__18250);
});
vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = vertical_bar_tabs__delegate;
return vertical_bar_tabs;
})()
;
/**
* @param {...*} var_args
*/
re_com.tabs.pill_tabs = (function() { 
var pill_tabs__delegate = function (p__18255){var map__18261 = p__18255;var map__18261__$1 = ((cljs.core.seq_QMARK_.call(null,map__18261))?cljs.core.apply.call(null,cljs.core.hash_map,map__18261):map__18261);var model = cljs.core.get.call(null,map__18261__$1,new cljs.core.Keyword(null,"model","model",331153215));var tabs = cljs.core.get.call(null,map__18261__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));var on_change = cljs.core.get.call(null,map__18261__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));var id_fn = cljs.core.get.call(null,map__18261__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));var label_fn = cljs.core.get.call(null,map__18261__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));var style = cljs.core.get.call(null,map__18261__$1,new cljs.core.Keyword(null,"style","style",-496642736));var vertical_QMARK_ = cljs.core.get.call(null,map__18261__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));var current = re_com.util.deref_or_value.call(null,model);var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__18261,map__18261__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (p1__18254_SHARP_){return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__18254_SHARP_));
});})(current,tabs__$1,map__18261,map__18261__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,tabs__$1)))?null:(function(){throw (new Error(("Assert failed: model not found in tabs vector\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__18254#","p1__18254#",-1303236207,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current","current",552492924,null),cljs.core.list(new cljs.core.Symbol(null,"id-fn","id-fn",1956754325,null),new cljs.core.Symbol(null,"p1__18254#","p1__18254#",-1303236207,null)))),new cljs.core.Symbol(null,"tabs","tabs",860676173,null))))))))})());return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),("rc-tabs noselect nav nav-pills"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(vertical_QMARK_)?" nav-stacked":null))),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none"),new cljs.core.Keyword(null,"role","role",-736691072),"tabslist"], null),(function (){var iter__4346__auto__ = ((function (current,tabs__$1,_,map__18261,map__18261__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function iter__18262(s__18263){return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__18261,map__18261__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (){var s__18263__$1 = s__18263;while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__18263__$1);if(temp__4423__auto__)
{var s__18263__$2 = temp__4423__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18263__$2))
{var c__4344__auto__ = cljs.core.chunk_first.call(null,s__18263__$2);var size__4345__auto__ = cljs.core.count.call(null,c__4344__auto__);var b__18265 = cljs.core.chunk_buffer.call(null,size__4345__auto__);if((function (){var i__18264 = (0);while(true){
if((i__18264 < size__4345__auto__))
{var t = cljs.core._nth.call(null,c__4344__auto__,i__18264);cljs.core.chunk_append.call(null,b__18265,(function (){var id = id_fn.call(null,t);var label = label_fn.call(null,t);var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__18264,id,label,selected_QMARK_,t,c__4344__auto__,size__4345__auto__,b__18265,s__18263__$2,temp__4423__auto__,current,tabs__$1,_,map__18261,map__18261__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){on_change.call(null,id);
return null;
});})(i__18264,id,label,selected_QMARK_,t,c__4344__auto__,size__4345__auto__,b__18265,s__18263__$2,temp__4423__auto__,current,tabs__$1,_,map__18261,map__18261__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null)], null);
})());
{
var G__18266 = (i__18264 + (1));
i__18264 = G__18266;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18265),iter__18262.call(null,cljs.core.chunk_rest.call(null,s__18263__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18265),null);
}
} else
{var t = cljs.core.first.call(null,s__18263__$2);return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);var label = label_fn.call(null,t);var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__18263__$2,temp__4423__auto__,current,tabs__$1,_,map__18261,map__18261__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){on_change.call(null,id);
return null;
});})(id,label,selected_QMARK_,t,s__18263__$2,temp__4423__auto__,current,tabs__$1,_,map__18261,map__18261__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null)], null);
})(),iter__18262.call(null,cljs.core.rest.call(null,s__18263__$2)));
}
} else
{return null;
}
break;
}
});})(current,tabs__$1,_,map__18261,map__18261__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,null,null));
});})(current,tabs__$1,_,map__18261,map__18261__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
;return iter__4346__auto__.call(null,tabs__$1);
})()], null);
};
var pill_tabs = function (var_args){
var p__18255 = null;if (arguments.length > 0) {
  p__18255 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pill_tabs__delegate.call(this,p__18255);};
pill_tabs.cljs$lang$maxFixedArity = 0;
pill_tabs.cljs$lang$applyTo = (function (arglist__18267){
var p__18255 = cljs.core.seq(arglist__18267);
return pill_tabs__delegate(p__18255);
});
pill_tabs.cljs$core$IFn$_invoke$arity$variadic = pill_tabs__delegate;
return pill_tabs;
})()
;
/**
* @param {...*} var_args
*/
re_com.tabs.horizontal_pill_tabs = (function() { 
var horizontal_pill_tabs__delegate = function (p__18268){var map__18270 = p__18268;var map__18270__$1 = ((cljs.core.seq_QMARK_.call(null,map__18270))?cljs.core.apply.call(null,cljs.core.hash_map,map__18270):map__18270);var args = map__18270__$1;var model = cljs.core.get.call(null,map__18270__$1,new cljs.core.Keyword(null,"model","model",331153215));var tabs = cljs.core.get.call(null,map__18270__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));var on_change = cljs.core.get.call(null,map__18270__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));var id_fn = cljs.core.get.call(null,map__18270__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));var style = cljs.core.get.call(null,map__18270__$1,new cljs.core.Keyword(null,"style","style",-496642736));var label_fn = cljs.core.get.call(null,map__18270__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs"))))));
}
return re_com.tabs.pill_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false);
};
var horizontal_pill_tabs = function (var_args){
var p__18268 = null;if (arguments.length > 0) {
  p__18268 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return horizontal_pill_tabs__delegate.call(this,p__18268);};
horizontal_pill_tabs.cljs$lang$maxFixedArity = 0;
horizontal_pill_tabs.cljs$lang$applyTo = (function (arglist__18271){
var p__18268 = cljs.core.seq(arglist__18271);
return horizontal_pill_tabs__delegate(p__18268);
});
horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = horizontal_pill_tabs__delegate;
return horizontal_pill_tabs;
})()
;
/**
* @param {...*} var_args
*/
re_com.tabs.vertical_pill_tabs = (function() { 
var vertical_pill_tabs__delegate = function (p__18272){var map__18274 = p__18272;var map__18274__$1 = ((cljs.core.seq_QMARK_.call(null,map__18274))?cljs.core.apply.call(null,cljs.core.hash_map,map__18274):map__18274);var args = map__18274__$1;var model = cljs.core.get.call(null,map__18274__$1,new cljs.core.Keyword(null,"model","model",331153215));var tabs = cljs.core.get.call(null,map__18274__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));var on_change = cljs.core.get.call(null,map__18274__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));var id_fn = cljs.core.get.call(null,map__18274__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));var style = cljs.core.get.call(null,map__18274__$1,new cljs.core.Keyword(null,"style","style",-496642736));var label_fn = cljs.core.get.call(null,map__18274__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));if(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs"))))));
}
return re_com.tabs.pill_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
};
var vertical_pill_tabs = function (var_args){
var p__18272 = null;if (arguments.length > 0) {
  p__18272 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return vertical_pill_tabs__delegate.call(this,p__18272);};
vertical_pill_tabs.cljs$lang$maxFixedArity = 0;
vertical_pill_tabs.cljs$lang$applyTo = (function (arglist__18275){
var p__18272 = cljs.core.seq(arglist__18275);
return vertical_pill_tabs__delegate(p__18272);
});
vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = vertical_pill_tabs__delegate;
return vertical_pill_tabs;
})()
;

//# sourceMappingURL=tabs.js.map