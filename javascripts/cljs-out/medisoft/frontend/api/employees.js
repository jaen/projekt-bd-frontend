// Compiled by ClojureScript 0.0-2371
goog.provide('medisoft.frontend.api.employees');
goog.require('cljs.core');
goog.require('medisoft.frontend.api.core');
goog.require('medisoft.frontend.api.core');
goog.require('medisoft.frontend.routes');
goog.require('medisoft.frontend.routes');
goog.require('medisoft.frontend.log');
goog.require('medisoft.frontend.log');
goog.require('medisoft.frontend.schemas');
goog.require('medisoft.frontend.schemas');
medisoft.frontend.api.employees.list = (function list(_,callback){return medisoft.frontend.api.core.api_call.call(null,new cljs.core.Keyword(null,"get","get",1683182755),medisoft.frontend.routes.server_path_for.call(null,new cljs.core.Keyword("api.employees","list","api.employees/list",-591099004)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response","response",-1068424192),medisoft.frontend.schemas.EmployeeListResponse], null),new cljs.core.Keyword(null,"response-fn","response-fn",377411189),callback], null));
});
medisoft.frontend.api.employees.get = (function get(p__16895,callback){var map__16897 = p__16895;var map__16897__$1 = ((cljs.core.seq_QMARK_.call(null,map__16897))?cljs.core.apply.call(null,cljs.core.hash_map,map__16897):map__16897);var id = cljs.core.get.call(null,map__16897__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return medisoft.frontend.api.core.api_call.call(null,new cljs.core.Keyword(null,"get","get",1683182755),medisoft.frontend.routes.server_path_for.call(null,new cljs.core.Keyword("api.employees","show","api.employees/show",-1933928606),new cljs.core.Keyword(null,"id","id",-1388402092),id),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response","response",-1068424192),medisoft.frontend.schemas.EmployeeShowResponse], null),new cljs.core.Keyword(null,"response-fn","response-fn",377411189),callback], null));
});
medisoft.frontend.api.employees.create = (function create(p__16898,callback){var map__16900 = p__16898;var map__16900__$1 = ((cljs.core.seq_QMARK_.call(null,map__16900))?cljs.core.apply.call(null,cljs.core.hash_map,map__16900):map__16900);var params = map__16900__$1;return medisoft.frontend.api.core.api_call.call(null,new cljs.core.Keyword(null,"post","post",269697687),medisoft.frontend.routes.server_path_for.call(null,new cljs.core.Keyword("api.employees","create","api.employees/create",1154813655)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),medisoft.frontend.schemas.EmployeeCreateRequest,new cljs.core.Keyword(null,"response","response",-1068424192),medisoft.frontend.schemas.EmployeeCreateResponse], null),new cljs.core.Keyword(null,"response-fn","response-fn",377411189),callback], null));
});
medisoft.frontend.api.employees.update = (function update(p__16901,callback){var map__16903 = p__16901;var map__16903__$1 = ((cljs.core.seq_QMARK_.call(null,map__16903))?cljs.core.apply.call(null,cljs.core.hash_map,map__16903):map__16903);var params = map__16903__$1;var id = cljs.core.get.call(null,map__16903__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return medisoft.frontend.api.core.api_call.call(null,new cljs.core.Keyword(null,"put","put",1299772570),medisoft.frontend.routes.server_path_for.call(null,new cljs.core.Keyword("api.employees","update","api.employees/update",-303520775),new cljs.core.Keyword(null,"id","id",-1388402092),id),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.dissoc.call(null,params,new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),medisoft.frontend.schemas.EmployeeUpdateRequest,new cljs.core.Keyword(null,"response","response",-1068424192),medisoft.frontend.schemas.EmployeeUpdateResponse], null),new cljs.core.Keyword(null,"response-fn","response-fn",377411189),callback], null));
});

//# sourceMappingURL=employees.js.map