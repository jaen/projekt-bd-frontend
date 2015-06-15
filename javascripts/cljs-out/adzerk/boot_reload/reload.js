// Compiled by ClojureScript 0.0-2371
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function ends_with_QMARK_(s,pat){return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function reload_page_BANG_(){return window.location.reload();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function changed_href_QMARK_(href_or_uri,changed){if(cljs.core.truth_(href_or_uri))
{var uri = (new goog.Uri(href_or_uri));var path = adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (uri,path){
return (function (p1__14170_SHARP_){return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__14170_SHARP_,path);
});})(uri,path))
,changed))))
{return uri;
} else
{return null;
}
} else
{return null;
}
});
adzerk.boot_reload.reload.reload_css = (function reload_css(changed){var sheets = document.styleSheets;var seq__14175 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));var chunk__14176 = null;var count__14177 = (0);var i__14178 = (0);while(true){
if((i__14178 < count__14177))
{var s = cljs.core._nth.call(null,chunk__14176,i__14178);var temp__4423__auto___14179 = (sheets[s]);if(cljs.core.truth_(temp__4423__auto___14179))
{var sheet_14180 = temp__4423__auto___14179;var temp__4423__auto___14181__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_14180.href,changed);if(cljs.core.truth_(temp__4423__auto___14181__$1))
{var href_uri_14182 = temp__4423__auto___14181__$1;sheet_14180.ownerNode.href = href_uri_14182.makeUnique().toString();
} else
{}
} else
{}
{
var G__14183 = seq__14175;
var G__14184 = chunk__14176;
var G__14185 = count__14177;
var G__14186 = (i__14178 + (1));
seq__14175 = G__14183;
chunk__14176 = G__14184;
count__14177 = G__14185;
i__14178 = G__14186;
continue;
}
} else
{var temp__4423__auto__ = cljs.core.seq.call(null,seq__14175);if(temp__4423__auto__)
{var seq__14175__$1 = temp__4423__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14175__$1))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,seq__14175__$1);{
var G__14187 = cljs.core.chunk_rest.call(null,seq__14175__$1);
var G__14188 = c__4377__auto__;
var G__14189 = cljs.core.count.call(null,c__4377__auto__);
var G__14190 = (0);
seq__14175 = G__14187;
chunk__14176 = G__14188;
count__14177 = G__14189;
i__14178 = G__14190;
continue;
}
} else
{var s = cljs.core.first.call(null,seq__14175__$1);var temp__4423__auto___14191__$1 = (sheets[s]);if(cljs.core.truth_(temp__4423__auto___14191__$1))
{var sheet_14192 = temp__4423__auto___14191__$1;var temp__4423__auto___14193__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_14192.href,changed);if(cljs.core.truth_(temp__4423__auto___14193__$2))
{var href_uri_14194 = temp__4423__auto___14193__$2;sheet_14192.ownerNode.href = href_uri_14194.makeUnique().toString();
} else
{}
} else
{}
{
var G__14195 = cljs.core.next.call(null,seq__14175__$1);
var G__14196 = null;
var G__14197 = (0);
var G__14198 = (0);
seq__14175 = G__14195;
chunk__14176 = G__14196;
count__14177 = G__14197;
i__14178 = G__14198;
continue;
}
}
} else
{return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function reload_img(changed){var images = document.images;var seq__14203 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));var chunk__14204 = null;var count__14205 = (0);var i__14206 = (0);while(true){
if((i__14206 < count__14205))
{var s = cljs.core._nth.call(null,chunk__14204,i__14206);var temp__4423__auto___14207 = (images[s]);if(cljs.core.truth_(temp__4423__auto___14207))
{var image_14208 = temp__4423__auto___14207;var temp__4423__auto___14209__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_14208.src,changed);if(cljs.core.truth_(temp__4423__auto___14209__$1))
{var href_uri_14210 = temp__4423__auto___14209__$1;image_14208.src = href_uri_14210.makeUnique().toString();
} else
{}
} else
{}
{
var G__14211 = seq__14203;
var G__14212 = chunk__14204;
var G__14213 = count__14205;
var G__14214 = (i__14206 + (1));
seq__14203 = G__14211;
chunk__14204 = G__14212;
count__14205 = G__14213;
i__14206 = G__14214;
continue;
}
} else
{var temp__4423__auto__ = cljs.core.seq.call(null,seq__14203);if(temp__4423__auto__)
{var seq__14203__$1 = temp__4423__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14203__$1))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,seq__14203__$1);{
var G__14215 = cljs.core.chunk_rest.call(null,seq__14203__$1);
var G__14216 = c__4377__auto__;
var G__14217 = cljs.core.count.call(null,c__4377__auto__);
var G__14218 = (0);
seq__14203 = G__14215;
chunk__14204 = G__14216;
count__14205 = G__14217;
i__14206 = G__14218;
continue;
}
} else
{var s = cljs.core.first.call(null,seq__14203__$1);var temp__4423__auto___14219__$1 = (images[s]);if(cljs.core.truth_(temp__4423__auto___14219__$1))
{var image_14220 = temp__4423__auto___14219__$1;var temp__4423__auto___14221__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_14220.src,changed);if(cljs.core.truth_(temp__4423__auto___14221__$2))
{var href_uri_14222 = temp__4423__auto___14221__$2;image_14220.src = href_uri_14222.makeUnique().toString();
} else
{}
} else
{}
{
var G__14223 = cljs.core.next.call(null,seq__14203__$1);
var G__14224 = null;
var G__14225 = (0);
var G__14226 = (0);
seq__14203 = G__14223;
chunk__14204 = G__14224;
count__14205 = G__14225;
i__14206 = G__14226;
continue;
}
}
} else
{return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function reload_js(changed,p__14229){var map__14231 = p__14229;var map__14231__$1 = ((cljs.core.seq_QMARK_.call(null,map__14231))?cljs.core.apply.call(null,cljs.core.hash_map,map__14231):map__14231);var on_jsload = cljs.core.get.call(null,map__14231__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);var js_files = cljs.core.filter.call(null,((function (map__14231,map__14231__$1,on_jsload){
return (function (p1__14227_SHARP_){return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__14227_SHARP_,".js");
});})(map__14231,map__14231__$1,on_jsload))
,changed);if(cljs.core.seq.call(null,js_files))
{goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__14231,map__14231__$1,on_jsload){
return (function (p1__14228_SHARP_){return goog.net.jsloader.load(goog.Uri.parse(p1__14228_SHARP_).makeUnique());
});})(js_files,map__14231,map__14231__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__14231,map__14231__$1,on_jsload){
return (function() { 
var G__14232__delegate = function (_){return on_jsload.call(null);
};
var G__14232 = function (var_args){
var _ = null;if (arguments.length > 0) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14232__delegate.call(this,_);};
G__14232.cljs$lang$maxFixedArity = 0;
G__14232.cljs$lang$applyTo = (function (arglist__14233){
var _ = cljs.core.seq(arglist__14233);
return G__14232__delegate(_);
});
G__14232.cljs$core$IFn$_invoke$arity$variadic = G__14232__delegate;
return G__14232;
})()
;})(js_files,map__14231,map__14231__$1,on_jsload))
,((function (js_files,map__14231,map__14231__$1,on_jsload){
return (function (e){return console.error("Load failed:",e.message);
});})(js_files,map__14231,map__14231__$1,on_jsload))
);
if(cljs.core.truth_((window["jQuery"])))
{return jQuery(document).trigger("page-load");
} else
{return null;
}
} else
{return null;
}
});
adzerk.boot_reload.reload.reload_html = (function reload_html(changed){var page_path = adzerk.boot_reload.reload.page_uri.getPath();var html_path = ((adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_path)+"index.html"):page_path);if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed)))
{return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else
{return null;
}
});
adzerk.boot_reload.reload.group_log = (function group_log(title,things_to_log){console.groupCollapsed(title);
var seq__14238_14242 = cljs.core.seq.call(null,things_to_log);var chunk__14239_14243 = null;var count__14240_14244 = (0);var i__14241_14245 = (0);while(true){
if((i__14241_14245 < count__14240_14244))
{var t_14246 = cljs.core._nth.call(null,chunk__14239_14243,i__14241_14245);console.log(t_14246);
{
var G__14247 = seq__14238_14242;
var G__14248 = chunk__14239_14243;
var G__14249 = count__14240_14244;
var G__14250 = (i__14241_14245 + (1));
seq__14238_14242 = G__14247;
chunk__14239_14243 = G__14248;
count__14240_14244 = G__14249;
i__14241_14245 = G__14250;
continue;
}
} else
{var temp__4423__auto___14251 = cljs.core.seq.call(null,seq__14238_14242);if(temp__4423__auto___14251)
{var seq__14238_14252__$1 = temp__4423__auto___14251;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14238_14252__$1))
{var c__4377__auto___14253 = cljs.core.chunk_first.call(null,seq__14238_14252__$1);{
var G__14254 = cljs.core.chunk_rest.call(null,seq__14238_14252__$1);
var G__14255 = c__4377__auto___14253;
var G__14256 = cljs.core.count.call(null,c__4377__auto___14253);
var G__14257 = (0);
seq__14238_14242 = G__14254;
chunk__14239_14243 = G__14255;
count__14240_14244 = G__14256;
i__14241_14245 = G__14257;
continue;
}
} else
{var t_14258 = cljs.core.first.call(null,seq__14238_14252__$1);console.log(t_14258);
{
var G__14259 = cljs.core.next.call(null,seq__14238_14252__$1);
var G__14260 = null;
var G__14261 = (0);
var G__14262 = (0);
seq__14238_14242 = G__14259;
chunk__14239_14243 = G__14260;
count__14240_14244 = G__14261;
i__14241_14245 = G__14262;
continue;
}
}
} else
{}
}
break;
}
return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function reload(opts,changed){adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);
var G__14264 = changed;adzerk.boot_reload.reload.reload_js.call(null,G__14264,opts);
adzerk.boot_reload.reload.reload_html.call(null,G__14264);
adzerk.boot_reload.reload.reload_css.call(null,G__14264);
adzerk.boot_reload.reload.reload_img.call(null,G__14264);
return G__14264;
});

//# sourceMappingURL=reload.js.map