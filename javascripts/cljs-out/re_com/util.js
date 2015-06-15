// Compiled by ClojureScript 0.0-2371
goog.provide('re_com.util');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');
/**
* Takes a function 'f' amd a map 'm'.  Applies 'f' to each value in 'm' and returns.
* (fmap  inc  {:a 4  :b 2})   =>   {:a 5  :b 3}
*/
re_com.util.fmap = (function fmap(f,m){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4346__auto__ = (function iter__17965(s__17966){return (new cljs.core.LazySeq(null,(function (){var s__17966__$1 = s__17966;while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__17966__$1);if(temp__4423__auto__)
{var s__17966__$2 = temp__4423__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17966__$2))
{var c__4344__auto__ = cljs.core.chunk_first.call(null,s__17966__$2);var size__4345__auto__ = cljs.core.count.call(null,c__4344__auto__);var b__17968 = cljs.core.chunk_buffer.call(null,size__4345__auto__);if((function (){var i__17967 = (0);while(true){
if((i__17967 < size__4345__auto__))
{var vec__17971 = cljs.core._nth.call(null,c__4344__auto__,i__17967);var k = cljs.core.nth.call(null,vec__17971,(0),null);var val = cljs.core.nth.call(null,vec__17971,(1),null);cljs.core.chunk_append.call(null,b__17968,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null));
{
var G__17973 = (i__17967 + (1));
i__17967 = G__17973;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17968),iter__17965.call(null,cljs.core.chunk_rest.call(null,s__17966__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17968),null);
}
} else
{var vec__17972 = cljs.core.first.call(null,s__17966__$2);var k = cljs.core.nth.call(null,vec__17972,(0),null);var val = cljs.core.nth.call(null,vec__17972,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null),iter__17965.call(null,cljs.core.rest.call(null,s__17966__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4346__auto__.call(null,m);
})());
});
re_com.util.deref_or_value = (function deref_or_value(val_or_atom){if((function (){var G__17975 = val_or_atom;if(G__17975)
{var bit__4271__auto__ = (G__17975.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__4271__auto__) || (G__17975.cljs$core$IDeref$))
{return true;
} else
{if((!G__17975.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__17975);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__17975);
}
})())
{return cljs.core.deref.call(null,val_or_atom);
} else
{return val_or_atom;
}
});
re_com.util.get_element_by_id = (function get_element_by_id(id){return document.getElementById(id);
});
/**
* Left pad a string 's' with '0', until 's' has length 'len'. Return 's' unchanged, if it is already len or greater
*/
re_com.util.pad_zero = (function pad_zero(s,len){if((cljs.core.count.call(null,s) < len))
{return cljs.core.apply.call(null,cljs.core.str,cljs.core.take_last.call(null,len,cljs.core.concat.call(null,cljs.core.repeat.call(null,len,"0"),s)));
} else
{return s;
}
});
/**
* return 'num' as a string of 'len' characters, left padding with '0' as necessary
*/
re_com.util.pad_zero_number = (function pad_zero_number(num,len){return re_com.util.pad_zero.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)),len);
});
/**
* takes a number (and optional :negative keyword to indicate a negative value) and returns that number as a string with 'px' at the end
* @param {...*} var_args
*/
re_com.util.px = (function() { 
var px__delegate = function (val,negative){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(negative)?((0) - val):val))+"px");
};
var px = function (val,var_args){
var negative = null;if (arguments.length > 1) {
  negative = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return px__delegate.call(this,val,negative);};
px.cljs$lang$maxFixedArity = 1;
px.cljs$lang$applyTo = (function (arglist__17976){
var val = cljs.core.first(arglist__17976);
var negative = cljs.core.rest(arglist__17976);
return px__delegate(val,negative);
});
px.cljs$core$IFn$_invoke$arity$variadic = px__delegate;
return px;
})()
;
/**
* Removes the item at position n from a vector v, returning a shrunk vector
*/
re_com.util.remove_nth = (function remove_nth(v,n){return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,v,(0),n),cljs.core.subvec.call(null,v,(n + (1)),cljs.core.count.call(null,v))));
});
re_com.util.insert_nth = (function insert_nth(vect,index,item){return cljs.core.apply.call(null,cljs.core.merge,cljs.core.subvec.call(null,vect,(0),index),item,cljs.core.subvec.call(null,vect,index));
});
/**
* Takes a vector of maps 'v'. Returns the postion of the first item in 'v' whose :id matches 'id'.
* Returns nil if id not found
*/
re_com.util.position_for_id = (function position_for_id(id,v){var index_fn = (function (index,item){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),id))
{return index;
} else
{return null;
}
});return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,index_fn,v));
});
/**
* Takes a vector of maps 'v'. Returns the first item in 'v' whose :id matches 'id'.
* Returns nil if id not found
*/
re_com.util.item_for_id = (function item_for_id(id,v){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__17977_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__17977_SHARP_),id);
}),v));
});
/**
* Takes a vector of maps 'v', each of which has an :id key.
* Return v where item matching 'id' is excluded
*/
re_com.util.remove_id_item = (function remove_id_item(id,v){return cljs.core.filterv.call(null,(function (p1__17978_SHARP_){return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__17978_SHARP_),id);
}),v);
});
/**
* (for [[index item first? last?] (enumerate coll)] ...)
*/
re_com.util.enumerate = (function enumerate(coll){var c = (cljs.core.count.call(null,coll) - (1));var f = ((function (c){
return (function (index,item){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item,cljs.core._EQ_.call(null,(0),index),cljs.core._EQ_.call(null,c,index)], null);
});})(c))
;return cljs.core.map_indexed.call(null,f,coll);
});
/**
* Given a DOM node, I traverse through all ascendant nodes (until I reach body), summing any scrollLeft and scrollTop values
* and return these sums in a map
*/
re_com.util.sum_scroll_offsets = (function sum_scroll_offsets(node){var current_node = node.parentNode;var sum_scroll_left = (0);var sum_scroll_top = (0);while(true){
if(cljs.core.not_EQ_.call(null,current_node.tagName,"BODY"))
{{
var G__17979 = current_node.parentNode;
var G__17980 = (sum_scroll_left + current_node.scrollLeft);
var G__17981 = (sum_scroll_top + current_node.scrollTop);
current_node = G__17979;
sum_scroll_left = G__17980;
sum_scroll_top = G__17981;
continue;
}
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),sum_scroll_left,new cljs.core.Keyword(null,"top","top",-1856271961),sum_scroll_top], null);
}
break;
}
});

//# sourceMappingURL=util.js.map