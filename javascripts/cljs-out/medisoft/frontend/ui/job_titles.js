// Compiled by ClojureScript 0.0-2371
goog.provide('medisoft.frontend.ui.job_titles');
goog.require('cljs.core');
goog.require('medisoft.frontend.logic');
goog.require('reagent.core');
goog.require('medisoft.frontend.validations');
goog.require('medisoft.frontend.log');
goog.require('re_com.core');
goog.require('medisoft.frontend.api');
goog.require('medisoft.frontend.logic');
goog.require('medisoft.frontend.ui.utils');
goog.require('medisoft.frontend.history');
goog.require('medisoft.frontend.ui.utils');
goog.require('re_com.core');
goog.require('reagent.core');
goog.require('medisoft.frontend.routes');
goog.require('medisoft.frontend.api');
goog.require('medisoft.frontend.history');
goog.require('cuerdas.core');
goog.require('medisoft.frontend.validations');
goog.require('cljs.core.match');
goog.require('medisoft.frontend.routes');
goog.require('cuerdas.core');
goog.require('medisoft.frontend.log');
medisoft.frontend.ui.job_titles.address_for_patient = (function address_for_patient(patient){return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"street-name","street-name",-67507047).cljs$core$IFn$_invoke$arity$1(patient)," ",new cljs.core.Keyword(null,"house-number","house-number",30291003).cljs$core$IFn$_invoke$arity$1(patient),"/",new cljs.core.Keyword(null,"flat-number","flat-number",80119180).cljs$core$IFn$_invoke$arity$1(patient),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.Keyword(null,"zip-code","zip-code",884340280).cljs$core$IFn$_invoke$arity$1(patient)," ",new cljs.core.Keyword(null,"city","city",-393302614).cljs$core$IFn$_invoke$arity$1(patient),", ",new cljs.core.Keyword(null,"country","country",312965309).cljs$core$IFn$_invoke$arity$1(patient)], null);
});
medisoft.frontend.ui.job_titles.job_title_list_component = (function job_title_list_component(){var job_title = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);medisoft.frontend.api.list_job_titles.call(null,cljs.core.PersistentArrayMap.EMPTY,((function (job_title){
return (function (result){try{if((cljs.core.vector_QMARK_.call(null,result)) && ((cljs.core.count.call(null,result) === 2)))
{try{var result_0__17519 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17519,new cljs.core.Keyword(null,"success","success",1890645906)))
{var response = cljs.core.nth.call(null,result,(1));cljs.core.reset_BANG_.call(null,job_title,response);
return medisoft.frontend.log.debug.call(null,"received response",response);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17522){if((e17522 instanceof Error))
{var e__12219__auto__ = e17522;if((e__12219__auto__ === cljs.core.match.backtrack))
{try{var result_0__17519 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17519,new cljs.core.Keyword(null,"error","error",-978969032)))
{return new cljs.core.Keyword(null,"nothing","nothing",-1022703296);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17523){if((e17523 instanceof Error))
{var e__12219__auto____$1 = e17523;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17523;

}
}} else
{throw e__12219__auto__;
}
} else
{throw e17522;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17521){if((e17521 instanceof Error))
{var e__12219__auto__ = e17521;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result))));
} else
{throw e__12219__auto__;
}
} else
{throw e17521;

}
}});})(job_title))
);
return ((function (job_title){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clearfix","div.clearfix",1775605822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pull-right","div.pull-right",-588908187),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-success","a.btn.btn-success",-1694151738),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("job-titles","create","job-titles/create",1203657629))], null),"New job title"], null)], null)], null),(((cljs.core.count.call(null,cljs.core.deref.call(null,job_title)) > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-hover","table.table.table-hover",-1717147080),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"200px"], null)], null),"Actions"], null)], null),cljs.core.doall.call(null,(function (){var iter__4346__auto__ = ((function (job_title){
return (function iter__17524(s__17525){return (new cljs.core.LazySeq(null,((function (job_title){
return (function (){var s__17525__$1 = s__17525;while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__17525__$1);if(temp__4423__auto__)
{var s__17525__$2 = temp__4423__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17525__$2))
{var c__4344__auto__ = cljs.core.chunk_first.call(null,s__17525__$2);var size__4345__auto__ = cljs.core.count.call(null,c__4344__auto__);var b__17527 = cljs.core.chunk_buffer.call(null,size__4345__auto__);if((function (){var i__17526 = (0);while(true){
if((i__17526 < size__4345__auto__))
{var job_title__$1 = cljs.core._nth.call(null,c__4344__auto__,i__17526);cljs.core.chunk_append.call(null,b__17527,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(job_title__$1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("job-titles","show","job-titles/show",-1982872596),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(job_title__$1))], null),"Show"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("job-titles","edit","job-titles/edit",-355152225),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(job_title__$1))], null),"Edit"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),medisoft.frontend.ui.utils.key_for.call(null,job_title__$1)], null)));
{
var G__17528 = (i__17526 + (1));
i__17526 = G__17528;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17527),iter__17524.call(null,cljs.core.chunk_rest.call(null,s__17525__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17527),null);
}
} else
{var job_title__$1 = cljs.core.first.call(null,s__17525__$2);return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(job_title__$1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("job-titles","show","job-titles/show",-1982872596),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(job_title__$1))], null),"Show"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("job-titles","edit","job-titles/edit",-355152225),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(job_title__$1))], null),"Edit"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),medisoft.frontend.ui.utils.key_for.call(null,job_title__$1)], null)),iter__17524.call(null,cljs.core.rest.call(null,s__17525__$2)));
}
} else
{return null;
}
break;
}
});})(job_title))
,null,null));
});})(job_title))
;return iter__4346__auto__.call(null,cljs.core.deref.call(null,job_title));
})())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No job titles to display."], null))], null);
});
;})(job_title))
});
medisoft.frontend.ui.job_titles.job_title_show_component = (function job_title_show_component(){var job_title_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,medisoft.frontend.logic.current_params));var job_title = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);medisoft.frontend.api.get_job_title.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),job_title_id], null),((function (job_title_id,job_title){
return (function (result){try{if((cljs.core.vector_QMARK_.call(null,result)) && ((cljs.core.count.call(null,result) === 2)))
{try{var result_0__17536 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17536,new cljs.core.Keyword(null,"success","success",1890645906)))
{var response = cljs.core.nth.call(null,result,(1));cljs.core.reset_BANG_.call(null,job_title,response);
return medisoft.frontend.log.debug.call(null,"received response",response);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17539){if((e17539 instanceof Error))
{var e__12219__auto__ = e17539;if((e__12219__auto__ === cljs.core.match.backtrack))
{try{var result_0__17536 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17536,new cljs.core.Keyword(null,"error","error",-978969032)))
{var response = cljs.core.nth.call(null,result,(1));return medisoft.frontend.log.debug.call(null,"received response",response);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17540){if((e17540 instanceof Error))
{var e__12219__auto____$1 = e17540;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17540;

}
}} else
{throw e__12219__auto__;
}
} else
{throw e17539;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17538){if((e17538 instanceof Error))
{var e__12219__auto__ = e17538;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result))));
} else
{throw e__12219__auto__;
}
} else
{throw e17538;

}
}});})(job_title_id,job_title))
);
return ((function (job_title_id,job_title){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clearfix","div.clearfix",1775605822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pull-right","div.pull-right",-588908187),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),(function (){var temp__4421__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,job_title));if(cljs.core.truth_(temp__4421__auto__))
{var job_title_id__$1 = temp__4421__auto__;return medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("job-titles","edit","job-titles/edit",-355152225),new cljs.core.Keyword(null,"id","id",-1388402092),job_title_id__$1);
} else
{return null;
}
})()], null),"Edit job title"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,job_title))], null)], null)], null);
});
;})(job_title_id,job_title))
});
medisoft.frontend.ui.job_titles.job_title_form_fields_component = (function job_title_form_fields_component(job_title,errors,p__17541){var map__17543 = p__17541;var map__17543__$1 = ((cljs.core.seq_QMARK_.call(null,map__17543))?cljs.core.apply.call(null,cljs.core.hash_map,map__17543):map__17543);var opts = map__17543__$1;var on_submit = cljs.core.get.call(null,map__17543__$1,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159));var submit_button_text = cljs.core.get.call(null,map__17543__$1,new cljs.core.Keyword(null,"submit-button-text","submit-button-text",-178661227));var form_input = medisoft.frontend.ui.utils.make_form_field_maker.call(null,job_title,errors);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4","div.col-lg-4",-519713955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_input,new cljs.core.Keyword(null,"name","name",1843675177)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-success","a.btn.btn-success",-1694151738),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_submit], null),submit_button_text], null)], null);
});
medisoft.frontend.ui.job_titles.job_title_create_form_component = (function job_title_create_form_component(){var job_title = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var errors = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var on_submit = ((function (job_title,errors){
return (function (e){medisoft.frontend.api.create_job_title.call(null,cljs.core.deref.call(null,job_title),((function (job_title,errors){
return (function (result){try{if((cljs.core.vector_QMARK_.call(null,result)) && ((cljs.core.count.call(null,result) === 2)))
{try{var result_0__17568 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17568,new cljs.core.Keyword(null,"success","success",1890645906)))
{try{var result_1__17569 = cljs.core.nth.call(null,result,(1));if((function (){var G__17588 = result_1__17569;if(G__17588)
{var bit__4271__auto__ = (G__17588.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17588.cljs$core$ILookup$))
{return true;
} else
{if((!G__17588.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17588);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17588);
}
})())
{try{var result_1__17569_id__17572 = cljs.core.get.call(null,result_1__17569,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if(cljs.core.not_EQ_.call(null,result_1__17569_id__17572,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780)))
{var response = cljs.core.nth.call(null,result,(1));var id = cljs.core.get.call(null,result_1__17569,new cljs.core.Keyword(null,"id","id",-1388402092));medisoft.frontend.log.debug.call(null,"received response",response);
return medisoft.frontend.history.navigate_to_BANG_.call(null,medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("job-titles","show","job-titles/show",-1982872596),new cljs.core.Keyword(null,"id","id",-1388402092),id));
} else
{throw cljs.core.match.backtrack;

}
}catch (e17589){if((e17589 instanceof Error))
{var e__12219__auto__ = e17589;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto__;
}
} else
{throw e17589;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17587){if((e17587 instanceof Error))
{var e__12219__auto__ = e17587;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto__;
}
} else
{throw e17587;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17580){if((e17580 instanceof Error))
{var e__12219__auto__ = e17580;if((e__12219__auto__ === cljs.core.match.backtrack))
{try{var result_0__17568 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17568,new cljs.core.Keyword(null,"error","error",-978969032)))
{try{var result_1__17569 = cljs.core.nth.call(null,result,(1));if((function (){var G__17583 = result_1__17569;if(G__17583)
{var bit__4271__auto__ = (G__17583.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17583.cljs$core$ILookup$))
{return true;
} else
{if((!G__17583.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17583);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17583);
}
})())
{try{var result_1__17569_response__17575 = cljs.core.get.call(null,result_1__17569,new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if((function (){var G__17585 = result_1__17569_response__17575;if(G__17585)
{var bit__4271__auto__ = (G__17585.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17585.cljs$core$ILookup$))
{return true;
} else
{if((!G__17585.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17585);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17585);
}
})())
{try{var result_1__17569_response__17575_errors__17578 = cljs.core.get.call(null,result_1__17569_response__17575,new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if(cljs.core.not_EQ_.call(null,result_1__17569_response__17575_errors__17578,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780)))
{var response = cljs.core.get.call(null,result_1__17569,new cljs.core.Keyword(null,"response","response",-1068424192));var errors_SINGLEQUOTE_ = cljs.core.get.call(null,result_1__17569_response__17575,new cljs.core.Keyword(null,"errors","errors",-908790718));medisoft.frontend.log.error.call(null,"received response",response);
return cljs.core.reset_BANG_.call(null,errors,errors_SINGLEQUOTE_);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17586){if((e17586 instanceof Error))
{var e__12219__auto____$1 = e17586;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17586;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17584){if((e17584 instanceof Error))
{var e__12219__auto____$1 = e17584;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17584;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17582){if((e17582 instanceof Error))
{var e__12219__auto____$1 = e17582;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17582;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17581){if((e17581 instanceof Error))
{var e__12219__auto____$1 = e17581;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17581;

}
}} else
{throw e__12219__auto__;
}
} else
{throw e17580;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17579){if((e17579 instanceof Error))
{var e__12219__auto__ = e17579;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result))));
} else
{throw e__12219__auto__;
}
} else
{throw e17579;

}
}});})(job_title,errors))
);
return e.preventDefault();
});})(job_title,errors))
;return ((function (job_title,errors,on_submit){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"patient create form",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.job_titles.job_title_form_fields_component,job_title,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),on_submit,new cljs.core.Keyword(null,"submit-button-text","submit-button-text",-178661227),"Create"], null)], null)], null);
});
;})(job_title,errors,on_submit))
});
medisoft.frontend.ui.job_titles.job_title_edit_form_component = (function job_title_edit_form_component(){var job_title_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,medisoft.frontend.logic.current_params));var job_title = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var errors = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var on_submit = ((function (job_title_id,job_title,errors){
return (function (e){medisoft.frontend.api.update_job_title.call(null,cljs.core.deref.call(null,job_title),((function (job_title_id,job_title,errors){
return (function (result){try{if((cljs.core.vector_QMARK_.call(null,result)) && ((cljs.core.count.call(null,result) === 2)))
{try{var result_0__17637 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17637,new cljs.core.Keyword(null,"success","success",1890645906)))
{try{var result_1__17638 = cljs.core.nth.call(null,result,(1));if((function (){var G__17657 = result_1__17638;if(G__17657)
{var bit__4271__auto__ = (G__17657.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17657.cljs$core$ILookup$))
{return true;
} else
{if((!G__17657.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17657);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17657);
}
})())
{try{var result_1__17638_id__17641 = cljs.core.get.call(null,result_1__17638,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if(cljs.core.not_EQ_.call(null,result_1__17638_id__17641,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780)))
{var response = cljs.core.nth.call(null,result,(1));var id = cljs.core.get.call(null,result_1__17638,new cljs.core.Keyword(null,"id","id",-1388402092));medisoft.frontend.log.debug.call(null,"received response",response);
return medisoft.frontend.history.navigate_to_BANG_.call(null,medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("job-titles","show","job-titles/show",-1982872596),new cljs.core.Keyword(null,"id","id",-1388402092),id));
} else
{throw cljs.core.match.backtrack;

}
}catch (e17658){if((e17658 instanceof Error))
{var e__12219__auto__ = e17658;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto__;
}
} else
{throw e17658;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17656){if((e17656 instanceof Error))
{var e__12219__auto__ = e17656;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto__;
}
} else
{throw e17656;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17649){if((e17649 instanceof Error))
{var e__12219__auto__ = e17649;if((e__12219__auto__ === cljs.core.match.backtrack))
{try{var result_0__17637 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17637,new cljs.core.Keyword(null,"error","error",-978969032)))
{try{var result_1__17638 = cljs.core.nth.call(null,result,(1));if((function (){var G__17652 = result_1__17638;if(G__17652)
{var bit__4271__auto__ = (G__17652.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17652.cljs$core$ILookup$))
{return true;
} else
{if((!G__17652.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17652);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17652);
}
})())
{try{var result_1__17638_response__17644 = cljs.core.get.call(null,result_1__17638,new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if((function (){var G__17654 = result_1__17638_response__17644;if(G__17654)
{var bit__4271__auto__ = (G__17654.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17654.cljs$core$ILookup$))
{return true;
} else
{if((!G__17654.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17654);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17654);
}
})())
{try{var result_1__17638_response__17644_errors__17647 = cljs.core.get.call(null,result_1__17638_response__17644,new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if(cljs.core.not_EQ_.call(null,result_1__17638_response__17644_errors__17647,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780)))
{var response = cljs.core.get.call(null,result_1__17638,new cljs.core.Keyword(null,"response","response",-1068424192));var errors_SINGLEQUOTE_ = cljs.core.get.call(null,result_1__17638_response__17644,new cljs.core.Keyword(null,"errors","errors",-908790718));medisoft.frontend.log.error.call(null,"received response",response);
return cljs.core.reset_BANG_.call(null,errors,errors_SINGLEQUOTE_);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17655){if((e17655 instanceof Error))
{var e__12219__auto____$1 = e17655;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17655;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17653){if((e17653 instanceof Error))
{var e__12219__auto____$1 = e17653;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17653;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17651){if((e17651 instanceof Error))
{var e__12219__auto____$1 = e17651;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17651;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17650){if((e17650 instanceof Error))
{var e__12219__auto____$1 = e17650;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17650;

}
}} else
{throw e__12219__auto__;
}
} else
{throw e17649;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17648){if((e17648 instanceof Error))
{var e__12219__auto__ = e17648;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result))));
} else
{throw e__12219__auto__;
}
} else
{throw e17648;

}
}});})(job_title_id,job_title,errors))
);
return e.preventDefault();
});})(job_title_id,job_title,errors))
;medisoft.frontend.api.get_job_title.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),job_title_id], null),((function (job_title_id,job_title,errors,on_submit){
return (function (result){try{if((cljs.core.vector_QMARK_.call(null,result)) && ((cljs.core.count.call(null,result) === 2)))
{try{var result_0__17660 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17660,new cljs.core.Keyword(null,"success","success",1890645906)))
{try{var result_1__17661 = cljs.core.nth.call(null,result,(1));if((function (){var G__17680 = result_1__17661;if(G__17680)
{var bit__4271__auto__ = (G__17680.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17680.cljs$core$ILookup$))
{return true;
} else
{if((!G__17680.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17680);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17680);
}
})())
{try{var result_1__17661_id__17664 = cljs.core.get.call(null,result_1__17661,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if(cljs.core.not_EQ_.call(null,result_1__17661_id__17664,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780)))
{var response = cljs.core.nth.call(null,result,(1));var id = cljs.core.get.call(null,result_1__17661,new cljs.core.Keyword(null,"id","id",-1388402092));medisoft.frontend.log.debug.call(null,"received response",response);
return cljs.core.reset_BANG_.call(null,job_title,cljs.core.dissoc.call(null,response,new cljs.core.Keyword(null,"class","class",-2030961996)));
} else
{throw cljs.core.match.backtrack;

}
}catch (e17681){if((e17681 instanceof Error))
{var e__12219__auto__ = e17681;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto__;
}
} else
{throw e17681;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17679){if((e17679 instanceof Error))
{var e__12219__auto__ = e17679;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto__;
}
} else
{throw e17679;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17672){if((e17672 instanceof Error))
{var e__12219__auto__ = e17672;if((e__12219__auto__ === cljs.core.match.backtrack))
{try{var result_0__17660 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17660,new cljs.core.Keyword(null,"error","error",-978969032)))
{try{var result_1__17661 = cljs.core.nth.call(null,result,(1));if((function (){var G__17675 = result_1__17661;if(G__17675)
{var bit__4271__auto__ = (G__17675.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17675.cljs$core$ILookup$))
{return true;
} else
{if((!G__17675.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17675);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17675);
}
})())
{try{var result_1__17661_response__17667 = cljs.core.get.call(null,result_1__17661,new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if((function (){var G__17677 = result_1__17661_response__17667;if(G__17677)
{var bit__4271__auto__ = (G__17677.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17677.cljs$core$ILookup$))
{return true;
} else
{if((!G__17677.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17677);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17677);
}
})())
{try{var result_1__17661_response__17667_errors__17670 = cljs.core.get.call(null,result_1__17661_response__17667,new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if(cljs.core.not_EQ_.call(null,result_1__17661_response__17667_errors__17670,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780)))
{var response = cljs.core.get.call(null,result_1__17661,new cljs.core.Keyword(null,"response","response",-1068424192));var errors_SINGLEQUOTE_ = cljs.core.get.call(null,result_1__17661_response__17667,new cljs.core.Keyword(null,"errors","errors",-908790718));return medisoft.frontend.log.error.call(null,"received response",response);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17678){if((e17678 instanceof Error))
{var e__12219__auto____$1 = e17678;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17678;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17676){if((e17676 instanceof Error))
{var e__12219__auto____$1 = e17676;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17676;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17674){if((e17674 instanceof Error))
{var e__12219__auto____$1 = e17674;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17674;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17673){if((e17673 instanceof Error))
{var e__12219__auto____$1 = e17673;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17673;

}
}} else
{throw e__12219__auto__;
}
} else
{throw e17672;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17671){if((e17671 instanceof Error))
{var e__12219__auto__ = e17671;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result))));
} else
{throw e__12219__auto__;
}
} else
{throw e17671;

}
}});})(job_title_id,job_title,errors,on_submit))
);
return ((function (job_title_id,job_title,errors,on_submit){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"patient edit form",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.job_titles.job_title_form_fields_component,job_title,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),on_submit,new cljs.core.Keyword(null,"submit-button-text","submit-button-text",-178661227),"Edit"], null)], null)], null);
});
;})(job_title_id,job_title,errors,on_submit))
});

//# sourceMappingURL=job_titles.js.map