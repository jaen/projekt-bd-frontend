// Compiled by ClojureScript 0.0-2371
goog.provide('devtools.debug');
goog.require('cljs.core');
goog.require('goog.debug.FancyWindow');
goog.require('goog.debug.Logger');
goog.require('goog.debug.Logger');
devtools.debug.indentation_spacer = "  ";
devtools.debug.logger_name_stuffer = "_";
devtools.debug.logger_name_padding = (8);
devtools.debug.additional_console_styles = ".logmsg, .logmsg * {font-size:10px;}";
devtools.debug._STAR_initialized_STAR_ = false;
devtools.debug._STAR_indent_STAR_ = (0);
devtools.debug._STAR_console_STAR_ = null;
devtools.debug._STAR_debug_print_length_STAR_ = (10);
devtools.debug._STAR_debug_print_level_STAR_ = (5);
devtools.debug.indentation = (function indentation(){return cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,devtools.debug._STAR_indent_STAR_,cljs.core.repeat.call(null,devtools.debug.indentation_spacer)));
});
devtools.debug.indent_BANG_ = (function indent_BANG_(){return devtools.debug._STAR_indent_STAR_ = (devtools.debug._STAR_indent_STAR_ + (1));
});
devtools.debug.unindent_BANG_ = (function unindent_BANG_(){return devtools.debug._STAR_indent_STAR_ = (devtools.debug._STAR_indent_STAR_ - (1));
});
devtools.debug.logger = (function logger(name){var len = cljs.core.count.call(null,name);var lpad = (devtools.debug.logger_name_padding - len);var stuffing = ((function (len,lpad){
return (function (p1__15925_SHARP_){return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,p1__15925_SHARP_,devtools.debug.logger_name_stuffer));
});})(len,lpad))
;var padded_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(stuffing.call(null,lpad))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));return goog.debug.Logger.getLogger(padded_name);
});
devtools.debug.log = (function log(logger,message){var _STAR_print_length_STAR_15928 = cljs.core._STAR_print_length_STAR_;var _STAR_print_level_STAR_15929 = cljs.core._STAR_print_level_STAR_;try{cljs.core._STAR_print_length_STAR_ = devtools.debug._STAR_debug_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = devtools.debug._STAR_debug_print_level_STAR_;
return logger.info(cljs.core.apply.call(null,cljs.core.str,cljs.core.cons.call(null,devtools.debug.indentation.call(null),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)))));
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_15929;
cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_15928;
}});
devtools.debug.log_exception = (function log_exception(message){var _STAR_print_length_STAR_15932 = cljs.core._STAR_print_length_STAR_;var _STAR_print_level_STAR_15933 = cljs.core._STAR_print_level_STAR_;try{cljs.core._STAR_print_length_STAR_ = devtools.debug._STAR_debug_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = devtools.debug._STAR_debug_print_level_STAR_;
return devtools.debug.logger.call(null,"ex!").shout(cljs.core.apply.call(null,cljs.core.str,cljs.core.cons.call(null,devtools.debug.indentation.call(null),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)))));
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_15933;
cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_15932;
}});
devtools.debug.log_info = (function log_info(message){var _STAR_print_length_STAR_15936 = cljs.core._STAR_print_length_STAR_;var _STAR_print_level_STAR_15937 = cljs.core._STAR_print_level_STAR_;try{cljs.core._STAR_print_length_STAR_ = devtools.debug._STAR_debug_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = devtools.debug._STAR_debug_print_level_STAR_;
return devtools.debug.logger.call(null,"info").info(cljs.core.apply.call(null,cljs.core.str,cljs.core.cons.call(null,devtools.debug.indentation.call(null),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)))));
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_15937;
cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_15936;
}});
devtools.debug.init_logger_BANG_ = (function init_logger_BANG_(){devtools.debug._STAR_console_STAR_ = (new goog.debug.FancyWindow("devtools"));
(devtools.debug._STAR_console_STAR_["getStyleRules"] = (function (){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.debug.FancyWindow.prototype.getStyleRules())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.debug.additional_console_styles));
}));
devtools.debug._STAR_console_STAR_.setWelcomeMessage("cljs-devtools auxiliary console");
devtools.debug._STAR_console_STAR_.init();
devtools.debug._STAR_console_STAR_.setEnabled(true);
var formatter = devtools.debug._STAR_console_STAR_.getFormatter();formatter.showAbsoluteTime = false;
formatter.showRelativeTime = false;
return formatter.showLoggerName = true;
});
devtools.debug.hijack_console_BANG_ = (function hijack_console_BANG_(){var original_log_fn = (console["log"]);return (console["log"] = ((function (original_log_fn){
return (function() { 
var G__15938__delegate = function (args){devtools.debug._STAR_console_STAR_.addSeparator();
cljs.core.apply.call(null,devtools.debug.log,cljs.core.cons.call(null,devtools.debug.logger.call(null,"console"),args));
return original_log_fn.apply(console,cljs.core.into_array.call(null,args));
};
var G__15938 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15938__delegate.call(this,args);};
G__15938.cljs$lang$maxFixedArity = 0;
G__15938.cljs$lang$applyTo = (function (arglist__15939){
var args = cljs.core.seq(arglist__15939);
return G__15938__delegate(args);
});
G__15938.cljs$core$IFn$_invoke$arity$variadic = G__15938__delegate;
return G__15938;
})()
;})(original_log_fn))
);
});
devtools.debug.init_BANG_ = (function init_BANG_(){if(cljs.core.truth_(devtools.debug._STAR_initialized_STAR_))
{return cljs.core.println.call(null,"devtools.debug already initialized, nothing to do");
} else
{devtools.debug.init_logger_BANG_.call(null);
devtools.debug.hijack_console_BANG_.call(null);
return devtools.debug._STAR_initialized_STAR_ = true;
}
});

//# sourceMappingURL=debug.js.map