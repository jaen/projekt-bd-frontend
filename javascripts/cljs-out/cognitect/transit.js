// Compiled by ClojureScript 0.0-2371
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;if((other instanceof cljs.core.UUID))
{return (this$__$1.uuid === other.uuid);
} else
{if((other instanceof com.cognitect.transit.types.UUID))
{return (this$__$1.uuid === other.toString());
} else
{return false;

}
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;
goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;if((other instanceof cljs.core.UUID))
{return cljs.core._equiv.call(null,other,this$__$1);
} else
{return this$__$1.equiv(other);
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){var uuid__$1 = this;return cljs.core._write.call(null,writer,("#uuid \""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid__$1.toString())+"\""));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__16739_16743 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__16740_16744 = null;var count__16741_16745 = (0);var i__16742_16746 = (0);while(true){
if((i__16742_16746 < count__16741_16745))
{var k_16747 = cljs.core._nth.call(null,chunk__16740_16744,i__16742_16746);var v_16748 = (b[k_16747]);(a[k_16747] = v_16748);
{
var G__16749 = seq__16739_16743;
var G__16750 = chunk__16740_16744;
var G__16751 = count__16741_16745;
var G__16752 = (i__16742_16746 + (1));
seq__16739_16743 = G__16749;
chunk__16740_16744 = G__16750;
count__16741_16745 = G__16751;
i__16742_16746 = G__16752;
continue;
}
} else
{var temp__4423__auto___16753 = cljs.core.seq.call(null,seq__16739_16743);if(temp__4423__auto___16753)
{var seq__16739_16754__$1 = temp__4423__auto___16753;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16739_16754__$1))
{var c__4377__auto___16755 = cljs.core.chunk_first.call(null,seq__16739_16754__$1);{
var G__16756 = cljs.core.chunk_rest.call(null,seq__16739_16754__$1);
var G__16757 = c__4377__auto___16755;
var G__16758 = cljs.core.count.call(null,c__4377__auto___16755);
var G__16759 = (0);
seq__16739_16743 = G__16756;
chunk__16740_16744 = G__16757;
count__16741_16745 = G__16758;
i__16742_16746 = G__16759;
continue;
}
} else
{var k_16760 = cljs.core.first.call(null,seq__16739_16754__$1);var v_16761 = (b[k_16760]);(a[k_16760] = v_16761);
{
var G__16762 = cljs.core.next.call(null,seq__16739_16754__$1);
var G__16763 = null;
var G__16764 = (0);
var G__16765 = (0);
seq__16739_16743 = G__16762;
chunk__16740_16744 = G__16763;
count__16741_16745 = G__16764;
i__16742_16746 = G__16765;
continue;
}
}
} else
{}
}
break;
}
return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.cljs$lang$type = true;
cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4184__auto__,writer__4185__auto__,opt__4186__auto__){return cljs.core._write.call(null,writer__4185__auto__,"cognitect.transit/MapBuilder");
});
cognitect.transit.MapBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){var self__ = this;
var _ = this;return cljs.core.assoc_BANG_.call(null,m,k,v);
});
cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,m);
});
cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});
cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){return (new cognitect.transit.MapBuilder());
});

/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.cljs$lang$type = true;
cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4184__auto__,writer__4185__auto__,opt__4186__auto__){return cljs.core._write.call(null,writer__4185__auto__,"cognitect.transit/VectorBuilder");
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});
cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){var self__ = this;
var _ = this;return cljs.core.conj_BANG_.call(null,v,x);
});
cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,v);
});
cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});
cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){return (new cognitect.transit.VectorBuilder());
});
/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){return cljs.core.symbol.call(null,v);
}),":",(function (v){return cljs.core.keyword.call(null,v);
}),"set",(function (v){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){var i = (0);var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__16766 = (i + (2));
var G__16767 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__16766;
ret = G__16767;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.cljs$lang$type = true;
cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4184__auto__,writer__4185__auto__,opt__4186__auto__){return cljs.core._write.call(null,writer__4185__auto__,"cognitect.transit/KeywordHandler");
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return ":";
});
cognitect.transit.KeywordHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){return (new cognitect.transit.KeywordHandler());
});

/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.cljs$lang$type = true;
cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4184__auto__,writer__4185__auto__,opt__4186__auto__){return cljs.core._write.call(null,writer__4185__auto__,"cognitect.transit/SymbolHandler");
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "$";
});
cognitect.transit.SymbolHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){return (new cognitect.transit.SymbolHandler());
});

