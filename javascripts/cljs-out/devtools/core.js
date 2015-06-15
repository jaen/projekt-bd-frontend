// Compiled by ClojureScript 0.0-2371
goog.provide('devtools.core');
goog.require('cljs.core');
goog.require('goog.json');
goog.require('goog.json');
goog.require('devtools.debug');
goog.require('devtools.debug');
goog.require('devtools.format');
goog.require('devtools.format');
devtools.core._STAR_devtools_enabled_STAR_ = true;
devtools.core._STAR_sanitizer_enabled_STAR_ = true;
devtools.core._STAR_monitor_enabled_STAR_ = false;
devtools.core.formatter_key = "devtoolsFormatters";
devtools.core.api_marker = "cljs_devtools_handler";
devtools.core.api_mapping = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["header",devtools.format.header_api_call], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hasBody",devtools.format.has_body_api_call], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["body",devtools.format.body_api_call], null)], null);
devtools.core.monitor_api_calls = (function monitor_api_calls(name,api_call){return (function (value){if(cljs.core.not.call(null,devtools.core._STAR_monitor_enabled_STAR_))
{return api_call.call(null,value);
} else
{devtools.debug.log.call(null,devtools.debug.logger.call(null,name),value);
devtools.debug.indent_BANG_.call(null);
var api_response = api_call.call(null,value);var api_response_filter = ((function (api_response){
return (function (key,value__$1){if(cljs.core._EQ_.call(null,key,"object"))
{return "##REF##";
} else
{return value__$1;
}
});})(api_response))
;devtools.debug.log.call(null,devtools.debug.logger.call(null,name),("=> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,goog.json.parse(goog.json.serialize(api_response,api_response_filter))))));
devtools.debug.unindent_BANG_.call(null);
return api_response;
}
});
});
/**
* wraps our api-call in try-catch block to prevent leaking of exceptions if something goes wrong
*/
devtools.core.sanitize = (function sanitize(_,api_call){return (function (value){if(cljs.core.not.call(null,devtools.core._STAR_sanitizer_enabled_STAR_))
{return api_call.call(null,value);
} else
{try{return api_call.call(null,value);
}catch (e15837){if((e15837 instanceof Object))
{var e = e15837;devtools.debug.log_exception.call(null,e);
return null;
} else
{throw e15837;

}
}}
});
});
devtools.core.cljs_formatter = (function cljs_formatter(){var api_call_wrapper = (function (name,api_call){var monitor = cljs.core.partial.call(null,devtools.core.monitor_api_calls,name);var sanitizer = cljs.core.partial.call(null,devtools.core.sanitize,name);return cljs.core.comp.call(null,monitor,sanitizer).call(null,api_call);
});var api_gen = ((function (api_call_wrapper){
return (function (p__15841){var vec__15842 = p__15841;var name = cljs.core.nth.call(null,vec__15842,(0),null);var api_call = cljs.core.nth.call(null,vec__15842,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,api_call_wrapper.call(null,name,api_call)], null);
});})(api_call_wrapper))
;return cljs.core.apply.call(null,cljs.core.js_obj,cljs.core.mapcat.call(null,((function (api_call_wrapper,api_gen){
return (function (p1__15838_SHARP_){return api_gen.call(null,p1__15838_SHARP_);
});})(api_call_wrapper,api_gen))
,devtools.core.api_mapping));
});
devtools.core.is_marked_QMARK_ = (function is_marked_QMARK_(o){return cljs.core.boolean$.call(null,(o[devtools.core.api_marker]));
});
devtools.core.mark_BANG_ = (function mark_BANG_(o){(o[devtools.core.api_marker] = true);
return o;
});
devtools.core.safe_get_formatters = (function safe_get_formatters(){var formatters = (window[devtools.core.formatter_key]);if(formatters instanceof Array)
{return formatters;
} else
{return [];
}
});
devtools.core.installed_QMARK_ = (function installed_QMARK_(){var formatters = devtools.core.safe_get_formatters.call(null);return cljs.core.boolean$.call(null,cljs.core.some.call(null,devtools.core.is_marked_QMARK_,formatters));
});
devtools.core.install_marked_formatter_BANG_ = (function install_marked_formatter_BANG_(formatter){var formatters = devtools.core.safe_get_formatters.call(null).slice();formatters.push(formatter);
return (window[devtools.core.formatter_key] = formatters);
});
devtools.core.uninstall_marked_formatters_BANG_ = (function uninstall_marked_formatters_BANG_(){var formatters = devtools.core.safe_get_formatters.call(null);var new_formatters = cljs.core.remove.call(null,devtools.core.is_marked_QMARK_,cljs.core.vec.call(null,formatters));var new_formatters_value = ((cljs.core.empty_QMARK_.call(null,new_formatters))?null:cljs.core.into_array.call(null,new_formatters));return (window[devtools.core.formatter_key] = new_formatters_value);
});
devtools.core.install_BANG_ = (function install_BANG_(){if(devtools.core.installed_QMARK_.call(null))
{return devtools.debug.log_info.call(null,"devtools already installed - nothing to do");
} else
{return devtools.core.install_marked_formatter_BANG_.call(null,devtools.core.mark_BANG_.call(null,devtools.core.cljs_formatter.call(null)));
}
});
devtools.core.uninstall_BANG_ = (function uninstall_BANG_(){if(!(devtools.core.installed_QMARK_.call(null)))
{return devtools.debug.log_info.call(null,"devtools not installed - nothing to do");
} else
{return devtools.core.uninstall_marked_formatters_BANG_.call(null);
}
});
devtools.core.disable_BANG_ = (function disable_BANG_(){return devtools.core._STAR_devtools_enabled_STAR_ = false;
});
devtools.core.enable_BANG_ = (function enable_BANG_(){return devtools.core._STAR_devtools_enabled_STAR_ = true;
});

//# sourceMappingURL=core.js.map