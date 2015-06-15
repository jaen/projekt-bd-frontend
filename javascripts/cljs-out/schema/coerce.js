// Compiled by ClojureScript 0.0-2371
goog.provide('schema.coerce');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('schema.core');
goog.require('schema.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* A Schema for Schemas
*/
schema.coerce.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__7500__7501__auto__){var G__16594 = p1__7500__7501__auto__;if(G__16594)
{var bit__4271__auto__ = null;if(cljs.core.truth_((function (){var or__3607__auto__ = bit__4271__auto__;if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return G__16594.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__16594.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__16594);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__16594);
}
})], null));
/**
* A function from schema to coercion function, or nil if no special coercion is needed.
* The returned function is applied to the corresponding data before validation (or walking/
* coercion of its sub-schemas, if applicable)
*/
schema.coerce.CoercionMatcher = schema.core.make_fn_schema.call(null,schema.core.maybe.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.coerce.Schema,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null));
var ufv___16603 = schema.utils.use_fn_validation;var output_schema16595_16604 = schema.core.Any;var input_schema16596_16605 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one.call(null,schema.coerce.CoercionMatcher,new cljs.core.Symbol(null,"coercion-matcher","coercion-matcher",-1929420453,null))], null);var input_checker16597_16606 = schema.core.checker.call(null,input_schema16596_16605);var output_checker16598_16607 = schema.core.checker.call(null,output_schema16595_16604);/**
* Inputs: [schema coercion-matcher :- CoercionMatcher]
* 
* Produce a function that simultaneously coerces and validates a datum.
*/
schema.coerce.coercer = ((function (ufv___16603,output_schema16595_16604,input_schema16596_16605,input_checker16597_16606,output_checker16598_16607){
return (function coercer(G__16599,G__16600){var validate__7116__auto__ = ufv___16603.get_cell();if(cljs.core.truth_(validate__7116__auto__))
{var args__7117__auto___16608 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16599,G__16600], null);var temp__4423__auto___16609 = input_checker16597_16606.call(null,args__7117__auto___16608);if(cljs.core.truth_(temp__4423__auto___16609))
{var error__7118__auto___16610 = temp__4423__auto___16609;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),cljs.core.pr_str.call(null,error__7118__auto___16610)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16596_16605,new cljs.core.Keyword(null,"value","value",305978217),args__7117__auto___16608,new cljs.core.Keyword(null,"error","error",-978969032),error__7118__auto___16610], null));
} else
{}
} else
{}
var o__7119__auto__ = (function (){var schema__$1 = G__16599;var coercion_matcher = G__16600;while(true){
return schema.core.start_walker.call(null,schema.utils.memoize_id.call(null,((function (validate__7116__auto__,ufv___16603,output_schema16595_16604,input_schema16596_16605,input_checker16597_16606,output_checker16598_16607){
return (function (s){var walker = schema.core.walker.call(null,s);var temp__4421__auto__ = coercion_matcher.call(null,s);if(cljs.core.truth_(temp__4421__auto__))
{var coercer__$1 = temp__4421__auto__;return ((function (coercer__$1,temp__4421__auto__,walker,validate__7116__auto__,ufv___16603,output_schema16595_16604,input_schema16596_16605,input_checker16597_16606,output_checker16598_16607){
return (function (x){try{var v = coercer__$1.call(null,x);if(schema.utils.error_QMARK_.call(null,v))
{return v;
} else
{return walker.call(null,v);
}
}catch (e16602){if((e16602 instanceof Object))
{var t = e16602;return schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,s,x,(new cljs.core.Delay(((function (t,coercer__$1,temp__4421__auto__,walker,validate__7116__auto__,ufv___16603,output_schema16595_16604,input_schema16596_16605,input_checker16597_16606,output_checker16598_16607){
return (function (){return t;
});})(t,coercer__$1,temp__4421__auto__,walker,validate__7116__auto__,ufv___16603,output_schema16595_16604,input_schema16596_16605,input_checker16597_16606,output_checker16598_16607))
,null)),null));
} else
{throw e16602;

}
}});
;})(coercer__$1,temp__4421__auto__,walker,validate__7116__auto__,ufv___16603,output_schema16595_16604,input_schema16596_16605,input_checker16597_16606,output_checker16598_16607))
} else
{return walker;
}
});})(validate__7116__auto__,ufv___16603,output_schema16595_16604,input_schema16596_16605,input_checker16597_16606,output_checker16598_16607))
),schema__$1);
break;
}
})();if(cljs.core.truth_(validate__7116__auto__))
{var temp__4423__auto___16611 = output_checker16598_16607.call(null,o__7119__auto__);if(cljs.core.truth_(temp__4423__auto___16611))
{var error__7118__auto___16612 = temp__4423__auto___16611;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),cljs.core.pr_str.call(null,error__7118__auto___16612)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16595_16604,new cljs.core.Keyword(null,"value","value",305978217),o__7119__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7118__auto___16612], null));
} else
{}
} else
{}
return o__7119__auto__;
});})(ufv___16603,output_schema16595_16604,input_schema16596_16605,input_checker16597_16606,output_checker16598_16607))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,schema.coerce.coercer),schema.core.make_fn_schema.call(null,output_schema16595_16604,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16596_16605], null)));
var ufv___16619 = schema.utils.use_fn_validation;var output_schema16614_16620 = schema.coerce.CoercionMatcher;var input_schema16615_16621 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.coerce.CoercionMatcher], null),new cljs.core.Symbol(null,"matchers","matchers",-39860883,null))], null);var input_checker16616_16622 = schema.core.checker.call(null,input_schema16615_16621);var output_checker16617_16623 = schema.core.checker.call(null,output_schema16614_16620);/**
* Inputs: [matchers :- [CoercionMatcher]]
* Returns: CoercionMatcher
* 
* A matcher that takes the first match from matchers.
*/
schema.coerce.first_matcher = ((function (ufv___16619,output_schema16614_16620,input_schema16615_16621,input_checker16616_16622,output_checker16617_16623){
return (function first_matcher(G__16618){var validate__7116__auto__ = ufv___16619.get_cell();if(cljs.core.truth_(validate__7116__auto__))
{var args__7117__auto___16624 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16618], null);var temp__4423__auto___16625 = input_checker16616_16622.call(null,args__7117__auto___16624);if(cljs.core.truth_(temp__4423__auto___16625))
{var error__7118__auto___16626 = temp__4423__auto___16625;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),cljs.core.pr_str.call(null,error__7118__auto___16626)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16615_16621,new cljs.core.Keyword(null,"value","value",305978217),args__7117__auto___16624,new cljs.core.Keyword(null,"error","error",-978969032),error__7118__auto___16626], null));
} else
{}
} else
{}
var o__7119__auto__ = (function (){var matchers = G__16618;while(true){
return ((function (validate__7116__auto__,ufv___16619,output_schema16614_16620,input_schema16615_16621,input_checker16616_16622,output_checker16617_16623){
return (function (schema__$1){return cljs.core.first.call(null,cljs.core.keep.call(null,((function (validate__7116__auto__,ufv___16619,output_schema16614_16620,input_schema16615_16621,input_checker16616_16622,output_checker16617_16623){
return (function (p1__16613_SHARP_){return p1__16613_SHARP_.call(null,schema__$1);
});})(validate__7116__auto__,ufv___16619,output_schema16614_16620,input_schema16615_16621,input_checker16616_16622,output_checker16617_16623))
,matchers));
});
;})(validate__7116__auto__,ufv___16619,output_schema16614_16620,input_schema16615_16621,input_checker16616_16622,output_checker16617_16623))
break;
}
})();if(cljs.core.truth_(validate__7116__auto__))
{var temp__4423__auto___16627 = output_checker16617_16623.call(null,o__7119__auto__);if(cljs.core.truth_(temp__4423__auto___16627))
{var error__7118__auto___16628 = temp__4423__auto___16627;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),cljs.core.pr_str.call(null,error__7118__auto___16628)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16614_16620,new cljs.core.Keyword(null,"value","value",305978217),o__7119__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7118__auto___16628], null));
} else
{}
} else
{}
return o__7119__auto__;
});})(ufv___16619,output_schema16614_16620,input_schema16615_16621,input_checker16616_16622,output_checker16617_16623))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,schema.coerce.first_matcher),schema.core.make_fn_schema.call(null,output_schema16614_16620,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16615_16621], null)));
schema.coerce.string__GT_keyword = (function string__GT_keyword(s){if(typeof s === 'string')
{return cljs.core.keyword.call(null,s);
} else
{return s;
}
});
/**
* returns true for strings that are equal, ignoring case, to the string 'true'
* (following java.lang.Boolean/parseBoolean semantics)
*/
schema.coerce.string__GT_boolean = (function string__GT_boolean(s){if(typeof s === 'string')
{return cljs.core._EQ_.call(null,"true",clojure.string.lower_case.call(null,s));
} else
{return s;
}
});
schema.coerce.keyword_enum_matcher = (function keyword_enum_matcher(schema__$1){if(((schema__$1 instanceof schema.core.EnumSchema)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,schema__$1.vs)))
{return schema.coerce.string__GT_keyword;
} else
{return null;
}
});
schema.coerce.set_matcher = (function set_matcher(schema__$1){if((schema__$1 instanceof cljs.core.PersistentHashSet))
{return (function (x){if(cljs.core.sequential_QMARK_.call(null,x))
{return cljs.core.set.call(null,x);
} else
{return x;
}
});
} else
{return null;
}
});
/**
* Take a single-arg function f, and return a single-arg function that acts as identity
* if f throws an exception, and like f otherwise.  Useful because coercers are not explicitly
* guarded for exceptions, and failing to coerce will generally produce a more useful error
* in this case.
*/
schema.coerce.safe = (function safe(f){return (function (x){try{return f.call(null,x);
}catch (e16630){if((e16630 instanceof Object))
{var e = e16630;return x;
} else
{throw e16630;

}
}});
});
/**
* Returns instance of UUID if input is a string.
* Note: in CLJS, this does not guarantee a specific UUID string representation,
* similar to #uuid reader
*/
schema.coerce.string__GT_uuid = (function string__GT_uuid(p1__16631_SHARP_){if(typeof p1__16631_SHARP_ === 'string')
{return (new cljs.core.UUID(p1__16631_SHARP_));
} else
{return p1__16631_SHARP_;
}
});
schema.coerce._PLUS_json_coercions_PLUS_ = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.coerce.string__GT_keyword,schema.core.Bool,schema.coerce.string__GT_boolean,schema.core.Uuid,schema.coerce.string__GT_uuid], true, false));
/**
* A matcher that coerces keywords and keyword enums from strings, and longs and doubles
* from numbers on the JVM (without losing precision)
*/
schema.coerce.json_coercion_matcher = (function json_coercion_matcher(schema__$1){var or__3607__auto__ = schema.coerce._PLUS_json_coercions_PLUS_.call(null,schema__$1);if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = schema.coerce.keyword_enum_matcher.call(null,schema__$1);if(cljs.core.truth_(or__3607__auto____$1))
{return or__3607__auto____$1;
} else
{return schema.coerce.set_matcher.call(null,schema__$1);
}
}
});
/**
* Reads one object from a string. Returns nil when string is nil or empty
*/
schema.coerce.edn_read_string = cljs.reader.read_string;
schema.coerce._PLUS_string_coercions_PLUS_ = cljs.core.merge.call(null,schema.coerce._PLUS_json_coercions_PLUS_,new cljs.core.PersistentArrayMap.fromArray([schema.core.Num,schema.coerce.safe.call(null,schema.coerce.edn_read_string),schema.core.Int,schema.coerce.safe.call(null,schema.coerce.edn_read_string)], true, false));
/**
* A matcher that coerces keywords, keyword enums, s/Num and s/Int,
* and long and doubles (JVM only) from strings.
*/
schema.coerce.string_coercion_matcher = (function string_coercion_matcher(schema__$1){var or__3607__auto__ = schema.coerce._PLUS_string_coercions_PLUS_.call(null,schema__$1);if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return schema.coerce.keyword_enum_matcher.call(null,schema__$1);
}
});

//# sourceMappingURL=coerce.js.map