// Compiled by ClojureScript 0.0-2371
goog.provide('medisoft.frontend.history');
goog.require('cljs.core');
goog.require('medisoft.frontend.logic');
goog.require('medisoft.frontend.log');
goog.require('bidi.bidi');
goog.require('goog.history.Html5History');
goog.require('medisoft.frontend.api');
goog.require('medisoft.frontend.logic');
goog.require('bidi.bidi');
goog.require('goog.events.EventType');
goog.require('medisoft.frontend.routes');
goog.require('medisoft.frontend.api');
goog.require('goog.events.BrowserEvent');
goog.require('goog.window');
goog.require('goog.History');
goog.require('goog.events');
goog.require('goog.history.Html5History');
goog.require('goog.events.Event');
goog.require('goog.history.Html5History');
goog.require('goog.window');
goog.require('cuerdas.core');
goog.require('cuerdas.core');
goog.require('goog.events');
goog.require('medisoft.frontend.routes');
goog.require('cuerdas.core');
goog.require('medisoft.frontend.log');
medisoft.frontend.history.handlers = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("employees","list","employees/list",-2006949664),new cljs.core.Keyword("patients","list","patients/list",-453576607),new cljs.core.Keyword("medicines","edit","medicines/edit",500893153),new cljs.core.Keyword("employees","create","employees/create",-1749638653),new cljs.core.Keyword("job-titles","list","job-titles/list",-638634234),new cljs.core.Keyword("medicines","list","medicines/list",-1495277844),new cljs.core.Keyword("job-titles","show","job-titles/show",-1982872596),new cljs.core.Keyword("home","dashboard","home/dashboard",-620150739),new cljs.core.Keyword("patients","show","patients/show",-1798797107),new cljs.core.Keyword("medicines","create","medicines/create",858792975),new cljs.core.Keyword("employees","edit","employees/edit",995723221),new cljs.core.Keyword("employees","show","employees/show",-127534506),new cljs.core.Keyword("medicines","show","medicines/show",1524988954),new cljs.core.Keyword("patients","create","patients/create",1288118394),new cljs.core.Keyword("patients","edit","patients/edit",-406191300),new cljs.core.Keyword("job-titles","create","job-titles/create",1203657629),new cljs.core.Keyword("job-titles","edit","job-titles/edit",-355152225)],[(function (){return medisoft.frontend.logic.set_current_page_BANG_.call(null,new cljs.core.Keyword("employees","list","employees/list",-2006949664));
}),(function (){return medisoft.frontend.logic.set_current_page_BANG_.call(null,new cljs.core.Keyword("patients","list","patients/list",-453576607));
}),(function (params){return medisoft.frontend.logic.set_current_page_BANG_.call(null,new cljs.core.Keyword("medicines","edit","medicines/edit",500893153),params);
}),(function (params){return medisoft.frontend.logic.set_current_page_BANG_.call(null,new cljs.core.Keyword("employees","create","employees/create",-1749638653),params);
}),(function (){return medisoft.frontend.logic.set_current_page_BANG_.call(null,new cljs.core.Keyword("job-titles","list","job-titles/list",-638634234));
}),(function (){return medisoft.frontend.logic.set_current_page_BANG_.call(null,new cljs.core.Keyword("medicines","list","medicines/list",-1495277844));
}),(function (params){return medisoft.frontend.logic.set_current_page_BANG_.call(null,new cljs.core.Keyword("job-titles","show","job-titles/show",-1982872596),params);
}),(function (){return medisoft.frontend.logic.set_current_page_BANG_.call(null,new cljs.core.Keyword("home","dashboard","home/dashboard",-620150739));
}),(function (params){return medisoft.frontend.logic.set_current_page_BANG_.call(null,new cljs.core.Keyword("patients","show","patients/show",-1798797107),params);
}),(function (params){return medisoft.frontend.logic.set_current_page_BANG_.call(null,new cljs.core.Keyword("medicines","create","medicines/create",858792975),params);
}),(function (params){return medisoft.frontend.logic.set_current_page_BANG_.call(null,new cljs.core.Keyword("employees","edit","employees/edit",995723221),params);
}),(function (params){return medisoft.frontend.logic.set_current_page_BANG_.call(null,new cljs.core.Keyword("employees","show","employees/show",-127534506),params);
}),(function (params){return medisoft.frontend.logic.set_current_page_BANG_.call(null,new cljs.core.Keyword("medicines","show","medicines/show",1524988954),params);
}),(function (params){return medisoft.frontend.logic.set_current_page_BANG_.call(null,new cljs.core.Keyword("patients","create","patients/create",1288118394),params);
}),(function (params){return medisoft.frontend.logic.set_current_page_BANG_.call(null,new cljs.core.Keyword("patients","edit","patients/edit",-406191300),params);
}),(function (params){return medisoft.frontend.logic.set_current_page_BANG_.call(null,new cljs.core.Keyword("job-titles","create","job-titles/create",1203657629),params);
}),(function (params){return medisoft.frontend.logic.set_current_page_BANG_.call(null,new cljs.core.Keyword("job-titles","edit","job-titles/edit",-355152225),params);
})]);
medisoft.frontend.history.history_impl = cljs.core.atom.call(null,null);
medisoft.frontend.history.navigate_to_BANG_ = (function navigate_to_BANG_(url){var url__$1 = cuerdas.core.replace_first.call(null,url,/^\//,"");medisoft.frontend.log.debug.call(null,"settting url to:",url__$1);
return cljs.core.deref.call(null,medisoft.frontend.history.history_impl).setToken(url__$1);
});
medisoft.frontend.history.match_bidi_route = (function match_bidi_route(path){var route = bidi.bidi.match_route.call(null,medisoft.frontend.routes.app_routes,path);return route;
});
medisoft.frontend.history.handle_dispatch = (function handle_dispatch(e){medisoft.frontend.log.debug.call(null,"navigation event: ",e);
var token = ("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.token));var bidi_route = medisoft.frontend.history.match_bidi_route.call(null,token);var handler = cljs.core.get.call(null,medisoft.frontend.history.handlers,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(bidi_route));if((cljs.core.not.call(null,cljs.core.deref.call(null,medisoft.frontend.api.logged_in_QMARK_))) && (cljs.core.not_EQ_.call(null,token,"/")))
{medisoft.frontend.log.debug.call(null,"user not logged in, returning to home");
return medisoft.frontend.history.navigate_to_BANG_.call(null,medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("home","dashboard","home/dashboard",-620150739)));
} else
{medisoft.frontend.log.debug.call(null,"navigated to route: ",bidi_route);
return handler.call(null,new cljs.core.Keyword(null,"route-params","route-params",2111411055).cljs$core$IFn$_invoke$arity$1(bidi_route));
}
});
/**
* Custom token transformer that preserves hashes
*/
medisoft.frontend.history.token_transformer = (function (){var transformer = (new Object());transformer.retrieveToken = ((function (transformer){
return (function (path_prefix,location){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,location.pathname,cljs.core.count.call(null,path_prefix)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4423__auto__ = location.search;if(cljs.core.truth_(temp__4423__auto__))
{var query = temp__4423__auto__;return query;
} else
{return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4423__auto__ = cljs.core.second.call(null,cuerdas.core.split.call(null,location.href,/#/));if(cljs.core.truth_(temp__4423__auto__))
{var hash = temp__4423__auto__;return ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash));
} else
{return null;
}
})()));
});})(transformer))
;
transformer.createUrl = ((function (transformer){
return (function (token,path_prefix,location){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(token));
});})(transformer))
;
return transformer;
})();
/**
* Lets us keep track of the history state, so that we don't dispatch twice on the same URL
* @param {...*} var_args
*/
medisoft.frontend.history.set_current_token_BANG_ = (function() { 
var set_current_token_BANG___delegate = function (history_imp,p__16183){var vec__16185 = p__16183;var token = cljs.core.nth.call(null,vec__16185,(0),null);return history_imp._current_token = (function (){var or__3607__auto__ = token;if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return history_imp.getToken();
}
})();
};
var set_current_token_BANG_ = function (history_imp,var_args){
var p__16183 = null;if (arguments.length > 1) {
  p__16183 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_current_token_BANG___delegate.call(this,history_imp,p__16183);};
set_current_token_BANG_.cljs$lang$maxFixedArity = 1;
set_current_token_BANG_.cljs$lang$applyTo = (function (arglist__16186){
var history_imp = cljs.core.first(arglist__16186);
var p__16183 = cljs.core.rest(arglist__16186);
return set_current_token_BANG___delegate(history_imp,p__16183);
});
set_current_token_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_current_token_BANG___delegate;
return set_current_token_BANG_;
})()
;
medisoft.frontend.history.setup_dispatcher_BANG_ = (function setup_dispatcher_BANG_(history_imp){return goog.events.listen(history_imp,goog.history.EventType.NAVIGATE,(function (e){medisoft.frontend.history.set_current_token_BANG_.call(null,history_imp);
return medisoft.frontend.history.handle_dispatch.call(null,e);
}));
});
/**
* We need lots of control over when we start listening to navigation events because
* we may want to ignore the first event if the server sends an error status code (e.g. 401)
* This function lets us ignore the first event that history-imp fires when we enable it. We'll
* manually dispatch if there is no error code from the server.
*/
medisoft.frontend.history.bootstrap_dispatcher_BANG_ = (function bootstrap_dispatcher_BANG_(history_imp){return goog.events.listenOnce(history_imp,goog.history.EventType.NAVIGATE,(function (e){medisoft.frontend.history.set_current_token_BANG_.call(null,history_imp);
medisoft.frontend.history.handle_dispatch.call(null,e);
return medisoft.frontend.history.setup_dispatcher_BANG_.call(null,history_imp);
}));
});
/**
* Stops the browser's popstate from triggering NAVIGATION events unless the url has really
* changed. Fixes duplicate dispatch in Safari and the build machines.
*/
medisoft.frontend.history.disable_erroneous_popstate_BANG_ = (function disable_erroneous_popstate_BANG_(history_imp){var window = history_imp.window_;goog.events.removeAll(window,goog.events.EventType.POPSTATE);
return goog.events.listen(window,goog.events.EventType.POPSTATE,((function (window){
return (function (){if(cljs.core._EQ_.call(null,history_imp.getToken(),history_imp._current_token))
{return medisoft.frontend.log.debug.call(null,"Ignoring duplicate dispatch event to",history_imp.getToken());
} else
{return history_imp.onHistoryEvent_();
}
});})(window))
);
});
/**
* Returns the route fragment if this is a route that we've don't dispatch
* on fragments for.
*/
medisoft.frontend.history.route_fragment = (function route_fragment(path){if(cljs.core.truth_(cuerdas.core.contains_QMARK_.call(null,path,"#")))
{return cljs.core.last.call(null,cuerdas.core.split.call(null,path,/#/));
} else
{return null;
}
});
/**
* True if the two tokens are the same except for the fragment
*/
medisoft.frontend.history.path_matches_QMARK_ = (function path_matches_QMARK_(token_a,token_b){return cljs.core._EQ_.call(null,cljs.core.first.call(null,cuerdas.core.split.call(null,token_a,/#/)),cljs.core.first.call(null,cuerdas.core.split.call(null,token_b,/#/)));
});
medisoft.frontend.history.new_window_click_QMARK_ = (function new_window_click_QMARK_(event){var or__3607__auto__ = event.isButton(goog.events.BrowserEvent.MouseButton.MIDDLE);if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{var and__3595__auto__ = event.platformModifierKey;if(cljs.core.truth_(and__3595__auto__))
{return event.isButton(goog.events.BrowserEvent.MouseButton.LEFT);
} else
{return and__3595__auto__;
}
}
});
medisoft.frontend.history.setup_link_dispatcher_BANG_ = (function setup_link_dispatcher_BANG_(history_imp,top_level_node){var dom_helper = (new goog.dom.DomHelper());return goog.events.listen(top_level_node,"click",((function (dom_helper){
return (function (p1__16187_SHARP_){var _target = p1__16187_SHARP_.target;var target = ((cljs.core._EQ_.call(null,_target.tagName,"A"))?_target:dom_helper.getAncestorByTagNameAndClass(_target,"A"));var location = (cljs.core.truth_(target)?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(target.pathname)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(target.search)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(target.hash)):null);var new_token = ((cljs.core.seq.call(null,location))?cljs.core.subs.call(null,location,(1)):null);if((cljs.core.seq.call(null,location)) && (cljs.core.not.call(null,(function (){var value = cuerdas.core.strip.call(null,target.attributes.href.value);var or__3607__auto__ = cuerdas.core.blank_QMARK_.call(null,value);if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return cljs.core._EQ_.call(null,"#",value);
}
})())) && (cljs.core._EQ_.call(null,window.location.hostname,target.hostname)) && (cljs.core.not.call(null,(function (){var or__3607__auto__ = medisoft.frontend.history.new_window_click_QMARK_.call(null,p1__16187_SHARP_);if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return cljs.core._EQ_.call(null,target.target,"_blank");
}
})())))
{p1__16187_SHARP_.stopPropagation();
p1__16187_SHARP_.preventDefault();
if(cljs.core.truth_((function (){var and__3595__auto__ = medisoft.frontend.history.route_fragment.call(null,location);if(cljs.core.truth_(and__3595__auto__))
{return medisoft.frontend.history.path_matches_QMARK_.call(null,history_imp.getToken(),new_token);
} else
{return and__3595__auto__;
}
})()))
{medisoft.frontend.log.debug.call(null,"scrolling to hash for",location);
return history_imp.replaceToken(new_token);
} else
{medisoft.frontend.log.debug.call(null,"navigating to",location);
return history_imp.setToken(new_token);
}
} else
{return null;
}
});})(dom_helper))
);
});
medisoft.frontend.history.new_history_impl = (function new_history_impl(top_level_node){var dom_helper_16190 = (new goog.dom.DomHelper());var node_16191 = dom_helper_16190.createDom("input",{"class": "history hide"});dom_helper_16190.append(node_16191);
var G__16189 = (new goog.history.Html5History(window,medisoft.frontend.history.token_transformer));G__16189.setUseFragment(false);
G__16189.setPathPrefix("/");
medisoft.frontend.history.bootstrap_dispatcher_BANG_.call(null,G__16189);
medisoft.frontend.history.set_current_token_BANG_.call(null,G__16189);
medisoft.frontend.history.disable_erroneous_popstate_BANG_.call(null,G__16189);
medisoft.frontend.history.setup_link_dispatcher_BANG_.call(null,G__16189,top_level_node);
return G__16189;
});
medisoft.frontend.history.setup_history_BANG_ = (function setup_history_BANG_(top_level_node){var history = medisoft.frontend.history.new_history_impl.call(null,top_level_node);cljs.core.reset_BANG_.call(null,medisoft.frontend.history.history_impl,history);
return history.setEnabled(true);
});

//# sourceMappingURL=history.js.map