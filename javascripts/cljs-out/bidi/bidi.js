// Compiled by ClojureScript 0.0-2371
goog.provide('bidi.bidi');
goog.require('cljs.core');
goog.require('cemerick.url');
goog.require('clojure.walk');
goog.require('clojure.walk');
goog.require('clojure.walk');
goog.require('cemerick.url');
goog.require('cemerick.url');
/**
* Function for creating a UUID of the appropriate type for the platform.
* Note that this function should _only_ be used in route patterns as, at least
* in the case of ClojureScript, it does not validate that the input string is
* actually a valid UUID (this is handled by the route matching logic).
*/
bidi.bidi.uuid = (function uuid(s){return (new cljs.core.UUID(s));
});
bidi.bidi.ParameterEncoding = (function (){var obj16905 = {};return obj16905;
})();
bidi.bidi.encode_parameter = (function encode_parameter(_){if((function (){var and__3595__auto__ = _;if(and__3595__auto__)
{return _.bidi$bidi$ParameterEncoding$encode_parameter$arity$1;
} else
{return and__3595__auto__;
}
})())
{return _.bidi$bidi$ParameterEncoding$encode_parameter$arity$1(_);
} else
{var x__4244__auto__ = (((_ == null))?null:_);return (function (){var or__3607__auto__ = (bidi.bidi.encode_parameter[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (bidi.bidi.encode_parameter["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ParameterEncoding.encode-parameter",_);
}
}
})().call(null,_);
}
});
(bidi.bidi.ParameterEncoding["string"] = true);
(bidi.bidi.encode_parameter["string"] = (function (s){return s;
}));
(bidi.bidi.ParameterEncoding["number"] = true);
(bidi.bidi.encode_parameter["number"] = (function (s){return s;
}));
cljs.core.UUID.prototype.bidi$bidi$ParameterEncoding$ = true;
cljs.core.UUID.prototype.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 = (function (s){var s__$1 = this;return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1));
});
cljs.core.Keyword.prototype.bidi$bidi$ParameterEncoding$ = true;
cljs.core.Keyword.prototype.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 = (function (k){var k__$1 = this;return cemerick.url.url_encode.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,k__$1))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.namespace.call(null,k__$1))?"/":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k__$1))));
});
bidi.bidi.PatternSegment = (function (){var obj16907 = {};return obj16907;
})();
bidi.bidi.segment_regex_group = (function segment_regex_group(_){if((function (){var and__3595__auto__ = _;if(and__3595__auto__)
{return _.bidi$bidi$PatternSegment$segment_regex_group$arity$1;
} else
{return and__3595__auto__;
}
})())
{return _.bidi$bidi$PatternSegment$segment_regex_group$arity$1(_);
} else
{var x__4244__auto__ = (((_ == null))?null:_);return (function (){var or__3607__auto__ = (bidi.bidi.segment_regex_group[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (bidi.bidi.segment_regex_group["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PatternSegment.segment-regex-group",_);
}
}
})().call(null,_);
}
});
bidi.bidi.param_key = (function param_key(_){if((function (){var and__3595__auto__ = _;if(and__3595__auto__)
{return _.bidi$bidi$PatternSegment$param_key$arity$1;
} else
{return and__3595__auto__;
}
})())
{return _.bidi$bidi$PatternSegment$param_key$arity$1(_);
} else
{var x__4244__auto__ = (((_ == null))?null:_);return (function (){var or__3607__auto__ = (bidi.bidi.param_key[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (bidi.bidi.param_key["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PatternSegment.param-key",_);
}
}
})().call(null,_);
}
});
bidi.bidi.transform_param = (function transform_param(_){if((function (){var and__3595__auto__ = _;if(and__3595__auto__)
{return _.bidi$bidi$PatternSegment$transform_param$arity$1;
} else
{return and__3595__auto__;
}
})())
{return _.bidi$bidi$PatternSegment$transform_param$arity$1(_);
} else
{var x__4244__auto__ = (((_ == null))?null:_);return (function (){var or__3607__auto__ = (bidi.bidi.transform_param[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (bidi.bidi.transform_param["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PatternSegment.transform-param",_);
}
}
})().call(null,_);
}
});
bidi.bidi.unmatch_segment = (function unmatch_segment(_,params){if((function (){var and__3595__auto__ = _;if(and__3595__auto__)
{return _.bidi$bidi$PatternSegment$unmatch_segment$arity$2;
} else
{return and__3595__auto__;
}
})())
{return _.bidi$bidi$PatternSegment$unmatch_segment$arity$2(_,params);
} else
{var x__4244__auto__ = (((_ == null))?null:_);return (function (){var or__3607__auto__ = (bidi.bidi.unmatch_segment[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (bidi.bidi.unmatch_segment["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PatternSegment.unmatch-segment",_);
}
}
})().call(null,_,params);
}
});
bidi.bidi.matches_QMARK_ = (function matches_QMARK_(_,s){if((function (){var and__3595__auto__ = _;if(and__3595__auto__)
{return _.bidi$bidi$PatternSegment$matches_QMARK_$arity$2;
} else
{return and__3595__auto__;
}
})())
{return _.bidi$bidi$PatternSegment$matches_QMARK_$arity$2(_,s);
} else
{var x__4244__auto__ = (((_ == null))?null:_);return (function (){var or__3607__auto__ = (bidi.bidi.matches_QMARK_[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (bidi.bidi.matches_QMARK_["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PatternSegment.matches?",_);
}
}
})().call(null,_,s);
}
});
(bidi.bidi.PatternSegment["string"] = true);
(bidi.bidi.segment_regex_group["string"] = (function (this$){return this$;
}));
(bidi.bidi.param_key["string"] = (function (_){return null;
}));
(bidi.bidi.transform_param["string"] = (function (_){return cljs.core.identity;
}));
(bidi.bidi.unmatch_segment["string"] = (function (this$,_){return this$;
}));
RegExp.prototype.bidi$bidi$PatternSegment$ = true;
RegExp.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (this$){var this$__$1 = this;return (this$__$1["source"]);
});
RegExp.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (_){var ___$1 = this;return null;
});
RegExp.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (_){var ___$1 = this;return cljs.core.identity;
});
RegExp.prototype.bidi$bidi$PatternSegment$matches_QMARK_$arity$2 = (function (this$,s){var this$__$1 = this;return cljs.core.re_matches.call(null,this$__$1,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
});
cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$ = true;
cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (this$){var this$__$1 = this;return bidi.bidi.segment_regex_group.call(null,cljs.core.first.call(null,this$__$1));
});
cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (this$){var this$__$1 = this;var k = cljs.core.second.call(null,this$__$1);if((k instanceof cljs.core.Keyword))
{return k;
} else
{throw cljs.core.ex_info.call(null,("If a PatternSegment is represented by a vector, the second\n                               element must be the keyword associated with the pattern: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)),cljs.core.PersistentArrayMap.EMPTY);
}
});
cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (this$){var this$__$1 = this;return bidi.bidi.transform_param.call(null,cljs.core.first.call(null,this$__$1));
});
cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$unmatch_segment$arity$2 = (function (this$,params){var this$__$1 = this;var k = cljs.core.second.call(null,this$__$1);if(!((k instanceof cljs.core.Keyword)))
{throw cljs.core.ex_info.call(null,("If a PatternSegment is represented by a vector, the second element\n                               must be the key associated with the pattern: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)),cljs.core.PersistentArrayMap.EMPTY);
} else
{}
var temp__4421__auto__ = cljs.core.get.call(null,params,k);if(cljs.core.truth_(temp__4421__auto__))
{var v = temp__4421__auto__;if(cljs.core.truth_(bidi.bidi.matches_QMARK_.call(null,cljs.core.first.call(null,this$__$1),v)))
{return bidi.bidi.encode_parameter.call(null,v);
} else
{throw cljs.core.ex_info.call(null,("Parameter value of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" (key "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)+") is not compatible with the route pattern "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)),cljs.core.PersistentArrayMap.EMPTY);
}
} else
{throw cljs.core.ex_info.call(null,("No parameter found in params for key "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)),cljs.core.PersistentArrayMap.EMPTY);
}
});
cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$ = true;
cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (_){var ___$1 = this;return "[A-Za-z0-9\\-\\_\\.]+";
});
cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (_){var ___$1 = this;return cljs.core.identity;
});
cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$unmatch_segment$arity$2 = (function (this$,params){var this$__$1 = this;var temp__4421__auto__ = this$__$1.call(null,params);if(cljs.core.truth_(temp__4421__auto__))
{var v = temp__4421__auto__;return bidi.bidi.encode_parameter.call(null,v);
} else
{throw cljs.core.ex_info.call(null,("Cannot form URI without a value given for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)+" parameter"),cljs.core.PersistentArrayMap.EMPTY);
}
});
(bidi.bidi.PatternSegment["function"] = true);
(bidi.bidi.segment_regex_group["function"] = (function (this$){var pred__16909 = cljs.core._EQ_;var expr__16910 = this$;if(cljs.core.truth_(pred__16909.call(null,cljs.core.keyword,expr__16910)))
{return "[A-Za-z]+[A-Za-z0-9\\*\\+\\!\\-\\_\\?\\.]*(?:%2F[A-Za-z]+[A-Za-z0-9\\*\\+\\!\\-\\_\\?\\.]*)?";
} else
{if(cljs.core.truth_(pred__16909.call(null,cljs.core.long$,expr__16910)))
{return "-?\\d{1,19}";
} else
{if(cljs.core.truth_(pred__16909.call(null,bidi.bidi.uuid,expr__16910)))
{return "[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}";
} else
{if(cljs.core.truth_(pred__16909.call(null,new cljs.core.Keyword(null,"otherwise","otherwise",-1127537137),expr__16910)))
{throw cljs.core.ex_info.call(null,("Unidentified function qualifier to pattern segment: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)),cljs.core.PersistentArrayMap.EMPTY);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16910))));
}
}
}
}
}));
(bidi.bidi.transform_param["function"] = (function (this$){var pred__16912 = cljs.core._EQ_;var expr__16913 = this$;if(cljs.core.truth_(pred__16912.call(null,cljs.core.keyword,expr__16913)))
{return cljs.core.comp.call(null,cljs.core.keyword,cemerick.url.url_decode);
} else
{if(cljs.core.truth_(pred__16912.call(null,cljs.core.long$,expr__16913)))
{return ((function (pred__16912,expr__16913){
return (function (p1__16908_SHARP_){return Number(p1__16908_SHARP_);
});
;})(pred__16912,expr__16913))
} else
{if(cljs.core.truth_(pred__16912.call(null,bidi.bidi.uuid,expr__16913)))
{return bidi.bidi.uuid;
} else
{throw cljs.core.ex_info.call(null,("Unrecognized function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)),cljs.core.PersistentArrayMap.EMPTY);
}
}
}
}));
(bidi.bidi.matches_QMARK_["function"] = (function (this$,s){var pred__16915 = cljs.core._EQ_;var expr__16916 = this$;if(cljs.core.truth_(pred__16915.call(null,cljs.core.keyword,expr__16916)))
{return (s instanceof cljs.core.Keyword);
} else
{if(cljs.core.truth_(pred__16915.call(null,cljs.core.long$,expr__16916)))
{return cljs.core.not.call(null,isNaN(s));
} else
{if(cljs.core.truth_(pred__16915.call(null,bidi.bidi.uuid,expr__16916)))
{return (s instanceof cljs.core.UUID);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16916))));
}
}
}
}));
bidi.bidi.Pattern = (function (){var obj16919 = {};return obj16919;
})();
bidi.bidi.match_pattern = (function match_pattern(_,path){if((function (){var and__3595__auto__ = _;if(and__3595__auto__)
{return _.bidi$bidi$Pattern$match_pattern$arity$2;
} else
{return and__3595__auto__;
}
})())
{return _.bidi$bidi$Pattern$match_pattern$arity$2(_,path);
} else
{var x__4244__auto__ = (((_ == null))?null:_);return (function (){var or__3607__auto__ = (bidi.bidi.match_pattern[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (bidi.bidi.match_pattern["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pattern.match-pattern",_);
}
}
})().call(null,_,path);
}
});
bidi.bidi.unmatch_pattern = (function unmatch_pattern(_,m){if((function (){var and__3595__auto__ = _;if(and__3595__auto__)
{return _.bidi$bidi$Pattern$unmatch_pattern$arity$2;
} else
{return and__3595__auto__;
}
})())
{return _.bidi$bidi$Pattern$unmatch_pattern$arity$2(_,m);
} else
{var x__4244__auto__ = (((_ == null))?null:_);return (function (){var or__3607__auto__ = (bidi.bidi.unmatch_pattern[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (bidi.bidi.unmatch_pattern["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pattern.unmatch-pattern",_);
}
}
})().call(null,_,m);
}
});
bidi.bidi.Matched = (function (){var obj16921 = {};return obj16921;
})();
bidi.bidi.resolve_handler = (function resolve_handler(_,m){if((function (){var and__3595__auto__ = _;if(and__3595__auto__)
{return _.bidi$bidi$Matched$resolve_handler$arity$2;
} else
{return and__3595__auto__;
}
})())
{return _.bidi$bidi$Matched$resolve_handler$arity$2(_,m);
} else
{var x__4244__auto__ = (((_ == null))?null:_);return (function (){var or__3607__auto__ = (bidi.bidi.resolve_handler[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (bidi.bidi.resolve_handler["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Matched.resolve-handler",_);
}
}
})().call(null,_,m);
}
});
bidi.bidi.unresolve_handler = (function unresolve_handler(_,m){if((function (){var and__3595__auto__ = _;if(and__3595__auto__)
{return _.bidi$bidi$Matched$unresolve_handler$arity$2;
} else
{return and__3595__auto__;
}
})())
{return _.bidi$bidi$Matched$unresolve_handler$arity$2(_,m);
} else
{var x__4244__auto__ = (((_ == null))?null:_);return (function (){var or__3607__auto__ = (bidi.bidi.unresolve_handler[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (bidi.bidi.unresolve_handler["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Matched.unresolve-handler",_);
}
}
})().call(null,_,m);
}
});
/**
* A pair contains a pattern to match (either fully or partially) and an
* expression yielding a handler. The second parameter is a map
* containing state, including the remaining path.
*/
bidi.bidi.match_pair = (function match_pair(p__16922,env){var vec__16924 = p__16922;var pattern = cljs.core.nth.call(null,vec__16924,(0),null);var matched = cljs.core.nth.call(null,vec__16924,(1),null);var temp__4423__auto__ = bidi.bidi.match_pattern.call(null,pattern,env);if(cljs.core.truth_(temp__4423__auto__))
{var match_result = temp__4423__auto__;return bidi.bidi.resolve_handler.call(null,matched,cljs.core.merge.call(null,env,match_result));
} else
{return null;
}
});
/**
* Match the beginning of the :remainder value in m. If matched, update
* the :remainder value in m with the path that remains after matching.
*/
bidi.bidi.match_beginning = (function match_beginning(regex_pattern,env){var temp__4423__auto__ = cljs.core.last.call(null,cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(regex_pattern)+"(.*)")),new cljs.core.Keyword(null,"remainder","remainder",1046186872).cljs$core$IFn$_invoke$arity$1(env)));if(cljs.core.truth_(temp__4423__auto__))
{var path = temp__4423__auto__;return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"remainder","remainder",1046186872),path);
} else
{return null;
}
});
bidi.bidi.succeed = (function succeed(handler,m){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"remainder","remainder",1046186872).cljs$core$IFn$_invoke$arity$1(m),""))
{return cljs.core.merge.call(null,cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"remainder","remainder",1046186872)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
} else
{return null;
}
});
(bidi.bidi.Pattern["string"] = true);
(bidi.bidi.match_pattern["string"] = (function (this$,env){return bidi.bidi.match_beginning.call(null,("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(bidi.bidi.segment_regex_group.call(null,this$))+")"),env);
}));
(bidi.bidi.unmatch_pattern["string"] = (function (this$,_){return this$;
}));
RegExp.prototype.bidi$bidi$Pattern$ = true;
RegExp.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){var this$__$1 = this;return bidi.bidi.match_beginning.call(null,("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(bidi.bidi.segment_regex_group.call(null,this$__$1))+")"),env);
});
(bidi.bidi.Pattern["boolean"] = true);
(bidi.bidi.match_pattern["boolean"] = (function (this$,env){if(cljs.core.truth_(this$))
{return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"remainder","remainder",1046186872),"");
} else
{return null;
}
}));
cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$ = true;
cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){var this$__$1 = this;var temp__4423__auto__ = (function (){var _PERCENT_ = this$__$1;var _PERCENT___$1 = cljs.core.map.call(null,bidi.bidi.segment_regex_group,_PERCENT_);var _PERCENT___$2 = cljs.core.map.call(null,((function (_PERCENT_,_PERCENT___$1,this$__$1){
return (function (x){return ("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+")");
});})(_PERCENT_,_PERCENT___$1,this$__$1))
,_PERCENT___$1);var _PERCENT___$3 = cljs.core.reduce.call(null,cljs.core.str,_PERCENT___$2);var _PERCENT___$4 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(_PERCENT___$3)+"(.*)");var _PERCENT___$5 = cljs.core.re_pattern.call(null,_PERCENT___$4);var _PERCENT___$6 = cljs.core.re_matches.call(null,_PERCENT___$5,new cljs.core.Keyword(null,"remainder","remainder",1046186872).cljs$core$IFn$_invoke$arity$1(env));var _PERCENT___$7 = cljs.core.next.call(null,_PERCENT___$6);return _PERCENT___$7;
})();if(temp__4423__auto__)
{var groups = temp__4423__auto__;var params = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,bidi.bidi.param_key,this$__$1),cljs.core.map.call(null,cljs.core.apply,cljs.core.map.call(null,bidi.bidi.transform_param,this$__$1),cljs.core.map.call(null,cljs.core.list,cljs.core.butlast.call(null,groups))))));return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remainder","remainder",1046186872)], null),cljs.core.last.call(null,groups)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",2111411055)], null),cljs.core.merge,params);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){var this$__$1 = this;return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (this$__$1){
return (function (p1__16925_SHARP_){return bidi.bidi.unmatch_segment.call(null,p1__16925_SHARP_,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(m));
});})(this$__$1))
,this$__$1));
});
cljs.core.Keyword.prototype.bidi$bidi$Pattern$ = true;
cljs.core.Keyword.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){var this$__$1 = this;if(cljs.core._EQ_.call(null,this$__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(env)))
{return env;
} else
{return null;
}
});
cljs.core.Keyword.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){var ___$2 = this;return "";
});
cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$ = true;
cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){var this$__$1 = this;if(cljs.core.every_QMARK_.call(null,((function (this$__$1){
return (function (p__16926){var vec__16927 = p__16926;var k = cljs.core.nth.call(null,vec__16927,(0),null);var v = cljs.core.nth.call(null,vec__16927,(1),null);if((cljs.core.fn_QMARK_.call(null,v)) || (cljs.core.set_QMARK_.call(null,v)))
{return v.call(null,cljs.core.get.call(null,env,k));
} else
{return cljs.core._EQ_.call(null,v,cljs.core.get.call(null,env,k));

}
});})(this$__$1))
,cljs.core.seq.call(null,this$__$1)))
{return env;
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){var ___$2 = this;return "";
});
bidi.bidi.unmatch_pair = (function unmatch_pair(v,m){var temp__4423__auto__ = bidi.bidi.unresolve_handler.call(null,cljs.core.second.call(null,v),m);if(cljs.core.truth_(temp__4423__auto__))
{var r = temp__4423__auto__;return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(bidi.bidi.unmatch_pattern.call(null,cljs.core.first.call(null,v),m))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r));
} else
{return null;
}
});
(bidi.bidi.Matched["string"] = true);
(bidi.bidi.unresolve_handler["string"] = (function (_,___$1){return null;
}));
cljs.core.PersistentVector.prototype.bidi$bidi$Matched$ = true;
cljs.core.PersistentVector.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){var this$__$1 = this;return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__16928_SHARP_){return bidi.bidi.match_pair.call(null,p1__16928_SHARP_,m);
});})(this$__$1))
,this$__$1);
});
cljs.core.PersistentVector.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){var this$__$1 = this;return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__16929_SHARP_){return bidi.bidi.unmatch_pair.call(null,p1__16929_SHARP_,m);
});})(this$__$1))
,this$__$1);
});
cljs.core.List.prototype.bidi$bidi$Matched$ = true;
cljs.core.List.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){var this$__$1 = this;return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__16930_SHARP_){return bidi.bidi.match_pair.call(null,p1__16930_SHARP_,m);
});})(this$__$1))
,this$__$1);
});
cljs.core.List.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){var this$__$1 = this;return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__16931_SHARP_){return bidi.bidi.unmatch_pair.call(null,p1__16931_SHARP_,m);
});})(this$__$1))
,this$__$1);
});
cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$ = true;
cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){var this$__$1 = this;return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__16932_SHARP_){return bidi.bidi.match_pair.call(null,p1__16932_SHARP_,m);
});})(this$__$1))
,this$__$1);
});
cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){var this$__$1 = this;return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__16933_SHARP_){return bidi.bidi.unmatch_pair.call(null,p1__16933_SHARP_,m);
});})(this$__$1))
,this$__$1);
});
cljs.core.LazySeq.prototype.bidi$bidi$Matched$ = true;
cljs.core.LazySeq.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){var this$__$1 = this;return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__16934_SHARP_){return bidi.bidi.match_pair.call(null,p1__16934_SHARP_,m);
});})(this$__$1))
,this$__$1);
});
cljs.core.LazySeq.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){var this$__$1 = this;return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__16935_SHARP_){return bidi.bidi.unmatch_pair.call(null,p1__16935_SHARP_,m);
});})(this$__$1))
,this$__$1);
});
cljs.core.Symbol.prototype.bidi$bidi$Matched$ = true;
cljs.core.Symbol.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){var this$__$1 = this;return bidi.bidi.succeed.call(null,this$__$1,m);
});
cljs.core.Symbol.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){var this$__$1 = this;if(cljs.core._EQ_.call(null,this$__$1,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m)))
{return "";
} else
{return null;
}
});
cljs.core.Keyword.prototype.bidi$bidi$Matched$ = true;
cljs.core.Keyword.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){var this$__$1 = this;return bidi.bidi.succeed.call(null,this$__$1,m);
});
cljs.core.Keyword.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){var this$__$1 = this;if(cljs.core._EQ_.call(null,this$__$1,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m)))
{return "";
} else
{return null;
}
});
(bidi.bidi.Matched["function"] = true);
(bidi.bidi.resolve_handler["function"] = (function (this$,m){return bidi.bidi.succeed.call(null,this$,m);
}));
(bidi.bidi.unresolve_handler["function"] = (function (this$,m){if(cljs.core._EQ_.call(null,this$,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m)))
{return "";
} else
{return null;
}
}));
/**
* Given a route definition data structure and a path, return the
* handler, if any, that matches the path.
* @param {...*} var_args
*/
bidi.bidi.match_route = (function() { 
var match_route__delegate = function (route,path,p__16936){var map__16938 = p__16936;var map__16938__$1 = ((cljs.core.seq_QMARK_.call(null,map__16938))?cljs.core.apply.call(null,cljs.core.hash_map,map__16938):map__16938);var options = map__16938__$1;return cljs.core.dissoc.call(null,bidi.bidi.match_pair.call(null,route,cljs.core.merge.call(null,options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remainder","remainder",1046186872),path,new cljs.core.Keyword(null,"route","route",329891309),route], null))),new cljs.core.Keyword(null,"route","route",329891309));
};
var match_route = function (route,path,var_args){
var p__16936 = null;if (arguments.length > 2) {
  p__16936 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return match_route__delegate.call(this,route,path,p__16936);};
match_route.cljs$lang$maxFixedArity = 2;
match_route.cljs$lang$applyTo = (function (arglist__16939){
var route = cljs.core.first(arglist__16939);
arglist__16939 = cljs.core.next(arglist__16939);
var path = cljs.core.first(arglist__16939);
var p__16936 = cljs.core.rest(arglist__16939);
return match_route__delegate(route,path,p__16936);
});
match_route.cljs$core$IFn$_invoke$arity$variadic = match_route__delegate;
return match_route;
})()
;
/**
* Given a route definition data structure, a handler and an option map, return a
* path that would route to the handler. The map must contain the values to any
* parameters required to create the path, and extra values are silently ignored.
* @param {...*} var_args
*/
bidi.bidi.path_for = (function() { 
var path_for__delegate = function (route,handler,p__16940){var map__16942 = p__16940;var map__16942__$1 = ((cljs.core.seq_QMARK_.call(null,map__16942))?cljs.core.apply.call(null,cljs.core.hash_map,map__16942):map__16942);var params = map__16942__$1;if((handler == null))
{throw cljs.core.ex_info.call(null,"Cannot form URI from a nil handler",cljs.core.PersistentArrayMap.EMPTY);
} else
{}
return bidi.bidi.unmatch_pair.call(null,route,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"params","params",710516235),params], null));
};
var path_for = function (route,handler,var_args){
var p__16940 = null;if (arguments.length > 2) {
  p__16940 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return path_for__delegate.call(this,route,handler,p__16940);};
path_for.cljs$lang$maxFixedArity = 2;
path_for.cljs$lang$applyTo = (function (arglist__16943){
var route = cljs.core.first(arglist__16943);
arglist__16943 = cljs.core.next(arglist__16943);
var handler = cljs.core.first(arglist__16943);
var p__16940 = cljs.core.rest(arglist__16943);
return path_for__delegate(route,handler,p__16940);
});
path_for.cljs$core$IFn$_invoke$arity$variadic = path_for__delegate;
return path_for;
})()
;

/**
* @constructor
* @param {*} alts
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
bidi.bidi.Alternates = (function (alts,__meta,__extmap){
this.alts = alts;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
bidi.bidi.Alternates.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){var self__ = this;
var this__4203__auto____$1 = this;return cljs.core._lookup.call(null,this__4203__auto____$1,k__4204__auto__,null);
});
bidi.bidi.Alternates.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k16946,else__4206__auto__){var self__ = this;
var this__4205__auto____$1 = this;var G__16948 = (((k16946 instanceof cljs.core.Keyword))?k16946.fqn:null);switch (G__16948) {
case "alts":
return self__.alts;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16946,else__4206__auto__);

}
});
bidi.bidi.Alternates.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){var self__ = this;
var this__4217__auto____$1 = this;var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#bidi.bidi.Alternates{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"alts","alts",647552416),self__.alts],null))], null),self__.__extmap));
});
bidi.bidi.Alternates.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){var self__ = this;
var this__4201__auto____$1 = this;return self__.__meta;
});
bidi.bidi.Alternates.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4197__auto__){var self__ = this;
var this__4197__auto____$1 = this;return (new bidi.bidi.Alternates(self__.alts,self__.__meta,self__.__extmap,self__.__hash));
});
bidi.bidi.Alternates.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){var self__ = this;
var this__4207__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
bidi.bidi.Alternates.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4198__auto__){var self__ = this;
var this__4198__auto____$1 = this;var h__4018__auto__ = self__.__hash;if(!((h__4018__auto__ == null)))
{return h__4018__auto__;
} else
{var h__4018__auto____$1 = cljs.core.hash_imap.call(null,this__4198__auto____$1);self__.__hash = h__4018__auto____$1;
return h__4018__auto____$1;
}
});
bidi.bidi.Alternates.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4199__auto__,other__4200__auto__){var self__ = this;
var this__4199__auto____$1 = this;if(cljs.core.truth_((function (){var and__3595__auto__ = other__4200__auto__;if(cljs.core.truth_(and__3595__auto__))
{return ((this__4199__auto____$1.constructor === other__4200__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4199__auto____$1,other__4200__auto__));
} else
{return and__3595__auto__;
}
})()))
{return true;
} else
{return false;
}
});
bidi.bidi.Alternates.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){var self__ = this;
var this__4212__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alts","alts",647552416),null], null), null),k__4213__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else
{return (new bidi.bidi.Alternates(self__.alts,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});
bidi.bidi.Alternates.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__16945){var self__ = this;
var this__4210__auto____$1 = this;var pred__16949 = cljs.core.keyword_identical_QMARK_;var expr__16950 = k__4211__auto__;if(cljs.core.truth_(pred__16949.call(null,new cljs.core.Keyword(null,"alts","alts",647552416),expr__16950)))
{return (new bidi.bidi.Alternates(G__16945,self__.__meta,self__.__extmap,null));
} else
{return (new bidi.bidi.Alternates(self__.alts,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__16945),null));
}
});
bidi.bidi.Alternates.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){var self__ = this;
var this__4215__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"alts","alts",647552416),self__.alts],null))], null),self__.__extmap));
});
bidi.bidi.Alternates.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__16945){var self__ = this;
var this__4202__auto____$1 = this;return (new bidi.bidi.Alternates(self__.alts,G__16945,self__.__extmap,self__.__hash));
});
bidi.bidi.Alternates.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){var self__ = this;
var this__4208__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__))
{return cljs.core._assoc.call(null,this__4208__auto____$1,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});
bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$ = true;
bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,m){var self__ = this;
var this$__$1 = this;return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__16944_SHARP_){return bidi.bidi.match_pattern.call(null,p1__16944_SHARP_,m);
});})(this$__$1))
,cljs.core.sort_by.call(null,cljs.core.count,cljs.core._GT_,self__.alts));
});
bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){var self__ = this;
var this$__$1 = this;return bidi.bidi.unmatch_pattern.call(null,cljs.core.first.call(null,self__.alts),m);
});
bidi.bidi.Alternates.cljs$lang$type = true;
bidi.bidi.Alternates.cljs$lang$ctorPrSeq = (function (this__4237__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"bidi.bidi/Alternates");
});
bidi.bidi.Alternates.cljs$lang$ctorPrWriter = (function (this__4237__auto__,writer__4238__auto__){return cljs.core._write.call(null,writer__4238__auto__,"bidi.bidi/Alternates");
});
bidi.bidi.__GT_Alternates = (function __GT_Alternates(alts){return (new bidi.bidi.Alternates(alts));
});
bidi.bidi.map__GT_Alternates = (function map__GT_Alternates(G__16947){return (new bidi.bidi.Alternates(new cljs.core.Keyword(null,"alts","alts",647552416).cljs$core$IFn$_invoke$arity$1(G__16947),null,cljs.core.dissoc.call(null,G__16947,new cljs.core.Keyword(null,"alts","alts",647552416))));
});
/**
* @param {...*} var_args
*/
bidi.bidi.alts = (function() { 
var alts__delegate = function (alts__$1){return bidi.bidi.__GT_Alternates.call(null,alts__$1);
};
var alts = function (var_args){
var alts__$1 = null;if (arguments.length > 0) {
  alts__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return alts__delegate.call(this,alts__$1);};
alts.cljs$lang$maxFixedArity = 0;
alts.cljs$lang$applyTo = (function (arglist__16953){
var alts__$1 = cljs.core.seq(arglist__16953);
return alts__delegate(alts__$1);
});
alts.cljs$core$IFn$_invoke$arity$variadic = alts__delegate;
return alts;
})()
;

/**
* @constructor
* @param {*} tag
* @param {*} matched
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
bidi.bidi.TaggedMatch = (function (tag,matched,__meta,__extmap){
this.tag = tag;
this.matched = matched;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
bidi.bidi.TaggedMatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){var self__ = this;
var this__4203__auto____$1 = this;return cljs.core._lookup.call(null,this__4203__auto____$1,k__4204__auto__,null);
});
bidi.bidi.TaggedMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k16955,else__4206__auto__){var self__ = this;
var this__4205__auto____$1 = this;var G__16957 = (((k16955 instanceof cljs.core.Keyword))?k16955.fqn:null);switch (G__16957) {
case "tag":
return self__.tag;

break;
case "matched":
return self__.matched;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16955,else__4206__auto__);

}
});
bidi.bidi.TaggedMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){var self__ = this;
var this__4217__auto____$1 = this;var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#bidi.bidi.TaggedMatch{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"matched","matched",-975207164),self__.matched],null))], null),self__.__extmap));
});
bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$ = true;
bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){var self__ = this;
var this$__$1 = this;return bidi.bidi.resolve_handler.call(null,self__.matched,cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag));
});
bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){var self__ = this;
var this$__$1 = this;if((new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m) instanceof cljs.core.Keyword))
{if(cljs.core._EQ_.call(null,self__.tag,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m)))
{return "";
} else
{return null;
}
} else
{return bidi.bidi.unresolve_handler.call(null,self__.matched,m);
}
});
bidi.bidi.TaggedMatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){var self__ = this;
var this__4201__auto____$1 = this;return self__.__meta;
});
bidi.bidi.TaggedMatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4197__auto__){var self__ = this;
var this__4197__auto____$1 = this;return (new bidi.bidi.TaggedMatch(self__.tag,self__.matched,self__.__meta,self__.__extmap,self__.__hash));
});
bidi.bidi.TaggedMatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){var self__ = this;
var this__4207__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
bidi.bidi.TaggedMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4198__auto__){var self__ = this;
var this__4198__auto____$1 = this;var h__4018__auto__ = self__.__hash;if(!((h__4018__auto__ == null)))
{return h__4018__auto__;
} else
{var h__4018__auto____$1 = cljs.core.hash_imap.call(null,this__4198__auto____$1);self__.__hash = h__4018__auto____$1;
return h__4018__auto____$1;
}
});
bidi.bidi.TaggedMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4199__auto__,other__4200__auto__){var self__ = this;
var this__4199__auto____$1 = this;if(cljs.core.truth_((function (){var and__3595__auto__ = other__4200__auto__;if(cljs.core.truth_(and__3595__auto__))
{return ((this__4199__auto____$1.constructor === other__4200__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4199__auto____$1,other__4200__auto__));
} else
{return and__3595__auto__;
}
})()))
{return true;
} else
{return false;
}
});
bidi.bidi.TaggedMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){var self__ = this;
var this__4212__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"matched","matched",-975207164),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null], null), null),k__4213__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else
{return (new bidi.bidi.TaggedMatch(self__.tag,self__.matched,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});
bidi.bidi.TaggedMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__16954){var self__ = this;
var this__4210__auto____$1 = this;var pred__16958 = cljs.core.keyword_identical_QMARK_;var expr__16959 = k__4211__auto__;if(cljs.core.truth_(pred__16958.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__16959)))
{return (new bidi.bidi.TaggedMatch(G__16954,self__.matched,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16958.call(null,new cljs.core.Keyword(null,"matched","matched",-975207164),expr__16959)))
{return (new bidi.bidi.TaggedMatch(self__.tag,G__16954,self__.__meta,self__.__extmap,null));
} else
{return (new bidi.bidi.TaggedMatch(self__.tag,self__.matched,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__16954),null));
}
}
});
bidi.bidi.TaggedMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){var self__ = this;
var this__4215__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"matched","matched",-975207164),self__.matched],null))], null),self__.__extmap));
});
bidi.bidi.TaggedMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__16954){var self__ = this;
var this__4202__auto____$1 = this;return (new bidi.bidi.TaggedMatch(self__.tag,self__.matched,G__16954,self__.__extmap,self__.__hash));
});
bidi.bidi.TaggedMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){var self__ = this;
var this__4208__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__))
{return cljs.core._assoc.call(null,this__4208__auto____$1,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});
bidi.bidi.TaggedMatch.cljs$lang$type = true;
bidi.bidi.TaggedMatch.cljs$lang$ctorPrSeq = (function (this__4237__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"bidi.bidi/TaggedMatch");
});
bidi.bidi.TaggedMatch.cljs$lang$ctorPrWriter = (function (this__4237__auto__,writer__4238__auto__){return cljs.core._write.call(null,writer__4238__auto__,"bidi.bidi/TaggedMatch");
});
bidi.bidi.__GT_TaggedMatch = (function __GT_TaggedMatch(tag,matched){return (new bidi.bidi.TaggedMatch(tag,matched));
});
bidi.bidi.map__GT_TaggedMatch = (function map__GT_TaggedMatch(G__16956){return (new bidi.bidi.TaggedMatch(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__16956),new cljs.core.Keyword(null,"matched","matched",-975207164).cljs$core$IFn$_invoke$arity$1(G__16956),null,cljs.core.dissoc.call(null,G__16956,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"matched","matched",-975207164))));
});
bidi.bidi.tag = (function tag(matched,k){return bidi.bidi.__GT_TaggedMatch.call(null,k,matched);
});

/**
* @constructor
* @param {*} id
* @param {*} handler
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
bidi.bidi.IdentifiableHandler = (function (id,handler,__meta,__extmap){
this.id = id;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
bidi.bidi.IdentifiableHandler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){var self__ = this;
var this__4203__auto____$1 = this;return cljs.core._lookup.call(null,this__4203__auto____$1,k__4204__auto__,null);
});
bidi.bidi.IdentifiableHandler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k16963,else__4206__auto__){var self__ = this;
var this__4205__auto____$1 = this;var G__16965 = (((k16963 instanceof cljs.core.Keyword))?k16963.fqn:null);switch (G__16965) {
case "id":
return self__.id;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16963,else__4206__auto__);

}
});
bidi.bidi.IdentifiableHandler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){var self__ = this;
var this__4217__auto____$1 = this;var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#bidi.bidi.IdentifiableHandler{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
});
bidi.bidi.IdentifiableHandler.prototype.bidi$bidi$Matched$ = true;
bidi.bidi.IdentifiableHandler.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){var self__ = this;
var this$__$1 = this;return bidi.bidi.resolve_handler.call(null,self__.handler,cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id));
});
bidi.bidi.IdentifiableHandler.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.id))
{if(cljs.core._EQ_.call(null,self__.id,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m)))
{return "";
} else
{return bidi.bidi.unresolve_handler.call(null,self__.handler,m);
}
} else
{return null;
}
});
bidi.bidi.IdentifiableHandler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){var self__ = this;
var this__4201__auto____$1 = this;return self__.__meta;
});
bidi.bidi.IdentifiableHandler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4197__auto__){var self__ = this;
var this__4197__auto____$1 = this;return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
});
bidi.bidi.IdentifiableHandler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){var self__ = this;
var this__4207__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
bidi.bidi.IdentifiableHandler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4198__auto__){var self__ = this;
var this__4198__auto____$1 = this;var h__4018__auto__ = self__.__hash;if(!((h__4018__auto__ == null)))
{return h__4018__auto__;
} else
{var h__4018__auto____$1 = cljs.core.hash_imap.call(null,this__4198__auto____$1);self__.__hash = h__4018__auto____$1;
return h__4018__auto____$1;
}
});
bidi.bidi.IdentifiableHandler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4199__auto__,other__4200__auto__){var self__ = this;
var this__4199__auto____$1 = this;if(cljs.core.truth_((function (){var and__3595__auto__ = other__4200__auto__;if(cljs.core.truth_(and__3595__auto__))
{return ((this__4199__auto____$1.constructor === other__4200__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4199__auto____$1,other__4200__auto__));
} else
{return and__3595__auto__;
}
})()))
{return true;
} else
{return false;
}
});
bidi.bidi.IdentifiableHandler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){var self__ = this;
var this__4212__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__4213__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else
{return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});
bidi.bidi.IdentifiableHandler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__16962){var self__ = this;
var this__4210__auto____$1 = this;var pred__16966 = cljs.core.keyword_identical_QMARK_;var expr__16967 = k__4211__auto__;if(cljs.core.truth_(pred__16966.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__16967)))
{return (new bidi.bidi.IdentifiableHandler(G__16962,self__.handler,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16966.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__16967)))
{return (new bidi.bidi.IdentifiableHandler(self__.id,G__16962,self__.__meta,self__.__extmap,null));
} else
{return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__16962),null));
}
}
});
bidi.bidi.IdentifiableHandler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){var self__ = this;
var this__4215__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
});
bidi.bidi.IdentifiableHandler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__16962){var self__ = this;
var this__4202__auto____$1 = this;return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,G__16962,self__.__extmap,self__.__hash));
});
bidi.bidi.IdentifiableHandler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){var self__ = this;
var this__4208__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__))
{return cljs.core._assoc.call(null,this__4208__auto____$1,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});
bidi.bidi.IdentifiableHandler.cljs$lang$type = true;
bidi.bidi.IdentifiableHandler.cljs$lang$ctorPrSeq = (function (this__4237__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"bidi.bidi/IdentifiableHandler");
});
bidi.bidi.IdentifiableHandler.cljs$lang$ctorPrWriter = (function (this__4237__auto__,writer__4238__auto__){return cljs.core._write.call(null,writer__4238__auto__,"bidi.bidi/IdentifiableHandler");
});
bidi.bidi.__GT_IdentifiableHandler = (function __GT_IdentifiableHandler(id,handler){return (new bidi.bidi.IdentifiableHandler(id,handler));
});
bidi.bidi.map__GT_IdentifiableHandler = (function map__GT_IdentifiableHandler(G__16964){return (new bidi.bidi.IdentifiableHandler(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__16964),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__16964),null,cljs.core.dissoc.call(null,G__16964,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"handler","handler",-195596612))));
});
bidi.bidi.handler = (function() {
var handler = null;
var handler__1 = (function (handler__$1){return bidi.bidi.__GT_IdentifiableHandler.call(null,null,handler__$1);
});
var handler__2 = (function (k,handler__$1){return bidi.bidi.__GT_IdentifiableHandler.call(null,k,handler__$1);
});
handler = function(k,handler__$1){
switch(arguments.length){
case 1:
return handler__1.call(this,k);
case 2:
return handler__2.call(this,k,handler__$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
handler.cljs$core$IFn$_invoke$arity$1 = handler__1;
handler.cljs$core$IFn$_invoke$arity$2 = handler__2;
return handler;
})()
;
bidi.bidi.Compilable = (function (){var obj16971 = {};return obj16971;
})();
bidi.bidi.compile_pattern = (function compile_pattern(_){if((function (){var and__3595__auto__ = _;if(and__3595__auto__)
{return _.bidi$bidi$Compilable$compile_pattern$arity$1;
} else
{return and__3595__auto__;
}
})())
{return _.bidi$bidi$Compilable$compile_pattern$arity$1(_);
} else
{var x__4244__auto__ = (((_ == null))?null:_);return (function (){var or__3607__auto__ = (bidi.bidi.compile_pattern[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (bidi.bidi.compile_pattern["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Compilable.compile-pattern",_);
}
}
})().call(null,_);
}
});
bidi.bidi.compile_matched = (function compile_matched(_){if((function (){var and__3595__auto__ = _;if(and__3595__auto__)
{return _.bidi$bidi$Compilable$compile_matched$arity$1;
} else
{return and__3595__auto__;
}
})())
{return _.bidi$bidi$Compilable$compile_matched$arity$1(_);
} else
{var x__4244__auto__ = (((_ == null))?null:_);return (function (){var or__3607__auto__ = (bidi.bidi.compile_matched[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (bidi.bidi.compile_matched["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Compilable.compile-matched",_);
}
}
})().call(null,_);
}
});
bidi.bidi.compile_segment = (function compile_segment(_){if((function (){var and__3595__auto__ = _;if(and__3595__auto__)
{return _.bidi$bidi$Compilable$compile_segment$arity$1;
} else
{return and__3595__auto__;
}
})())
{return _.bidi$bidi$Compilable$compile_segment$arity$1(_);
} else
{var x__4244__auto__ = (((_ == null))?null:_);return (function (){var or__3607__auto__ = (bidi.bidi.compile_segment[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (bidi.bidi.compile_segment["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Compilable.compile-segment",_);
}
}
})().call(null,_);
}
});
bidi.bidi.compile_route = (function compile_route(p__16972){var vec__16974 = p__16972;var pattern = cljs.core.nth.call(null,vec__16974,(0),null);var matched = cljs.core.nth.call(null,vec__16974,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bidi.bidi.compile_pattern.call(null,pattern),bidi.bidi.compile_matched.call(null,matched)], null);
});
(bidi.bidi.Compilable["string"] = true);
(bidi.bidi.compile_pattern["string"] = (function (s){return cljs.core.re_pattern.call(null,s.replace(/\/(\W)\/g/,"\\$1"));
}));
(bidi.bidi.compile_matched["string"] = (function (s){return s;
}));
(bidi.bidi.compile_segment["string"] = (function (s){return cljs.core.re_pattern.call(null,s.replace(/\/(\W)\/g/,"\\$1"));
}));
cljs.core.PersistentVector.prototype.bidi$bidi$Compilable$ = true;
cljs.core.PersistentVector.prototype.bidi$bidi$Compilable$compile_pattern$arity$1 = (function (v){var v__$1 = this;return cljs.core.mapv.call(null,bidi.bidi.compile_segment,v__$1);
});
cljs.core.PersistentVector.prototype.bidi$bidi$Compilable$compile_matched$arity$1 = (function (v){var v__$1 = this;return cljs.core.mapv.call(null,bidi.bidi.compile_route,v__$1);
});
cljs.core.PersistentVector.prototype.bidi$bidi$Compilable$compile_segment$arity$1 = (function (v){var v__$1 = this;return v__$1;
});
cljs.core.List.prototype.bidi$bidi$Compilable$ = true;
cljs.core.List.prototype.bidi$bidi$Compilable$compile_pattern$arity$1 = (function (v){var v__$1 = this;return v__$1;
});
cljs.core.List.prototype.bidi$bidi$Compilable$compile_matched$arity$1 = (function (v){var v__$1 = this;return cljs.core.mapv.call(null,bidi.bidi.compile_route,v__$1);
});
cljs.core.PersistentArrayMap.prototype.bidi$bidi$Compilable$ = true;
cljs.core.PersistentArrayMap.prototype.bidi$bidi$Compilable$compile_pattern$arity$1 = (function (v){var v__$1 = this;return v__$1;
});
cljs.core.PersistentArrayMap.prototype.bidi$bidi$Compilable$compile_matched$arity$1 = (function (v){var v__$1 = this;return cljs.core.mapv.call(null,bidi.bidi.compile_route,v__$1);
});
cljs.core.LazySeq.prototype.bidi$bidi$Compilable$ = true;
cljs.core.LazySeq.prototype.bidi$bidi$Compilable$compile_pattern$arity$1 = (function (v){var v__$1 = this;return v__$1;
});
cljs.core.LazySeq.prototype.bidi$bidi$Compilable$compile_matched$arity$1 = (function (v){var v__$1 = this;return cljs.core.mapv.call(null,bidi.bidi.compile_route,v__$1);
});
(bidi.bidi.Compilable["_"] = true);
(bidi.bidi.compile_pattern["_"] = (function (o){return o;
}));
(bidi.bidi.compile_matched["_"] = (function (o){return o;
}));
(bidi.bidi.compile_segment["_"] = (function (o){return o;
}));
bidi.bidi.RouteProvider = (function (){var obj16976 = {};return obj16976;
})();
bidi.bidi.routes = (function routes(_){if((function (){var and__3595__auto__ = _;if(and__3595__auto__)
{return _.bidi$bidi$RouteProvider$routes$arity$1;
} else
{return and__3595__auto__;
}
})())
{return _.bidi$bidi$RouteProvider$routes$arity$1(_);
} else
{var x__4244__auto__ = (((_ == null))?null:_);return (function (){var or__3607__auto__ = (bidi.bidi.routes[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (bidi.bidi.routes["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"RouteProvider.routes",_);
}
}
})().call(null,_);
}
});

//# sourceMappingURL=bidi.js.map