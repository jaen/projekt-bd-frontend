// Compiled by ClojureScript 0.0-2371
goog.provide('adzerk.boot_reload');
goog.require('cljs.core');
goog.require('adzerk.boot_reload.client');
goog.require('adzerk.boot_reload.client');
goog.require('medisoft.frontend.core');
if(adzerk.boot_reload.client.alive_QMARK_.call(null))
{} else
{adzerk.boot_reload.client.connect.call(null,"ws://localhost:47476",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){return medisoft.frontend.core.mount_root_BANG_.call(null);
})], null));
}

//# sourceMappingURL=boot_reload.js.map