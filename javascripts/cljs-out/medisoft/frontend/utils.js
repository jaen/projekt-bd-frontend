// Compiled by ClojureScript 0.0-2371
goog.provide('medisoft.frontend.utils');
goog.require('cljs.core');
goog.require('cljs_time.format');
goog.require('cljs_time.format');
goog.require('cljs_time.core');
goog.require('cljs_time.core');
medisoft.frontend.utils.string__GT_keyword = (function string__GT_keyword(s){if(typeof s === 'string')
{return cljs.core.keyword.call(null,s);
} else
{return s;
}
});
medisoft.frontend.utils.time_formatter = cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"rfc822","rfc822",-404628697));
medisoft.frontend.utils.str__GT_clj_time = (function str__GT_clj_time(str){return cljs_time.format.parse.call(null,medisoft.frontend.utils.time_formatter,str);
});
medisoft.frontend.utils.clj_time__GT_str = (function clj_time__GT_str(time){return cljs_time.format.unparse.call(null,medisoft.frontend.utils.time_formatter,time);
});
/**
* true if obj is an instance of clojure.lang.IDeref
*/
medisoft.frontend.utils.derefable_QMARK_ = (function derefable_QMARK_(obj){var G__16592 = obj;if(G__16592)
{var bit__4271__auto__ = (G__16592.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__4271__auto__) || (G__16592.cljs$core$IDeref$))
{return true;
} else
{if((!G__16592.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__16592);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__16592);
}
});
/**
* @param {...*} var_args
*/
medisoft.frontend.utils.realised = (function() { 
var realised__delegate = function (val,args){if(medisoft.frontend.utils.derefable_QMARK_.call(null,val))
{return cljs.core.deref.call(null,val);
} else
{if(cljs.core.fn_QMARK_.call(null,val))
{return cljs.core.apply.call(null,val,args);
} else
{return val;

}
}
};
var realised = function (val,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return realised__delegate.call(this,val,args);};
realised.cljs$lang$maxFixedArity = 1;
realised.cljs$lang$applyTo = (function (arglist__16593){
var val = cljs.core.first(arglist__16593);
var args = cljs.core.rest(arglist__16593);
return realised__delegate(val,args);
});
realised.cljs$core$IFn$_invoke$arity$variadic = realised__delegate;
return realised;
})()
;
medisoft.frontend.utils.slice = (function (){var native_slice = Array.prototype.slice;return ((function (native_slice){
return (function (obj){return native_slice.call(obj);
});
;})(native_slice))
})();

//# sourceMappingURL=utils.js.map