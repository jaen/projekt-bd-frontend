// Compiled by ClojureScript 0.0-2371
goog.provide('cuerdas.core');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('goog.string');
goog.require('goog.string');
/**
* Determines whether a string contains a substring.
*/
cuerdas.core.contains_QMARK_ = (function contains_QMARK_(s,subs){if((s == null))
{return null;
} else
{return cljs.core.not_EQ_.call(null,s.indexOf(subs),(-1));
}
});
/**
* Build or derive regexp instance.
*/
cuerdas.core.regexp = (function() {
var regexp = null;
var regexp__1 = (function (s){if(cljs.core.regexp_QMARK_.call(null,s))
{return s;
} else
{return (new RegExp(s));
}
});
var regexp__2 = (function (s,flags){if(cljs.core.regexp_QMARK_.call(null,s))
{return (new RegExp(s.source,flags));
} else
{return (new RegExp(s,flags));
}
});
regexp = function(s,flags){
switch(arguments.length){
case 1:
return regexp__1.call(this,s);
case 2:
return regexp__2.call(this,s,flags);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
regexp.cljs$core$IFn$_invoke$arity$1 = regexp__1;
regexp.cljs$core$IFn$_invoke$arity$2 = regexp__2;
return regexp;
})()
;
/**
* Escapes characters in the string that are not safe
* to use in a RegExp.
*/
cuerdas.core.escape_regexp = (function escape_regexp(s){return goog.string.regExpEscape(s);
});
/**
* Check if the string starts with prefix.
*/
cuerdas.core.starts_with_QMARK_ = (function starts_with_QMARK_(s,prefix){if((s == null))
{return null;
} else
{return cljs.core._EQ_.call(null,s.lastIndexOf(prefix,(0)),(0));
}
});
/**
* Check if the string ends with suffix.
*/
cuerdas.core.ends_with_QMARK_ = (function ends_with_QMARK_(s,suffix){if((s == null))
{return null;
} else
{var l = (cljs.core.count.call(null,s) - cljs.core.count.call(null,suffix));return ((l >= (0))) && (cljs.core._EQ_.call(null,s.indexOf(suffix,l),l));
}
});
cuerdas.core.startswith_QMARK_ = cuerdas.core.starts_with_QMARK_;
cuerdas.core.endswith_QMARK_ = cuerdas.core.ends_with_QMARK_;
/**
* Converts string to all lower-case.
*/
cuerdas.core.lower = (function lower(s){if((s == null))
{return null;
} else
{return s.toLowerCase();
}
});
/**
* Converts string to all upper-case.
*/
cuerdas.core.upper = (function upper(s){if((s == null))
{return null;
} else
{return s.toUpperCase();
}
});
/**
* Converts all adjacent whitespace characters
* to a single space.
*/
cuerdas.core.collapse_whitespace = (function collapse_whitespace(s){var G__16193 = s;var G__16193__$1 = (((G__16193 == null))?null:cuerdas.core.replace.call(null,G__16193,/[\s\xa0]+/," "));var G__16193__$2 = (((G__16193__$1 == null))?null:cuerdas.core.replace.call(null,G__16193__$1,/^\s+|\s+$/,""));return G__16193__$2;
});
/**
* Checks if a string is empty.
*/
cuerdas.core.empty_QMARK_ = (function empty_QMARK_(s){if((s == null))
{return true;
} else
{if(cljs.core._EQ_.call(null,cljs.core.count.call(null,s),(0)))
{return true;
} else
{return false;

}
}
});
/**
* Checks if a string is empty or contains only whitespaces.
*/
cuerdas.core.blank_QMARK_ = (function blank_QMARK_(s){return goog.string.isEmptySafe(s);
});
/**
* Repeats string n times.
*/
cuerdas.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (s){return repeat.call(null,s,(1));
});
var repeat__2 = (function (s,n){if((s == null))
{return null;
} else
{return goog.string.repeat(s,n);
}
});
repeat = function(s,n){
switch(arguments.length){
case 1:
return repeat__1.call(this,s);
case 2:
return repeat__2.call(this,s,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeat.cljs$core$IFn$_invoke$arity$1 = repeat__1;
repeat.cljs$core$IFn$_invoke$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Takes a string and replaces newlines with a space.
* Multiple lines are replaced with a single space.
*/
cuerdas.core.strip_newlines = (function strip_newlines(s){return cuerdas.core.replace.call(null,s,/(\r\n|\r|\n)+/," ");
});
/**
* Splits a string on a separator a limited
* number of times. The separator can be a string
* or RegExp instance.
*/
cuerdas.core.split = (function() {
var split = null;
var split__1 = (function (s){return split.call(null,s,/\s/,null);
});
var split__2 = (function (s,sep){return split.call(null,s,sep,null);
});
var split__3 = (function (s,sep,num){if((s == null))
{return s;
} else
{if(cljs.core.regexp_QMARK_.call(null,sep))
{return clojure.string.split.call(null,s,sep,num);
} else
{return clojure.string.split.call(null,s,cljs.core.re_pattern.call(null,sep),num);

}
}
});
split = function(s,sep,num){
switch(arguments.length){
case 1:
return split__1.call(this,s);
case 2:
return split__2.call(this,s,sep);
case 3:
return split__3.call(this,s,sep,num);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$1 = split__1;
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$3 = split__3;
return split;
})()
;
/**
* Return a list of the lines in the string.
*/
cuerdas.core.lines = (function lines(s){return cuerdas.core.split.call(null,s,/\n|\r\n/);
});
/**
* Split a string in a seq of chars.
*/
cuerdas.core.chars = (function chars(s){if((s == null))
{return null;
} else
{return cljs.core.js__GT_clj.call(null,s.split(""));
}
});
/**
* Extracts a section of a string and returns a new string.
*/
cuerdas.core.slice = (function() {
var slice = null;
var slice__2 = (function (s,begin){if((s == null))
{return null;
} else
{return s.slice(begin);
}
});
var slice__3 = (function (s,begin,end){if((s == null))
{return null;
} else
{return s.slice(begin,end);
}
});
slice = function(s,begin,end){
switch(arguments.length){
case 2:
return slice__2.call(this,s,begin);
case 3:
return slice__3.call(this,s,begin,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
slice.cljs$core$IFn$_invoke$arity$2 = slice__2;
slice.cljs$core$IFn$_invoke$arity$3 = slice__3;
return slice;
})()
;
/**
* Replaces all instance of match with replacement in s.
*/
cuerdas.core.replace = (function replace(s,match,replacement){if((s == null))
{return null;
} else
{return s.replace(cuerdas.core.regexp.call(null,match,"g"),replacement);
}
});
/**
* Replaces all instance of match with replacement in s.
*/
cuerdas.core.ireplace = (function ireplace(s,match,replacement){if((s == null))
{return null;
} else
{return s.replace(cuerdas.core.regexp.call(null,match,"ig"),replacement);
}
});
/**
* Replaces first instance of match with replacement in s.
*/
cuerdas.core.replace_first = (function replace_first(s,match,replacement){if((s == null))
{return null;
} else
{return s.replace(cuerdas.core.regexp.call(null,match),replacement);
}
});
/**
* Replaces first instance of match with replacement in s.
*/
cuerdas.core.ireplace_first = (function ireplace_first(s,match,replacement){if((s == null))
{return null;
} else
{return s.replace(cuerdas.core.regexp.call(null,match,"i"),replacement);
}
});
/**
* Removes whitespace or specified characters
* from both ends of string.
*/
cuerdas.core.trim = (function() {
var trim = null;
var trim__1 = (function (s){return trim.call(null,s," ");
});
var trim__2 = (function (s,chs){if((s == null))
{return null;
} else
{var rxstr = ("["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.escape_regexp.call(null,chs))+"]");var rx = ("^"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rxstr)+"+|"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rxstr)+"+$");return cuerdas.core.replace.call(null,s,rx,"");
}
});
trim = function(s,chs){
switch(arguments.length){
case 1:
return trim__1.call(this,s);
case 2:
return trim__2.call(this,s,chs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
trim.cljs$core$IFn$_invoke$arity$1 = trim__1;
trim.cljs$core$IFn$_invoke$arity$2 = trim__2;
return trim;
})()
;
/**
* Removes whitespace or specified characters
* from right side of string.
*/
cuerdas.core.rtrim = (function() {
var rtrim = null;
var rtrim__1 = (function (s){return rtrim.call(null,s," ");
});
var rtrim__2 = (function (s,chs){if((s == null))
{return null;
} else
{var rxstr = ("["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.escape_regexp.call(null,chs))+"]");var rx = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rxstr)+"+$");return cuerdas.core.replace.call(null,s,rx,"");
}
});
rtrim = function(s,chs){
switch(arguments.length){
case 1:
return rtrim__1.call(this,s);
case 2:
return rtrim__2.call(this,s,chs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rtrim.cljs$core$IFn$_invoke$arity$1 = rtrim__1;
rtrim.cljs$core$IFn$_invoke$arity$2 = rtrim__2;
return rtrim;
})()
;
/**
* Removes whitespace or specified characters
* from left side of string.
*/
cuerdas.core.ltrim = (function() {
var ltrim = null;
var ltrim__1 = (function (s){return ltrim.call(null,s," ");
});
var ltrim__2 = (function (s,chs){if((s == null))
{return null;
} else
{var rxstr = ("["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.escape_regexp.call(null,chs))+"]");var rx = ("^"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rxstr)+"+");return cuerdas.core.replace.call(null,s,rx,"");
}
});
ltrim = function(s,chs){
switch(arguments.length){
case 1:
return ltrim__1.call(this,s);
case 2:
return ltrim__2.call(this,s,chs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ltrim.cljs$core$IFn$_invoke$arity$1 = ltrim__1;
ltrim.cljs$core$IFn$_invoke$arity$2 = ltrim__2;
return ltrim;
})()
;
cuerdas.core.strip = cuerdas.core.trim;
cuerdas.core.rstrip = cuerdas.core.rtrim;
cuerdas.core.lstrip = cuerdas.core.ltrim;
/**
* Strip prefix in more efficient way.
*/
cuerdas.core.strip_prefix = (function strip_prefix(s,prefix){if(cljs.core.truth_(cuerdas.core.starts_with_QMARK_.call(null,s,prefix)))
{return cuerdas.core.slice.call(null,s,cljs.core.count.call(null,prefix),cljs.core.count.call(null,s));
} else
{return s;
}
});
/**
* Strip suffix in more efficient way.
*/
cuerdas.core.strip_suffix = (function strip_suffix(s,prefix){if(cljs.core.truth_(cuerdas.core.ends_with_QMARK_.call(null,s,prefix)))
{return cuerdas.core.slice.call(null,s,(0),(cljs.core.count.call(null,s) - cljs.core.count.call(null,prefix)));
} else
{return s;
}
});
/**
* Truncates a string to a certain length and adds '...'
* if necessary.
*/
cuerdas.core.prune = (function() {
var prune = null;
var prune__2 = (function (s,num){return prune.call(null,s,num,"...");
});
var prune__3 = (function (s,num,subs){if((cljs.core.count.call(null,s) < num))
{return s;
} else
{var tmpl = (function (c){if(cljs.core.not_EQ_.call(null,cuerdas.core.upper.call(null,c),cuerdas.core.lower.call(null,c)))
{return "A";
} else
{return " ";
}
});var template = cuerdas.core.replace.call(null,cuerdas.core.slice.call(null,s,(0),(cljs.core.count.call(null,s) + (1))),/.(?=\W*\w*$)/,tmpl);var template__$1 = (cljs.core.truth_(cuerdas.core.slice.call(null,template,(cljs.core.count.call(null,template) - (2))).match(/\w\w/))?cuerdas.core.replace_first.call(null,template,/\s*\S+$/,""):cuerdas.core.rtrim.call(null,cuerdas.core.slice.call(null,template,(0),(cljs.core.count.call(null,template) - (1)))));if((cljs.core.count.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(template__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(subs))) > cljs.core.count.call(null,s)))
{return s;
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.slice.call(null,s,(0),cljs.core.count.call(null,template__$1)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(subs));
}
}
});
prune = function(s,num,subs){
switch(arguments.length){
case 2:
return prune__2.call(this,s,num);
case 3:
return prune__3.call(this,s,num,subs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prune.cljs$core$IFn$_invoke$arity$2 = prune__2;
prune.cljs$core$IFn$_invoke$arity$3 = prune__3;
return prune;
})()
;
/**
* Joins strings together with given separator.
*/
cuerdas.core.join = (function() {
var join = null;
var join__1 = (function (coll){return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__2 = (function (separator,coll){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case 1:
return join__1.call(this,separator);
case 2:
return join__2.call(this,separator,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
join.cljs$core$IFn$_invoke$arity$1 = join__1;
join.cljs$core$IFn$_invoke$arity$2 = join__2;
return join;
})()
;
/**
* Surround a string with another string.
*/
cuerdas.core.surround = (function surround(s,wrap){if((s == null))
{return null;
} else
{return cuerdas.core.join.call(null,"",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wrap,s,wrap], null));
}
});
/**
* Unsurround a string surrounded by another.
*/
cuerdas.core.unsurround = (function unsurround(s,surrounding){var length = cljs.core.count.call(null,surrounding);var fstr = cuerdas.core.slice.call(null,s,(0),length);var slength = cljs.core.count.call(null,s);var rightend = (slength - length);var lstr = cuerdas.core.slice.call(null,s,rightend,slength);if((cljs.core._EQ_.call(null,fstr,surrounding)) && (cljs.core._EQ_.call(null,lstr,surrounding)))
{return cuerdas.core.slice.call(null,s,length,rightend);
} else
{return s;
}
});
/**
* Quotes a string.
*/
cuerdas.core.quote = (function() {
var quote = null;
var quote__1 = (function (s){return cuerdas.core.surround.call(null,s,"\"");
});
var quote__2 = (function (s,qchar){return cuerdas.core.surround.call(null,s,qchar);
});
quote = function(s,qchar){
switch(arguments.length){
case 1:
return quote__1.call(this,s);
case 2:
return quote__2.call(this,s,qchar);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
quote.cljs$core$IFn$_invoke$arity$1 = quote__1;
quote.cljs$core$IFn$_invoke$arity$2 = quote__2;
return quote;
})()
;
/**
* Unquote a string.
*/
cuerdas.core.unquote = (function() {
var unquote = null;
var unquote__1 = (function (s){return cuerdas.core.unsurround.call(null,s,"\"");
});
var unquote__2 = (function (s,qchar){return cuerdas.core.unsurround.call(null,s,qchar);
});
unquote = function(s,qchar){
switch(arguments.length){
case 1:
return unquote__1.call(this,s);
case 2:
return unquote__2.call(this,s,qchar);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unquote.cljs$core$IFn$_invoke$arity$1 = unquote__1;
unquote.cljs$core$IFn$_invoke$arity$2 = unquote__2;
return unquote;
})()
;
/**
* Transform text into a URL slug.
*/
cuerdas.core.slugify = (function slugify(s){var from = "\u0105\u00E0\u00E1\u00E4\u00E2\u00E3\u00E5\u00E6\u0103\u0107\u010D\u0109\u0119\u00E8\u00E9\u00EB\u00EA\u011D\u0125\u00EC\u00ED\u00EF\u00EE\u0135\u0142\u013E\u0144\u0148\u00F2\u00F3\u00F6\u0151\u00F4\u00F5\u00F0\u00F8\u015B\u0219\u0161\u015D\u0165\u021B\u016D\u00F9\u00FA\u00FC\u0171\u00FB\u00F1\u00FF\u00FD\u00E7\u017C\u017A\u017E";var to = "aaaaaaaaaccceeeeeghiiiijllnnoooooooossssttuuuuuunyyczzz";var regex = ("["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.escape_regexp.call(null,from))+"]");return cuerdas.core.dasherize.call(null,cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,cuerdas.core.lower.call(null,s),regex,((function (from,to,regex){
return (function (c){var index = from.indexOf(c);var res = to.charAt(index);if(cuerdas.core.empty_QMARK_.call(null,res))
{return "-";
} else
{return res;
}
});})(from,to,regex))
),/[^\w\s-]/,""));
});
cuerdas.core.strip_tags_impl = (function strip_tags_impl(s,tags,mappings){var kwdize = cljs.core.comp.call(null,cljs.core.keyword,cuerdas.core.lower,cljs.core.name);var tags__$1 = (((tags == null))?tags:((typeof tags === 'string')?cljs.core.PersistentHashSet.fromArray([kwdize.call(null,tags)],true):((cljs.core.sequential_QMARK_.call(null,tags))?cljs.core.set.call(null,cljs.core.map.call(null,kwdize,tags)):null)));var rx = cljs.core.re_pattern.call(null,"<\\/?([^<>]*)>");var replacer = (((tags__$1 == null))?((function (kwdize,tags__$1,rx){
return (function (match,tag){var tag__$1 = kwdize.call(null,tag);return cljs.core.get.call(null,mappings,tag__$1,"");
});})(kwdize,tags__$1,rx))
:((function (kwdize,tags__$1,rx){
return (function (match,tag){var tag__$1 = kwdize.call(null,tag);if(cljs.core.truth_(tags__$1.call(null,tag__$1)))
{return cljs.core.get.call(null,mappings,tag__$1,"");
} else
{return match;
}
});})(kwdize,tags__$1,rx))
);return cuerdas.core.replace.call(null,s,rx,replacer);
});
/**
* Remove html tags from string.
*/
cuerdas.core.strip_tags = (function() {
var strip_tags = null;
var strip_tags__1 = (function (s){return cuerdas.core.strip_tags_impl.call(null,s,null,cljs.core.PersistentArrayMap.EMPTY);
});
var strip_tags__2 = (function (s,tags){if(cljs.core.map_QMARK_.call(null,tags))
{return cuerdas.core.strip_tags_impl.call(null,s,null,tags);
} else
{return cuerdas.core.strip_tags_impl.call(null,s,tags,cljs.core.PersistentArrayMap.EMPTY);
}
});
var strip_tags__3 = (function (s,tags,mapping){return cuerdas.core.strip_tags_impl.call(null,s,tags,mapping);
});
strip_tags = function(s,tags,mapping){
switch(arguments.length){
case 1:
return strip_tags__1.call(this,s);
case 2:
return strip_tags__2.call(this,s,tags);
case 3:
return strip_tags__3.call(this,s,tags,mapping);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
strip_tags.cljs$core$IFn$_invoke$arity$1 = strip_tags__1;
strip_tags.cljs$core$IFn$_invoke$arity$2 = strip_tags__2;
strip_tags.cljs$core$IFn$_invoke$arity$3 = strip_tags__3;
return strip_tags;
})()
;
/**
* Trim and replace multiple spaces with
* a single space.
*/
cuerdas.core.clean = (function clean(s){return cuerdas.core.replace.call(null,cuerdas.core.trim.call(null,s),/\s+/," ");
});
cuerdas.core.html_escape_chars = new cljs.core.PersistentArrayMap(null, 5, ["lt","<","gt",">","quot","\"","amp","&","apos","'"], null);
cuerdas.core.reversed_html_escape_chars = clojure.set.map_invert.call(null,cuerdas.core.html_escape_chars);
cuerdas.core.escape_html = (function escape_html(s){var escapechars = cljs.core.assoc.call(null,cuerdas.core.reversed_html_escape_chars,"'","#39");var rx = cljs.core.re_pattern.call(null,"[&<>\"']");return cuerdas.core.replace.call(null,s,rx,((function (escapechars,rx){
return (function (x){return ("&"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,escapechars,x))+";");
});})(escapechars,rx))
);
});
/**
* Converts entity characters to HTML equivalents.
*/
cuerdas.core.unescape_html = (function unescape_html(s){return cuerdas.core.replace.call(null,s,/\&(\w+);/,(function (x,y){if(cljs.core.contains_QMARK_.call(null,cuerdas.core.html_escape_chars,y))
{return cljs.core.get.call(null,cuerdas.core.html_escape_chars,y);
} else
{return y;

}
}));
});
/**
* Return string reversed.
*/
cuerdas.core.reverse = (function reverse(s){if((s == null))
{return null;
} else
{var cs = s.split("");var cs__$1 = cs.reverse();return cs__$1.join("");
}
});
cuerdas.core.parse_number_impl = (function parse_number_impl(source){var or__3607__auto__ = (source * (1));if(cljs.core.truth_(or__3607__auto__))
{return or__3607__auto__;
} else
{return (0);
}
});
/**
* General purpose function for parse number like
* string to number. It works with both: integers
* and floats.
*/
cuerdas.core.parse_number = (function() {
var parse_number = null;
var parse_number__1 = (function (s){return parse_number.call(null,s,(0));
});
var parse_number__2 = (function (s,precision){if((s == null))
{return (0);
} else
{var s__$1 = cuerdas.core.trim.call(null,s);var rx = /^-?\d+(?:\.\d+)?$/;if(cljs.core.truth_(s__$1.match(rx)))
{return cuerdas.core.parse_number_impl.call(null,cuerdas.core.parse_number_impl.call(null,s__$1).toFixed(precision));
} else
{return NaN;
}
}
});
parse_number = function(s,precision){
switch(arguments.length){
case 1:
return parse_number__1.call(this,s);
case 2:
return parse_number__2.call(this,s,precision);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parse_number.cljs$core$IFn$_invoke$arity$1 = parse_number__1;
parse_number.cljs$core$IFn$_invoke$arity$2 = parse_number__2;
return parse_number;
})()
;
/**
* Return the float value, wraps parseFloat.
*/
cuerdas.core.parse_float = (function() {
var parse_float = null;
var parse_float__1 = (function (s){return parseFloat(s);
});
var parse_float__2 = (function (s,precision){if((precision == null))
{return parseFloat(s);
} else
{return parseFloat(parseFloat(s).toFixed(precision));
}
});
parse_float = function(s,precision){
switch(arguments.length){
case 1:
return parse_float__1.call(this,s);
case 2:
return parse_float__2.call(this,s,precision);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parse_float.cljs$core$IFn$_invoke$arity$1 = parse_float__1;
parse_float.cljs$core$IFn$_invoke$arity$2 = parse_float__2;
return parse_float;
})()
;
/**
* Return the number value in integer form.
*/
cuerdas.core.parse_int = (function parse_int(s){var rx = cuerdas.core.regexp.call(null,"^\\s*-?0x","i");if(cljs.core.truth_(rx.test(s)))
{return parseInt(s,(16));
} else
{return parseInt(s,(10));
}
});
/**
* Simple string interpolation.
* @param {...*} var_args
*/
cuerdas.core.format = (function() { 
var format__delegate = function (s,args){if((cljs.core._EQ_.call(null,cljs.core.count.call(null,args),(1))) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))))
{var params = cljs.core.clj__GT_js.call(null,cljs.core.first.call(null,args));return cuerdas.core.replace.call(null,s,/%\(\w+\)s/,((function (params){
return (function (match){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((params[cuerdas.core.slice.call(null,match,(2),(-2))])));
});})(params))
);
} else
{var params = cljs.core.clj__GT_js.call(null,args);return cuerdas.core.replace.call(null,s,cuerdas.core.regexp.call(null,"%s","g"),((function (params){
return (function (_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(params.shift()));
});})(params))
);
}
};
var format = function (s,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return format__delegate.call(this,s,args);};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__16194){
var s = cljs.core.first(arglist__16194);
var args = cljs.core.rest(arglist__16194);
return format__delegate(s,args);
});
format.cljs$core$IFn$_invoke$arity$variadic = format__delegate;
return format;
})()
;
/**
* Pads the str with characters until the total string
* length is equal to the passed length parameter. By
* default, pads on the left with the space char.
* @param {...*} var_args
*/
cuerdas.core.pad = (function() { 
var pad__delegate = function (s,p__16195){var vec__16201 = p__16195;var map__16202 = cljs.core.nth.call(null,vec__16201,(0),null);var map__16202__$1 = ((cljs.core.seq_QMARK_.call(null,map__16202))?cljs.core.apply.call(null,cljs.core.hash_map,map__16202):map__16202);var length = cljs.core.get.call(null,map__16202__$1,new cljs.core.Keyword(null,"length","length",588987862),(0));var padding = cljs.core.get.call(null,map__16202__$1,new cljs.core.Keyword(null,"padding","padding",1660304693)," ");var type = cljs.core.get.call(null,map__16202__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"left","left",-399115937));if((s == null))
{return null;
} else
{var padding__$1 = (padding[(0)]);var padlen = (length - cljs.core.count.call(null,s));var pred__16203 = cljs.core._EQ_;var expr__16204 = type;if(cljs.core.truth_(pred__16203.call(null,new cljs.core.Keyword(null,"right","right",-452581833),expr__16204)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.repeat.call(null,padding__$1,padlen)));
} else
{if(cljs.core.truth_(pred__16203.call(null,new cljs.core.Keyword(null,"both","both",-393648840),expr__16204)))
{var first = cuerdas.core.repeat.call(null,padding__$1,Math.ceil((padlen / (2))));var second = cuerdas.core.repeat.call(null,padding__$1,Math.floor((padlen / (2))));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(first)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(second));
} else
{if(cljs.core.truth_(pred__16203.call(null,new cljs.core.Keyword(null,"left","left",-399115937),expr__16204)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.repeat.call(null,padding__$1,padlen))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16204))));
}
}
}
}
};
var pad = function (s,var_args){
var p__16195 = null;if (arguments.length > 1) {
  p__16195 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return pad__delegate.call(this,s,p__16195);};
pad.cljs$lang$maxFixedArity = 1;
pad.cljs$lang$applyTo = (function (arglist__16206){
var s = cljs.core.first(arglist__16206);
var p__16195 = cljs.core.rest(arglist__16206);
return pad__delegate(s,p__16195);
});
pad.cljs$core$IFn$_invoke$arity$variadic = pad__delegate;
return pad;
})()
;
/**
* Converts first letter of the string to uppercase.
*/
cuerdas.core.capitalize = (function capitalize(s){if((s == null))
{return null;
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.upper.call(null,s.charAt((0))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.slice.call(null,s,(1))));
}
});
/**
* Converts a string from selector-case to camelCase.
*/
cuerdas.core.camelize = (function camelize(s){var G__16208 = s;var G__16208__$1 = (((G__16208 == null))?null:cuerdas.core.trim.call(null,G__16208));var G__16208__$2 = (((G__16208__$1 == null))?null:cuerdas.core.replace.call(null,G__16208__$1,cuerdas.core.regexp.call(null,/[-_\s]+(.)?/,"g"),((function (G__16208,G__16208__$1){
return (function (match,c){if(cljs.core.truth_(c))
{return cuerdas.core.upper.call(null,c);
} else
{return "";
}
});})(G__16208,G__16208__$1))
));return G__16208__$2;
});
/**
* Converts a underscored or camelized string
* into an dasherized one.
*/
cuerdas.core.dasherize = (function dasherize(s){return cuerdas.core.lower.call(null,cuerdas.core.strip_prefix.call(null,cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,cuerdas.core.trim.call(null,s),/([A-Z]+)/,"-$1"),/[-_\s]+/,"-"),"-"));
});
/**
* Converts a camelized or dasherized string
* into an underscored one.
*/
cuerdas.core.underscored = (function underscored(s){var G__16210 = s;var G__16210__$1 = (((G__16210 == null))?null:cuerdas.core.trim.call(null,G__16210));var G__16210__$2 = (((G__16210__$1 == null))?null:cuerdas.core.replace.call(null,G__16210__$1,cuerdas.core.regexp.call(null,/([a-z\d])([A-Z]+)/,"g"),"$1_$2"));var G__16210__$3 = (((G__16210__$2 == null))?null:cuerdas.core.replace.call(null,G__16210__$2,cuerdas.core.regexp.call(null,/[-\s]+/,"g"),"_"));var G__16210__$4 = (((G__16210__$3 == null))?null:cuerdas.core.lower.call(null,G__16210__$3));return G__16210__$4;
});
/**
* Converts an underscored, camelized, or
* dasherized string into a humanized one.
*/
cuerdas.core.humanize = (function humanize(s){var G__16212 = s;var G__16212__$1 = (((G__16212 == null))?null:cuerdas.core.underscored.call(null,G__16212));var G__16212__$2 = (((G__16212__$1 == null))?null:cuerdas.core.replace.call(null,G__16212__$1,/_id$/,""));var G__16212__$3 = (((G__16212__$2 == null))?null:cuerdas.core.replace.call(null,G__16212__$2,cuerdas.core.regexp.call(null,"_","g")," "));var G__16212__$4 = (((G__16212__$3 == null))?null:cuerdas.core.capitalize.call(null,G__16212__$3));return G__16212__$4;
});
/**
* Converts a string into TitleCase.
*/
cuerdas.core.titleize = (function() {
var titleize = null;
var titleize__1 = (function (s){if((s == null))
{return null;
} else
{return goog.string.toTitleCase(s);
}
});
var titleize__2 = (function (s,delimiters){if((s == null))
{return null;
} else
{return goog.string.toTitleCase(s,delimiters);
}
});
titleize = function(s,delimiters){
switch(arguments.length){
case 1:
return titleize__1.call(this,s);
case 2:
return titleize__2.call(this,s,delimiters);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
titleize.cljs$core$IFn$_invoke$arity$1 = titleize__1;
titleize.cljs$core$IFn$_invoke$arity$2 = titleize__2;
return titleize;
})()
;
/**
* Converts string to camelized class name. First letter is always upper case.
*/
cuerdas.core.classify = (function classify(s){var G__16214 = s;var G__16214__$1 = (((G__16214 == null))?null:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16214)));var G__16214__$2 = (((G__16214__$1 == null))?null:cuerdas.core.replace.call(null,G__16214__$1,/[\W_]/," "));var G__16214__$3 = (((G__16214__$2 == null))?null:cuerdas.core.camelize.call(null,G__16214__$2));var G__16214__$4 = (((G__16214__$3 == null))?null:cuerdas.core.replace.call(null,G__16214__$3,/\s/,""));var G__16214__$5 = (((G__16214__$4 == null))?null:cuerdas.core.capitalize.call(null,G__16214__$4));return G__16214__$5;
});

//# sourceMappingURL=core.js.map