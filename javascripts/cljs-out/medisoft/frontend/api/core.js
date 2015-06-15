// Compiled by ClojureScript 0.0-2371
goog.provide('medisoft.frontend.api.core');
goog.require('cljs.core');
goog.require('reagent.ratom');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('medisoft.frontend.log');
goog.require('schema.core');
goog.require('hodgepodge.core');
goog.require('reagent.ratom');
goog.require('schema.core');
goog.require('reagent.core');
goog.require('medisoft.frontend.routes');
goog.require('clojure.walk');
goog.require('schema.coerce');
goog.require('cljs_time.core');
goog.require('cljs_time.core');
goog.require('medisoft.frontend.schemas');
goog.require('medisoft.frontend.utils');
goog.require('ajax.core');
goog.require('hodgepodge.core');
goog.require('cuerdas.core');
goog.require('medisoft.frontend.utils');
goog.require('medisoft.frontend.schemas');
goog.require('schema.coerce');
goog.require('clojure.walk');
goog.require('cljs.core.match');
goog.require('schema.utils');
goog.require('medisoft.frontend.routes');
goog.require('schema.utils');
goog.require('cuerdas.core');
goog.require('medisoft.frontend.log');
medisoft.frontend.api.core.token_storage_key = new cljs.core.Keyword(null,"medisoft-token-key","medisoft-token-key",-1791725475);
if(typeof medisoft.frontend.api.core.api_token !== 'undefined')
{} else
{medisoft.frontend.api.core.api_token = reagent.core.atom.call(null,cljs.core.get.call(null,hodgepodge.core.local_storage,medisoft.frontend.api.core.token_storage_key));
}
if(typeof medisoft.frontend.api.core.logged_in_QMARK_ !== 'undefined')
{} else
{medisoft.frontend.api.core.logged_in_QMARK_ = reagent.ratom.make_reaction.call(null,(function (){return cljs.core.deref.call(null,medisoft.frontend.api.core.api_token);
}),new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),true);
}
medisoft.frontend.api.core.set_api_token_BANG_ = (function set_api_token_BANG_(token){return cljs.core.assoc_BANG_.call(null,hodgepodge.core.local_storage,medisoft.frontend.api.core.token_storage_key,cljs.core.reset_BANG_.call(null,medisoft.frontend.api.core.api_token,token));
});
medisoft.frontend.api.core.custom_json_coercions = (function custom_json_coercions(schema__$1){var coercion = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,medisoft.frontend.utils.string__GT_keyword,schema.core.Bool,schema.coerce.string__GT_boolean,schema.core.Uuid,schema.coerce.string__GT_uuid], true, false).call(null,schema__$1);return coercion;
});
medisoft.frontend.api.core.response_coercer = (function response_coercer(schema__$1){var or__3607__auto__ = medisoft.frontend.api.core.custom_json_coercions.call(null,schema__$1);if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = schema.coerce.keyword_enum_matcher.call(null,schema__$1);if(cljs.core.truth_(or__3607__auto____$1))
{return or__3607__auto____$1;
} else
{return schema.coerce.set_matcher.call(null,schema__$1);
}
}
});
medisoft.frontend.api.core.exceptions = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"access-token","access-token",-654201199),"access_token"], null);
medisoft.frontend.api.core.map__GT_api_request = (function map__GT_api_request(map_SINGLEQUOTE_){var transform_key = (function (p1__16555_SHARP_){var or__3607__auto__ = cljs.core.get.call(null,medisoft.frontend.api.core.exceptions,p1__16555_SHARP_);if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return cuerdas.core.camelize.call(null,cljs.core.name.call(null,p1__16555_SHARP_));
}
});var transform_fn = ((function (transform_key){
return (function (p__16558){var vec__16559 = p__16558;var k = cljs.core.nth.call(null,vec__16559,(0),null);var v = cljs.core.nth.call(null,vec__16559,(1),null);if((k instanceof cljs.core.Keyword))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [transform_key.call(null,k),v], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
});})(transform_key))
;return clojure.walk.postwalk.call(null,((function (transform_key,transform_fn){
return (function (x){if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,transform_fn,x));
} else
{return x;
}
});})(transform_key,transform_fn))
,map_SINGLEQUOTE_);
});
medisoft.frontend.api.core.api_response__GT_map = (function api_response__GT_map(response){var transform_key = (function (p1__16560_SHARP_){return cljs.core.keyword.call(null,cuerdas.core.dasherize.call(null,p1__16560_SHARP_));
});var transform_fn = ((function (transform_key){
return (function (p__16563){var vec__16564 = p__16563;var k = cljs.core.nth.call(null,vec__16564,(0),null);var v = cljs.core.nth.call(null,vec__16564,(1),null);if(typeof k === 'string')
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [transform_key.call(null,k),v], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
});})(transform_key))
;return clojure.walk.postwalk.call(null,((function (transform_key,transform_fn){
return (function (x){if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,transform_fn,x));
} else
{return x;
}
});})(transform_key,transform_fn))
,response);
});
/**
* @param {...*} var_args
*/
medisoft.frontend.api.core.wrap_handler = (function() { 
var wrap_handler__delegate = function (handler,p__16565){var vec__16567 = p__16565;var response_schema = cljs.core.nth.call(null,vec__16567,(0),null);var method = cljs.core.nth.call(null,vec__16567,(1),null);var uri = cljs.core.nth.call(null,vec__16567,(2),null);var coercer = (cljs.core.truth_(response_schema)?schema.coerce.coercer.call(null,response_schema,medisoft.frontend.api.core.response_coercer):null);return ((function (coercer,vec__16567,response_schema,method,uri){
return (function (response){if(cljs.core.truth_(coercer))
{var coerced_response = coercer.call(null,(function (){var a = ((cljs.core.vector_QMARK_.call(null,response))?cljs.core.mapv.call(null,medisoft.frontend.api.core.api_response__GT_map,response):medisoft.frontend.api.core.api_response__GT_map.call(null,response)
);medisoft.frontend.log.warn.call(null,"got this after transform:",a);
return a;
})());if(!(schema.utils.error_QMARK_.call(null,coerced_response)))
{medisoft.frontend.log.debug.call(null,("SUCCESS - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)),coerced_response);
return handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success","success",1890645906),coerced_response], null));
} else
{throw schema.utils.error_val.call(null,coerced_response);
}
} else
{medisoft.frontend.log.debug.call(null,("SUCCESS - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)),response);
return handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success","success",1890645906),response], null));
}
});
;})(coercer,vec__16567,response_schema,method,uri))
};
var wrap_handler = function (handler,var_args){
var p__16565 = null;if (arguments.length > 1) {
  p__16565 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_handler__delegate.call(this,handler,p__16565);};
wrap_handler.cljs$lang$maxFixedArity = 1;
wrap_handler.cljs$lang$applyTo = (function (arglist__16568){
var handler = cljs.core.first(arglist__16568);
var p__16565 = cljs.core.rest(arglist__16568);
return wrap_handler__delegate(handler,p__16565);
});
wrap_handler.cljs$core$IFn$_invoke$arity$variadic = wrap_handler__delegate;
return wrap_handler;
})()
;
/**
* @param {...*} var_args
*/
medisoft.frontend.api.core.wrap_error_handler = (function() { 
var wrap_error_handler__delegate = function (handler,p__16569){var vec__16571 = p__16569;var response_schema = cljs.core.nth.call(null,vec__16571,(0),null);var method = cljs.core.nth.call(null,vec__16571,(1),null);var uri = cljs.core.nth.call(null,vec__16571,(2),null);var coercer = (cljs.core.truth_(response_schema)?schema.coerce.coercer.call(null,response_schema,medisoft.frontend.api.core.response_coercer):null);return ((function (coercer,vec__16571,response_schema,method,uri){
return (function (response){if(cljs.core.truth_(coercer))
{var coerced_response = coercer.call(null,(function (){var response__$1 = new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(response);var a = ((cljs.core.vector_QMARK_.call(null,response__$1))?cljs.core.mapv.call(null,medisoft.frontend.api.core.api_response__GT_map,response__$1):medisoft.frontend.api.core.api_response__GT_map.call(null,response__$1)
);medisoft.frontend.log.warn.call(null,"got this after transform:",a);
return a;
})());if(!(schema.utils.error_QMARK_.call(null,coerced_response)))
{medisoft.frontend.log.error.call(null,("ERROR - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)),cljs.core.merge.call(null,response,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response","response",-1068424192),coerced_response], null)));
return handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.merge.call(null,response,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response","response",-1068424192),coerced_response], null))], null));
} else
{throw schema.utils.error_val.call(null,coerced_response);
}
} else
{medisoft.frontend.log.error.call(null,("ERROR - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)),response);
return handler.call(null,handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),response], null)));
}
});
;})(coercer,vec__16571,response_schema,method,uri))
};
var wrap_error_handler = function (handler,var_args){
var p__16569 = null;if (arguments.length > 1) {
  p__16569 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_error_handler__delegate.call(this,handler,p__16569);};
wrap_error_handler.cljs$lang$maxFixedArity = 1;
wrap_error_handler.cljs$lang$applyTo = (function (arglist__16572){
var handler = cljs.core.first(arglist__16572);
var p__16569 = cljs.core.rest(arglist__16572);
return wrap_error_handler__delegate(handler,p__16569);
});
wrap_error_handler.cljs$core$IFn$_invoke$arity$variadic = wrap_error_handler__delegate;
return wrap_error_handler;
})()
;
medisoft.frontend.api.core.api_call = (function api_call(method,uri,opts){var map__16578 = new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(opts);var map__16578__$1 = ((cljs.core.seq_QMARK_.call(null,map__16578))?cljs.core.apply.call(null,cljs.core.hash_map,map__16578):map__16578);var request_schema = cljs.core.get.call(null,map__16578__$1,new cljs.core.Keyword(null,"request","request",1772954723));var response_schema = cljs.core.get.call(null,map__16578__$1,new cljs.core.Keyword(null,"response","response",-1068424192));var auth_headers = (function (){var temp__4423__auto__ = cljs.core.deref.call(null,medisoft.frontend.api.core.api_token);if(cljs.core.truth_(temp__4423__auto__))
{var token = temp__4423__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["X-Auth-Token",token], null)], null);
} else
{return null;
}
})();var response_fn = (function (){var or__3607__auto__ = new cljs.core.Keyword(null,"response-fn","response-fn",377411189).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return ((function (or__3607__auto__,map__16578,map__16578__$1,request_schema,response_schema,auth_headers){
return (function (){return cljs.core.List.EMPTY;
});
;})(or__3607__auto__,map__16578,map__16578__$1,request_schema,response_schema,auth_headers))
}
})();var method_str = cuerdas.core.upper.call(null,cljs.core.name.call(null,method));var wrapped_handler = medisoft.frontend.api.core.wrap_handler.call(null,response_fn,response_schema,method_str,uri);var wrapped_error_handler = medisoft.frontend.api.core.wrap_error_handler.call(null,response_fn,response_schema,method_str,uri);var handlers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.second,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),wrapped_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),wrapped_error_handler], null)));var format = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),false], null);var original_params = (function (){var or__3607__auto__ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var api_opts = cljs.core.merge.call(null,cljs.core.merge_with.call(null,cljs.core.merge,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"schema","schema",-1582001791)),auth_headers),handlers,format);medisoft.frontend.log.debug.call(null,("sending request - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)),api_opts);
if(cljs.core.truth_(request_schema))
{} else
{medisoft.frontend.log.warn.call(null,"no request schema for",method,uri);
}
if(cljs.core.truth_(response_schema))
{} else
{medisoft.frontend.log.warn.call(null,"no response schema for",method,uri);
}
if(cljs.core.truth_(request_schema))
{schema.core.validate.call(null,request_schema,original_params);
} else
{}
medisoft.frontend.log.debug.call(null,"params:",original_params);
var transformed_params = medisoft.frontend.api.core.map__GT_api_request.call(null,original_params);var api_opts__$1 = cljs.core.merge.call(null,api_opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),transformed_params], null));medisoft.frontend.log.debug.call(null,"coerced api-opts:",api_opts__$1);
try{if(cljs.core.keyword_identical_QMARK_.call(null,method,new cljs.core.Keyword(null,"get","get",1683182755)))
{return ajax.core.GET.call(null,uri,api_opts__$1);
} else
{throw cljs.core.match.backtrack;

}
}catch (e16580){if((e16580 instanceof Error))
{var e__12219__auto__ = e16580;if((e__12219__auto__ === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,method,new cljs.core.Keyword(null,"post","post",269697687)))
{return ajax.core.POST.call(null,uri,api_opts__$1);
} else
{throw cljs.core.match.backtrack;

}
}catch (e16581){if((e16581 instanceof Error))
{var e__12219__auto____$1 = e16581;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,method,new cljs.core.Keyword(null,"put","put",1299772570)))
{return ajax.core.PUT.call(null,uri,api_opts__$1);
} else
{throw cljs.core.match.backtrack;

}
}catch (e16582){if((e16582 instanceof Error))
{var e__12219__auto____$2 = e16582;if((e__12219__auto____$2 === cljs.core.match.backtrack))
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method))));
} else
{throw e__12219__auto____$2;
}
} else
{throw e16582;

}
}} else
{throw e__12219__auto____$1;
}
} else
{throw e16581;

}
}} else
{throw e__12219__auto__;
}
} else
{throw e16580;

}
}});

//# sourceMappingURL=core.js.map