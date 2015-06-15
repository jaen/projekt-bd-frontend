// Compiled by ClojureScript 0.0-2371
goog.provide('adzerk.boot_reload.websocket');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('clojure.browser.net');
goog.require('clojure.browser.net');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('clojure.browser.event');
goog.require('goog.net.WebSocket');
goog.require('goog.net.WebSocket');
adzerk.boot_reload.websocket.IWebSocket = (function (){var obj14167 = {};return obj14167;
})();
adzerk.boot_reload.websocket.open_QMARK_ = (function open_QMARK_(this$){if((function (){var and__3595__auto__ = this$;if(and__3595__auto__)
{return this$.adzerk$boot_reload$websocket$IWebSocket$open_QMARK_$arity$1;
} else
{return and__3595__auto__;
}
})())
{return this$.adzerk$boot_reload$websocket$IWebSocket$open_QMARK_$arity$1(this$);
} else
{var x__4244__auto__ = (((this$ == null))?null:this$);return (function (){var or__3607__auto__ = (adzerk.boot_reload.websocket.open_QMARK_[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (adzerk.boot_reload.websocket.open_QMARK_["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWebSocket.open?",this$);
}
}
})().call(null,this$);
}
});
adzerk.boot_reload.websocket.websocket_connection = (function() {
var websocket_connection = null;
var websocket_connection__0 = (function (){return websocket_connection.call(null,null,null);
});
var websocket_connection__1 = (function (auto_reconnect_QMARK_){return websocket_connection.call(null,auto_reconnect_QMARK_,null);
});
var websocket_connection__2 = (function (auto_reconnect_QMARK_,next_reconnect_fn){return (new goog.net.WebSocket(auto_reconnect_QMARK_,next_reconnect_fn));
});
websocket_connection = function(auto_reconnect_QMARK_,next_reconnect_fn){
switch(arguments.length){
case 0:
return websocket_connection__0.call(this);
case 1:
return websocket_connection__1.call(this,auto_reconnect_QMARK_);
case 2:
return websocket_connection__2.call(this,auto_reconnect_QMARK_,next_reconnect_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
websocket_connection.cljs$core$IFn$_invoke$arity$0 = websocket_connection__0;
websocket_connection.cljs$core$IFn$_invoke$arity$1 = websocket_connection__1;
websocket_connection.cljs$core$IFn$_invoke$arity$2 = websocket_connection__2;
return websocket_connection;
})()
;
goog.net.WebSocket.prototype.adzerk$boot_reload$websocket$IWebSocket$ = true;
goog.net.WebSocket.prototype.adzerk$boot_reload$websocket$IWebSocket$open_QMARK_$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.isOpen(cljs.core.List.EMPTY);
});
goog.net.WebSocket.prototype.clojure$browser$net$IConnection$ = true;
goog.net.WebSocket.prototype.clojure$browser$net$IConnection$connect$arity$2 = (function (this$,url){var this$__$1 = this;return clojure.browser.net.connect.call(null,this$__$1,url,null);
});
goog.net.WebSocket.prototype.clojure$browser$net$IConnection$connect$arity$3 = (function (this$,url,protocol){var this$__$1 = this;return this$__$1.open(url,protocol);
});
goog.net.WebSocket.prototype.clojure$browser$net$IConnection$transmit$arity$2 = (function (this$,message){var this$__$1 = this;return this$__$1.send(message);
});
goog.net.WebSocket.prototype.clojure$browser$net$IConnection$close$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.close(cljs.core.List.EMPTY);
});
goog.net.WebSocket.prototype.clojure$browser$event$IEventType$ = true;
goog.net.WebSocket.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (this$__$1){
return (function (p__14168){var vec__14169 = p__14168;var k = cljs.core.nth.call(null,vec__14169,(0),null);var v = cljs.core.nth.call(null,vec__14169,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.WebSocket.EventType))));
});

//# sourceMappingURL=websocket.js.map