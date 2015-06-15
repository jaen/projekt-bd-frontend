// Compiled by ClojureScript 0.0-2371
goog.provide('medisoft.frontend.log');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('cljs_time.format');
medisoft.frontend.log.get_preamble = (function get_preamble(){return "";
});
/**
* @param {...*} var_args
*/
medisoft.frontend.log.trace = (function() { 
var trace__delegate = function (args){var preamble = medisoft.frontend.log.get_preamble.call(null);return (console["trace"]).apply(console,cljs.core.into_array.call(null,cljs.core.cons.call(null,preamble,args)));
};
var trace = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return trace__delegate.call(this,args);};
trace.cljs$lang$maxFixedArity = 0;
trace.cljs$lang$applyTo = (function (arglist__15510){
var args = cljs.core.seq(arglist__15510);
return trace__delegate(args);
});
trace.cljs$core$IFn$_invoke$arity$variadic = trace__delegate;
return trace;
})()
;
/**
* @param {...*} var_args
*/
medisoft.frontend.log.debug = (function() { 
var debug__delegate = function (args){var preamble = medisoft.frontend.log.get_preamble.call(null);return (console["debug"]).apply(console,cljs.core.into_array.call(null,cljs.core.cons.call(null,preamble,args)));
};
var debug = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return debug__delegate.call(this,args);};
debug.cljs$lang$maxFixedArity = 0;
debug.cljs$lang$applyTo = (function (arglist__15511){
var args = cljs.core.seq(arglist__15511);
return debug__delegate(args);
});
debug.cljs$core$IFn$_invoke$arity$variadic = debug__delegate;
return debug;
})()
;
/**
* @param {...*} var_args
*/
medisoft.frontend.log.info = (function() { 
var info__delegate = function (args){var preamble = medisoft.frontend.log.get_preamble.call(null);return (console["log"]).apply(console,cljs.core.into_array.call(null,cljs.core.cons.call(null,preamble,args)));
};
var info = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return info__delegate.call(this,args);};
info.cljs$lang$maxFixedArity = 0;
info.cljs$lang$applyTo = (function (arglist__15512){
var args = cljs.core.seq(arglist__15512);
return info__delegate(args);
});
info.cljs$core$IFn$_invoke$arity$variadic = info__delegate;
return info;
})()
;
/**
* @param {...*} var_args
*/
medisoft.frontend.log.warn = (function() { 
var warn__delegate = function (args){var preamble = medisoft.frontend.log.get_preamble.call(null);return (console["warn"]).apply(console,cljs.core.into_array.call(null,cljs.core.cons.call(null,preamble,args)));
};
var warn = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return warn__delegate.call(this,args);};
warn.cljs$lang$maxFixedArity = 0;
warn.cljs$lang$applyTo = (function (arglist__15513){
var args = cljs.core.seq(arglist__15513);
return warn__delegate(args);
});
warn.cljs$core$IFn$_invoke$arity$variadic = warn__delegate;
return warn;
})()
;
/**
* @param {...*} var_args
*/
medisoft.frontend.log.error = (function() { 
var error__delegate = function (args){var preamble = medisoft.frontend.log.get_preamble.call(null);return (console["error"]).apply(console,cljs.core.into_array.call(null,cljs.core.cons.call(null,preamble,args)));
};
var error = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return error__delegate.call(this,args);};
error.cljs$lang$maxFixedArity = 0;
error.cljs$lang$applyTo = (function (arglist__15514){
var args = cljs.core.seq(arglist__15514);
return error__delegate(args);
});
error.cljs$core$IFn$_invoke$arity$variadic = error__delegate;
return error;
})()
;

//# sourceMappingURL=log.js.map