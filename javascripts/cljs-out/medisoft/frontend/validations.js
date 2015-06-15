// Compiled by ClojureScript 0.0-2371
goog.provide('medisoft.frontend.validations');
goog.require('cljs.core');
goog.require('bouncer.core');
goog.require('bouncer.core');
goog.require('bouncer.validators');
goog.require('bouncer.validators');
/**
* @param {...*} var_args
*/
medisoft.frontend.validations.validate = (function() { 
var validate__delegate = function (data,validations){var vec__18373 = cljs.core.apply.call(null,bouncer.core.validate,data,validations);var errors = cljs.core.nth.call(null,vec__18373,(0),null);var _ = cljs.core.nth.call(null,vec__18373,(1),null);return errors;
};
var validate = function (data,var_args){
var validations = null;if (arguments.length > 1) {
  validations = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return validate__delegate.call(this,data,validations);};
validate.cljs$lang$maxFixedArity = 1;
validate.cljs$lang$applyTo = (function (arglist__18374){
var data = cljs.core.first(arglist__18374);
var validations = cljs.core.rest(arglist__18374);
return validate__delegate(data,validations);
});
validate.cljs$core$IFn$_invoke$arity$variadic = validate__delegate;
return validate;
})()
;
medisoft.frontend.validations.valid_QMARK_ = (function valid_QMARK_(errors){return cljs.core.empty_QMARK_.call(null,errors);
});
medisoft.frontend.validations.login_form = (function login_form(data){return medisoft.frontend.validations.validate.call(null,data,new cljs.core.Keyword(null,"login","login",55217519),bouncer.validators.required,new cljs.core.Keyword(null,"password","password",417022471),bouncer.validators.required);
});

//# sourceMappingURL=validations.js.map