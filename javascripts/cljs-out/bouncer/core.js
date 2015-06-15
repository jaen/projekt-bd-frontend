// Compiled by ClojureScript 0.0-2371
goog.provide('bouncer.core');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
goog.require('goog.string.format');
bouncer.core.build_multi_step = (function() {
var build_multi_step = null;
var build_multi_step__2 = (function (key_or_vec,fn_vec){return build_multi_step.call(null,key_or_vec,fn_vec,cljs.core.PersistentVector.EMPTY);
});
var build_multi_step__3 = (function (key_or_vec,p__18375,acc){while(true){
var vec__18378 = p__18375;var f_or_list = cljs.core.nth.call(null,vec__18378,(0),null);var rest = cljs.core.nthnext.call(null,vec__18378,(1));if(cljs.core.not.call(null,f_or_list))
{return acc;
} else
{if(cljs.core.sequential_QMARK_.call(null,f_or_list))
{var vec__18379 = f_or_list;var f = cljs.core.nth.call(null,vec__18379,(0),null);var opts = cljs.core.nthnext.call(null,vec__18379,(1));{
var G__18380 = key_or_vec;
var G__18381 = rest;
var G__18382 = cljs.core.conj.call(null,acc,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,key_or_vec], null),opts));
key_or_vec = G__18380;
p__18375 = G__18381;
acc = G__18382;
continue;
}
} else
{{
var G__18383 = key_or_vec;
var G__18384 = rest;
var G__18385 = cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f_or_list,key_or_vec], null));
key_or_vec = G__18383;
p__18375 = G__18384;
acc = G__18385;
continue;
}

}
}
break;
}
});
build_multi_step = function(key_or_vec,p__18375,acc){
switch(arguments.length){
case 2:
return build_multi_step__2.call(this,key_or_vec,p__18375);
case 3:
return build_multi_step__3.call(this,key_or_vec,p__18375,acc);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_multi_step.cljs$core$IFn$_invoke$arity$2 = build_multi_step__2;
build_multi_step.cljs$core$IFn$_invoke$arity$3 = build_multi_step__3;
return build_multi_step;
})()
;
/**
* Takes two arguments:
* 
* `parent-keyword` is a :keyword - or a vector of :keywords denoting a path in a associative structure
* 
* `validations-map` is a map of forms following this spec:
* 
* 
* {:keyword [f g] :another-keyword h}
* 
* 
* Merges `:parent-keyword` with every first element of validations-map, transforming it into:
* 
* 
* ([:parent-keyword :keyword] [f g] [:parent-keyword :another-keyword] h)
*/
bouncer.core.merge_path = (function merge_path(parent_key,validations_map){var parent_key__$1 = (((parent_key instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_key], null):parent_key);return cljs.core.mapcat.call(null,((function (parent_key__$1){
return (function (p__18388){var vec__18389 = p__18388;var key = cljs.core.nth.call(null,vec__18389,(0),null);var validations = cljs.core.nth.call(null,vec__18389,(1),null);if(cljs.core.vector_QMARK_.call(null,key))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.vector,cljs.core.concat.call(null,parent_key__$1,key)),validations], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.vector,cljs.core.concat.call(null,parent_key__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null))),validations], null);
}
});})(parent_key__$1))
,validations_map);
});
bouncer.core.build_steps = (function build_steps(p__18390){var vec__18394 = p__18390;var head = cljs.core.nth.call(null,vec__18394,(0),null);var tail = cljs.core.nthnext.call(null,vec__18394,(1));var forms = vec__18394;var forms__$1 = ((cljs.core.map_QMARK_.call(null,head))?cljs.core.vec.call(null,cljs.core.mapcat.call(null,cljs.core.identity,head)):forms);return cljs.core.reduce.call(null,((function (forms__$1,vec__18394,head,tail,forms){
return (function (acc,p__18395){var vec__18396 = p__18395;var key_or_vec = cljs.core.nth.call(null,vec__18396,(0),null);var sym_or_coll = cljs.core.nth.call(null,vec__18396,(1),null);var rule = vec__18396;if(cljs.core.vector_QMARK_.call(null,sym_or_coll))
{return cljs.core.concat.call(null,acc,bouncer.core.build_multi_step.call(null,key_or_vec,sym_or_coll));
} else
{if(cljs.core.map_QMARK_.call(null,sym_or_coll))
{return cljs.core.concat.call(null,acc,build_steps.call(null,bouncer.core.merge_path.call(null,key_or_vec,sym_or_coll)));
} else
{return cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym_or_coll,key_or_vec], null));

}
}
});})(forms__$1,vec__18394,head,tail,forms))
,cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),forms__$1));
});
bouncer.core.pre_condition_met_QMARK_ = (function pre_condition_met_QMARK_(pre_fn,map){var or__3607__auto__ = (pre_fn == null);if(or__3607__auto__)
{return or__3607__auto__;
} else
{return pre_fn.call(null,map);
}
});
/**
* Wraps pred in the context of validating a single value
* 
* - `acc`  is the map being validated
* 
* - `pred` is a validator
* 
* - `k`    the path to the value to be validated in the associative structure `acc`
* 
* - `args` any extra args to pred
* 
* It only runs pred if:
* 
* - the validator contains a pre-condition *and* it is met or;
* - the validator is optional  *and* there is a non-nil value to be validated (this information is read from pred's metadata) or;
* - there are no previous errors for the given path
* 
* Returns `acc` augmented with a namespace qualified ::errors keyword
*/
bouncer.core.wrap = (function wrap(message_fn,acc,p__18398){var vec__18403 = p__18398;var pred = cljs.core.nth.call(null,vec__18403,(0),null);var k = cljs.core.nth.call(null,vec__18403,(1),null);var args = cljs.core.nthnext.call(null,vec__18403,(2));var k__$1 = ((cljs.core.vector_QMARK_.call(null,k))?k:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));var error_path = cljs.core.cons.call(null,new cljs.core.Keyword("bouncer.core","errors","bouncer.core/errors",-444562289),k__$1);var map__18404 = cljs.core.meta.call(null,pred);var map__18404__$1 = ((cljs.core.seq_QMARK_.call(null,map__18404))?cljs.core.apply.call(null,cljs.core.hash_map,map__18404):map__18404);var metadata = map__18404__$1;var optional = cljs.core.get.call(null,map__18404__$1,new cljs.core.Keyword(null,"optional","optional",2053951509),false);var default_message_format = cljs.core.get.call(null,map__18404__$1,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"Custom validation failed for %s");var meta_with_defaults = cljs.core.merge.call(null,metadata,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),default_message_format,new cljs.core.Keyword(null,"optional","optional",2053951509),optional], null));var vec__18405 = cljs.core.split_with.call(null,cljs.core.complement.call(null,cljs.core.keyword_QMARK_),args);var args__$1 = cljs.core.nth.call(null,vec__18405,(0),null);var opts = cljs.core.nth.call(null,vec__18405,(1),null);var map__18406 = cljs.core.apply.call(null,cljs.core.hash_map,opts);var map__18406__$1 = ((cljs.core.seq_QMARK_.call(null,map__18406))?cljs.core.apply.call(null,cljs.core.hash_map,map__18406):map__18406);var message = cljs.core.get.call(null,map__18406__$1,new cljs.core.Keyword(null,"message","message",-406056002));var pre = cljs.core.get.call(null,map__18406__$1,new cljs.core.Keyword(null,"pre","pre",2118456869));var pred_subject = cljs.core.get_in.call(null,acc,k__$1);if(cljs.core.truth_(bouncer.core.pre_condition_met_QMARK_.call(null,pre,acc)))
{if(cljs.core.truth_((function (){var or__3607__auto__ = (function (){var and__3595__auto__ = optional;if(cljs.core.truth_(and__3595__auto__))
{return (pred_subject == null);
} else
{return and__3595__auto__;
}
})();if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = !(cljs.core.empty_QMARK_.call(null,cljs.core.get_in.call(null,acc,error_path)));if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{return cljs.core.apply.call(null,pred,pred_subject,args__$1);
}
}
})()))
{return acc;
} else
{return cljs.core.update_in.call(null,acc,error_path,((function (k__$1,error_path,map__18404,map__18404__$1,metadata,optional,default_message_format,meta_with_defaults,vec__18405,args__$1,opts,map__18406,map__18406__$1,message,pre,pred_subject,vec__18403,pred,k,args){
return (function (p1__18397_SHARP_){return cljs.core.conj.call(null,p1__18397_SHARP_,message_fn.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),k__$1,new cljs.core.Keyword(null,"value","value",305978217),pred_subject,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.seq.call(null,args__$1),new cljs.core.Keyword(null,"metadata","metadata",1799301597),meta_with_defaults,new cljs.core.Keyword(null,"message","message",-406056002),message], null)));
});})(k__$1,error_path,map__18404,map__18404__$1,metadata,optional,default_message_format,meta_with_defaults,vec__18405,args__$1,opts,map__18406,map__18406__$1,message,pre,pred_subject,vec__18403,pred,k,args))
);
}
} else
{return acc;
}
});
/**
* Internal Use.
* 
* Chain of responsibility.
* 
* Takes the current state and a collection of validators `fs`
* 
* Will run all validators against `old-state` and eventually return a vector with the result - the errors map - and the new state - the original map augmented with the errors map.
* 
* See also `wrap`
* @param {...*} var_args
*/
bouncer.core.wrap_chain = (function() { 
var wrap_chain__delegate = function (old_state,message_fn,fs){var new_state = cljs.core.reduce.call(null,cljs.core.partial.call(null,bouncer.core.wrap,message_fn),old_state,fs);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bouncer.core","errors","bouncer.core/errors",-444562289).cljs$core$IFn$_invoke$arity$1(new_state),new_state], null);
};
var wrap_chain = function (old_state,message_fn,var_args){
var fs = null;if (arguments.length > 2) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return wrap_chain__delegate.call(this,old_state,message_fn,fs);};
wrap_chain.cljs$lang$maxFixedArity = 2;
wrap_chain.cljs$lang$applyTo = (function (arglist__18407){
var old_state = cljs.core.first(arglist__18407);
arglist__18407 = cljs.core.next(arglist__18407);
var message_fn = cljs.core.first(arglist__18407);
var fs = cljs.core.rest(arglist__18407);
return wrap_chain__delegate(old_state,message_fn,fs);
});
wrap_chain.cljs$core$IFn$_invoke$arity$variadic = wrap_chain__delegate;
return wrap_chain;
})()
;
/**
* Internal use.
* 
* Validates the map m using the validation functions fs.
* 
* Returns a vector where the first element is the map of validation errors if any and the second is the original map (possibly) augmented with the errors map.
*/
bouncer.core.validate_STAR_ = (function validate_STAR_(message_fn,m,fs){var G__18413 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,m], null);var vec__18414 = G__18413;var errors = cljs.core.nth.call(null,vec__18414,(0),null);var state = cljs.core.nth.call(null,vec__18414,(1),null);var ret = vec__18414;var fs__$1 = fs;var G__18413__$1 = G__18413;var fs__$2 = fs__$1;while(true){
var vec__18415 = G__18413__$1;var errors__$1 = cljs.core.nth.call(null,vec__18415,(0),null);var state__$1 = cljs.core.nth.call(null,vec__18415,(1),null);var ret__$1 = vec__18415;var fs__$3 = fs__$2;if(cljs.core.seq.call(null,fs__$3))
{{
var G__18416 = bouncer.core.wrap_chain.call(null,state__$1,message_fn,cljs.core.first.call(null,fs__$3));
var G__18417 = cljs.core.rest.call(null,fs__$3);
G__18413__$1 = G__18416;
fs__$2 = G__18417;
continue;
}
} else
{return ret__$1;
}
break;
}
});
/**
* Use together with `validate`, e.g.:
* 
* 
* (core/validate core/with-default-messages {}
* :name v/required)
*/
bouncer.core.with_default_messages = (function with_default_messages(error){var map__18419 = error;var map__18419__$1 = ((cljs.core.seq_QMARK_.call(null,map__18419))?cljs.core.apply.call(null,cljs.core.hash_map,map__18419):map__18419);var message = cljs.core.get.call(null,map__18419__$1,new cljs.core.Keyword(null,"message","message",-406056002));var path = cljs.core.get.call(null,map__18419__$1,new cljs.core.Keyword(null,"path","path",-188191168));var metadata = cljs.core.get.call(null,map__18419__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));return goog.string.format((function (){var or__3607__auto__ = message;if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141).cljs$core$IFn$_invoke$arity$1(metadata);
}
})(),cljs.core.name.call(null,cljs.core.peek.call(null,path)));
});
/**
* Takes a
* 
* - `message-fn` (optional) responsible for transforming error metadata into
* the validation result (defaults to `with-default-messages`)
* 
* - `m` map to be validated
* 
* - `forms` validations to be performed on the map
* 
* forms can be a single validator set or a sequence of key/value pairs where:
* 
* key   ==> :keyword or [:a :path]
* 
* value ==> validation-function or
* validator-set or
* [[validation-function args+opts]] or
* [validation-function another-validation-function] or
* [validation-function [another-validation-function args+opts]]
* 
* e.g.:
* 
* 
* (core/validate a-map
* :name v/required
* :age  [v/required
* [v/number :message "age must be a number"]]
* [:passport :number] v/positive)
* 
* 
* Returns a vector where the first element is the map of validation errors if
* any and the second is the original map (possibly) augmented with the errors
* map.
* 
* See also `defvalidator`
* @param {...*} var_args
*/
bouncer.core.validate = (function() { 
var validate__delegate = function (args){var vec__18422 = ((cljs.core.fn_QMARK_.call(null,cljs.core.first.call(null,args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.next.call(null,args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.core.with_default_messages,args], null));var message_fn = cljs.core.nth.call(null,vec__18422,(0),null);var args__$1 = cljs.core.nth.call(null,vec__18422,(1),null);var vec__18423 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__$1),cljs.core.next.call(null,args__$1)], null);var m = cljs.core.nth.call(null,vec__18423,(0),null);var forms = cljs.core.nth.call(null,vec__18423,(1),null);return bouncer.core.validate_STAR_.call(null,message_fn,m,bouncer.core.build_steps.call(null,forms));
};
var validate = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return validate__delegate.call(this,args);};
validate.cljs$lang$maxFixedArity = 0;
validate.cljs$lang$applyTo = (function (arglist__18424){
var args = cljs.core.seq(arglist__18424);
return validate__delegate(args);
});
validate.cljs$core$IFn$_invoke$arity$variadic = validate__delegate;
return validate;
})()
;
/**
* Takes a map and one or more validation functions with semantics provided by "validate". Returns true if the map passes all validations. False otherwise.
* @param {...*} var_args
*/
bouncer.core.valid_QMARK_ = (function() { 
var valid_QMARK___delegate = function (args){return cljs.core.empty_QMARK_.call(null,cljs.core.first.call(null,cljs.core.apply.call(null,bouncer.core.validate,args)));
};
var valid_QMARK_ = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return valid_QMARK___delegate.call(this,args);};
valid_QMARK_.cljs$lang$maxFixedArity = 0;
valid_QMARK_.cljs$lang$applyTo = (function (arglist__18425){
var args = cljs.core.seq(arglist__18425);
return valid_QMARK___delegate(args);
});
valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic = valid_QMARK___delegate;
return valid_QMARK_;
})()
;

//# sourceMappingURL=core.js.map