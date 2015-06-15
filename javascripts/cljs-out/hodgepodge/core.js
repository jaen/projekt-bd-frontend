// Compiled by ClojureScript 0.0-2371
goog.provide('hodgepodge.core');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
hodgepodge.core.local_storage = localStorage;
hodgepodge.core.session_storage = sessionStorage;
hodgepodge.core.contains_key_QMARK_ = (function contains_key_QMARK_(storage,key){var ks = Object.keys(storage);var idx = ks.indexOf(key);return (idx >= (0));
});
hodgepodge.core.get_item = (function() {
var get_item = null;
var get_item__2 = (function (storage,key){return get_item.call(null,storage,key,null);
});
var get_item__3 = (function (storage,key,default$){if(hodgepodge.core.contains_key_QMARK_.call(null,storage,key))
{return storage.getItem(key);
} else
{return default$;
}
});
get_item = function(storage,key,default$){
switch(arguments.length){
case 2:
return get_item__2.call(this,storage,key);
case 3:
return get_item__3.call(this,storage,key,default$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_item.cljs$core$IFn$_invoke$arity$2 = get_item__2;
get_item.cljs$core$IFn$_invoke$arity$3 = get_item__3;
return get_item;
})()
;
hodgepodge.core.set_item = (function set_item(storage,key,val){return storage.setItem(key,val);
});
hodgepodge.core.remove_item = (function remove_item(storage,key){return storage.removeItem(key);
});
hodgepodge.core.length = (function length(storage){return storage.length;
});
hodgepodge.core.clear_BANG_ = (function clear_BANG_(storage){return storage.clear();
});
hodgepodge.core.serialize = (function serialize(v){var _STAR_print_dup_STAR_16634 = cljs.core._STAR_print_dup_STAR_;var _STAR_print_readably_STAR_16635 = cljs.core._STAR_print_readably_STAR_;try{cljs.core._STAR_print_dup_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
return cljs.core.pr_str.call(null,v);
}finally {cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_16635;
cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR_16634;
}});
hodgepodge.core.deserialize = cljs.core.memoize.call(null,cljs.reader.read_string);
Storage.prototype.cljs$core$ICounted$ = true;
Storage.prototype.cljs$core$ICounted$_count$arity$1 = (function (s){var s__$1 = this;return hodgepodge.core.length.call(null,s__$1);
});
Storage.prototype.cljs$core$ITransientAssociative$ = true;
Storage.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (s,key,val){var s__$1 = this;return hodgepodge.core.set_item.call(null,s__$1,hodgepodge.core.serialize.call(null,key),hodgepodge.core.serialize.call(null,val));
});
Storage.prototype.cljs$core$ITransientCollection$ = true;
Storage.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (s,kv){var s__$1 = this;return cljs.core.assoc_BANG_.call(null,s__$1,cljs.core.key.call(null,kv),cljs.core.val.call(null,kv));
});
Storage.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (s){var s__$1 = this;return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4346__auto__ = ((function (s__$1){
return (function iter__16636(s__16637){return (new cljs.core.LazySeq(null,((function (s__$1){
return (function (){var s__16637__$1 = s__16637;while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__16637__$1);if(temp__4423__auto__)
{var s__16637__$2 = temp__4423__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16637__$2))
{var c__4344__auto__ = cljs.core.chunk_first.call(null,s__16637__$2);var size__4345__auto__ = cljs.core.count.call(null,c__4344__auto__);var b__16639 = cljs.core.chunk_buffer.call(null,size__4345__auto__);if((function (){var i__16638 = (0);while(true){
if((i__16638 < size__4345__auto__))
{var i = cljs.core._nth.call(null,c__4344__auto__,i__16638);var k = s__$1.key(i);var v = hodgepodge.core.get_item.call(null,s__$1,k);cljs.core.chunk_append.call(null,b__16639,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hodgepodge.core.deserialize.call(null,k),hodgepodge.core.deserialize.call(null,v)], null));
{
var G__16640 = (i__16638 + (1));
i__16638 = G__16640;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16639),iter__16636.call(null,cljs.core.chunk_rest.call(null,s__16637__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16639),null);
}
} else
{var i = cljs.core.first.call(null,s__16637__$2);var k = s__$1.key(i);var v = hodgepodge.core.get_item.call(null,s__$1,k);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hodgepodge.core.deserialize.call(null,k),hodgepodge.core.deserialize.call(null,v)], null),iter__16636.call(null,cljs.core.rest.call(null,s__16637__$2)));
}
} else
{return null;
}
break;
}
});})(s__$1))
,null,null));
});})(s__$1))
;return iter__4346__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,s__$1)));
})());
});
Storage.prototype.cljs$core$ITransientMap$ = true;
Storage.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (s,key){var s__$1 = this;return hodgepodge.core.remove_item.call(null,s__$1,hodgepodge.core.serialize.call(null,key));
});
Storage.prototype.cljs$core$ILookup$ = true;
Storage.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (s,key){var s__$1 = this;return cljs.core._lookup.call(null,s__$1,key,null);
});
Storage.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (s,key,not_found){var s__$1 = this;var sk = hodgepodge.core.serialize.call(null,key);if(hodgepodge.core.contains_key_QMARK_.call(null,s__$1,sk))
{return hodgepodge.core.deserialize.call(null,hodgepodge.core.get_item.call(null,s__$1,sk));
} else
{return not_found;
}
});

//# sourceMappingURL=core.js.map