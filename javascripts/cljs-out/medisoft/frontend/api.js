// Compiled by ClojureScript 0.0-2371
goog.provide('medisoft.frontend.api');
goog.require('cljs.core');
goog.require('medisoft.frontend.api.employees');
goog.require('medisoft.frontend.api.employees');
goog.require('medisoft.frontend.log');
goog.require('medisoft.frontend.api.medicines');
goog.require('medisoft.frontend.api.medicines');
goog.require('medisoft.frontend.routes');
goog.require('medisoft.frontend.api.patients');
goog.require('medisoft.frontend.api.core');
goog.require('medisoft.frontend.api.job_titles');
goog.require('medisoft.frontend.schemas');
goog.require('medisoft.frontend.api.patients');
goog.require('medisoft.frontend.api.job_titles');
goog.require('medisoft.frontend.schemas');
goog.require('medisoft.frontend.routes');
goog.require('medisoft.frontend.api.core');
goog.require('medisoft.frontend.log');
medisoft.frontend.api.api_token = medisoft.frontend.api.core.api_token;
medisoft.frontend.api.logged_in_QMARK_ = medisoft.frontend.api.core.logged_in_QMARK_;
medisoft.frontend.api.set_api_token_BANG_ = medisoft.frontend.api.core.set_api_token_BANG_;
medisoft.frontend.api.log_in = (function log_in(p__16224,callback){var map__16226 = p__16224;var map__16226__$1 = ((cljs.core.seq_QMARK_.call(null,map__16226))?cljs.core.apply.call(null,cljs.core.hash_map,map__16226):map__16226);var login = cljs.core.get.call(null,map__16226__$1,new cljs.core.Keyword(null,"login","login",55217519));var password = cljs.core.get.call(null,map__16226__$1,new cljs.core.Keyword(null,"password","password",417022471));return medisoft.frontend.api.core.api_call.call(null,new cljs.core.Keyword(null,"post","post",269697687),medisoft.frontend.routes.server_path_for.call(null,new cljs.core.Keyword("api.authentication","log-in","api.authentication/log-in",-689644659)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),login,new cljs.core.Keyword(null,"password","password",417022471),password], null),new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),medisoft.frontend.schemas.LoginRequest,new cljs.core.Keyword(null,"response","response",-1068424192),medisoft.frontend.schemas.LoginResponse], null),new cljs.core.Keyword(null,"response-fn","response-fn",377411189),callback], null));
});
medisoft.frontend.api.validate_log_in = (function validate_log_in(p__16227,callback){var map__16229 = p__16227;var map__16229__$1 = ((cljs.core.seq_QMARK_.call(null,map__16229))?cljs.core.apply.call(null,cljs.core.hash_map,map__16229):map__16229);var login = cljs.core.get.call(null,map__16229__$1,new cljs.core.Keyword(null,"login","login",55217519));var password = cljs.core.get.call(null,map__16229__$1,new cljs.core.Keyword(null,"password","password",417022471));return medisoft.frontend.api.core.api_call.call(null,new cljs.core.Keyword(null,"post","post",269697687),medisoft.frontend.routes.server_path_for.call(null,new cljs.core.Keyword("api.authentication","validate-log-in","api.authentication/validate-log-in",323200897)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),login,new cljs.core.Keyword(null,"password","password",417022471),password], null),new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),medisoft.frontend.schemas.LoginValidateRequest,new cljs.core.Keyword(null,"response","response",-1068424192),medisoft.frontend.schemas.LoginValidateResponse], null),new cljs.core.Keyword(null,"response-fn","response-fn",377411189),callback], null));
});
medisoft.frontend.api.list_job_titles = medisoft.frontend.api.job_titles.list;
medisoft.frontend.api.get_job_title = medisoft.frontend.api.job_titles.get;
medisoft.frontend.api.create_job_title = medisoft.frontend.api.job_titles.create;
medisoft.frontend.api.update_job_title = medisoft.frontend.api.job_titles.update;
medisoft.frontend.api.list_employees = medisoft.frontend.api.employees.list;
medisoft.frontend.api.get_employee = medisoft.frontend.api.employees.get;
medisoft.frontend.api.create_employee = medisoft.frontend.api.employees.create;
medisoft.frontend.api.update_employee = medisoft.frontend.api.employees.update;
medisoft.frontend.api.list_patients = medisoft.frontend.api.patients.list;
medisoft.frontend.api.get_patient = medisoft.frontend.api.patients.get;
medisoft.frontend.api.create_patient = medisoft.frontend.api.patients.create;
medisoft.frontend.api.update_patient = medisoft.frontend.api.patients.update;
medisoft.frontend.api.list_medicines = medisoft.frontend.api.medicines.list;
medisoft.frontend.api.get_medicine = medisoft.frontend.api.medicines.get;
medisoft.frontend.api.create_medicine = medisoft.frontend.api.medicines.create;
medisoft.frontend.api.update_medicine = medisoft.frontend.api.medicines.update;

//# sourceMappingURL=api.js.map