// Compiled by ClojureScript 0.0-2371
goog.provide('medisoft.frontend.api.patients');
goog.require('cljs.core');
goog.require('medisoft.frontend.api.core');
goog.require('medisoft.frontend.api.core');
goog.require('medisoft.frontend.routes');
goog.require('medisoft.frontend.routes');
goog.require('medisoft.frontend.log');
goog.require('medisoft.frontend.log');
goog.require('medisoft.frontend.schemas');
goog.require('medisoft.frontend.schemas');
medisoft.frontend.api.patients.list = (function list(_,callback){return medisoft.frontend.api.core.api_call.call(null,new cljs.core.Keyword(null,"get","get",1683182755),medisoft.frontend.routes.server_path_for.call(null,new cljs.core.Keyword("api.patients","list","api.patients/list",-131521347)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),medisoft.frontend.schemas.PatientListQuery,new cljs.core.Keyword(null,"response","response",-1068424192),medisoft.frontend.schemas.PatientListResponse], null),new cljs.core.Keyword(null,"response-fn","response-fn",377411189),callback], null));
});
medisoft.frontend.api.patients.get = (function get(p__16877,callback){var map__16879 = p__16877;var map__16879__$1 = ((cljs.core.seq_QMARK_.call(null,map__16879))?cljs.core.apply.call(null,cljs.core.hash_map,map__16879):map__16879);var id = cljs.core.get.call(null,map__16879__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return medisoft.frontend.api.core.api_call.call(null,new cljs.core.Keyword(null,"get","get",1683182755),medisoft.frontend.routes.server_path_for.call(null,new cljs.core.Keyword("api.patients","show","api.patients/show",1813888561),new cljs.core.Keyword(null,"id","id",-1388402092),id),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response","response",-1068424192),medisoft.frontend.schemas.PatientShowResponse], null),new cljs.core.Keyword(null,"response-fn","response-fn",377411189),callback], null));
});
medisoft.frontend.api.patients.create = (function create(p__16880,callback){var map__16882 = p__16880;var map__16882__$1 = ((cljs.core.seq_QMARK_.call(null,map__16882))?cljs.core.apply.call(null,cljs.core.hash_map,map__16882):map__16882);var params = map__16882__$1;return medisoft.frontend.api.core.api_call.call(null,new cljs.core.Keyword(null,"post","post",269697687),medisoft.frontend.routes.server_path_for.call(null,new cljs.core.Keyword("api.patients","create","api.patients/create",-394769050)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),medisoft.frontend.schemas.PatientCreateRequest,new cljs.core.Keyword(null,"response","response",-1068424192),medisoft.frontend.schemas.PatientCreateResponse], null),new cljs.core.Keyword(null,"response-fn","response-fn",377411189),callback], null));
});
medisoft.frontend.api.patients.update = (function update(p__16883,callback){var map__16885 = p__16883;var map__16885__$1 = ((cljs.core.seq_QMARK_.call(null,map__16885))?cljs.core.apply.call(null,cljs.core.hash_map,map__16885):map__16885);var params = map__16885__$1;var id = cljs.core.get.call(null,map__16885__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return medisoft.frontend.api.core.api_call.call(null,new cljs.core.Keyword(null,"put","put",1299772570),medisoft.frontend.routes.server_path_for.call(null,new cljs.core.Keyword("api.patients","update","api.patients/update",281874282),new cljs.core.Keyword(null,"id","id",-1388402092),id),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.dissoc.call(null,params,new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),medisoft.frontend.schemas.PatientUpdateRequest,new cljs.core.Keyword(null,"response","response",-1068424192),medisoft.frontend.schemas.PatientUpdateResponse], null),new cljs.core.Keyword(null,"response-fn","response-fn",377411189),callback], null));
});

//# sourceMappingURL=patients.js.map