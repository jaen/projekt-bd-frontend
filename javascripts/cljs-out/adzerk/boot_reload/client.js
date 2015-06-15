// Compiled by ClojureScript 0.0-2371
goog.provide('adzerk.boot_reload.client');
goog.require('cljs.core');
goog.require('adzerk.boot_reload.reload');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
goog.require('adzerk.boot_reload.websocket');
goog.require('adzerk.boot_reload.websocket');
goog.require('adzerk.boot_reload.reload');
goog.require('clojure.browser.net');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('clojure.browser.event');
adzerk.boot_reload.client.ws_conn = cljs.core.atom.call(null,null);
adzerk.boot_reload.client.alive_QMARK_ = (function alive_QMARK_(){return !((cljs.core.deref.call(null,adzerk.boot_reload.client.ws_conn) == null));
});
adzerk.boot_reload.client.patch_goog_base_BANG_ = (function patch_goog_base_BANG_(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = (function (file){if(cljs.core.truth_(goog.inHtmlDocument_()))
{return goog.net.jsloader.load(file);
} else
{return null;
}
});
});
/**
* @param {...*} var_args
*/
adzerk.boot_reload.client.connect = (function() { 
var connect__delegate = function (url,p__14025){var vec__14027 = p__14025;var opts = cljs.core.nth.call(null,vec__14027,(0),null);var conn = adzerk.boot_reload.websocket.websocket_connection.call(null);adzerk.boot_reload.client.patch_goog_base_BANG_.call(null);
cljs.core.reset_BANG_.call(null,adzerk.boot_reload.client.ws_conn,conn);
clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"opened","opened",-1451743091),((function (conn,vec__14027,opts){
return (function (evt){clojure.browser.net.transmit.call(null,conn,cljs.core.pr_str.call(null,window.location.protocol));
return console.info("Reload websocket connected.");
});})(conn,vec__14027,opts))
);
clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"message","message",-406056002),((function (conn,vec__14027,opts){
return (function (evt){var msg = cljs.reader.read_string.call(null,evt.message);if(cljs.core.vector_QMARK_.call(null,msg))
{return adzerk.boot_reload.reload.reload.call(null,opts,msg);
} else
{return null;
}
});})(conn,vec__14027,opts))
);
clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"closed","closed",-919675359),((function (conn,vec__14027,opts){
return (function (evt){cljs.core.reset_BANG_.call(null,adzerk.boot_reload.client.ws_conn,null);
return console.info("Reload websocket connection closed.");
});})(conn,vec__14027,opts))
);
clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"error","error",-978969032),((function (conn,vec__14027,opts){
return (function (evt){return console.error("Reload websocket error:",evt);
});})(conn,vec__14027,opts))
);
return clojure.browser.net.connect.call(null,conn,url);
};
var connect = function (url,var_args){
var p__14025 = null;if (arguments.length > 1) {
  p__14025 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return connect__delegate.call(this,url,p__14025);};
connect.cljs$lang$maxFixedArity = 1;
connect.cljs$lang$applyTo = (function (arglist__14028){
var url = cljs.core.first(arglist__14028);
var p__14025 = cljs.core.rest(arglist__14028);
return connect__delegate(url,p__14025);
});
connect.cljs$core$IFn$_invoke$arity$variadic = connect__delegate;
return connect;
})()
;

//# sourceMappingURL=client.js.map