/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.cljs$lang$type = true;
cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4184__auto__,writer__4185__auto__,opt__4186__auto__){return cljs.core._write.call(null,writer__4185__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__16768_16772 = cljs.core.seq.call(null,v);var chunk__16769_16773 = null;var count__16770_16774 = (0);var i__16771_16775 = (0);while(true){
if((i__16771_16775 < count__16770_16774))
{var x_16776 = cljs.core._nth.call(null,chunk__16769_16773,i__16771_16775);ret.push(x_16776);
{
var G__16777 = seq__16768_16772;
var G__16778 = chunk__16769_16773;
var G__16779 = count__16770_16774;
var G__16780 = (i__16771_16775 + (1));
seq__16768_16772 = G__16777;
chunk__16769_16773 = G__16778;
count__16770_16774 = G__16779;
i__16771_16775 = G__16780;
continue;
}
} else
{var temp__4423__auto___16781 = cljs.core.seq.call(null,seq__16768_16772);if(temp__4423__auto___16781)
{var seq__16768_16782__$1 = temp__4423__auto___16781;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16768_16782__$1))
{var c__4377__auto___16783 = cljs.core.chunk_first.call(null,seq__16768_16782__$1);{
var G__16784 = cljs.core.chunk_rest.call(null,seq__16768_16782__$1);
var G__16785 = c__4377__auto___16783;
var G__16786 = cljs.core.count.call(null,c__4377__auto___16783);
var G__16787 = (0);
seq__16768_16772 = G__16784;
chunk__16769_16773 = G__16785;
count__16770_16774 = G__16786;
i__16771_16775 = G__16787;
continue;
}
} else
{var x_16788 = cljs.core.first.call(null,seq__16768_16782__$1);ret.push(x_16788);
{
var G__16789 = cljs.core.next.call(null,seq__16768_16782__$1);
var G__16790 = null;
var G__16791 = (0);
var G__16792 = (0);
seq__16768_16772 = G__16789;
chunk__16769_16773 = G__16790;
count__16770_16774 = G__16791;
i__16771_16775 = G__16792;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.ListHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){return (new cognitect.transit.ListHandler());
});

/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.cljs$lang$type = true;
cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4184__auto__,writer__4185__auto__,opt__4186__auto__){return cljs.core._write.call(null,writer__4185__auto__,"cognitect.transit/MapHandler");
});
cognitect.transit.MapHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "map";
});
cognitect.transit.MapHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v;
});
cognitect.transit.MapHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){return (new cognitect.transit.MapHandler());
});

/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.cljs$lang$type = true;
cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4184__auto__,writer__4185__auto__,opt__4186__auto__){return cljs.core._write.call(null,writer__4185__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__16793_16797 = cljs.core.seq.call(null,v);var chunk__16794_16798 = null;var count__16795_16799 = (0);var i__16796_16800 = (0);while(true){
if((i__16796_16800 < count__16795_16799))
{var x_16801 = cljs.core._nth.call(null,chunk__16794_16798,i__16796_16800);ret.push(x_16801);
{
var G__16802 = seq__16793_16797;
var G__16803 = chunk__16794_16798;
var G__16804 = count__16795_16799;
var G__16805 = (i__16796_16800 + (1));
seq__16793_16797 = G__16802;
chunk__16794_16798 = G__16803;
count__16795_16799 = G__16804;
i__16796_16800 = G__16805;
continue;
}
} else
{var temp__4423__auto___16806 = cljs.core.seq.call(null,seq__16793_16797);if(temp__4423__auto___16806)
{var seq__16793_16807__$1 = temp__4423__auto___16806;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16793_16807__$1))
{var c__4377__auto___16808 = cljs.core.chunk_first.call(null,seq__16793_16807__$1);{
var G__16809 = cljs.core.chunk_rest.call(null,seq__16793_16807__$1);
var G__16810 = c__4377__auto___16808;
var G__16811 = cljs.core.count.call(null,c__4377__auto___16808);
var G__16812 = (0);
seq__16793_16797 = G__16809;
chunk__16794_16798 = G__16810;
count__16795_16799 = G__16811;
i__16796_16800 = G__16812;
continue;
}
} else
{var x_16813 = cljs.core.first.call(null,seq__16793_16807__$1);ret.push(x_16813);
{
var G__16814 = cljs.core.next.call(null,seq__16793_16807__$1);
var G__16815 = null;
var G__16816 = (0);
var G__16817 = (0);
seq__16793_16797 = G__16814;
chunk__16794_16798 = G__16815;
count__16795_16799 = G__16816;
i__16796_16800 = G__16817;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.SetHandler.prototype.stringRep = (function (){var self__ = this;
var v = this;return null;
});
cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){return (new cognitect.transit.SetHandler());
});

/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.cljs$lang$type = true;
cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4184__auto__,writer__4185__auto__,opt__4186__auto__){return cljs.core._write.call(null,writer__4185__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__16818_16822 = cljs.core.seq.call(null,v);var chunk__16819_16823 = null;var count__16820_16824 = (0);var i__16821_16825 = (0);while(true){
if((i__16821_16825 < count__16820_16824))
{var x_16826 = cljs.core._nth.call(null,chunk__16819_16823,i__16821_16825);ret.push(x_16826);
{
var G__16827 = seq__16818_16822;
var G__16828 = chunk__16819_16823;
var G__16829 = count__16820_16824;
var G__16830 = (i__16821_16825 + (1));
seq__16818_16822 = G__16827;
chunk__16819_16823 = G__16828;
count__16820_16824 = G__16829;
i__16821_16825 = G__16830;
continue;
}
} else
{var temp__4423__auto___16831 = cljs.core.seq.call(null,seq__16818_16822);if(temp__4423__auto___16831)
{var seq__16818_16832__$1 = temp__4423__auto___16831;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16818_16832__$1))
{var c__4377__auto___16833 = cljs.core.chunk_first.call(null,seq__16818_16832__$1);{
var G__16834 = cljs.core.chunk_rest.call(null,seq__16818_16832__$1);
var G__16835 = c__4377__auto___16833;
var G__16836 = cljs.core.count.call(null,c__4377__auto___16833);
var G__16837 = (0);
seq__16818_16822 = G__16834;
chunk__16819_16823 = G__16835;
count__16820_16824 = G__16836;
i__16821_16825 = G__16837;
continue;
}
} else
{var x_16838 = cljs.core.first.call(null,seq__16818_16832__$1);ret.push(x_16838);
{
var G__16839 = cljs.core.next.call(null,seq__16818_16832__$1);
var G__16840 = null;
var G__16841 = (0);
var G__16842 = (0);
seq__16818_16822 = G__16839;
chunk__16819_16823 = G__16840;
count__16820_16824 = G__16841;
i__16821_16825 = G__16842;
continue;
}
}
} else
{}
}
break;
}
return ret;
});
cognitect.transit.VectorHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){return (new cognitect.transit.VectorHandler());
});

