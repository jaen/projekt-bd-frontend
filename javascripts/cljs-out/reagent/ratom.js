// Compiled by ClojureScript 0.0-2371
goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.util');
if(typeof reagent.ratom.debug !== 'undefined')
{} else
{reagent.ratom.debug = false;
}
if(typeof reagent.ratom._running !== 'undefined')
{} else
{reagent.ratom._running = cljs.core.atom.call(null,(0));
}
reagent.ratom.running = (function running(){return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){obj.cljsCaptured = null;
var _STAR_ratom_context_STAR_16026 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = obj;
return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_16026;
}});
reagent.ratom.captured = (function captured(obj){var c = obj.cljsCaptured;obj.cljsCaptured = null;
return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){var obj = reagent.ratom._STAR_ratom_context_STAR_;if((obj == null))
{return null;
} else
{var captured = obj.cljsCaptured;return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});
reagent.ratom.IReactiveAtom = (function (){var obj16028 = {};return obj16028;
})();

/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.cljs$lang$type = true;
reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";
reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4184__auto__,writer__4185__auto__,opt__4186__auto__){return cljs.core._write.call(null,writer__4185__auto__,"reagent.ratom/RAtom");
});
reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = true;
reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;if((self__.validator == null))
{} else
{if(cljs.core.truth_(self__.validator.call(null,new_value)))
{} else
{throw (new Error(("Assert failed: Validator rejected reference state\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null)))))));
}
}
var old_value = self__.state;self__.state = new_value;
if((self__.watches == null))
{} else
{cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}
return new_value;
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){f.call(null,key,this$__$1,oldval,newval);
return null;
});})(this$__$1))
,null,self__.watches);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
return self__.state;
});
reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){return (new reagent.ratom.RAtom(state,meta,validator,watches));
});
/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__16032__delegate = function (x,p__16029){var map__16031 = p__16029;var map__16031__$1 = ((cljs.core.seq_QMARK_.call(null,map__16031))?cljs.core.apply.call(null,cljs.core.hash_map,map__16031):map__16031);var meta = cljs.core.get.call(null,map__16031__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));var validator = cljs.core.get.call(null,map__16031__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__16032 = function (x,var_args){
var p__16029 = null;if (arguments.length > 1) {
  p__16029 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__16032__delegate.call(this,x,p__16029);};
G__16032.cljs$lang$maxFixedArity = 1;
G__16032.cljs$lang$applyTo = (function (arglist__16033){
var x = cljs.core.first(arglist__16033);
var p__16029 = cljs.core.rest(arglist__16033);
return G__16032__delegate(x,p__16029);
});
G__16032.cljs$core$IFn$_invoke$arity$variadic = G__16032__delegate;
return G__16032;
})()
;
atom = function(x,var_args){
var p__16029 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;

/**
* @constructor
*/
reagent.ratom.RCursor = (function (ratom,path,reaction){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.cljs$lang$type = true;
reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";
reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4184__auto__,writer__4185__auto__,opt__4186__auto__){return cljs.core._write.call(null,writer__4185__auto__,"reagent.ratom/RCursor");
});
reagent.ratom.RCursor.prototype._reaction = (function (){var self__ = this;
var this$ = this;if((self__.reaction == null))
{return self__.reaction = (((function (){var G__16040 = self__.ratom;if(G__16040)
{var bit__4271__auto__ = (G__16040.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__4271__auto__) || (G__16040.cljs$core$IDeref$))
{return true;
} else
{if((!G__16040.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__16040);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__16040);
}
})())?reagent.ratom.make_reaction.call(null,((function (this$){
return (function (){return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
});})(this$))
,new cljs.core.Keyword(null,"on-set","on-set",-140953470),((cljs.core._EQ_.call(null,self__.path,cljs.core.PersistentVector.EMPTY))?((function (this$){
return (function (p1__16035_SHARP_,p2__16034_SHARP_){return cljs.core.reset_BANG_.call(null,self__.ratom,p2__16034_SHARP_);
});})(this$))
:((function (this$){
return (function (p1__16037_SHARP_,p2__16036_SHARP_){return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,p2__16036_SHARP_);
});})(this$))
)):reagent.ratom.make_reaction.call(null,((function (this$){
return (function (){return self__.ratom.call(null,self__.path);
});})(this$))
,new cljs.core.Keyword(null,"on-set","on-set",-140953470),((function (this$){
return (function (p1__16039_SHARP_,p2__16038_SHARP_){return self__.ratom.call(null,self__.path,p2__16038_SHARP_);
});})(this$))
));
} else
{return self__.reaction;
}
});
reagent.ratom.RCursor.prototype._peek = (function (){var self__ = this;
var this$ = this;var _STAR_ratom_context_STAR_16041 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = null;
return cljs.core._deref.call(null,this$._reaction());
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_16041;
}});
reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = true;
reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,("#<Cursor: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path)+" "));
cljs.core.pr_writer.call(null,a__$1._peek(),writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});
reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.call(null,self__.path,other.path)) && (cljs.core._EQ_.call(null,self__.ratom,other.ratom));
});
reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){var self__ = this;
var this$__$1 = this;return cljs.core._reset_BANG_.call(null,this$__$1._reaction(),new_value);
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f);
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x);
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x,y);
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x,y,more);
});
reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core._notify_watches.call(null,this$__$1._reaction(),oldval,newval);
});
reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return cljs.core._add_watch.call(null,this$__$1._reaction(),key,f);
});
reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return cljs.core._remove_watch.call(null,this$__$1._reaction(),key);
});
reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._deref.call(null,this$__$1._reaction());
});
reagent.ratom.__GT_RCursor = (function __GT_RCursor(ratom,path,reaction){return (new reagent.ratom.RCursor(ratom,path,reaction));
});
reagent.ratom.cursor = (function cursor(src,path){if((function (){var G__16046 = path;if(G__16046)
{var bit__4271__auto__ = (G__16046.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__4271__auto__) || (G__16046.cljs$core$IDeref$))
{return true;
} else
{if((!G__16046.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__16046);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__16046);
}
})())
{if(typeof console !== 'undefined')
{console.warn(("Warning: Calling cursor with an atom as the second arg is deprecated, in (cursor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,path))+")"));
} else
{}
if((function (){var G__16047 = path;if(G__16047)
{var bit__4271__auto__ = null;if(cljs.core.truth_((function (){var or__3607__auto__ = bit__4271__auto__;if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return G__16047.reagent$ratom$IReactiveAtom$;
}
})()))
{return true;
} else
{if((!G__16047.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__16047);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__16047);
}
})())
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("src must be a reactive atom, not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,path))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"path","path",1452340359,null)))))));
}
return (new reagent.ratom.RCursor(path,src,null));
} else
{if((function (){var or__3607__auto__ = (function (){var G__16049 = src;if(G__16049)
{var bit__4271__auto__ = null;if(cljs.core.truth_((function (){var or__3607__auto__ = bit__4271__auto__;if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return G__16049.reagent$ratom$IReactiveAtom$;
}
})()))
{return true;
} else
{if((!G__16049.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__16049);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__16049);
}
})();if(or__3607__auto__)
{return or__3607__auto__;
} else
{return (cljs.core.ifn_QMARK_.call(null,src)) && (!(cljs.core.vector_QMARK_.call(null,src)));
}
})())
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("src must be a reactive atom or a function, not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,src))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"src","src",-10544524,null))))))))));
}
return (new reagent.ratom.RCursor(src,path,null));
}
});
reagent.ratom.IDisposable = (function (){var obj16051 = {};return obj16051;
})();
reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){if((function (){var and__3595__auto__ = this$;if(and__3595__auto__)
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else
{return and__3595__auto__;
}
})())
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else
{var x__4244__auto__ = (((this$ == null))?null:this$);return (function (){var or__3607__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IRunnable = (function (){var obj16053 = {};return obj16053;
})();
reagent.ratom.run = (function run(this$){if((function (){var and__3595__auto__ = this$;if(and__3595__auto__)
{return this$.reagent$ratom$IRunnable$run$arity$1;
} else
{return and__3595__auto__;
}
})())
{return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else
{var x__4244__auto__ = (((this$ == null))?null:this$);return (function (){var or__3607__auto__ = (reagent.ratom.run[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (reagent.ratom.run["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IComputedImpl = (function (){var obj16055 = {};return obj16055;
})();
reagent.ratom._update_watching = (function _update_watching(this$,derefed){if((function (){var and__3595__auto__ = this$;if(and__3595__auto__)
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else
{return and__3595__auto__;
}
})())
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else
{var x__4244__auto__ = (((this$ == null))?null:this$);return (function (){var or__3607__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (reagent.ratom._update_watching["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});
reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){if((function (){var and__3595__auto__ = k;if(and__3595__auto__)
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else
{return and__3595__auto__;
}
})())
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else
{var x__4244__auto__ = (((k == null))?null:k);return (function (){var or__3607__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (reagent.ratom._handle_change["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});
reagent.ratom._peek_at = (function _peek_at(this$){if((function (){var and__3595__auto__ = this$;if(and__3595__auto__)
{return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1;
} else
{return and__3595__auto__;
}
})())
{return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1(this$);
} else
{var x__4244__auto__ = (((this$ == null))?null:this$);return (function (){var or__3607__auto__ = (reagent.ratom._peek_at[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (reagent.ratom._peek_at["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-peek-at",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.cljs$lang$type = true;
reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";
reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4184__auto__,writer__4185__auto__,opt__4186__auto__){return cljs.core._write.call(null,writer__4185__auto__,"reagent.ratom/Reaction");
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((function (){var and__3595__auto__ = self__.active_QMARK_;if(cljs.core.truth_(and__3595__auto__))
{return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else
{return and__3595__auto__;
}
})()))
{self__.dirty_QMARK_ = true;
return (function (){var or__3607__auto__ = self__.auto_run;if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return reagent.ratom.run;
}
})().call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){var self__ = this;
var this$__$1 = this;var seq__16056_16069 = cljs.core.seq.call(null,derefed);var chunk__16057_16070 = null;var count__16058_16071 = (0);var i__16059_16072 = (0);while(true){
if((i__16059_16072 < count__16058_16071))
{var w_16073 = cljs.core._nth.call(null,chunk__16057_16070,i__16059_16072);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_16073))
{} else
{cljs.core.add_watch.call(null,w_16073,this$__$1,reagent.ratom._handle_change);
}
{
var G__16074 = seq__16056_16069;
var G__16075 = chunk__16057_16070;
var G__16076 = count__16058_16071;
var G__16077 = (i__16059_16072 + (1));
seq__16056_16069 = G__16074;
chunk__16057_16070 = G__16075;
count__16058_16071 = G__16076;
i__16059_16072 = G__16077;
continue;
}
} else
{var temp__4423__auto___16078 = cljs.core.seq.call(null,seq__16056_16069);if(temp__4423__auto___16078)
{var seq__16056_16079__$1 = temp__4423__auto___16078;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16056_16079__$1))
{var c__4377__auto___16080 = cljs.core.chunk_first.call(null,seq__16056_16079__$1);{
var G__16081 = cljs.core.chunk_rest.call(null,seq__16056_16079__$1);
var G__16082 = c__4377__auto___16080;
var G__16083 = cljs.core.count.call(null,c__4377__auto___16080);
var G__16084 = (0);
seq__16056_16069 = G__16081;
chunk__16057_16070 = G__16082;
count__16058_16071 = G__16083;
i__16059_16072 = G__16084;
continue;
}
} else
{var w_16085 = cljs.core.first.call(null,seq__16056_16079__$1);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_16085))
{} else
{cljs.core.add_watch.call(null,w_16085,this$__$1,reagent.ratom._handle_change);
}
{
var G__16086 = cljs.core.next.call(null,seq__16056_16079__$1);
var G__16087 = null;
var G__16088 = (0);
var G__16089 = (0);
seq__16056_16069 = G__16086;
chunk__16057_16070 = G__16087;
count__16058_16071 = G__16088;
i__16059_16072 = G__16089;
continue;
}
}
} else
{}
}
break;
}
var seq__16060_16090 = cljs.core.seq.call(null,self__.watching);var chunk__16061_16091 = null;var count__16062_16092 = (0);var i__16063_16093 = (0);while(true){
if((i__16063_16093 < count__16062_16092))
{var w_16094 = cljs.core._nth.call(null,chunk__16061_16091,i__16063_16093);if(cljs.core.contains_QMARK_.call(null,derefed,w_16094))
{} else
{cljs.core.remove_watch.call(null,w_16094,this$__$1);
}
{
var G__16095 = seq__16060_16090;
var G__16096 = chunk__16061_16091;
var G__16097 = count__16062_16092;
var G__16098 = (i__16063_16093 + (1));
seq__16060_16090 = G__16095;
chunk__16061_16091 = G__16096;
count__16062_16092 = G__16097;
i__16063_16093 = G__16098;
continue;
}
} else
{var temp__4423__auto___16099 = cljs.core.seq.call(null,seq__16060_16090);if(temp__4423__auto___16099)
{var seq__16060_16100__$1 = temp__4423__auto___16099;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16060_16100__$1))
{var c__4377__auto___16101 = cljs.core.chunk_first.call(null,seq__16060_16100__$1);{
var G__16102 = cljs.core.chunk_rest.call(null,seq__16060_16100__$1);
var G__16103 = c__4377__auto___16101;
var G__16104 = cljs.core.count.call(null,c__4377__auto___16101);
var G__16105 = (0);
seq__16060_16090 = G__16102;
chunk__16061_16091 = G__16103;
count__16062_16092 = G__16104;
i__16063_16093 = G__16105;
continue;
}
} else
{var w_16106 = cljs.core.first.call(null,seq__16060_16100__$1);if(cljs.core.contains_QMARK_.call(null,derefed,w_16106))
{} else
{cljs.core.remove_watch.call(null,w_16106,this$__$1);
}
{
var G__16107 = cljs.core.next.call(null,seq__16060_16100__$1);
var G__16108 = null;
var G__16109 = (0);
var G__16110 = (0);
seq__16060_16090 = G__16107;
chunk__16061_16091 = G__16108;
count__16062_16092 = G__16109;
i__16063_16093 = G__16110;
continue;
}
}
} else
{}
}
break;
}
return self__.watching = derefed;
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_peek_at$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.not.call(null,self__.dirty_QMARK_))
{return self__.state;
} else
{var _STAR_ratom_context_STAR_16064 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = null;
return cljs.core._deref.call(null,this$__$1);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_16064;
}}
});
reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = true;
reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;cljs.core._write.call(null,writer,("#<Reaction "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,this$__$1))+": "));
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var seq__16065_16111 = cljs.core.seq.call(null,self__.watching);var chunk__16066_16112 = null;var count__16067_16113 = (0);var i__16068_16114 = (0);while(true){
if((i__16068_16114 < count__16067_16113))
{var w_16115 = cljs.core._nth.call(null,chunk__16066_16112,i__16068_16114);cljs.core.remove_watch.call(null,w_16115,this$__$1);
{
var G__16116 = seq__16065_16111;
var G__16117 = chunk__16066_16112;
var G__16118 = count__16067_16113;
var G__16119 = (i__16068_16114 + (1));
seq__16065_16111 = G__16116;
chunk__16066_16112 = G__16117;
count__16067_16113 = G__16118;
i__16068_16114 = G__16119;
continue;
}
} else
{var temp__4423__auto___16120 = cljs.core.seq.call(null,seq__16065_16111);if(temp__4423__auto___16120)
{var seq__16065_16121__$1 = temp__4423__auto___16120;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16065_16121__$1))
{var c__4377__auto___16122 = cljs.core.chunk_first.call(null,seq__16065_16121__$1);{
var G__16123 = cljs.core.chunk_rest.call(null,seq__16065_16121__$1);
var G__16124 = c__4377__auto___16122;
var G__16125 = cljs.core.count.call(null,c__4377__auto___16122);
var G__16126 = (0);
seq__16065_16111 = G__16123;
chunk__16066_16112 = G__16124;
count__16067_16113 = G__16125;
i__16068_16114 = G__16126;
continue;
}
} else
{var w_16127 = cljs.core.first.call(null,seq__16065_16121__$1);cljs.core.remove_watch.call(null,w_16127,this$__$1);
{
var G__16128 = cljs.core.next.call(null,seq__16065_16121__$1);
var G__16129 = null;
var G__16130 = (0);
var G__16131 = (0);
seq__16065_16111 = G__16128;
chunk__16066_16112 = G__16129;
count__16067_16113 = G__16130;
i__16068_16114 = G__16131;
continue;
}
}
} else
{}
}
break;
}
self__.watching = null;
self__.state = null;
self__.dirty_QMARK_ = true;
if(cljs.core.truth_(self__.active_QMARK_))
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else
{}
self__.active_QMARK_ = false;
} else
{}
if(cljs.core.truth_(self__.on_dispose))
{return self__.on_dispose.call(null);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){var self__ = this;
var a__$1 = this;var oldval = self__.state;self__.state = newval;
if(cljs.core.truth_(self__.on_set))
{self__.dirty_QMARK_ = true;
self__.on_set.call(null,oldval,newval);
} else
{}
cljs.core._notify_watches.call(null,a__$1,oldval,newval);
return newval;
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,reagent.ratom._peek_at.call(null,a__$1)));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,reagent.ratom._peek_at.call(null,a__$1),x));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,reagent.ratom._peek_at.call(null,a__$1),x,y));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,reagent.ratom._peek_at.call(null,a__$1),x,y,more));
});
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var oldstate = self__.state;var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);var derefed = reagent.ratom.captured.call(null,this$__$1);if(cljs.core.not_EQ_.call(null,derefed,self__.watching))
{reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else
{}
if(cljs.core.truth_(self__.active_QMARK_))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else
{}
self__.active_QMARK_ = true;
}
self__.dirty_QMARK_ = false;
self__.state = res;
cljs.core._notify_watches.call(null,this$__$1,oldstate,self__.state);
return res;
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f__$1){f__$1.call(null,key,this$__$1,oldval,newval);
return null;
});})(this$__$1))
,null,self__.watches);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;self__.watches = cljs.core.dissoc.call(null,self__.watches,k);
if((cljs.core.empty_QMARK_.call(null,self__.watches)) && (cljs.core.not.call(null,self__.auto_run)))
{return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((function (){var or__3607__auto__ = self__.auto_run;if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return cljs.core.some_QMARK_.call(null,reagent.ratom._STAR_ratom_context_STAR_);
}
})()))
{reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
if(cljs.core.truth_(self__.dirty_QMARK_))
{return reagent.ratom.run.call(null,this$__$1);
} else
{return self__.state;
}
} else
{if(cljs.core.truth_(self__.dirty_QMARK_))
{var oldstate_16132 = self__.state;self__.state = self__.f.call(null);
if((oldstate_16132 === self__.state))
{} else
{cljs.core._notify_watches.call(null,this$__$1,oldstate_16132,self__.state);
}
} else
{}
return self__.state;
}
});
reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});
/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__16133){var map__16135 = p__16133;var map__16135__$1 = ((cljs.core.seq_QMARK_.call(null,map__16135))?cljs.core.apply.call(null,cljs.core.hash_map,map__16135):map__16135);var auto_run = cljs.core.get.call(null,map__16135__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));var on_set = cljs.core.get.call(null,map__16135__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));var on_dispose = cljs.core.get.call(null,map__16135__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));var derefed = cljs.core.get.call(null,map__16135__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);var active = !((derefed == null));var dirty = !(active);var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,null,runner,on_set,on_dispose));if((derefed == null))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else
{}
reagent.ratom._update_watching.call(null,reaction,derefed);
}
return reaction;
};
var make_reaction = function (f,var_args){
var p__16133 = null;if (arguments.length > 1) {
  p__16133 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_reaction__delegate.call(this,f,p__16133);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__16136){
var f = cljs.core.first(arglist__16136);
var p__16133 = cljs.core.rest(arglist__16136);
return make_reaction__delegate(f,p__16133);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

/**
* @constructor
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
})
reagent.ratom.Wrapper.cljs$lang$type = true;
reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper";
reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4184__auto__,writer__4185__auto__,opt__4186__auto__){return cljs.core._write.call(null,writer__4185__auto__,"reagent.ratom/Wrapper");
});
reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((function (){var and__3595__auto__ = self__.changed;if(cljs.core.truth_(and__3595__auto__))
{return cljs.core.some_QMARK_.call(null,reagent.ratom._STAR_ratom_context_STAR_);
} else
{return and__3595__auto__;
}
})()))
{if(typeof console !== 'undefined')
{console.warn(("Warning: derefing stale wrap: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,this$__$1))));
} else
{}
} else
{}

return self__.state;
});
reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){var self__ = this;
var this$__$1 = this;var oldval = self__.state;self__.changed = true;
self__.state = newval;
if((self__.watches == null))
{} else
{cljs.core._notify_watches.call(null,this$__$1,oldval,newval);
}
self__.callback.call(null,newval);
return newval;
});
reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});
reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});
reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});
reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});
reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;return ((other instanceof reagent.ratom.Wrapper)) && (cljs.core.not.call(null,self__.changed)) && (cljs.core.not.call(null,other.changed)) && (cljs.core._EQ_.call(null,self__.state,other.state)) && (cljs.core._EQ_.call(null,self__.callback,other.callback));
});
reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){f.call(null,key,this$__$1,oldval,newval);
return null;
});})(this$__$1))
,null,self__.watches);
});
reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;cljs.core._write.call(null,writer,"#<wrap: ");
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.__GT_Wrapper = (function __GT_Wrapper(state,callback,changed,watches){return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});
reagent.ratom.make_wrapper = (function make_wrapper(value,callback_fn,args){return (new reagent.ratom.Wrapper(value,(new reagent.impl.util.partial_ifn(callback_fn,args,null)),false,null));
});

//# sourceMappingURL=ratom.js.map