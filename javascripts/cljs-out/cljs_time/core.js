// Compiled by ClojureScript 0.0-2371
goog.provide('cljs_time.core');
goog.require('cljs.core');
goog.require('cljs_time.internal.core');
goog.require('cljs_time.internal.core');
goog.require('cljs_time.internal.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.date.Date');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
goog.require('goog.i18n.TimeZone');
cljs_time.core._STAR_sys_time_STAR_ = null;
/**
* **Note:** Equality in goog.date.* (and also with plain
* javascript dates) is not the same as in Joda/clj-time. Two date
* objects representing the same instant in time in goog.date.* are not
* equal.
* 
* If you need to test for equality use either `cljs-time.core/=`, or
* optionally you can require the `cljs-time.extend` namespace which will
* extend the goog.date.* datatypes, so that clojure.core/= works as
* expected.
*/
cljs_time.core._EQ_ = cljs_time.internal.core._EQ_;
cljs_time.core.DateTimeProtocol = (function (){var obj15742 = {};return obj15742;
})();
cljs_time.core.year = (function year(this$){if((function (){var and__3595__auto__ = this$;if(and__3595__auto__)
{return this$.cljs_time$core$DateTimeProtocol$year$arity$1;
} else
{return and__3595__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$year$arity$1(this$);
} else
{var x__4244__auto__ = (((this$ == null))?null:this$);return (function (){var or__3607__auto__ = (cljs_time.core.year[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (cljs_time.core.year["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.year",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.month = (function month(this$){if((function (){var and__3595__auto__ = this$;if(and__3595__auto__)
{return this$.cljs_time$core$DateTimeProtocol$month$arity$1;
} else
{return and__3595__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$month$arity$1(this$);
} else
{var x__4244__auto__ = (((this$ == null))?null:this$);return (function (){var or__3607__auto__ = (cljs_time.core.month[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (cljs_time.core.month["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.month",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.day = (function day(this$){if((function (){var and__3595__auto__ = this$;if(and__3595__auto__)
{return this$.cljs_time$core$DateTimeProtocol$day$arity$1;
} else
{return and__3595__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$day$arity$1(this$);
} else
{var x__4244__auto__ = (((this$ == null))?null:this$);return (function (){var or__3607__auto__ = (cljs_time.core.day[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (cljs_time.core.day["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.day",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.day_of_week = (function day_of_week(this$){if((function (){var and__3595__auto__ = this$;if(and__3595__auto__)
{return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1;
} else
{return and__3595__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1(this$);
} else
{var x__4244__auto__ = (((this$ == null))?null:this$);return (function (){var or__3607__auto__ = (cljs_time.core.day_of_week[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (cljs_time.core.day_of_week["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.day-of-week",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.hour = (function hour(this$){if((function (){var and__3595__auto__ = this$;if(and__3595__auto__)
{return this$.cljs_time$core$DateTimeProtocol$hour$arity$1;
} else
{return and__3595__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$hour$arity$1(this$);
} else
{var x__4244__auto__ = (((this$ == null))?null:this$);return (function (){var or__3607__auto__ = (cljs_time.core.hour[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (cljs_time.core.hour["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.hour",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.minute = (function minute(this$){if((function (){var and__3595__auto__ = this$;if(and__3595__auto__)
{return this$.cljs_time$core$DateTimeProtocol$minute$arity$1;
} else
{return and__3595__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$minute$arity$1(this$);
} else
{var x__4244__auto__ = (((this$ == null))?null:this$);return (function (){var or__3607__auto__ = (cljs_time.core.minute[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (cljs_time.core.minute["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.minute",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.sec = (function sec(this$){if((function (){var and__3595__auto__ = this$;if(and__3595__auto__)
{return this$.cljs_time$core$DateTimeProtocol$sec$arity$1;
} else
{return and__3595__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$sec$arity$1(this$);
} else
{var x__4244__auto__ = (((this$ == null))?null:this$);return (function (){var or__3607__auto__ = (cljs_time.core.sec[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (cljs_time.core.sec["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.sec",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.second = (function second(this$){if((function (){var and__3595__auto__ = this$;if(and__3595__auto__)
{return this$.cljs_time$core$DateTimeProtocol$second$arity$1;
} else
{return and__3595__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$second$arity$1(this$);
} else
{var x__4244__auto__ = (((this$ == null))?null:this$);return (function (){var or__3607__auto__ = (cljs_time.core.second[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (cljs_time.core.second["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.second",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.milli = (function milli(this$){if((function (){var and__3595__auto__ = this$;if(and__3595__auto__)
{return this$.cljs_time$core$DateTimeProtocol$milli$arity$1;
} else
{return and__3595__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$milli$arity$1(this$);
} else
{var x__4244__auto__ = (((this$ == null))?null:this$);return (function (){var or__3607__auto__ = (cljs_time.core.milli[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (cljs_time.core.milli["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.milli",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.after_QMARK_ = (function after_QMARK_(this$,that){if((function (){var and__3595__auto__ = this$;if(and__3595__auto__)
{return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2;
} else
{return and__3595__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2(this$,that);
} else
{var x__4244__auto__ = (((this$ == null))?null:this$);return (function (){var or__3607__auto__ = (cljs_time.core.after_QMARK_[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (cljs_time.core.after_QMARK_["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.after?",this$);
}
}
})().call(null,this$,that);
}
});
cljs_time.core.before_QMARK_ = (function before_QMARK_(this$,that){if((function (){var and__3595__auto__ = this$;if(and__3595__auto__)
{return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2;
} else
{return and__3595__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2(this$,that);
} else
{var x__4244__auto__ = (((this$ == null))?null:this$);return (function (){var or__3607__auto__ = (cljs_time.core.before_QMARK_[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (cljs_time.core.before_QMARK_["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.before?",this$);
}
}
})().call(null,this$,that);
}
});
cljs_time.core.plus_ = (function plus_(this$,period){if((function (){var and__3595__auto__ = this$;if(and__3595__auto__)
{return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2;
} else
{return and__3595__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2(this$,period);
} else
{var x__4244__auto__ = (((this$ == null))?null:this$);return (function (){var or__3607__auto__ = (cljs_time.core.plus_[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (cljs_time.core.plus_["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.plus-",this$);
}
}
})().call(null,this$,period);
}
});
cljs_time.core.minus_ = (function minus_(this$,period){if((function (){var and__3595__auto__ = this$;if(and__3595__auto__)
{return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2;
} else
{return and__3595__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2(this$,period);
} else
{var x__4244__auto__ = (((this$ == null))?null:this$);return (function (){var or__3607__auto__ = (cljs_time.core.minus_[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (cljs_time.core.minus_["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.minus-",this$);
}
}
})().call(null,this$,period);
}
});
cljs_time.core.first_day_of_the_month_ = (function first_day_of_the_month_(this$){if((function (){var and__3595__auto__ = this$;if(and__3595__auto__)
{return this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1;
} else
{return and__3595__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1(this$);
} else
{var x__4244__auto__ = (((this$ == null))?null:this$);return (function (){var or__3607__auto__ = (cljs_time.core.first_day_of_the_month_[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (cljs_time.core.first_day_of_the_month_["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.first-day-of-the-month-",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.last_day_of_the_month_ = (function last_day_of_the_month_(this$){if((function (){var and__3595__auto__ = this$;if(and__3595__auto__)
{return this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1;
} else
{return and__3595__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1(this$);
} else
{var x__4244__auto__ = (((this$ == null))?null:this$);return (function (){var or__3607__auto__ = (cljs_time.core.last_day_of_the_month_[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (cljs_time.core.last_day_of_the_month_["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.last-day-of-the-month-",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.InTimeUnitProtocol = (function (){var obj15744 = {};return obj15744;
})();
cljs_time.core.in_millis = (function in_millis(this$){if((function (){var and__3595__auto__ = this$;if(and__3595__auto__)
{return this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1;
} else
{return and__3595__auto__;
}
})())
{return this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1(this$);
} else
{var x__4244__auto__ = (((this$ == null))?null:this$);return (function (){var or__3607__auto__ = (cljs_time.core.in_millis[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (cljs_time.core.in_millis["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-millis",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.in_seconds = (function in_seconds(this$){if((function (){var and__3595__auto__ = this$;if(and__3595__auto__)
{return this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1;
} else
{return and__3595__auto__;
}
})())
{return this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1(this$);
} else
{var x__4244__auto__ = (((this$ == null))?null:this$);return (function (){var or__3607__auto__ = (cljs_time.core.in_seconds[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (cljs_time.core.in_seconds["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-seconds",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.in_minutes = (function in_minutes(this$){if((function (){var and__3595__auto__ = this$;if(and__3595__auto__)
{return this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1;
} else
{return and__3595__auto__;
}
})())
{return this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1(this$);
} else
{var x__4244__auto__ = (((this$ == null))?null:this$);return (function (){var or__3607__auto__ = (cljs_time.core.in_minutes[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (cljs_time.core.in_minutes["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-minutes",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.in_hours = (function in_hours(this$){if((function (){var and__3595__auto__ = this$;if(and__3595__auto__)
{return this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1;
} else
{return and__3595__auto__;
}
})())
{return this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1(this$);
} else
{var x__4244__auto__ = (((this$ == null))?null:this$);return (function (){var or__3607__auto__ = (cljs_time.core.in_hours[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (cljs_time.core.in_hours["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-hours",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.in_days = (function in_days(this$){if((function (){var and__3595__auto__ = this$;if(and__3595__auto__)
{return this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1;
} else
{return and__3595__auto__;
}
})())
{return this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1(this$);
} else
{var x__4244__auto__ = (((this$ == null))?null:this$);return (function (){var or__3607__auto__ = (cljs_time.core.in_days[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (cljs_time.core.in_days["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-days",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.in_weeks = (function in_weeks(this$){if((function (){var and__3595__auto__ = this$;if(and__3595__auto__)
{return this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1;
} else
{return and__3595__auto__;
}
})())
{return this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1(this$);
} else
{var x__4244__auto__ = (((this$ == null))?null:this$);return (function (){var or__3607__auto__ = (cljs_time.core.in_weeks[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (cljs_time.core.in_weeks["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-weeks",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.in_months = (function in_months(this$){if((function (){var and__3595__auto__ = this$;if(and__3595__auto__)
{return this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1;
} else
{return and__3595__auto__;
}
})())
{return this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1(this$);
} else
{var x__4244__auto__ = (((this$ == null))?null:this$);return (function (){var or__3607__auto__ = (cljs_time.core.in_months[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (cljs_time.core.in_months["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-months",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.in_years = (function in_years(this$){if((function (){var and__3595__auto__ = this$;if(and__3595__auto__)
{return this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1;
} else
{return and__3595__auto__;
}
})())
{return this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1(this$);
} else
{var x__4244__auto__ = (((this$ == null))?null:this$);return (function (){var or__3607__auto__ = (cljs_time.core.in_years[goog.typeOf(x__4244__auto__)]);if(or__3607__auto__)
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (cljs_time.core.in_years["_"]);if(or__3607__auto____$1)
{return or__3607__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-years",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
* @param {*} start
* @param {*} end
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs_time.core.Interval = (function (start,end,__meta,__extmap){
this.start = start;
this.end = end;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){var self__ = this;
var this__4203__auto____$1 = this;return cljs.core._lookup.call(null,this__4203__auto____$1,k__4204__auto__,null);
});
cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k15746,else__4206__auto__){var self__ = this;
var this__4205__auto____$1 = this;var G__15748 = (((k15746 instanceof cljs.core.Keyword))?k15746.fqn:null);switch (G__15748) {
case "start":
return self__.start;

break;
case "end":
return self__.end;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k15746,else__4206__auto__);

}
});
cljs_time.core.Interval.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){var self__ = this;
var this__4217__auto____$1 = this;var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#cljs-time.core.Interval{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end","end",-268185958),self__.end],null))], null),self__.__extmap));
});
cljs_time.core.Interval.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){var self__ = this;
var this__4201__auto____$1 = this;return self__.__meta;
});
cljs_time.core.Interval.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4197__auto__){var self__ = this;
var this__4197__auto____$1 = this;return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,self__.__extmap,self__.__hash));
});
cljs_time.core.Interval.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){var self__ = this;
var this__4207__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
cljs_time.core.Interval.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4198__auto__){var self__ = this;
var this__4198__auto____$1 = this;var h__4018__auto__ = self__.__hash;if(!((h__4018__auto__ == null)))
{return h__4018__auto__;
} else
{var h__4018__auto____$1 = cljs.core.hash_imap.call(null,this__4198__auto____$1);self__.__hash = h__4018__auto____$1;
return h__4018__auto____$1;
}
});
cljs_time.core.Interval.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4199__auto__,other__4200__auto__){var self__ = this;
var this__4199__auto____$1 = this;if(cljs.core.truth_((function (){var and__3595__auto__ = other__4200__auto__;if(cljs.core.truth_(and__3595__auto__))
{return ((this__4199__auto____$1.constructor === other__4200__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4199__auto____$1,other__4200__auto__));
} else
{return and__3595__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs_time.core.Interval.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){var self__ = this;
var this__4212__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"end","end",-268185958),null], null), null),k__4213__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else
{return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});
cljs_time.core.Interval.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__15745){var self__ = this;
var this__4210__auto____$1 = this;var pred__15749 = cljs.core.keyword_identical_QMARK_;var expr__15750 = k__4211__auto__;if(cljs.core.truth_(pred__15749.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__15750)))
{return (new cljs_time.core.Interval(G__15745,self__.end,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15749.call(null,new cljs.core.Keyword(null,"end","end",-268185958),expr__15750)))
{return (new cljs_time.core.Interval(self__.start,G__15745,self__.__meta,self__.__extmap,null));
} else
{return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__15745),null));
}
}
});
cljs_time.core.Interval.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){var self__ = this;
var this__4215__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end","end",-268185958),self__.end],null))], null),self__.__extmap));
});
cljs_time.core.Interval.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__15745){var self__ = this;
var this__4202__auto____$1 = this;return (new cljs_time.core.Interval(self__.start,self__.end,G__15745,self__.__extmap,self__.__hash));
});
cljs_time.core.Interval.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){var self__ = this;
var this__4208__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__))
{return cljs.core._assoc.call(null,this__4208__auto____$1,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});
cljs_time.core.Interval.cljs$lang$type = true;
cljs_time.core.Interval.cljs$lang$ctorPrSeq = (function (this__4237__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs-time.core/Interval");
});
cljs_time.core.Interval.cljs$lang$ctorPrWriter = (function (this__4237__auto__,writer__4238__auto__){return cljs.core._write.call(null,writer__4238__auto__,"cljs-time.core/Interval");
});
cljs_time.core.__GT_Interval = (function __GT_Interval(start,end){return (new cljs_time.core.Interval(start,end));
});
cljs_time.core.map__GT_Interval = (function map__GT_Interval(G__15747){return (new cljs_time.core.Interval(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__15747),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(G__15747),null,cljs.core.dissoc.call(null,G__15747,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958))));
});
/**
* Returns an Interval representing the span between the two given DateTime.
* Note that intervals are closed on the left and open on the right.
*/
cljs_time.core.interval = (function interval(start,end){if((start.getTime() <= end.getTime()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),new cljs.core.Symbol(null,"end","end",1372345569,null))))))));
}
return cljs_time.core.__GT_Interval.call(null,start,end);
});

/**
* @constructor
* @param {*} years
* @param {*} months
* @param {*} weeks
* @param {*} days
* @param {*} hours
* @param {*} minutes
* @param {*} seconds
* @param {*} millis
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs_time.core.Period = (function (years,months,weeks,days,hours,minutes,seconds,millis,__meta,__extmap){
this.years = years;
this.months = months;
this.weeks = weeks;
this.days = days;
this.hours = hours;
this.minutes = minutes;
this.seconds = seconds;
this.millis = millis;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>8){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){var self__ = this;
var this__4203__auto____$1 = this;return cljs.core._lookup.call(null,this__4203__auto____$1,k__4204__auto__,null);
});
cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k15754,else__4206__auto__){var self__ = this;
var this__4205__auto____$1 = this;var G__15756 = (((k15754 instanceof cljs.core.Keyword))?k15754.fqn:null);switch (G__15756) {
case "years":
return self__.years;

break;
case "months":
return self__.months;

break;
case "weeks":
return self__.weeks;

break;
case "days":
return self__.days;

break;
case "hours":
return self__.hours;

break;
case "minutes":
return self__.minutes;

break;
case "seconds":
return self__.seconds;

break;
case "millis":
return self__.millis;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k15754,else__4206__auto__);

}
});
cljs_time.core.Period.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){var self__ = this;
var this__4217__auto____$1 = this;var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#cljs-time.core.Period{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"years","years",-1298579689),self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"months","months",-45571637),self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weeks","weeks",1844596125),self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"days","days",-1394072564),self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hours","hours",58380855),self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"minutes","minutes",1319166394),self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seconds","seconds",-445266194),self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"millis","millis",-1338288387),self__.millis],null))], null),self__.__extmap));
});
cljs_time.core.Period.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){var self__ = this;
var this__4201__auto____$1 = this;return self__.__meta;
});
cljs_time.core.Period.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4197__auto__){var self__ = this;
var this__4197__auto____$1 = this;return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,self__.__hash));
});
cljs_time.core.Period.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){var self__ = this;
var this__4207__auto____$1 = this;return (8 + cljs.core.count.call(null,self__.__extmap));
});
cljs_time.core.Period.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4198__auto__){var self__ = this;
var this__4198__auto____$1 = this;var h__4018__auto__ = self__.__hash;if(!((h__4018__auto__ == null)))
{return h__4018__auto__;
} else
{var h__4018__auto____$1 = cljs.core.hash_imap.call(null,this__4198__auto____$1);self__.__hash = h__4018__auto____$1;
return h__4018__auto____$1;
}
});
cljs_time.core.Period.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4199__auto__,other__4200__auto__){var self__ = this;
var this__4199__auto____$1 = this;if(cljs.core.truth_((function (){var and__3595__auto__ = other__4200__auto__;if(cljs.core.truth_(and__3595__auto__))
{return ((this__4199__auto____$1.constructor === other__4200__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4199__auto____$1,other__4200__auto__));
} else
{return and__3595__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs_time.core.Period.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){var self__ = this;
var this__4212__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null,new cljs.core.Keyword(null,"millis","millis",-1338288387),null], null), null),k__4213__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else
{return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});
cljs_time.core.Period.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__15753){var self__ = this;
var this__4210__auto____$1 = this;var pred__15757 = cljs.core.keyword_identical_QMARK_;var expr__15758 = k__4211__auto__;if(cljs.core.truth_(pred__15757.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),expr__15758)))
{return (new cljs_time.core.Period(G__15753,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15757.call(null,new cljs.core.Keyword(null,"months","months",-45571637),expr__15758)))
{return (new cljs_time.core.Period(self__.years,G__15753,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15757.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),expr__15758)))
{return (new cljs_time.core.Period(self__.years,self__.months,G__15753,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15757.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),expr__15758)))
{return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,G__15753,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15757.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),expr__15758)))
{return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,G__15753,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15757.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),expr__15758)))
{return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,G__15753,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15757.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),expr__15758)))
{return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,G__15753,self__.millis,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15757.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),expr__15758)))
{return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,G__15753,self__.__meta,self__.__extmap,null));
} else
{return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__15753),null));
}
}
}
}
}
}
}
}
});
cljs_time.core.Period.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){var self__ = this;
var this__4215__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"years","years",-1298579689),self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"months","months",-45571637),self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weeks","weeks",1844596125),self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"days","days",-1394072564),self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hours","hours",58380855),self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"minutes","minutes",1319166394),self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seconds","seconds",-445266194),self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"millis","millis",-1338288387),self__.millis],null))], null),self__.__extmap));
});
cljs_time.core.Period.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__15753){var self__ = this;
var this__4202__auto____$1 = this;return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,G__15753,self__.__extmap,self__.__hash));
});
cljs_time.core.Period.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){var self__ = this;
var this__4208__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__))
{return cljs.core._assoc.call(null,this__4208__auto____$1,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});
cljs_time.core.Period.cljs$lang$type = true;
cljs_time.core.Period.cljs$lang$ctorPrSeq = (function (this__4237__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs-time.core/Period");
});
cljs_time.core.Period.cljs$lang$ctorPrWriter = (function (this__4237__auto__,writer__4238__auto__){return cljs.core._write.call(null,writer__4238__auto__,"cljs-time.core/Period");
});
cljs_time.core.__GT_Period = (function __GT_Period(years,months,weeks,days,hours,minutes,seconds,millis){return (new cljs_time.core.Period(years,months,weeks,days,hours,minutes,seconds,millis));
});
cljs_time.core.map__GT_Period = (function map__GT_Period(G__15755){return (new cljs_time.core.Period(new cljs.core.Keyword(null,"years","years",-1298579689).cljs$core$IFn$_invoke$arity$1(G__15755),new cljs.core.Keyword(null,"months","months",-45571637).cljs$core$IFn$_invoke$arity$1(G__15755),new cljs.core.Keyword(null,"weeks","weeks",1844596125).cljs$core$IFn$_invoke$arity$1(G__15755),new cljs.core.Keyword(null,"days","days",-1394072564).cljs$core$IFn$_invoke$arity$1(G__15755),new cljs.core.Keyword(null,"hours","hours",58380855).cljs$core$IFn$_invoke$arity$1(G__15755),new cljs.core.Keyword(null,"minutes","minutes",1319166394).cljs$core$IFn$_invoke$arity$1(G__15755),new cljs.core.Keyword(null,"seconds","seconds",-445266194).cljs$core$IFn$_invoke$arity$1(G__15755),new cljs.core.Keyword(null,"millis","millis",-1338288387).cljs$core$IFn$_invoke$arity$1(G__15755),null,cljs.core.dissoc.call(null,G__15755,new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"millis","millis",-1338288387))));
});
/**
* @param {...*} var_args
*/
cljs_time.core.period = (function() {
var period = null;
var period__2 = (function (period__$1,value){return cljs_time.core.map__GT_Period.call(null,new cljs.core.PersistentArrayMap.fromArray([period__$1,value], true, false));
});
var period__3 = (function() { 
var G__15761__delegate = function (p1,v1,kvs){return cljs.core.apply.call(null,cljs.core.assoc,period.call(null,p1,v1),kvs);
};
var G__15761 = function (p1,v1,var_args){
var kvs = null;if (arguments.length > 2) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15761__delegate.call(this,p1,v1,kvs);};
G__15761.cljs$lang$maxFixedArity = 2;
G__15761.cljs$lang$applyTo = (function (arglist__15762){
var p1 = cljs.core.first(arglist__15762);
arglist__15762 = cljs.core.next(arglist__15762);
var v1 = cljs.core.first(arglist__15762);
var kvs = cljs.core.rest(arglist__15762);
return G__15761__delegate(p1,v1,kvs);
});
G__15761.cljs$core$IFn$_invoke$arity$variadic = G__15761__delegate;
return G__15761;
})()
;
period = function(p1,v1,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return period__2.call(this,p1,v1);
default:
return period__3.cljs$core$IFn$_invoke$arity$variadic(p1,v1, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
period.cljs$lang$maxFixedArity = 2;
period.cljs$lang$applyTo = period__3.cljs$lang$applyTo;
period.cljs$core$IFn$_invoke$arity$2 = period__2;
period.cljs$core$IFn$_invoke$arity$variadic = period__3.cljs$core$IFn$_invoke$arity$variadic;
return period;
})()
;
cljs_time.core.periods = (function (){var fixed_time_fn = (function (f,set_fn,op,date,value){var date__$1 = date.clone();if(cljs.core.truth_(value))
{set_fn.call(null,date__$1,op.call(null,f.call(null,date__$1),value));
} else
{}
return date__$1;
});return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"millis","millis",-1338288387),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.milli,((function (fixed_time_fn){
return (function (p1__15763_SHARP_,p2__15764_SHARP_){return p1__15763_SHARP_.setMilliseconds(p2__15764_SHARP_);
});})(fixed_time_fn))
),new cljs.core.Keyword(null,"seconds","seconds",-445266194),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.second,((function (fixed_time_fn){
return (function (p1__15765_SHARP_,p2__15766_SHARP_){return p1__15765_SHARP_.setSeconds(p2__15766_SHARP_);
});})(fixed_time_fn))
),new cljs.core.Keyword(null,"minutes","minutes",1319166394),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.minute,((function (fixed_time_fn){
return (function (p1__15767_SHARP_,p2__15768_SHARP_){return p1__15767_SHARP_.setMinutes(p2__15768_SHARP_);
});})(fixed_time_fn))
),new cljs.core.Keyword(null,"hours","hours",58380855),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.hour,((function (fixed_time_fn){
return (function (p1__15769_SHARP_,p2__15770_SHARP_){return p1__15769_SHARP_.setHours(p2__15770_SHARP_);
});})(fixed_time_fn))
),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.day,((function (fixed_time_fn){
return (function (p1__15771_SHARP_,p2__15772_SHARP_){return p1__15771_SHARP_.setDate(p2__15772_SHARP_);
});})(fixed_time_fn))
),new cljs.core.Keyword(null,"weeks","weeks",1844596125),((function (fixed_time_fn){
return (function (op,date,value){var date__$1 = date.clone();if(cljs.core.truth_(value))
{date__$1.setDate(op.call(null,cljs_time.core.day.call(null,date__$1),((7) * value)));
} else
{}
return date__$1;
});})(fixed_time_fn))
,new cljs.core.Keyword(null,"months","months",-45571637),((function (fixed_time_fn){
return (function (op,date,value){var date__$1 = date.clone();if(cljs.core.truth_(value))
{var m_15773 = op.call(null,cljs_time.core.month.call(null,date__$1),value);var y_15774 = cljs_time.core.year.call(null,date__$1);var y_15775__$1 = (((m_15773 > (12)))?(y_15774 + (1)):(((m_15773 < (1)))?(y_15774 - (1)):y_15774
));var m_15776__$1 = (((m_15773 > (12)))?cljs.core.mod.call(null,m_15773,(12)):(((m_15773 < (1)))?(m_15773 + (12)):m_15773
));var ldom_15777 = cljs_time.core.day.call(null,cljs_time.core.last_day_of_the_month_.call(null,(new goog.date.Date(y_15775__$1,(m_15776__$1 - (1)),(1)))));if((ldom_15777 < cljs_time.core.day.call(null,date__$1)))
{date__$1.setDate(ldom_15777);
} else
{}
date__$1.setMonth((m_15776__$1 - (1)));
date__$1.setYear(y_15775__$1);
} else
{}
return date__$1;
});})(fixed_time_fn))
,new cljs.core.Keyword(null,"years","years",-1298579689),((function (fixed_time_fn){
return (function (op,date,value){var date__$1 = date.clone();if(cljs.core.truth_(value))
{if(cljs.core.truth_((function (){var and__3595__auto__ = cljs_time.internal.core.leap_year_QMARK_.call(null,cljs_time.core.year.call(null,date__$1));if(and__3595__auto__)
{var and__3595__auto____$1 = cljs_time.core._EQ_.call(null,(2),cljs_time.core.month.call(null,date__$1));if(cljs.core.truth_(and__3595__auto____$1))
{return cljs_time.core._EQ_.call(null,(29),cljs_time.core.day.call(null,date__$1));
} else
{return and__3595__auto____$1;
}
} else
{return and__3595__auto__;
}
})()))
{date__$1.setDate((28));
} else
{}
date__$1.setYear(op.call(null,cljs_time.core.year.call(null,date__$1),value));
} else
{}
return date__$1;
});})(fixed_time_fn))
], null);
})();
cljs_time.core.period_fn = (function period_fn(p){return (function (operator,date){return cljs.core.reduce.call(null,(function (p1__15779_SHARP_,p2__15778_SHARP_){return cljs_time.core.periods.call(null,cljs.core.key.call(null,p2__15778_SHARP_)).call(null,operator,p1__15779_SHARP_,cljs.core.val.call(null,p2__15778_SHARP_));
}),date,p);
});
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$ = true;
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getYear();
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){var this$__$1 = this;return (this$__$1.getMonth() + (1));
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getDate();
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){var this$__$1 = this;var d = this$__$1.getDay();if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0))))
{return (7);
} else
{return d;
}
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getHours();
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getMinutes();
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getSeconds();
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getMilliseconds();
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){var this$__$1 = this;return (this$__$1.getTime() > that.getTime());
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){var this$__$1 = this;return (this$__$1.getTime() < that.getTime());
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){var this$__$1 = this;return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){var this$__$1 = this;return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){var this$__$1 = this;return (new goog.date.UtcDateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){var this$__$1 = this;return cljs_time.core.minus_.call(null,(new goog.date.UtcDateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
});
goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$ = true;
goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getYear();
});
goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){var this$__$1 = this;return (this$__$1.getMonth() + (1));
});
goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getDate();
});
goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){var this$__$1 = this;var d = this$__$1.getDay();if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0))))
{return (7);
} else
{return d;
}
});
goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getHours();
});
goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getMinutes();
});
goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getSeconds();
});
goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getMilliseconds();
});
goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){var this$__$1 = this;return (this$__$1.getTime() > that.getTime());
});
goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){var this$__$1 = this;return (this$__$1.getTime() < that.getTime());
});
goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){var this$__$1 = this;return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
});
goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){var this$__$1 = this;return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
});
goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){var this$__$1 = this;return (new goog.date.DateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});
goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){var this$__$1 = this;return cljs_time.core.minus_.call(null,(new goog.date.DateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
});
goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$ = true;
goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getYear();
});
goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){var this$__$1 = this;return (this$__$1.getMonth() + (1));
});
goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getDate();
});
goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){var this$__$1 = this;var d = this$__$1.getDay();if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0))))
{return (7);
} else
{return d;
}
});
goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){var this$__$1 = this;return null;
});
goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){var this$__$1 = this;return null;
});
goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){var this$__$1 = this;return null;
});
goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){var this$__$1 = this;return null;
});
goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){var this$__$1 = this;return (this$__$1.getTime() > that.getTime());
});
goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){var this$__$1 = this;return (this$__$1.getTime() < that.getTime());
});
goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){var this$__$1 = this;return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
});
goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){var this$__$1 = this;return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
});
goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){var this$__$1 = this;return (new goog.date.Date(this$__$1.getYear(),this$__$1.getMonth(),(1)));
});
goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){var this$__$1 = this;return cljs_time.core.minus_.call(null,(new goog.date.Date(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
});
cljs_time.core.utc = goog.i18n.TimeZone.createTimeZone(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"UTC",new cljs.core.Keyword(null,"std_offset","std_offset",1663653877),(0),new cljs.core.Keyword(null,"names","names",-1943074658),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["UTC"], null),new cljs.core.Keyword(null,"transitions","transitions",-2046216121),cljs.core.PersistentVector.EMPTY], null)));
/**
* Returns a DateTime for the current instant in the UTC time zone.
*/
cljs_time.core.now = (function now(){if(cljs.core.truth_(cljs_time.core._STAR_sys_time_STAR_))
{return cljs_time.core._STAR_sys_time_STAR_;
} else
{return (new goog.date.UtcDateTime());
}
});
/**
* Returns a local DateTime for the current instant without date or time zone
* in the current time zone.
*/
cljs_time.core.time_now = (function time_now(){return (new goog.date.DateTime());
});
cljs_time.core.at_midnight = (function at_midnight(datetime){var datetime__$1 = datetime.clone();var G__15781 = datetime__$1;G__15781.setHours((0));
G__15781.setMinutes((0));
G__15781.setSeconds((0));
G__15781.setMilliseconds((0));
return G__15781;
});
/**
* Returns a DateTime for today at midnight in the UTC time zone.
*/
cljs_time.core.today_at_midnight = (function today_at_midnight(){return cljs_time.core.at_midnight.call(null,cljs_time.core.now.call(null));
});
/**
* Returns a DateTime for the begining of the Unix epoch in the UTC time zone.
*/
cljs_time.core.epoch = (function epoch(){var G__15783 = (new goog.date.UtcDateTime());G__15783.setTime((0));
return G__15783;
});
/**
* Constructs and returns a new DateTime at midnight in UTC.
* 
* Specify the year, month of year, day of month. Note that month and day are
* 1-indexed. Any number of least-significant components can be ommited, in
* which case they will default to 1.
*/
cljs_time.core.date_midnight = (function() {
var date_midnight = null;
var date_midnight__1 = (function (year){return date_midnight.call(null,year,(1),(1));
});
var date_midnight__2 = (function (year,month){return date_midnight.call(null,year,month,(1));
});
var date_midnight__3 = (function (year,month,day){return (new goog.date.UtcDateTime(year,(month - (1)),day));
});
date_midnight = function(year,month,day){
switch(arguments.length){
case 1:
return date_midnight__1.call(this,year);
case 2:
return date_midnight__2.call(this,year,month);
case 3:
return date_midnight__3.call(this,year,month,day);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_midnight.cljs$core$IFn$_invoke$arity$1 = date_midnight__1;
date_midnight.cljs$core$IFn$_invoke$arity$2 = date_midnight__2;
date_midnight.cljs$core$IFn$_invoke$arity$3 = date_midnight__3;
return date_midnight;
})()
;
/**
* Constructs and returns a new DateTime in UTC.
* 
* Specify the year, month of year, day of month, hour of day, minute if hour,
* second of minute, and millisecond of second. Note that month and day are
* 1-indexed while hour, second, minute, and millis are 0-indexed.
* 
* Any number of least-significant components can be ommited, in which case
* they will default to 1 or 0 as appropriate.
*/
cljs_time.core.date_time = (function() {
var date_time = null;
var date_time__1 = (function (year){return date_time.call(null,year,(1),(1),(0),(0),(0),(0));
});
var date_time__2 = (function (year,month){return date_time.call(null,year,month,(1),(0),(0),(0),(0));
});
var date_time__3 = (function (year,month,day){return date_time.call(null,year,month,day,(0),(0),(0),(0));
});
var date_time__4 = (function (year,month,day,hour){return date_time.call(null,year,month,day,hour,(0),(0),(0));
});
var date_time__5 = (function (year,month,day,hour,minute){return date_time.call(null,year,month,day,hour,minute,(0),(0));
});
var date_time__6 = (function (year,month,day,hour,minute,second){return date_time.call(null,year,month,day,hour,minute,second,(0));
});
var date_time__7 = (function (year,month,day,hour,minute,second,millis){return (new goog.date.UtcDateTime(year,(month - (1)),day,hour,minute,second,millis));
});
date_time = function(year,month,day,hour,minute,second,millis){
switch(arguments.length){
case 1:
return date_time__1.call(this,year);
case 2:
return date_time__2.call(this,year,month);
case 3:
return date_time__3.call(this,year,month,day);
case 4:
return date_time__4.call(this,year,month,day,hour);
case 5:
return date_time__5.call(this,year,month,day,hour,minute);
case 6:
return date_time__6.call(this,year,month,day,hour,minute,second);
case 7:
return date_time__7.call(this,year,month,day,hour,minute,second,millis);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_time.cljs$core$IFn$_invoke$arity$1 = date_time__1;
date_time.cljs$core$IFn$_invoke$arity$2 = date_time__2;
date_time.cljs$core$IFn$_invoke$arity$3 = date_time__3;
date_time.cljs$core$IFn$_invoke$arity$4 = date_time__4;
date_time.cljs$core$IFn$_invoke$arity$5 = date_time__5;
date_time.cljs$core$IFn$_invoke$arity$6 = date_time__6;
date_time.cljs$core$IFn$_invoke$arity$7 = date_time__7;
return date_time;
})()
;
/**
* Constructs and returns a new local DateTime.
* Specify the year, month of year, day of month, hour of day, minute of hour,
* second of minute, and millisecond of second. Note that month and day are
* 1-indexed while hour, second, minute, and millis are 0-indexed.
* Any number of least-significant components can be ommited, in which case
* they will default to 1 or 0 as appropriate.
*/
cljs_time.core.local_date_time = (function() {
var local_date_time = null;
var local_date_time__1 = (function (year){return local_date_time.call(null,year,(1),(1),(0),(0),(0),(0));
});
var local_date_time__2 = (function (year,month){return local_date_time.call(null,year,month,(1),(0),(0),(0),(0));
});
var local_date_time__3 = (function (year,month,day){return local_date_time.call(null,year,month,day,(0),(0),(0),(0));
});
var local_date_time__4 = (function (year,month,day,hour){return local_date_time.call(null,year,month,day,hour,(0),(0),(0));
});
var local_date_time__5 = (function (year,month,day,hour,minute){return local_date_time.call(null,year,month,day,hour,minute,(0),(0));
});
var local_date_time__6 = (function (year,month,day,hour,minute,second){return local_date_time.call(null,year,month,day,hour,minute,second,(0));
});
var local_date_time__7 = (function (year,month,day,hour,minute,second,millis){return (new goog.date.DateTime(year,(month - (1)),day,hour,minute,second,millis));
});
local_date_time = function(year,month,day,hour,minute,second,millis){
switch(arguments.length){
case 1:
return local_date_time__1.call(this,year);
case 2:
return local_date_time__2.call(this,year,month);
case 3:
return local_date_time__3.call(this,year,month,day);
case 4:
return local_date_time__4.call(this,year,month,day,hour);
case 5:
return local_date_time__5.call(this,year,month,day,hour,minute);
case 6:
return local_date_time__6.call(this,year,month,day,hour,minute,second);
case 7:
return local_date_time__7.call(this,year,month,day,hour,minute,second,millis);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
local_date_time.cljs$core$IFn$_invoke$arity$1 = local_date_time__1;
local_date_time.cljs$core$IFn$_invoke$arity$2 = local_date_time__2;
local_date_time.cljs$core$IFn$_invoke$arity$3 = local_date_time__3;
local_date_time.cljs$core$IFn$_invoke$arity$4 = local_date_time__4;
local_date_time.cljs$core$IFn$_invoke$arity$5 = local_date_time__5;
local_date_time.cljs$core$IFn$_invoke$arity$6 = local_date_time__6;
local_date_time.cljs$core$IFn$_invoke$arity$7 = local_date_time__7;
return local_date_time;
})()
;
/**
* Constructs and returns a new local DateTime.
* Specify the year, month, and day. Does not deal with timezones.
*/
cljs_time.core.local_date = (function local_date(year,month,day){return (new goog.date.Date(year,(month - (1)),day));
});
/**
* Constructs and returns a new local DateTime representing today's date.
* local DateTime objects do not deal with timezones at all.
*/
cljs_time.core.today = (function today(){if(cljs.core.truth_(cljs_time.core._STAR_sys_time_STAR_))
{var d = cljs_time.core._STAR_sys_time_STAR_;return (new goog.date.Date(d.getYear(),d.getMonth(),d.getDate()));
} else
{return (new goog.date.Date());
}
});
/**
* Returns a timezone map for the given offset, specified either in hours or
* hours and minutes.
*/
cljs_time.core.time_zone_for_offset = (function() {
var time_zone_for_offset = null;
var time_zone_for_offset__1 = (function (hours){return time_zone_for_offset.call(null,hours,null);
});
var time_zone_for_offset__2 = (function (hours,minutes){var sign = (((hours < (0)))?new cljs.core.Keyword(null,"-","-",-2112348439):new cljs.core.Keyword(null,"+","+",1913524883));var fmt = ("UTC%s%02d"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(minutes)?":%02d":null)));var hours__$1 = (((hours < (0)))?((-1) * hours):hours);var tz_name = (cljs.core.truth_(minutes)?cljs_time.internal.core.format.call(null,fmt,cljs.core.name.call(null,sign),hours__$1,minutes):cljs_time.internal.core.format.call(null,fmt,cljs.core.name.call(null,sign),hours__$1));return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),tz_name,new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sign,hours__$1,(function (){var or__3607__auto__ = minutes;if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return (0);
}
})(),(0)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),"-",new cljs.core.Keyword(null,"names","names",-1943074658),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tz_name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("cljs-time.core","time-zone","cljs-time.core/time-zone",751963705)], null));
});
time_zone_for_offset = function(hours,minutes){
switch(arguments.length){
case 1:
return time_zone_for_offset__1.call(this,hours);
case 2:
return time_zone_for_offset__2.call(this,hours,minutes);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_zone_for_offset.cljs$core$IFn$_invoke$arity$1 = time_zone_for_offset__1;
time_zone_for_offset.cljs$core$IFn$_invoke$arity$2 = time_zone_for_offset__2;
return time_zone_for_offset;
})()
;
/**
* Returns the default timezone map for the current environment.
*/
cljs_time.core.default_time_zone = (function default_time_zone(){var hours = (((-1) * (new goog.date.DateTime()).getTimezoneOffset()) / (60));return cljs_time.core.time_zone_for_offset.call(null,(hours | (0)),cljs.core.mod.call(null,hours,(1)));
});
/**
* Assuming `dt` is in the UTC timezone, returns a DateTime
* corresponding to the same absolute instant in time as the given
* DateTime, but with calendar fields corresponding to in the default
* (local) timezone.
*/
cljs_time.core.to_default_time_zone = (function to_default_time_zone(dt){return (new goog.date.DateTime(dt));
});
/**
* Assuming `dt` is in the UTC timezone, returns a DateTime
* corresponding to the same point in calendar time as the given
* DateTime, but for a correspondingly different absolute instant in
* time in the default (local) timezone.
* 
* Note: This implementation uses the ECMAScript 5.1 implementation which
* trades some historical daylight savings transition accuracy for simplicity.
* see http://es5.github.io/#x15.9.1.8
* 
*/
cljs_time.core.from_default_time_zone = (function from_default_time_zone(dt){return (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds()));
});
/**
* Given a number, returns a Period representing that many years.
* Without an argument, returns a Period representing only years.
*/
cljs_time.core.years = (function() {
var years = null;
var years__0 = (function (){return years.call(null,null);
});
var years__1 = (function (n){return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),n);
});
years = function(n){
switch(arguments.length){
case 0:
return years__0.call(this);
case 1:
return years__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
years.cljs$core$IFn$_invoke$arity$0 = years__0;
years.cljs$core$IFn$_invoke$arity$1 = years__1;
return years;
})()
;
/**
* Given a number, returns a Period representing that many months.
* Without an argument, returns a Period representing only months.
*/
cljs_time.core.months = (function() {
var months = null;
var months__0 = (function (){return months.call(null,null);
});
var months__1 = (function (n){return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"months","months",-45571637),n);
});
months = function(n){
switch(arguments.length){
case 0:
return months__0.call(this);
case 1:
return months__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
months.cljs$core$IFn$_invoke$arity$0 = months__0;
months.cljs$core$IFn$_invoke$arity$1 = months__1;
return months;
})()
;
/**
* Given a number, returns a Period representing that many weeks.
* Without an argument, returns a Period representing only weeks.
*/
cljs_time.core.weeks = (function() {
var weeks = null;
var weeks__0 = (function (){return weeks.call(null,null);
});
var weeks__1 = (function (n){return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),n);
});
weeks = function(n){
switch(arguments.length){
case 0:
return weeks__0.call(this);
case 1:
return weeks__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
weeks.cljs$core$IFn$_invoke$arity$0 = weeks__0;
weeks.cljs$core$IFn$_invoke$arity$1 = weeks__1;
return weeks;
})()
;
/**
* Given a number, returns a Period representing that many days.
* Without an argument, returns a Period representing only days.
*/
cljs_time.core.days = (function() {
var days = null;
var days__0 = (function (){return days.call(null,null);
});
var days__1 = (function (n){return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),n);
});
days = function(n){
switch(arguments.length){
case 0:
return days__0.call(this);
case 1:
return days__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
days.cljs$core$IFn$_invoke$arity$0 = days__0;
days.cljs$core$IFn$_invoke$arity$1 = days__1;
return days;
})()
;
/**
* Given a number, returns a Period representing that many hours.
* Without an argument, returns a Period representing only hours.
*/
cljs_time.core.hours = (function() {
var hours = null;
var hours__0 = (function (){return hours.call(null,null);
});
var hours__1 = (function (n){return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),n);
});
hours = function(n){
switch(arguments.length){
case 0:
return hours__0.call(this);
case 1:
return hours__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hours.cljs$core$IFn$_invoke$arity$0 = hours__0;
hours.cljs$core$IFn$_invoke$arity$1 = hours__1;
return hours;
})()
;
/**
* Given a number, returns a Period representing that many minutes.
* Without an argument, returns a Period representing only minutes.
*/
cljs_time.core.minutes = (function() {
var minutes = null;
var minutes__0 = (function (){return minutes.call(null,null);
});
var minutes__1 = (function (n){return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),n);
});
minutes = function(n){
switch(arguments.length){
case 0:
return minutes__0.call(this);
case 1:
return minutes__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
minutes.cljs$core$IFn$_invoke$arity$0 = minutes__0;
minutes.cljs$core$IFn$_invoke$arity$1 = minutes__1;
return minutes;
})()
;
/**
* Given a number, returns a Period representing that many seconds.
* Without an argument, returns a Period representing only seconds.
*/
cljs_time.core.seconds = (function() {
var seconds = null;
var seconds__0 = (function (){return seconds.call(null,null);
});
var seconds__1 = (function (n){return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),n);
});
seconds = function(n){
switch(arguments.length){
case 0:
return seconds__0.call(this);
case 1:
return seconds__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
seconds.cljs$core$IFn$_invoke$arity$0 = seconds__0;
seconds.cljs$core$IFn$_invoke$arity$1 = seconds__1;
return seconds;
})()
;
/**
* Given a number, returns a Period representing that many milliseconds.
* Without an argument, returns a Period representing only milliseconds.
*/
cljs_time.core.millis = (function() {
var millis = null;
var millis__0 = (function (){return millis.call(null,null);
});
var millis__1 = (function (n){return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),n);
});
millis = function(n){
switch(arguments.length){
case 0:
return millis__0.call(this);
case 1:
return millis__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
millis.cljs$core$IFn$_invoke$arity$0 = millis__0;
millis.cljs$core$IFn$_invoke$arity$1 = millis__1;
return millis;
})()
;
/**
* Returns a new date/time corresponding to the given date/time moved
* forwards by the given Period(s).
* @param {...*} var_args
*/
cljs_time.core.plus = (function() {
var plus = null;
var plus__2 = (function (dt,p){return cljs_time.core.plus_.call(null,dt,p);
});
var plus__3 = (function() { 
var G__15784__delegate = function (dt,p,ps){return cljs.core.reduce.call(null,cljs_time.core.plus_,cljs_time.core.plus_.call(null,dt,p),ps);
};
var G__15784 = function (dt,p,var_args){
var ps = null;if (arguments.length > 2) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15784__delegate.call(this,dt,p,ps);};
G__15784.cljs$lang$maxFixedArity = 2;
G__15784.cljs$lang$applyTo = (function (arglist__15785){
var dt = cljs.core.first(arglist__15785);
arglist__15785 = cljs.core.next(arglist__15785);
var p = cljs.core.first(arglist__15785);
var ps = cljs.core.rest(arglist__15785);
return G__15784__delegate(dt,p,ps);
});
G__15784.cljs$core$IFn$_invoke$arity$variadic = G__15784__delegate;
return G__15784;
})()
;
plus = function(dt,p,var_args){
var ps = var_args;
switch(arguments.length){
case 2:
return plus__2.call(this,dt,p);
default:
return plus__3.cljs$core$IFn$_invoke$arity$variadic(dt,p, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
plus.cljs$lang$maxFixedArity = 2;
plus.cljs$lang$applyTo = plus__3.cljs$lang$applyTo;
plus.cljs$core$IFn$_invoke$arity$2 = plus__2;
plus.cljs$core$IFn$_invoke$arity$variadic = plus__3.cljs$core$IFn$_invoke$arity$variadic;
return plus;
})()
;
/**
* Returns a new date/time object corresponding to the given date/time
* moved backwards by the given Period(s).
* @param {...*} var_args
*/
cljs_time.core.minus = (function() {
var minus = null;
var minus__2 = (function (dt,p){return cljs_time.core.minus_.call(null,dt,p);
});
var minus__3 = (function() { 
var G__15786__delegate = function (dt,p,ps){return cljs.core.reduce.call(null,cljs_time.core.minus_,cljs_time.core.minus_.call(null,dt,p),ps);
};
var G__15786 = function (dt,p,var_args){
var ps = null;if (arguments.length > 2) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15786__delegate.call(this,dt,p,ps);};
G__15786.cljs$lang$maxFixedArity = 2;
G__15786.cljs$lang$applyTo = (function (arglist__15787){
var dt = cljs.core.first(arglist__15787);
arglist__15787 = cljs.core.next(arglist__15787);
var p = cljs.core.first(arglist__15787);
var ps = cljs.core.rest(arglist__15787);
return G__15786__delegate(dt,p,ps);
});
G__15786.cljs$core$IFn$_invoke$arity$variadic = G__15786__delegate;
return G__15786;
})()
;
minus = function(dt,p,var_args){
var ps = var_args;
switch(arguments.length){
case 2:
return minus__2.call(this,dt,p);
default:
return minus__3.cljs$core$IFn$_invoke$arity$variadic(dt,p, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
minus.cljs$lang$maxFixedArity = 2;
minus.cljs$lang$applyTo = minus__3.cljs$lang$applyTo;
minus.cljs$core$IFn$_invoke$arity$2 = minus__2;
minus.cljs$core$IFn$_invoke$arity$variadic = minus__3.cljs$core$IFn$_invoke$arity$variadic;
return minus;
})()
;
/**
* Returns a DateTime a supplied period before the present.
* 
* e.g. `(-> 5 years ago)`
*/
cljs_time.core.ago = (function ago(period){return cljs_time.core.minus.call(null,cljs_time.core.now.call(null),period);
});
/**
* Returns a DateTime for yesterday relative to now
*/
cljs_time.core.yesterday = (function yesterday(){return cljs_time.core.ago.call(null,cljs_time.core.days.call(null,(1)));
});
/**
* Returns a DateTime a supplied period after the present.
* e.g. `(-> 30 minutes from-now)`
*/
cljs_time.core.from_now = (function from_now(period){return cljs_time.core.plus.call(null,cljs_time.core.now.call(null),period);
});
/**
* Returns the earliest of the supplied DateTimes
*/
cljs_time.core.earliest = (function() {
var earliest = null;
var earliest__1 = (function (dts){return cljs.core.reduce.call(null,earliest,dts);
});
var earliest__2 = (function (dt1,dt2){if(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,dt1,dt2)))
{return dt1;
} else
{return dt2;
}
});
earliest = function(dt1,dt2){
switch(arguments.length){
case 1:
return earliest__1.call(this,dt1);
case 2:
return earliest__2.call(this,dt1,dt2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
earliest.cljs$core$IFn$_invoke$arity$1 = earliest__1;
earliest.cljs$core$IFn$_invoke$arity$2 = earliest__2;
return earliest;
})()
;
/**
* Returns the latest of the supplied DateTimes
*/
cljs_time.core.latest = (function() {
var latest = null;
var latest__1 = (function (dts){return cljs.core.reduce.call(null,latest,dts);
});
var latest__2 = (function (dt1,dt2){if(cljs.core.truth_(cljs_time.core.after_QMARK_.call(null,dt1,dt2)))
{return dt1;
} else
{return dt2;
}
});
latest = function(dt1,dt2){
switch(arguments.length){
case 1:
return latest__1.call(this,dt1);
case 2:
return latest__2.call(this,dt1,dt2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
latest.cljs$core$IFn$_invoke$arity$1 = latest__1;
latest.cljs$core$IFn$_invoke$arity$2 = latest__2;
return latest;
})()
;
/**
* Returns the start DateTime of an Interval.
*/
cljs_time.core.start = (function start(in$){return new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(in$);
});
/**
* Returns the end DateTime of an Interval.
*/
cljs_time.core.end = (function end(in$){return new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(in$);
});
/**
* Returns an Interval with an end DateTime the specified Period after the end
* of the given Interval
* @param {...*} var_args
*/
cljs_time.core.extend = (function() { 
var extend__delegate = function (in$,by){return cljs.core.assoc.call(null,in$,new cljs.core.Keyword(null,"end","end",-268185958),cljs.core.apply.call(null,cljs_time.core.plus,cljs_time.core.end.call(null,in$),by));
};
var extend = function (in$,var_args){
var by = null;if (arguments.length > 1) {
  by = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return extend__delegate.call(this,in$,by);};
extend.cljs$lang$maxFixedArity = 1;
extend.cljs$lang$applyTo = (function (arglist__15788){
var in$ = cljs.core.first(arglist__15788);
var by = cljs.core.rest(arglist__15788);
return extend__delegate(in$,by);
});
extend.cljs$core$IFn$_invoke$arity$variadic = extend__delegate;
return extend;
})()
;
cljs_time.core.month_range = (function month_range(p__15791){var map__15793 = p__15791;var map__15793__$1 = ((cljs.core.seq_QMARK_.call(null,map__15793))?cljs.core.apply.call(null,cljs.core.hash_map,map__15793):map__15793);var start = cljs.core.get.call(null,map__15793__$1,new cljs.core.Keyword(null,"start","start",-355208981));var end = cljs.core.get.call(null,map__15793__$1,new cljs.core.Keyword(null,"end","end",-268185958));return cljs.core.take_while.call(null,((function (map__15793,map__15793__$1,start,end){
return (function (p1__15789_SHARP_){return cljs_time.core.before_QMARK_.call(null,p1__15789_SHARP_,end);
});})(map__15793,map__15793__$1,start,end))
,cljs.core.map.call(null,((function (map__15793,map__15793__$1,start,end){
return (function (p1__15790_SHARP_){return cljs_time.core.plus.call(null,start,cljs_time.core.months.call(null,(p1__15790_SHARP_ + (1))));
});})(map__15793,map__15793__$1,start,end))
,cljs.core.range.call(null)));
});
cljs_time.core.total_days_in_whole_months = (function total_days_in_whole_months(interval){return cljs.core.map.call(null,(function (p1__15794_SHARP_){return p1__15794_SHARP_.getNumberOfDaysInMonth();
}),cljs_time.core.month_range.call(null,interval));
});
/**
* Returns the number of months in the given Interval.
* 
* For example, the interval 2nd Jan 2012 midnight to 2nd Feb 2012 midnight,
* returns 1 month.
* 
* Likewise, 29th Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
* 
* But also, 31st Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
* 
* And, 28th Dec 2012 midnight to 28th Feb 2013 midnight returns 2 months.
*/
cljs_time.core.in_months_ = (function in_months_(p__15795){var map__15797 = p__15795;var map__15797__$1 = ((cljs.core.seq_QMARK_.call(null,map__15797))?cljs.core.apply.call(null,cljs.core.hash_map,map__15797):map__15797);var interval = map__15797__$1;var start = cljs.core.get.call(null,map__15797__$1,new cljs.core.Keyword(null,"start","start",-355208981));var end = cljs.core.get.call(null,map__15797__$1,new cljs.core.Keyword(null,"end","end",-268185958));return cljs.core.count.call(null,cljs_time.core.total_days_in_whole_months.call(null,interval));
});
/**
* Returns the number of standard years in the given Interval.
*/
cljs_time.core.in_years_ = (function in_years_(p__15798){var map__15800 = p__15798;var map__15800__$1 = ((cljs.core.seq_QMARK_.call(null,map__15800))?cljs.core.apply.call(null,cljs.core.hash_map,map__15800):map__15800);var start = cljs.core.get.call(null,map__15800__$1,new cljs.core.Keyword(null,"start","start",-355208981));var end = cljs.core.get.call(null,map__15800__$1,new cljs.core.Keyword(null,"end","end",-268185958));var sm = cljs_time.core.month.call(null,start);var sd = cljs_time.core.day.call(null,start);var em = cljs_time.core.month.call(null,end);var ed = cljs_time.core.day.call(null,end);var d1 = (cljs.core.truth_((function (){var and__3595__auto__ = cljs_time.core._EQ_.call(null,sm,(2));if(cljs.core.truth_(and__3595__auto__))
{var and__3595__auto____$1 = cljs_time.core._EQ_.call(null,sd,(29));if(cljs.core.truth_(and__3595__auto____$1))
{var and__3595__auto____$2 = cljs_time.core._EQ_.call(null,em,(2));if(cljs.core.truth_(and__3595__auto____$2))
{return cljs_time.core._EQ_.call(null,ed,(28));
} else
{return and__3595__auto____$2;
}
} else
{return and__3595__auto____$1;
}
} else
{return and__3595__auto__;
}
})())?(0):(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),sm,sd),cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),em,ed)))?(0):(cljs.core.truth_(cljs_time.core.after_QMARK_.call(null,cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),sm,sd),cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),em,ed)))?(1):(0)
)));return ((cljs_time.core.year.call(null,end) - cljs_time.core.year.call(null,start)) - d1);
});
cljs_time.core.conversion_error = (function conversion_error(from,to){var from__$1 = clojure.string.capitalize.call(null,cljs.core.name.call(null,from));var to__$1 = cljs.core.name.call(null,to);throw cljs.core.ex_info.call(null,cljs_time.internal.core.format.call(null,"%s cannot be converted to %s",from__$1,to__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unsupported-operation","unsupported-operation",1890540953)], null));
});
cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$ = true;
cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__15801){var map__15802 = p__15801;var map__15802__$1 = ((cljs.core.seq_QMARK_.call(null,map__15802))?cljs.core.apply.call(null,cljs.core.hash_map,map__15802):map__15802);var millis = cljs.core.get.call(null,map__15802__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));var seconds = cljs.core.get.call(null,map__15802__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));var minutes = cljs.core.get.call(null,map__15802__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));var hours = cljs.core.get.call(null,map__15802__$1,new cljs.core.Keyword(null,"hours","hours",58380855));var days = cljs.core.get.call(null,map__15802__$1,new cljs.core.Keyword(null,"days","days",-1394072564));var weeks = cljs.core.get.call(null,map__15802__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));var months = cljs.core.get.call(null,map__15802__$1,new cljs.core.Keyword(null,"months","months",-45571637));var years = cljs.core.get.call(null,map__15802__$1,new cljs.core.Keyword(null,"years","years",-1298579689));var map__15803 = this;var map__15803__$1 = ((cljs.core.seq_QMARK_.call(null,map__15803))?cljs.core.apply.call(null,cljs.core.hash_map,map__15803):map__15803);var millis__$1 = cljs.core.get.call(null,map__15803__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));var seconds__$1 = cljs.core.get.call(null,map__15803__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));var minutes__$1 = cljs.core.get.call(null,map__15803__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));var hours__$1 = cljs.core.get.call(null,map__15803__$1,new cljs.core.Keyword(null,"hours","hours",58380855));var days__$1 = cljs.core.get.call(null,map__15803__$1,new cljs.core.Keyword(null,"days","days",-1394072564));var weeks__$1 = cljs.core.get.call(null,map__15803__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));var months__$1 = cljs.core.get.call(null,map__15803__$1,new cljs.core.Keyword(null,"months","months",-45571637));var years__$1 = cljs.core.get.call(null,map__15803__$1,new cljs.core.Keyword(null,"years","years",-1298579689));if(cljs.core.truth_(months__$1))
{return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"millis","millis",-1338288387));
} else
{if(cljs.core.truth_(years__$1))
{return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"millis","millis",-1338288387));
} else
{return (((((millis__$1 + (seconds__$1 * (1000))) + ((minutes__$1 * (60)) * (1000))) + (((hours__$1 * (60)) * (60)) * (1000))) + ((((days__$1 * (24)) * (60)) * (60)) * (1000))) + (((((weeks__$1 * (7)) * (24)) * (60)) * (60)) * (1000)));

}
}
});
cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){var this$__$1 = this;return ((cljs_time.core.in_millis.call(null,this$__$1) / (1000)) | (0));
});
cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){var this$__$1 = this;return ((cljs_time.core.in_seconds.call(null,this$__$1) / (60)) | (0));
});
cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){var this$__$1 = this;return ((cljs_time.core.in_minutes.call(null,this$__$1) / (60)) | (0));
});
cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){var this$__$1 = this;return ((cljs_time.core.in_hours.call(null,this$__$1) / (24)) | (0));
});
cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){var this$__$1 = this;return ((cljs_time.core.in_days.call(null,this$__$1) / (7)) | (0));
});
cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (p__15804){var map__15805 = p__15804;var map__15805__$1 = ((cljs.core.seq_QMARK_.call(null,map__15805))?cljs.core.apply.call(null,cljs.core.hash_map,map__15805):map__15805);var millis = cljs.core.get.call(null,map__15805__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));var seconds = cljs.core.get.call(null,map__15805__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));var minutes = cljs.core.get.call(null,map__15805__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));var hours = cljs.core.get.call(null,map__15805__$1,new cljs.core.Keyword(null,"hours","hours",58380855));var days = cljs.core.get.call(null,map__15805__$1,new cljs.core.Keyword(null,"days","days",-1394072564));var weeks = cljs.core.get.call(null,map__15805__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));var months = cljs.core.get.call(null,map__15805__$1,new cljs.core.Keyword(null,"months","months",-45571637));var years = cljs.core.get.call(null,map__15805__$1,new cljs.core.Keyword(null,"years","years",-1298579689));var map__15806 = this;var map__15806__$1 = ((cljs.core.seq_QMARK_.call(null,map__15806))?cljs.core.apply.call(null,cljs.core.hash_map,map__15806):map__15806);var millis__$1 = cljs.core.get.call(null,map__15806__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));var seconds__$1 = cljs.core.get.call(null,map__15806__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));var minutes__$1 = cljs.core.get.call(null,map__15806__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));var hours__$1 = cljs.core.get.call(null,map__15806__$1,new cljs.core.Keyword(null,"hours","hours",58380855));var days__$1 = cljs.core.get.call(null,map__15806__$1,new cljs.core.Keyword(null,"days","days",-1394072564));var weeks__$1 = cljs.core.get.call(null,map__15806__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));var months__$1 = cljs.core.get.call(null,map__15806__$1,new cljs.core.Keyword(null,"months","months",-45571637));var years__$1 = cljs.core.get.call(null,map__15806__$1,new cljs.core.Keyword(null,"years","years",-1298579689));if(cljs.core.truth_(millis__$1))
{return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),new cljs.core.Keyword(null,"months","months",-45571637));
} else
{if(cljs.core.truth_(seconds__$1))
{return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"months","months",-45571637));
} else
{if(cljs.core.truth_(minutes__$1))
{return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"months","months",-45571637));
} else
{if(cljs.core.truth_(hours__$1))
{return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"months","months",-45571637));
} else
{if(cljs.core.truth_(days__$1))
{return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"months","months",-45571637));
} else
{if(cljs.core.truth_(weeks__$1))
{return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"months","months",-45571637));
} else
{if(cljs.core.truth_(months__$1))
{return (months__$1 + ((function (){var or__3607__auto__ = years__$1;if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return (0);
}
})() * (12)));
} else
{if(cljs.core.truth_(years__$1))
{return (years__$1 * (12));
} else
{return null;
}
}
}
}
}
}
}
}
});
cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (p__15807){var map__15808 = p__15807;var map__15808__$1 = ((cljs.core.seq_QMARK_.call(null,map__15808))?cljs.core.apply.call(null,cljs.core.hash_map,map__15808):map__15808);var millis = cljs.core.get.call(null,map__15808__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));var seconds = cljs.core.get.call(null,map__15808__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));var minutes = cljs.core.get.call(null,map__15808__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));var hours = cljs.core.get.call(null,map__15808__$1,new cljs.core.Keyword(null,"hours","hours",58380855));var days = cljs.core.get.call(null,map__15808__$1,new cljs.core.Keyword(null,"days","days",-1394072564));var weeks = cljs.core.get.call(null,map__15808__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));var months = cljs.core.get.call(null,map__15808__$1,new cljs.core.Keyword(null,"months","months",-45571637));var years = cljs.core.get.call(null,map__15808__$1,new cljs.core.Keyword(null,"years","years",-1298579689));var map__15809 = this;var map__15809__$1 = ((cljs.core.seq_QMARK_.call(null,map__15809))?cljs.core.apply.call(null,cljs.core.hash_map,map__15809):map__15809);var millis__$1 = cljs.core.get.call(null,map__15809__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));var seconds__$1 = cljs.core.get.call(null,map__15809__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));var minutes__$1 = cljs.core.get.call(null,map__15809__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));var hours__$1 = cljs.core.get.call(null,map__15809__$1,new cljs.core.Keyword(null,"hours","hours",58380855));var days__$1 = cljs.core.get.call(null,map__15809__$1,new cljs.core.Keyword(null,"days","days",-1394072564));var weeks__$1 = cljs.core.get.call(null,map__15809__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));var months__$1 = cljs.core.get.call(null,map__15809__$1,new cljs.core.Keyword(null,"months","months",-45571637));var years__$1 = cljs.core.get.call(null,map__15809__$1,new cljs.core.Keyword(null,"years","years",-1298579689));if(cljs.core.truth_(millis__$1))
{return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),new cljs.core.Keyword(null,"years","years",-1298579689));
} else
{if(cljs.core.truth_(seconds__$1))
{return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"years","years",-1298579689));
} else
{if(cljs.core.truth_(minutes__$1))
{return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"years","years",-1298579689));
} else
{if(cljs.core.truth_(hours__$1))
{return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"years","years",-1298579689));
} else
{if(cljs.core.truth_(days__$1))
{return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"years","years",-1298579689));
} else
{if(cljs.core.truth_(weeks__$1))
{return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"years","years",-1298579689));
} else
{if(cljs.core.truth_(months__$1))
{return (((months__$1 / (12)) + years__$1) | (0));
} else
{if(cljs.core.truth_(years__$1))
{return years__$1;
} else
{return null;
}
}
}
}
}
}
}
}
});
cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$ = true;
cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__15810){var map__15811 = p__15810;var map__15811__$1 = ((cljs.core.seq_QMARK_.call(null,map__15811))?cljs.core.apply.call(null,cljs.core.hash_map,map__15811):map__15811);var start = cljs.core.get.call(null,map__15811__$1,new cljs.core.Keyword(null,"start","start",-355208981));var end = cljs.core.get.call(null,map__15811__$1,new cljs.core.Keyword(null,"end","end",-268185958));var map__15812 = this;var map__15812__$1 = ((cljs.core.seq_QMARK_.call(null,map__15812))?cljs.core.apply.call(null,cljs.core.hash_map,map__15812):map__15812);var start__$1 = cljs.core.get.call(null,map__15812__$1,new cljs.core.Keyword(null,"start","start",-355208981));var end__$1 = cljs.core.get.call(null,map__15812__$1,new cljs.core.Keyword(null,"end","end",-268185958));return (end__$1.getTime() - start__$1.getTime());
});
cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){var this$__$1 = this;return ((cljs_time.core.in_millis.call(null,this$__$1) / (1000)) | (0));
});
cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){var this$__$1 = this;return ((cljs_time.core.in_seconds.call(null,this$__$1) / (60)) | (0));
});
cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){var this$__$1 = this;return ((cljs_time.core.in_minutes.call(null,this$__$1) / (60)) | (0));
});
cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){var this$__$1 = this;return ((cljs_time.core.in_hours.call(null,this$__$1) / (24)) | (0));
});
cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){var this$__$1 = this;return ((cljs_time.core.in_days.call(null,this$__$1) / (7)) | (0));
});
cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (this$){var this$__$1 = this;return cljs_time.core.in_months_.call(null,this$__$1);
});
cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (this$){var this$__$1 = this;return cljs_time.core.in_years_.call(null,this$__$1);
});
/**
* With 2 arguments: Returns true if the given Interval contains the given
* DateTime. Note that if the DateTime is exactly equal to the
* end of the interval, this function returns false.
* 
* With 3 arguments: Returns true if the start DateTime is
* equal to or before and the end DateTime is equal to or after the test
* DateTime.
*/
cljs_time.core.within_QMARK_ = (function() {
var within_QMARK_ = null;
var within_QMARK___2 = (function (p__15813,date){var map__15815 = p__15813;var map__15815__$1 = ((cljs.core.seq_QMARK_.call(null,map__15815))?cljs.core.apply.call(null,cljs.core.hash_map,map__15815):map__15815);var start = cljs.core.get.call(null,map__15815__$1,new cljs.core.Keyword(null,"start","start",-355208981));var end = cljs.core.get.call(null,map__15815__$1,new cljs.core.Keyword(null,"end","end",-268185958));return within_QMARK_.call(null,start,end,date);
});
var within_QMARK___3 = (function (start,end,date){var or__3607__auto__ = cljs_time.core._EQ_.call(null,start,date);if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{var and__3595__auto__ = cljs_time.core.before_QMARK_.call(null,start,date);if(cljs.core.truth_(and__3595__auto__))
{return cljs_time.core.after_QMARK_.call(null,end,date);
} else
{return and__3595__auto__;
}
}
});
within_QMARK_ = function(start,end,date){
switch(arguments.length){
case 2:
return within_QMARK___2.call(this,start,end);
case 3:
return within_QMARK___3.call(this,start,end,date);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
within_QMARK_.cljs$core$IFn$_invoke$arity$2 = within_QMARK___2;
within_QMARK_.cljs$core$IFn$_invoke$arity$3 = within_QMARK___3;
return within_QMARK_;
})()
;
/**
* With 2 arguments: Returns true of the two given Intervals overlap.
* Note that intervals that satisfy abuts? do not satisfy overlaps?
* 
* With 4 arguments: Returns true if the range specified by start-a and end-a
* overlaps with the range specified by start-b and end-b.
*/
cljs_time.core.overlaps_QMARK_ = (function() {
var overlaps_QMARK_ = null;
var overlaps_QMARK___2 = (function (p__15816,p__15817){var map__15820 = p__15816;var map__15820__$1 = ((cljs.core.seq_QMARK_.call(null,map__15820))?cljs.core.apply.call(null,cljs.core.hash_map,map__15820):map__15820);var start_a = cljs.core.get.call(null,map__15820__$1,new cljs.core.Keyword(null,"start","start",-355208981));var end_a = cljs.core.get.call(null,map__15820__$1,new cljs.core.Keyword(null,"end","end",-268185958));var map__15821 = p__15817;var map__15821__$1 = ((cljs.core.seq_QMARK_.call(null,map__15821))?cljs.core.apply.call(null,cljs.core.hash_map,map__15821):map__15821);var start_b = cljs.core.get.call(null,map__15821__$1,new cljs.core.Keyword(null,"start","start",-355208981));var end_b = cljs.core.get.call(null,map__15821__$1,new cljs.core.Keyword(null,"end","end",-268185958));var and__3595__auto__ = cljs.core.not.call(null,(function (){var or__3607__auto__ = cljs_time.core._EQ_.call(null,start_a,end_b);if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return cljs_time.core._EQ_.call(null,end_a,start_b);
}
})());if(and__3595__auto__)
{return overlaps_QMARK_.call(null,start_a,end_a,start_b,end_b);
} else
{return and__3595__auto__;
}
});
var overlaps_QMARK___4 = (function (start_a,end_a,start_b,end_b){var or__3607__auto__ = (function (){var and__3595__auto__ = cljs_time.core.before_QMARK_.call(null,start_b,end_a);if(cljs.core.truth_(and__3595__auto__))
{return cljs_time.core.after_QMARK_.call(null,end_b,start_a);
} else
{return and__3595__auto__;
}
})();if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{var or__3607__auto____$1 = (function (){var and__3595__auto__ = cljs_time.core.after_QMARK_.call(null,end_b,start_a);if(cljs.core.truth_(and__3595__auto__))
{return cljs_time.core.before_QMARK_.call(null,start_b,end_a);
} else
{return and__3595__auto__;
}
})();if(cljs.core.truth_(or__3607__auto____$1))
{return or__3607__auto____$1;
} else
{var or__3607__auto____$2 = cljs_time.core._EQ_.call(null,start_a,end_b);if(cljs.core.truth_(or__3607__auto____$2))
{return or__3607__auto____$2;
} else
{return cljs_time.core._EQ_.call(null,start_b,end_a);
}
}
}
});
overlaps_QMARK_ = function(start_a,end_a,start_b,end_b){
switch(arguments.length){
case 2:
return overlaps_QMARK___2.call(this,start_a,end_a);
case 4:
return overlaps_QMARK___4.call(this,start_a,end_a,start_b,end_b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2 = overlaps_QMARK___2;
overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4 = overlaps_QMARK___4;
return overlaps_QMARK_;
})()
;
/**
* Returns true if Interval a abuts b, i.e. then end of a is exactly the
* beginning of b.
*/
cljs_time.core.abuts_QMARK_ = (function abuts_QMARK_(p__15822,p__15823){var map__15826 = p__15822;var map__15826__$1 = ((cljs.core.seq_QMARK_.call(null,map__15826))?cljs.core.apply.call(null,cljs.core.hash_map,map__15826):map__15826);var start_a = cljs.core.get.call(null,map__15826__$1,new cljs.core.Keyword(null,"start","start",-355208981));var end_a = cljs.core.get.call(null,map__15826__$1,new cljs.core.Keyword(null,"end","end",-268185958));var map__15827 = p__15823;var map__15827__$1 = ((cljs.core.seq_QMARK_.call(null,map__15827))?cljs.core.apply.call(null,cljs.core.hash_map,map__15827):map__15827);var start_b = cljs.core.get.call(null,map__15827__$1,new cljs.core.Keyword(null,"start","start",-355208981));var end_b = cljs.core.get.call(null,map__15827__$1,new cljs.core.Keyword(null,"end","end",-268185958));var or__3607__auto__ = cljs_time.core._EQ_.call(null,start_a,end_b);if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return cljs_time.core._EQ_.call(null,end_a,start_b);
}
});
cljs_time.core.date_QMARK_ = (function date_QMARK_(x){var G__15829 = x;if(G__15829)
{var bit__4271__auto__ = null;if(cljs.core.truth_((function (){var or__3607__auto__ = bit__4271__auto__;if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return G__15829.cljs_time$core$DateTimeProtocol$;
}
})()))
{return true;
} else
{if((!G__15829.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs_time.core.DateTimeProtocol,G__15829);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs_time.core.DateTimeProtocol,G__15829);
}
});
cljs_time.core.interval_QMARK_ = (function interval_QMARK_(x){return (x instanceof cljs_time.core.Interval);
});
cljs_time.core.period_QMARK_ = (function period_QMARK_(x){return (x instanceof cljs_time.core.Period);
});
cljs_time.core.period_type_QMARK_ = (function period_type_QMARK_(type,x){return (cljs_time.core.period_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,x,type));
});
/**
* Returns true if the given value is an instance of Years
*/
cljs_time.core.years_QMARK_ = (function years_QMARK_(val){return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),val);
});
/**
* Returns true if the given value is an instance of Months
*/
cljs_time.core.months_QMARK_ = (function months_QMARK_(val){return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"months","months",-45571637),val);
});
/**
* Returns true if the given value is an instance of Weeks
*/
cljs_time.core.weeks_QMARK_ = (function weeks_QMARK_(val){return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),val);
});
/**
* Returns true if the given value is an instance of Days
*/
cljs_time.core.days_QMARK_ = (function days_QMARK_(val){return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),val);
});
/**
* Returns true if the given value is an instance of Hours
*/
cljs_time.core.hours_QMARK_ = (function hours_QMARK_(val){return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),val);
});
/**
* Returns true if the given value is an instance of Minutes
*/
cljs_time.core.minutes_QMARK_ = (function minutes_QMARK_(val){return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),val);
});
/**
* Returns true if the given value is an instance of Seconds
*/
cljs_time.core.seconds_QMARK_ = (function seconds_QMARK_(val){return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),val);
});
cljs_time.core.mins_ago = (function mins_ago(d){return cljs_time.core.in_minutes.call(null,cljs_time.core.interval.call(null,d,cljs_time.core.now.call(null)));
});
cljs_time.core.last_day_of_the_month = (function() {
var last_day_of_the_month = null;
var last_day_of_the_month__1 = (function (dt){return cljs_time.core.last_day_of_the_month_.call(null,dt);
});
var last_day_of_the_month__2 = (function (year,month){return cljs_time.core.last_day_of_the_month_.call(null,cljs_time.core.date_time.call(null,year,month));
});
last_day_of_the_month = function(year,month){
switch(arguments.length){
case 1:
return last_day_of_the_month__1.call(this,year);
case 2:
return last_day_of_the_month__2.call(this,year,month);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
last_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = last_day_of_the_month__1;
last_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = last_day_of_the_month__2;
return last_day_of_the_month;
})()
;
cljs_time.core.number_of_days_in_the_month = (function() {
var number_of_days_in_the_month = null;
var number_of_days_in_the_month__1 = (function (dt){return number_of_days_in_the_month.call(null,cljs_time.core.year.call(null,dt),cljs_time.core.month.call(null,dt));
});
var number_of_days_in_the_month__2 = (function (year,month){return cljs_time.core.last_day_of_the_month.call(null,year,month).getDate();
});
number_of_days_in_the_month = function(year,month){
switch(arguments.length){
case 1:
return number_of_days_in_the_month__1.call(this,year);
case 2:
return number_of_days_in_the_month__2.call(this,year,month);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1 = number_of_days_in_the_month__1;
number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2 = number_of_days_in_the_month__2;
return number_of_days_in_the_month;
})()
;
cljs_time.core.first_day_of_the_month = (function() {
var first_day_of_the_month = null;
var first_day_of_the_month__1 = (function (dt){return cljs_time.core.first_day_of_the_month_.call(null,dt);
});
var first_day_of_the_month__2 = (function (year,month){return cljs_time.core.first_day_of_the_month_.call(null,cljs_time.core.date_time.call(null,year,month));
});
first_day_of_the_month = function(year,month){
switch(arguments.length){
case 1:
return first_day_of_the_month__1.call(this,year);
case 2:
return first_day_of_the_month__2.call(this,year,month);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
first_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = first_day_of_the_month__1;
first_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = first_day_of_the_month__2;
return first_day_of_the_month;
})()
;
cljs_time.core.__GT_period = (function (){var method_table__4487__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4488__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4491__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("->period",cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4491__auto__,method_table__4487__auto__,prefer_table__4488__auto__,method_cache__4489__auto__,cached_hierarchy__4490__auto__));
})();
cljs.core._add_method.call(null,cljs_time.core.__GT_period,cljs_time.core.Interval,(function (p__15830){var map__15831 = p__15830;var map__15831__$1 = ((cljs.core.seq_QMARK_.call(null,map__15831))?cljs.core.apply.call(null,cljs.core.hash_map,map__15831):map__15831);var interval = map__15831__$1;var start = cljs.core.get.call(null,map__15831__$1,new cljs.core.Keyword(null,"start","start",-355208981));var end = cljs.core.get.call(null,map__15831__$1,new cljs.core.Keyword(null,"end","end",-268185958));var years = cljs_time.core.in_years.call(null,interval);var start_year = cljs_time.core.year.call(null,start);var leap_years = cljs.core.count.call(null,cljs.core.remove.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,cljs_time.internal.core.leap_year_QMARK_,cljs.core.range.call(null,start_year,(start_year + years)))));var start_month = cljs_time.core.month.call(null,start);var days_in_months = cljs_time.core.total_days_in_whole_months.call(null,interval);var months = cljs.core.count.call(null,days_in_months);var days_to_remove = ((((365) * years) + leap_years) + cljs.core.reduce.call(null,cljs.core._PLUS_,days_in_months));var days = (cljs_time.core.in_days.call(null,interval) - days_to_remove);var hours_to_remove = ((24) * (days + days_to_remove));var hours = (cljs_time.core.in_hours.call(null,interval) - hours_to_remove);var minutes_to_remove = ((60) * (hours + hours_to_remove));var minutes = (cljs_time.core.in_minutes.call(null,interval) - minutes_to_remove);var seconds_to_remove = ((60) * (minutes + minutes_to_remove));var seconds = (cljs_time.core.in_seconds.call(null,interval) - seconds_to_remove);return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),years,new cljs.core.Keyword(null,"months","months",-45571637),months,new cljs.core.Keyword(null,"days","days",-1394072564),days,new cljs.core.Keyword(null,"hours","hours",58380855),hours,new cljs.core.Keyword(null,"minutes","minutes",1319166394),minutes,new cljs.core.Keyword(null,"seconds","seconds",-445266194),seconds,new cljs.core.Keyword(null,"millis","millis",-1338288387),(cljs_time.core.in_millis.call(null,interval) - ((1000) * (seconds + seconds_to_remove))));
}));
cljs.core._add_method.call(null,cljs_time.core.__GT_period,cljs_time.core.Period,(function (period){return period;
}));
cljs_time.core.today_at = (function() {
var today_at = null;
var today_at__2 = (function (hours,minutes){return today_at.call(null,hours,minutes,(0));
});
var today_at__3 = (function (hours,minutes,seconds){return today_at.call(null,hours,minutes,seconds,(0));
});
var today_at__4 = (function (hours,minutes,seconds,millis){var midnight = (new goog.date.Date());var G__15833 = (new goog.date.UtcDateTime((0)));G__15833.setYear(midnight.getYear());
G__15833.setMonth(midnight.getMonth());
G__15833.setDate(midnight.getDate());
G__15833.setHours(hours);
G__15833.setMinutes(minutes);
G__15833.setSeconds(seconds);
G__15833.setMilliseconds(millis);
return G__15833;
});
today_at = function(hours,minutes,seconds,millis){
switch(arguments.length){
case 2:
return today_at__2.call(this,hours,minutes);
case 3:
return today_at__3.call(this,hours,minutes,seconds);
case 4:
return today_at__4.call(this,hours,minutes,seconds,millis);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
today_at.cljs$core$IFn$_invoke$arity$2 = today_at__2;
today_at.cljs$core$IFn$_invoke$arity$3 = today_at__3;
today_at.cljs$core$IFn$_invoke$arity$4 = today_at__4;
return today_at;
})()
;
cljs_time.core.do_at_STAR_ = (function do_at_STAR_(base_date_time,body_fn){var _STAR_sys_time_STAR_15835 = cljs_time.core._STAR_sys_time_STAR_;try{cljs_time.core._STAR_sys_time_STAR_ = base_date_time;
return body_fn.call(null);
}finally {cljs_time.core._STAR_sys_time_STAR_ = _STAR_sys_time_STAR_15835;
}});

//# sourceMappingURL=core.js.map