/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.cljs$lang$type = true;
cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";
cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4184__auto__,writer__4185__auto__,opt__4186__auto__){return cljs.core._write.call(null,writer__4185__auto__,"cognitect.transit/UUIDHandler");
});
cognitect.transit.UUIDHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "u";
});
cognitect.transit.UUIDHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.uuid;
});
cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){var self__ = this;
var this$ = this;return this$.rep(v);
});
cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){return (new cognitect.transit.UUIDHandler());
});
/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a map of
* type constructors to handler instances.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var uuid_handler = (new cognitect.transit.UUIDHandler());var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){var G__16851 = obj;G__16851.push(kfn.call(null,k),vfn.call(null,v));
return G__16851;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x16852 = cljs.core.clone.call(null,handlers);x16852.forEach = ((function (x16852,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){var coll = this;var seq__16853 = cljs.core.seq.call(null,coll);var chunk__16854 = null;var count__16855 = (0);var i__16856 = (0);while(true){
if((i__16856 < count__16855))
{var vec__16857 = cljs.core._nth.call(null,chunk__16854,i__16856);var k = cljs.core.nth.call(null,vec__16857,(0),null);var v = cljs.core.nth.call(null,vec__16857,(1),null);f.call(null,v,k);
{
var G__16859 = seq__16853;
var G__16860 = chunk__16854;
var G__16861 = count__16855;
var G__16862 = (i__16856 + (1));
seq__16853 = G__16859;
chunk__16854 = G__16860;
count__16855 = G__16861;
i__16856 = G__16862;
continue;
}
} else
{var temp__4423__auto__ = cljs.core.seq.call(null,seq__16853);if(temp__4423__auto__)
{var seq__16853__$1 = temp__4423__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16853__$1))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,seq__16853__$1);{
var G__16863 = cljs.core.chunk_rest.call(null,seq__16853__$1);
var G__16864 = c__4377__auto__;
var G__16865 = cljs.core.count.call(null,c__4377__auto__);
var G__16866 = (0);
seq__16853 = G__16863;
chunk__16854 = G__16864;
count__16855 = G__16865;
i__16856 = G__16866;
continue;
}
} else
{var vec__16858 = cljs.core.first.call(null,seq__16853__$1);var k = cljs.core.nth.call(null,vec__16858,(0),null);var v = cljs.core.nth.call(null,vec__16858,(1),null);f.call(null,v,k);
{
var G__16867 = cljs.core.next.call(null,seq__16853__$1);
var G__16868 = null;
var G__16869 = (0);
var G__16870 = (0);
seq__16853 = G__16867;
chunk__16854 = G__16868;
count__16855 = G__16869;
i__16856 = G__16870;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x16852,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;
return x16852;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t16874 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t16874 = (function (write_handler,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta16875){
this.write_handler = write_handler;
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta16875 = meta16875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t16874.cljs$lang$type = true;
cognitect.transit.t16874.cljs$lang$ctorStr = "cognitect.transit/t16874";
cognitect.transit.t16874.cljs$lang$ctorPrWriter = (function (this__4184__auto__,writer__4185__auto__,opt__4186__auto__){return cljs.core._write.call(null,writer__4185__auto__,"cognitect.transit/t16874");
});
cognitect.transit.t16874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16876,meta16875__$1){var self__ = this;
var _16876__$1 = this;return (new cognitect.transit.t16874(self__.write_handler,self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta16875__$1));
});
cognitect.transit.t16874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16876){var self__ = this;
var _16876__$1 = this;return self__.meta16875;
});
cognitect.transit.t16874.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t16874.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t16874.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t16874.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.__GT_t16874 = (function __GT_t16874(write_handler__$1,tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta16875){return (new cognitect.transit.t16874(write_handler__$1,tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta16875));
});
}
return (new cognitect.transit.t16874(write_handler,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,null));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map