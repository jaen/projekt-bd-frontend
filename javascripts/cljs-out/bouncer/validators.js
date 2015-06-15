// Compiled by ClojureScript 0.0-2371
goog.provide('bouncer.validators');
goog.require('cljs.core');
goog.require('cljs_time.format');
goog.require('cljs_time.format');
bouncer.validators.required = cljs.core.with_meta.call(null,(function required(value){if(typeof value === 'string')
{return !(cljs.core.empty_QMARK_.call(null,value));
} else
{return !((value == null));
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be present",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","required","bouncer.validators/required",-465826887)], null));
bouncer.validators.number = cljs.core.with_meta.call(null,(function number(maybe_a_number){return typeof maybe_a_number === 'number';
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be a number",new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","number","bouncer.validators/number",-1457674719)], null));
bouncer.validators.positive = cljs.core.with_meta.call(null,(function positive(number){return (number > (0));
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be a positive number",new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","positive","bouncer.validators/positive",-155537451)], null));
bouncer.validators.member = cljs.core.with_meta.call(null,(function member(value,coll){return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([value], true),coll);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be one of the values in the list",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","member","bouncer.validators/member",-1164005429)], null));
bouncer.validators.custom = cljs.core.with_meta.call(null,(function custom(value,pred){cljs.core.println.call(null,"Warning: bouncer.validators/custom is deprecated and will be removed. Use plain functions instead.");
return pred.call(null,value);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","custom","bouncer.validators/custom",2142880173)], null));
bouncer.validators.every = cljs.core.with_meta.call(null,(function every(coll,pred){return cljs.core.every_QMARK_.call(null,pred,coll);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"All items in %s must satisfy the predicate",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","every","bouncer.validators/every",-281179041)], null));
bouncer.validators.matches = cljs.core.with_meta.call(null,(function matches(value,re){return cljs.core.complement.call(null,cljs.core.empty_QMARK_).call(null,cljs.core.re_seq.call(null,re,value));
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must satisfy the given pattern",new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","matches","bouncer.validators/matches",-1184599255)], null));
bouncer.validators.email = cljs.core.with_meta.call(null,(function email(value){var and__3595__auto__ = bouncer.validators.required.call(null,value);if(cljs.core.truth_(and__3595__auto__))
{return bouncer.validators.matches.call(null,value,/^[^@]+@[^@\\.]+[\\.].+/);
} else
{return and__3595__auto__;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be a valid email address",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","email","bouncer.validators/email",-1058548467)], null));
bouncer.validators.datetime = cljs.core.with_meta.call(null,(function() { 
var datetime__delegate = function (value,p__18426){var vec__18429 = p__18426;var opt = cljs.core.nth.call(null,vec__18429,(0),null);var _ = cljs.core.nthnext.call(null,vec__18429,(1));var formatter = ((typeof opt === 'string')?cljs_time.format.formatter.call(null,opt):opt);try{if(cljs.core.truth_(formatter))
{return cljs_time.format.parse.call(null,formatter,value);
} else
{return cljs_time.format.parse.call(null,value);
}
}catch (e18430){if((e18430 instanceof Error))
{var e = e18430;return false;
} else
{throw e18430;

}
}};
var datetime = function (value,var_args){
var p__18426 = null;if (arguments.length > 1) {
  p__18426 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return datetime__delegate.call(this,value,p__18426);};
datetime.cljs$lang$maxFixedArity = 1;
datetime.cljs$lang$applyTo = (function (arglist__18431){
var value = cljs.core.first(arglist__18431);
var p__18426 = cljs.core.rest(arglist__18431);
return datetime__delegate(value,p__18426);
});
datetime.cljs$core$IFn$_invoke$arity$variadic = datetime__delegate;
return datetime;
})()
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be a valid date",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","datetime","bouncer.validators/datetime",-2030523505)], null));

//# sourceMappingURL=validators.js.map