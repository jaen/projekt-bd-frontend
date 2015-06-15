// Compiled by ClojureScript 0.0-2371
goog.provide('devtools.format');
goog.require('cljs.core');
devtools.format.max_print_level = (3);
devtools.format.max_header_elements = (5);
devtools.format.more_marker = "\u2026";
devtools.format.max_number_body_items = (100);
devtools.format.body_items_more_label = "more\u2026";
devtools.format.string_prefix_limit = (20);
devtools.format.string_postfix_limit = (20);
devtools.format.string_abbreviation_marker = " \u2026 ";
devtools.format.new_line_string_replacer = "\u21B5";
devtools.format.line_index_separator = ":";
devtools.format.dq = "\"";
devtools.format.surrogate_key = "$$this-is-cljs-devtools-surrogate";
devtools.format.standard_ol_style = "list-style-type:none; padding-left:0px; margin-top:0px; margin-bottom:0px; margin-left:12px";
devtools.format.standard_ol_no_margin_style = "list-style-type:none; padding-left:0px; margin-top:0px; margin-bottom:0px; margin-left:0px";
devtools.format.standard_li_style = "margin-left:12px";
devtools.format.standard_li_no_margin_style = "margin-left:0px";
devtools.format.spacer = " ";
devtools.format.span = "span";
devtools.format.ol = "ol";
devtools.format.li = "li";
devtools.format.cljs_style = "background-color:#efe";
devtools.format.index_style = "color:#881391";
devtools.format.nil_style = "color:#808080";
devtools.format.nil_label = "nil";
devtools.format.keyword_style = "color:#881391";
devtools.format.integer_style = "color:#1C00CF";
devtools.format.float_style = "color:#1C88CF";
devtools.format.string_style = "color:#C41A16";
devtools.format.symbol_style = "color:#000000";
devtools.format.fn_style = "color:#090";
devtools.format.bool_style = "color:#099";
devtools.format.cljs_value_QMARK_ = (function cljs_value_QMARK_(value){try{return typeof (value["constructor"]["cljs$lang$type"]) !== 'undefined';
}catch (e15844){if((e15844 instanceof Object))
{var _ = e15844;return false;
} else
{throw e15844;

}
}});
devtools.format.surrogate_QMARK_ = (function surrogate_QMARK_(value){return (!((value == null))) && (typeof (value[devtools.format.surrogate_key]) !== 'undefined');
});
/**
* @param {...*} var_args
*/
devtools.format.template = (function() { 
var template__delegate = function (tag,style,children){var js_array = [tag,((cljs.core.empty_QMARK_.call(null,style))?{}:{"style": style})];var seq__15849_15853 = cljs.core.seq.call(null,children);var chunk__15850_15854 = null;var count__15851_15855 = (0);var i__15852_15856 = (0);while(true){
if((i__15852_15856 < count__15851_15855))
{var child_15857 = cljs.core._nth.call(null,chunk__15850_15854,i__15852_15856);if(cljs.core.coll_QMARK_.call(null,child_15857))
{(js_array["push"]).apply(js_array,cljs.core.into_array.call(null,child_15857));
} else
{js_array.push(child_15857);
}
{
var G__15858 = seq__15849_15853;
var G__15859 = chunk__15850_15854;
var G__15860 = count__15851_15855;
var G__15861 = (i__15852_15856 + (1));
seq__15849_15853 = G__15858;
chunk__15850_15854 = G__15859;
count__15851_15855 = G__15860;
i__15852_15856 = G__15861;
continue;
}
} else
{var temp__4423__auto___15862 = cljs.core.seq.call(null,seq__15849_15853);if(temp__4423__auto___15862)
{var seq__15849_15863__$1 = temp__4423__auto___15862;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15849_15863__$1))
{var c__4377__auto___15864 = cljs.core.chunk_first.call(null,seq__15849_15863__$1);{
var G__15865 = cljs.core.chunk_rest.call(null,seq__15849_15863__$1);
var G__15866 = c__4377__auto___15864;
var G__15867 = cljs.core.count.call(null,c__4377__auto___15864);
var G__15868 = (0);
seq__15849_15853 = G__15865;
chunk__15850_15854 = G__15866;
count__15851_15855 = G__15867;
i__15852_15856 = G__15868;
continue;
}
} else
{var child_15869 = cljs.core.first.call(null,seq__15849_15863__$1);if(cljs.core.coll_QMARK_.call(null,child_15869))
{(js_array["push"]).apply(js_array,cljs.core.into_array.call(null,child_15869));
} else
{js_array.push(child_15869);
}
{
var G__15870 = cljs.core.next.call(null,seq__15849_15863__$1);
var G__15871 = null;
var G__15872 = (0);
var G__15873 = (0);
seq__15849_15853 = G__15870;
chunk__15850_15854 = G__15871;
count__15851_15855 = G__15872;
i__15852_15856 = G__15873;
continue;
}
}
} else
{}
}
break;
}
return js_array;
};
var template = function (tag,style,var_args){
var children = null;if (arguments.length > 2) {
  children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return template__delegate.call(this,tag,style,children);};
template.cljs$lang$maxFixedArity = 2;
template.cljs$lang$applyTo = (function (arglist__15874){
var tag = cljs.core.first(arglist__15874);
arglist__15874 = cljs.core.next(arglist__15874);
var style = cljs.core.first(arglist__15874);
var children = cljs.core.rest(arglist__15874);
return template__delegate(tag,style,children);
});
template.cljs$core$IFn$_invoke$arity$variadic = template__delegate;
return template;
})()
;
/**
* @param {...*} var_args
*/
devtools.format.reference = (function() { 
var reference__delegate = function (object,children){var js_array = ["object",{"object": object}];var seq__15879_15883 = cljs.core.seq.call(null,children);var chunk__15880_15884 = null;var count__15881_15885 = (0);var i__15882_15886 = (0);while(true){
if((i__15882_15886 < count__15881_15885))
{var child_15887 = cljs.core._nth.call(null,chunk__15880_15884,i__15882_15886);js_array.push(child_15887);
{
var G__15888 = seq__15879_15883;
var G__15889 = chunk__15880_15884;
var G__15890 = count__15881_15885;
var G__15891 = (i__15882_15886 + (1));
seq__15879_15883 = G__15888;
chunk__15880_15884 = G__15889;
count__15881_15885 = G__15890;
i__15882_15886 = G__15891;
continue;
}
} else
{var temp__4423__auto___15892 = cljs.core.seq.call(null,seq__15879_15883);if(temp__4423__auto___15892)
{var seq__15879_15893__$1 = temp__4423__auto___15892;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15879_15893__$1))
{var c__4377__auto___15894 = cljs.core.chunk_first.call(null,seq__15879_15893__$1);{
var G__15895 = cljs.core.chunk_rest.call(null,seq__15879_15893__$1);
var G__15896 = c__4377__auto___15894;
var G__15897 = cljs.core.count.call(null,c__4377__auto___15894);
var G__15898 = (0);
seq__15879_15883 = G__15895;
chunk__15880_15884 = G__15896;
count__15881_15885 = G__15897;
i__15882_15886 = G__15898;
continue;
}
} else
{var child_15899 = cljs.core.first.call(null,seq__15879_15893__$1);js_array.push(child_15899);
{
var G__15900 = cljs.core.next.call(null,seq__15879_15893__$1);
var G__15901 = null;
var G__15902 = (0);
var G__15903 = (0);
seq__15879_15883 = G__15900;
chunk__15880_15884 = G__15901;
count__15881_15885 = G__15902;
i__15882_15886 = G__15903;
continue;
}
}
} else
{}
}
break;
}
return js_array;
};
var reference = function (object,var_args){
var children = null;if (arguments.length > 1) {
  children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return reference__delegate.call(this,object,children);};
reference.cljs$lang$maxFixedArity = 1;
reference.cljs$lang$applyTo = (function (arglist__15904){
var object = cljs.core.first(arglist__15904);
var children = cljs.core.rest(arglist__15904);
return reference__delegate(object,children);
});
reference.cljs$core$IFn$_invoke$arity$variadic = reference__delegate;
return reference;
})()
;
devtools.format.surrogate = (function() {
var surrogate = null;
var surrogate__2 = (function (object,header){return surrogate.call(null,object,header,true);
});
var surrogate__3 = (function (object,header,has_body){return surrogate.call(null,object,header,has_body,null);
});
var surrogate__4 = (function (object,header,has_body,body_template){var obj15908 = {"target":object,"header":devtools.format.template.call(null,devtools.format.span,devtools.format.cljs_style,header),"hasBody":has_body,"bodyTemplate":body_template};(obj15908[devtools.format.surrogate_key] = true);
return obj15908;
});
surrogate = function(object,header,has_body,body_template){
switch(arguments.length){
case 2:
return surrogate__2.call(this,object,header);
case 3:
return surrogate__3.call(this,object,header,has_body);
case 4:
return surrogate__4.call(this,object,header,has_body,body_template);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
surrogate.cljs$core$IFn$_invoke$arity$2 = surrogate__2;
surrogate.cljs$core$IFn$_invoke$arity$3 = surrogate__3;
surrogate.cljs$core$IFn$_invoke$arity$4 = surrogate__4;
return surrogate;
})()
;
devtools.format.index_template = (function index_template(value){return devtools.format.template.call(null,devtools.format.span,devtools.format.index_style,value,devtools.format.line_index_separator);
});
devtools.format.number_template = (function number_template(value){if(cljs.core.integer_QMARK_.call(null,value))
{return devtools.format.template.call(null,devtools.format.span,devtools.format.integer_style,value);
} else
{return devtools.format.template.call(null,devtools.format.span,devtools.format.float_style,value);
}
});
devtools.format.abbreviate_long_string = (function abbreviate_long_string(string){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,devtools.format.string_prefix_limit,string)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.format.string_abbreviation_marker)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.take_last.call(null,devtools.format.string_postfix_limit,string))));
});
devtools.format.string_template = (function string_template(source_string){var re_nl = (new RegExp("\n","g"));var inline_string = source_string.replace(re_nl,devtools.format.new_line_string_replacer);var max_inline_string_size = (devtools.format.string_prefix_limit + devtools.format.string_postfix_limit);if((cljs.core.count.call(null,inline_string) <= max_inline_string_size))
{return devtools.format.template.call(null,devtools.format.span,devtools.format.string_style,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.format.dq)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inline_string)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.format.dq)));
} else
{var abbreviated_string_template = devtools.format.template.call(null,devtools.format.span,devtools.format.string_style,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.format.dq)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.format.abbreviate_long_string.call(null,inline_string))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.format.dq)));var string_with_nl_markers = source_string.replace(re_nl,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.format.new_line_string_replacer)+"\n"));var body_template = devtools.format.template.call(null,devtools.format.ol,devtools.format.standard_ol_style,devtools.format.template.call(null,devtools.format.li,devtools.format.standard_li_style,devtools.format.template.call(null,devtools.format.span,devtools.format.string_style,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.format.dq)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(string_with_nl_markers)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.format.dq)))));return devtools.format.reference.call(null,devtools.format.surrogate.call(null,source_string,abbreviated_string_template,true,body_template));
}
});
devtools.format.bool_QMARK_ = (function bool_QMARK_(value){return (value === true) || (value === false);
});
devtools.format.atomic_template = (function atomic_template(value){if((value == null))
{return devtools.format.template.call(null,devtools.format.span,devtools.format.nil_style,devtools.format.nil_label);
} else
{if(devtools.format.bool_QMARK_.call(null,value))
{return devtools.format.template.call(null,devtools.format.span,devtools.format.bool_style,value);
} else
{if(typeof value === 'string')
{return devtools.format.string_template.call(null,value);
} else
{if(typeof value === 'number')
{return devtools.format.number_template.call(null,value);
} else
{if((value instanceof cljs.core.Keyword))
{return devtools.format.template.call(null,devtools.format.span,devtools.format.keyword_style,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
} else
{if((value instanceof cljs.core.Symbol))
{return devtools.format.template.call(null,devtools.format.span,devtools.format.symbol_style,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
} else
{if(cljs.core.fn_QMARK_.call(null,value))
{return devtools.format.template.call(null,devtools.format.span,devtools.format.fn_style,devtools.format.reference.call(null,value));
} else
{return null;
}
}
}
}
}
}
}
});
devtools.format.abbreviated_QMARK_ = (function abbreviated_QMARK_(template){return cljs.core.some.call(null,(function (p1__15909_SHARP_){return cljs.core._EQ_.call(null,devtools.format.more_marker,p1__15909_SHARP_);
}),template);
});

/**
* @constructor
*/
devtools.format.TemplateWriter = (function (t){
this.t = t;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devtools.format.TemplateWriter.cljs$lang$type = true;
devtools.format.TemplateWriter.cljs$lang$ctorStr = "devtools.format/TemplateWriter";
devtools.format.TemplateWriter.cljs$lang$ctorPrWriter = (function (this__4184__auto__,writer__4185__auto__,opt__4186__auto__){return cljs.core._write.call(null,writer__4185__auto__,"devtools.format/TemplateWriter");
});
devtools.format.TemplateWriter.prototype.merge = (function (a){var self__ = this;
var _ = this;return self__.t.push.apply(self__.t,a);
});
devtools.format.TemplateWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;return self__.t.push(o);
});
devtools.format.TemplateWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return null;
});
devtools.format.__GT_TemplateWriter = (function __GT_TemplateWriter(t){return (new devtools.format.TemplateWriter(t));
});
devtools.format.wrap_group_in_reference_if_needed = (function wrap_group_in_reference_if_needed(group,obj){if(cljs.core.truth_(devtools.format.abbreviated_QMARK_.call(null,group)))
{return [devtools.format.reference.call(null,devtools.format.surrogate.call(null,obj,devtools.format.template.call(null,devtools.format.span,"").concat(group)))];
} else
{return group;
}
});
devtools.format.detect_else_case_and_patch_it = (function detect_else_case_and_patch_it(group,obj){if((cljs.core._EQ_.call(null,cljs.core.count.call(null,group),(3))) && (cljs.core._EQ_.call(null,(group[(0)]),"#<")) && (cljs.core._EQ_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj)),(group[(1)]))) && (cljs.core._EQ_.call(null,(group[(2)]),">")))
{return (group[(1)] = devtools.format.reference.call(null,obj));
} else
{return null;
}
});
devtools.format.alt_printer_impl = (function alt_printer_impl(obj,writer,opts){var temp__4421__auto__ = devtools.format.atomic_template.call(null,obj);if(cljs.core.truth_(temp__4421__auto__))
{var tmpl = temp__4421__auto__;return cljs.core._write.call(null,writer,tmpl);
} else
{var inner_tmpl = [];var inner_writer = (new devtools.format.TemplateWriter(inner_tmpl));var default_impl = new cljs.core.Keyword(null,"fallback-impl","fallback-impl",-1501286995).cljs$core$IFn$_invoke$arity$1(opts);var inner_opts = ((cljs.core._EQ_.call(null,cljs.core._STAR_print_level_STAR_,(1)))?cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(0)):opts);default_impl.call(null,obj,inner_writer,inner_opts);
devtools.format.detect_else_case_and_patch_it.call(null,inner_tmpl,obj);
return writer.merge(devtools.format.wrap_group_in_reference_if_needed.call(null,inner_tmpl,obj),obj);
}
});
devtools.format.managed_pr_str = (function managed_pr_str(value,style,print_level){var tmpl = devtools.format.template.call(null,devtools.format.span,style);var writer = (new devtools.format.TemplateWriter(tmpl));var _STAR_print_level_STAR_15911_15912 = cljs.core._STAR_print_level_STAR_;try{cljs.core._STAR_print_level_STAR_ = print_level;
cljs.core.pr_seq_writer.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null),writer,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"alt-impl","alt-impl",670969595),devtools.format.alt_printer_impl,new cljs.core.Keyword(null,"print-length","print-length",1931866356),devtools.format.max_header_elements,new cljs.core.Keyword(null,"more-marker","more-marker",-14717935),devtools.format.more_marker], null));
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_15911_15912;
}return tmpl;
});
devtools.format.build_header = (function build_header(value){return devtools.format.managed_pr_str.call(null,value,devtools.format.cljs_style,(devtools.format.max_print_level + (1)));
});
devtools.format.standard_body_template = (function() {
var standard_body_template = null;
var standard_body_template__1 = (function (lines){return standard_body_template.call(null,lines,true);
});
var standard_body_template__2 = (function (lines,margin_QMARK_){var ol_style = (cljs.core.truth_(margin_QMARK_)?devtools.format.standard_ol_style:devtools.format.standard_ol_no_margin_style);var li_style = (cljs.core.truth_(margin_QMARK_)?devtools.format.standard_li_style:devtools.format.standard_li_no_margin_style);return devtools.format.template.call(null,devtools.format.ol,ol_style,cljs.core.map.call(null,((function (ol_style,li_style){
return (function (p1__15913_SHARP_){return devtools.format.template.call(null,devtools.format.li,li_style,p1__15913_SHARP_);
});})(ol_style,li_style))
,lines));
});
standard_body_template = function(lines,margin_QMARK_){
switch(arguments.length){
case 1:
return standard_body_template__1.call(this,lines);
case 2:
return standard_body_template__2.call(this,lines,margin_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
standard_body_template.cljs$core$IFn$_invoke$arity$1 = standard_body_template__1;
standard_body_template.cljs$core$IFn$_invoke$arity$2 = standard_body_template__2;
return standard_body_template;
})()
;
devtools.format.body_line_template = (function body_line_template(index,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [devtools.format.index_template.call(null,index),devtools.format.spacer,devtools.format.managed_pr_str.call(null,value,(cljs.core.truth_(devtools.format.cljs_value_QMARK_)?devtools.format.cljs_style:""),(3))], null);
});
devtools.format.prepare_body_lines = (function prepare_body_lines(data,starting_index){var work = data;var index = starting_index;var lines = cljs.core.PersistentVector.EMPTY;while(true){
if(cljs.core.empty_QMARK_.call(null,work))
{return lines;
} else
{{
var G__15914 = cljs.core.rest.call(null,work);
var G__15915 = (index + (1));
var G__15916 = cljs.core.conj.call(null,lines,devtools.format.body_line_template.call(null,index,cljs.core.first.call(null,work)));
work = G__15914;
index = G__15915;
lines = G__15916;
continue;
}
}
break;
}
});
devtools.format.body_lines_templates = (function body_lines_templates(value,starting_index){var seq = cljs.core.seq.call(null,value);var chunk = cljs.core.take.call(null,devtools.format.max_number_body_items,seq);var rest = cljs.core.drop.call(null,devtools.format.max_number_body_items,seq);var lines = devtools.format.prepare_body_lines.call(null,chunk,starting_index);var continue_QMARK_ = !(cljs.core.empty_QMARK_.call(null,cljs.core.take.call(null,(1),rest)));if(!(continue_QMARK_))
{return lines;
} else
{var surrogate_object = devtools.format.surrogate.call(null,rest,devtools.format.body_items_more_label);(surrogate_object["startingIndex"] = (starting_index + devtools.format.max_number_body_items));
return cljs.core.conj.call(null,lines,devtools.format.reference.call(null,surrogate_object));
}
});
devtools.format.build_body = (function build_body(value,starting_index){return devtools.format.standard_body_template.call(null,devtools.format.body_lines_templates.call(null,value,starting_index),(starting_index === (0)));
});
devtools.format.build_surrogate_body = (function build_surrogate_body(value){var temp__4421__auto__ = (value["bodyTemplate"]);if(cljs.core.truth_(temp__4421__auto__))
{var body_template = temp__4421__auto__;return body_template;
} else
{var target = (value["target"]);if(cljs.core.seqable_QMARK_.call(null,target))
{var starting_index = (function (){var or__3607__auto__ = (value["startingIndex"]);if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return (0);
}
})();return devtools.format.build_body.call(null,target,starting_index);
} else
{return devtools.format.template.call(null,devtools.format.ol,devtools.format.standard_ol_style,devtools.format.template.call(null,devtools.format.li,devtools.format.standard_li_style,devtools.format.reference.call(null,target)));
}
}
});
devtools.format.IDevtoolsFormat = (function (){var obj15918 = {};return obj15918;
})();
devtools.format._header = (function _header(value){if((function (){var and__3595__auto__ = value;if(and__3595__auto__)
{return value.devtools$format$IDevtoolsFormat$_header$arity$1;
} else
{return and__3595__auto__;
}
})())
{return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else
{var x__4244__auto__ = (((value == null))?null:value);return (function (){var or__3607__auto__ = (devtools.format._header[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (devtools.format._header["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
})().call(null,value);
}
});
devtools.format._has_body = (function _has_body(value){if((function (){var and__3595__auto__ = value;if(and__3595__auto__)
{return value.devtools$format$IDevtoolsFormat$_has_body$arity$1;
} else
{return and__3595__auto__;
}
})())
{return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else
{var x__4244__auto__ = (((value == null))?null:value);return (function (){var or__3607__auto__ = (devtools.format._has_body[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (devtools.format._has_body["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
})().call(null,value);
}
});
devtools.format._body = (function _body(value){if((function (){var and__3595__auto__ = value;if(and__3595__auto__)
{return value.devtools$format$IDevtoolsFormat$_body$arity$1;
} else
{return and__3595__auto__;
}
})())
{return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else
{var x__4244__auto__ = (((value == null))?null:value);return (function (){var or__3607__auto__ = (devtools.format._body[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (devtools.format._body["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
})().call(null,value);
}
});
devtools.format.want_value_QMARK_ = (function want_value_QMARK_(value){var or__3607__auto__ = devtools.format.cljs_value_QMARK_.call(null,value);if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return devtools.format.surrogate_QMARK_.call(null,value);
}
});
devtools.format.header = (function header(value){if(devtools.format.surrogate_QMARK_.call(null,value))
{return (value["header"]);
} else
{if((function (){var G__15920 = value;if(G__15920)
{var bit__4271__auto__ = null;if(cljs.core.truth_((function (){var or__3607__auto__ = bit__4271__auto__;if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return G__15920.devtools$format$IDevtoolsFormat$;
}
})()))
{return true;
} else
{if((!G__15920.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,G__15920);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,G__15920);
}
})())
{return devtools.format._header.call(null,value);
} else
{return devtools.format.build_header.call(null,value);

}
}
});
devtools.format.has_body = (function has_body(value){if(devtools.format.surrogate_QMARK_.call(null,value))
{return (value["hasBody"]);
} else
{if((function (){var G__15922 = value;if(G__15922)
{var bit__4271__auto__ = null;if(cljs.core.truth_((function (){var or__3607__auto__ = bit__4271__auto__;if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return G__15922.devtools$format$IDevtoolsFormat$;
}
})()))
{return true;
} else
{if((!G__15922.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,G__15922);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,G__15922);
}
})())
{return devtools.format._has_body.call(null,value);
} else
{return false;

}
}
});
devtools.format.body = (function body(value){if(devtools.format.surrogate_QMARK_.call(null,value))
{return devtools.format.build_surrogate_body.call(null,value);
} else
{if((function (){var G__15924 = value;if(G__15924)
{var bit__4271__auto__ = null;if(cljs.core.truth_((function (){var or__3607__auto__ = bit__4271__auto__;if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return G__15924.devtools$format$IDevtoolsFormat$;
}
})()))
{return true;
} else
{if((!G__15924.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,G__15924);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,G__15924);
}
})())
{return devtools.format._body.call(null,value);
} else
{return null;
}
}
});
devtools.format.header_api_call = (function header_api_call(value){if(cljs.core.truth_(devtools.format.want_value_QMARK_.call(null,value)))
{return devtools.format.header.call(null,value);
} else
{return null;
}
});
devtools.format.has_body_api_call = (function has_body_api_call(value){if(cljs.core.truth_(devtools.format.want_value_QMARK_.call(null,value)))
{return devtools.format.has_body.call(null,value);
} else
{return false;
}
});
devtools.format.body_api_call = (function body_api_call(value){if(cljs.core.truth_(devtools.format.want_value_QMARK_.call(null,value)))
{return devtools.format.body.call(null,value);
} else
{return null;
}
});

//# sourceMappingURL=format.js.map