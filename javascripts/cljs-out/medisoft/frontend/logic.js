// Compiled by ClojureScript 0.0-2371
goog.provide('medisoft.frontend.logic');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('medisoft.frontend.log');
goog.require('medisoft.frontend.log');
if(typeof medisoft.frontend.logic.current_page !== 'undefined')
{} else
{medisoft.frontend.logic.current_page = reagent.core.atom.call(null,new cljs.core.Keyword("home","dashboard","home/dashboard",-620150739));
}
if(typeof medisoft.frontend.logic.current_params !== 'undefined')
{} else
{medisoft.frontend.logic.current_params = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
* @param {...*} var_args
*/
medisoft.frontend.logic.set_current_page_BANG_ = (function() { 
var set_current_page_BANG___delegate = function (page,p__16220){var vec__16222 = p__16220;var params = cljs.core.nth.call(null,vec__16222,(0),null);medisoft.frontend.log.debug.call(null,"setting page:",cljs.core.reset_BANG_.call(null,medisoft.frontend.logic.current_page,page));
return medisoft.frontend.log.debug.call(null,"setting params:",cljs.core.reset_BANG_.call(null,medisoft.frontend.logic.current_params,(function (){var or__3607__auto__ = params;if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
};
var set_current_page_BANG_ = function (page,var_args){
var p__16220 = null;if (arguments.length > 1) {
  p__16220 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_current_page_BANG___delegate.call(this,page,p__16220);};
set_current_page_BANG_.cljs$lang$maxFixedArity = 1;
set_current_page_BANG_.cljs$lang$applyTo = (function (arglist__16223){
var page = cljs.core.first(arglist__16223);
var p__16220 = cljs.core.rest(arglist__16223);
return set_current_page_BANG___delegate(page,p__16220);
});
set_current_page_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_current_page_BANG___delegate;
return set_current_page_BANG_;
})()
;

//# sourceMappingURL=logic.js.map