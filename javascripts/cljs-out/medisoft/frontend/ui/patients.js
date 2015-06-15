// Compiled by ClojureScript 0.0-2371
goog.provide('medisoft.frontend.ui.patients');
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
medisoft.frontend.ui.patients.address_for_patient = (function address_for_patient(patient){return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"street-name","street-name",-67507047).cljs$core$IFn$_invoke$arity$1(patient)," ",new cljs.core.Keyword(null,"house-number","house-number",30291003).cljs$core$IFn$_invoke$arity$1(patient),"/",new cljs.core.Keyword(null,"flat-number","flat-number",80119180).cljs$core$IFn$_invoke$arity$1(patient),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.Keyword(null,"zip-code","zip-code",884340280).cljs$core$IFn$_invoke$arity$1(patient)," ",new cljs.core.Keyword(null,"city","city",-393302614).cljs$core$IFn$_invoke$arity$1(patient),", ",new cljs.core.Keyword(null,"country","country",312965309).cljs$core$IFn$_invoke$arity$1(patient)], null);
});
medisoft.frontend.ui.patients.patient_list_component = (function patient_list_component(){var patients = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);medisoft.frontend.api.list_patients.call(null,cljs.core.PersistentArrayMap.EMPTY,((function (patients){
return (function (result){try{if((cljs.core.vector_QMARK_.call(null,result)) && ((cljs.core.count.call(null,result) === 2)))
{try{var result_0__17343 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17343,new cljs.core.Keyword(null,"success","success",1890645906)))
{var response = cljs.core.nth.call(null,result,(1));cljs.core.reset_BANG_.call(null,patients,response);
return medisoft.frontend.log.debug.call(null,"received response",response);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17346){if((e17346 instanceof Error))
{var e__12219__auto__ = e17346;if((e__12219__auto__ === cljs.core.match.backtrack))
{try{var result_0__17343 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17343,new cljs.core.Keyword(null,"error","error",-978969032)))
{return new cljs.core.Keyword(null,"nothing","nothing",-1022703296);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17347){if((e17347 instanceof Error))
{var e__12219__auto____$1 = e17347;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17347;

}
}} else
{throw e__12219__auto__;
}
} else
{throw e17346;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17345){if((e17345 instanceof Error))
{var e__12219__auto__ = e17345;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result))));
} else
{throw e__12219__auto__;
}
} else
{throw e17345;

}
}});})(patients))
);
return ((function (patients){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clearfix","div.clearfix",1775605822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pull-right","div.pull-right",-588908187),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-success","a.btn.btn-success",-1694151738),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("patients","create","patients/create",1288118394))], null),"New patient"], null)], null)], null),(((cljs.core.count.call(null,cljs.core.deref.call(null,patients)) > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-hover","table.table.table-hover",-1717147080),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"First name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Surname"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Personal ID"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Address"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"200px"], null)], null),"Actions"], null)], null),cljs.core.doall.call(null,(function (){var iter__4346__auto__ = ((function (patients){
return (function iter__17348(s__17349){return (new cljs.core.LazySeq(null,((function (patients){
return (function (){var s__17349__$1 = s__17349;while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__17349__$1);if(temp__4423__auto__)
{var s__17349__$2 = temp__4423__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17349__$2))
{var c__4344__auto__ = cljs.core.chunk_first.call(null,s__17349__$2);var size__4345__auto__ = cljs.core.count.call(null,c__4344__auto__);var b__17351 = cljs.core.chunk_buffer.call(null,size__4345__auto__);if((function (){var i__17350 = (0);while(true){
if((i__17350 < size__4345__auto__))
{var patient = cljs.core._nth.call(null,c__4344__auto__,i__17350);cljs.core.chunk_append.call(null,b__17351,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"firstname","firstname",1659984849).cljs$core$IFn$_invoke$arity$1(patient)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"surname","surname",1407918027).cljs$core$IFn$_invoke$arity$1(patient)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"personal-id","personal-id",743022525).cljs$core$IFn$_invoke$arity$1(patient)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),medisoft.frontend.ui.patients.address_for_patient.call(null,patient)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("patients","show","patients/show",-1798797107),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(patient))], null),"Show"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("patients","edit","patients/edit",-406191300),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(patient))], null),"Edit"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),medisoft.frontend.ui.utils.key_for.call(null,patient)], null)));
{
var G__17352 = (i__17350 + (1));
i__17350 = G__17352;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17351),iter__17348.call(null,cljs.core.chunk_rest.call(null,s__17349__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17351),null);
}
} else
{var patient = cljs.core.first.call(null,s__17349__$2);return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"firstname","firstname",1659984849).cljs$core$IFn$_invoke$arity$1(patient)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"surname","surname",1407918027).cljs$core$IFn$_invoke$arity$1(patient)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"personal-id","personal-id",743022525).cljs$core$IFn$_invoke$arity$1(patient)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),medisoft.frontend.ui.patients.address_for_patient.call(null,patient)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("patients","show","patients/show",-1798797107),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(patient))], null),"Show"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("patients","edit","patients/edit",-406191300),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(patient))], null),"Edit"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),medisoft.frontend.ui.utils.key_for.call(null,patient)], null)),iter__17348.call(null,cljs.core.rest.call(null,s__17349__$2)));
}
} else
{return null;
}
break;
}
});})(patients))
,null,null));
});})(patients))
;return iter__4346__auto__.call(null,cljs.core.deref.call(null,patients));
})())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No patients to display."], null))], null);
});
;})(patients))
});
medisoft.frontend.ui.patients.patient_show_component = (function patient_show_component(){var patient_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,medisoft.frontend.logic.current_params));var patient = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);medisoft.frontend.api.get_patient.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),patient_id], null),((function (patient_id,patient){
return (function (result){try{if((cljs.core.vector_QMARK_.call(null,result)) && ((cljs.core.count.call(null,result) === 2)))
{try{var result_0__17360 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17360,new cljs.core.Keyword(null,"success","success",1890645906)))
{var response = cljs.core.nth.call(null,result,(1));cljs.core.reset_BANG_.call(null,patient,response);
return medisoft.frontend.log.debug.call(null,"received response",response);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17363){if((e17363 instanceof Error))
{var e__12219__auto__ = e17363;if((e__12219__auto__ === cljs.core.match.backtrack))
{try{var result_0__17360 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17360,new cljs.core.Keyword(null,"error","error",-978969032)))
{var response = cljs.core.nth.call(null,result,(1));return medisoft.frontend.log.debug.call(null,"received response",response);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17364){if((e17364 instanceof Error))
{var e__12219__auto____$1 = e17364;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17364;

}
}} else
{throw e__12219__auto__;
}
} else
{throw e17363;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17362){if((e17362 instanceof Error))
{var e__12219__auto__ = e17362;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result))));
} else
{throw e__12219__auto__;
}
} else
{throw e17362;

}
}});})(patient_id,patient))
);
return ((function (patient_id,patient){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clearfix","div.clearfix",1775605822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pull-right","div.pull-right",-588908187),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),(function (){var temp__4421__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,patient));if(cljs.core.truth_(temp__4421__auto__))
{var patient_id__$1 = temp__4421__auto__;return medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("patients","edit","patients/edit",-406191300),new cljs.core.Keyword(null,"id","id",-1388402092),patient_id__$1);
} else
{return null;
}
})()], null),"Edit patient"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"firstname","firstname",1659984849).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,patient))," ",new cljs.core.Keyword(null,"surname","surname",1407918027).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,patient))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-3","div.col-lg-3",-657060001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Personal ID"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.Keyword(null,"personal-id","personal-id",743022525).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,patient))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-3","div.col-lg-3",-657060001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Address"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),medisoft.frontend.ui.patients.address_for_patient.call(null,cljs.core.deref.call(null,patient))], null)], null)], null)], null);
});
;})(patient_id,patient))
});
medisoft.frontend.ui.patients.patient_form_fields_component = (function patient_form_fields_component(patient,errors,p__17365){var map__17367 = p__17365;var map__17367__$1 = ((cljs.core.seq_QMARK_.call(null,map__17367))?cljs.core.apply.call(null,cljs.core.hash_map,map__17367):map__17367);var opts = map__17367__$1;var on_submit = cljs.core.get.call(null,map__17367__$1,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159));var submit_button_text = cljs.core.get.call(null,map__17367__$1,new cljs.core.Keyword(null,"submit-button-text","submit-button-text",-178661227));var form_input = medisoft.frontend.ui.utils.make_form_field_maker.call(null,patient,errors);return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4","div.col-lg-4",-519713955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_input,new cljs.core.Keyword(null,"firstname","firstname",1659984849)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4","div.col-lg-4",-519713955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_input,new cljs.core.Keyword(null,"surname","surname",1407918027)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-2","div.col-lg-2",664351046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_input,new cljs.core.Keyword(null,"personal-id","personal-id",743022525)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-6","div.col-lg-6",-987495203),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_input,new cljs.core.Keyword(null,"street-name","street-name",-67507047)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-1","div.col-lg-1",-1562742805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_input,new cljs.core.Keyword(null,"flat-number","flat-number",80119180)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-1","div.col-lg-1",-1562742805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_input,new cljs.core.Keyword(null,"house-number","house-number",30291003)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-1","div.col-lg-1",-1562742805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_input,new cljs.core.Keyword(null,"zip-code","zip-code",884340280)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4","div.col-lg-4",-519713955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_input,new cljs.core.Keyword(null,"city","city",-393302614)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-3","div.col-lg-3",-657060001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_input,new cljs.core.Keyword(null,"country","country",312965309)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-success","a.btn.btn-success",-1694151738),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_submit], null),submit_button_text], null)], null);
});
medisoft.frontend.ui.patients.empty_patient = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"city","city",-393302614),new cljs.core.Keyword(null,"surname","surname",1407918027),new cljs.core.Keyword(null,"flat-number","flat-number",80119180),new cljs.core.Keyword(null,"firstname","firstname",1659984849),new cljs.core.Keyword(null,"zip-code","zip-code",884340280),new cljs.core.Keyword(null,"street-name","street-name",-67507047),new cljs.core.Keyword(null,"house-number","house-number",30291003),new cljs.core.Keyword(null,"country","country",312965309),new cljs.core.Keyword(null,"personal-id","personal-id",743022525)],["","","","","","","","",""]);
medisoft.frontend.ui.patients.patient_create_form_component = (function patient_create_form_component(){var patient = reagent.core.atom.call(null,medisoft.frontend.ui.patients.empty_patient);var errors = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var on_submit = ((function (patient,errors){
return (function (e){medisoft.frontend.api.create_patient.call(null,cljs.core.deref.call(null,patient),((function (patient,errors){
return (function (result){try{if((cljs.core.vector_QMARK_.call(null,result)) && ((cljs.core.count.call(null,result) === 2)))
{try{var result_0__17392 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17392,new cljs.core.Keyword(null,"success","success",1890645906)))
{try{var result_1__17393 = cljs.core.nth.call(null,result,(1));if((function (){var G__17412 = result_1__17393;if(G__17412)
{var bit__4271__auto__ = (G__17412.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17412.cljs$core$ILookup$))
{return true;
} else
{if((!G__17412.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17412);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17412);
}
})())
{try{var result_1__17393_id__17396 = cljs.core.get.call(null,result_1__17393,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if(cljs.core.not_EQ_.call(null,result_1__17393_id__17396,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780)))
{var response = cljs.core.nth.call(null,result,(1));var id = cljs.core.get.call(null,result_1__17393,new cljs.core.Keyword(null,"id","id",-1388402092));medisoft.frontend.log.debug.call(null,"received response",response);
return medisoft.frontend.history.navigate_to_BANG_.call(null,medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("patients","show","patients/show",-1798797107),new cljs.core.Keyword(null,"id","id",-1388402092),id));
} else
{throw cljs.core.match.backtrack;

}
}catch (e17413){if((e17413 instanceof Error))
{var e__12219__auto__ = e17413;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto__;
}
} else
{throw e17413;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17411){if((e17411 instanceof Error))
{var e__12219__auto__ = e17411;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto__;
}
} else
{throw e17411;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17404){if((e17404 instanceof Error))
{var e__12219__auto__ = e17404;if((e__12219__auto__ === cljs.core.match.backtrack))
{try{var result_0__17392 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17392,new cljs.core.Keyword(null,"error","error",-978969032)))
{try{var result_1__17393 = cljs.core.nth.call(null,result,(1));if((function (){var G__17407 = result_1__17393;if(G__17407)
{var bit__4271__auto__ = (G__17407.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17407.cljs$core$ILookup$))
{return true;
} else
{if((!G__17407.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17407);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17407);
}
})())
{try{var result_1__17393_response__17399 = cljs.core.get.call(null,result_1__17393,new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if((function (){var G__17409 = result_1__17393_response__17399;if(G__17409)
{var bit__4271__auto__ = (G__17409.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17409.cljs$core$ILookup$))
{return true;
} else
{if((!G__17409.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17409);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17409);
}
})())
{try{var result_1__17393_response__17399_errors__17402 = cljs.core.get.call(null,result_1__17393_response__17399,new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if(cljs.core.not_EQ_.call(null,result_1__17393_response__17399_errors__17402,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780)))
{var response = cljs.core.get.call(null,result_1__17393,new cljs.core.Keyword(null,"response","response",-1068424192));var errors_SINGLEQUOTE_ = cljs.core.get.call(null,result_1__17393_response__17399,new cljs.core.Keyword(null,"errors","errors",-908790718));medisoft.frontend.log.error.call(null,"received response",response);
return cljs.core.reset_BANG_.call(null,errors,errors_SINGLEQUOTE_);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17410){if((e17410 instanceof Error))
{var e__12219__auto____$1 = e17410;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17410;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17408){if((e17408 instanceof Error))
{var e__12219__auto____$1 = e17408;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17408;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17406){if((e17406 instanceof Error))
{var e__12219__auto____$1 = e17406;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17406;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17405){if((e17405 instanceof Error))
{var e__12219__auto____$1 = e17405;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17405;

}
}} else
{throw e__12219__auto__;
}
} else
{throw e17404;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17403){if((e17403 instanceof Error))
{var e__12219__auto__ = e17403;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result))));
} else
{throw e__12219__auto__;
}
} else
{throw e17403;

}
}});})(patient,errors))
);
return e.preventDefault();
});})(patient,errors))
;return ((function (patient,errors,on_submit){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"patient create form",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.patients.patient_form_fields_component,patient,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),on_submit,new cljs.core.Keyword(null,"submit-button-text","submit-button-text",-178661227),"Create"], null)], null)], null);
});
;})(patient,errors,on_submit))
});
medisoft.frontend.ui.patients.patient_edit_form_component = (function patient_edit_form_component(){var patient_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,medisoft.frontend.logic.current_params));var patient = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var errors = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var on_submit = ((function (patient_id,patient,errors){
return (function (e){medisoft.frontend.api.update_patient.call(null,cljs.core.deref.call(null,patient),((function (patient_id,patient,errors){
return (function (result){try{if((cljs.core.vector_QMARK_.call(null,result)) && ((cljs.core.count.call(null,result) === 2)))
{try{var result_0__17461 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17461,new cljs.core.Keyword(null,"success","success",1890645906)))
{try{var result_1__17462 = cljs.core.nth.call(null,result,(1));if((function (){var G__17481 = result_1__17462;if(G__17481)
{var bit__4271__auto__ = (G__17481.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17481.cljs$core$ILookup$))
{return true;
} else
{if((!G__17481.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17481);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17481);
}
})())
{try{var result_1__17462_id__17465 = cljs.core.get.call(null,result_1__17462,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if(cljs.core.not_EQ_.call(null,result_1__17462_id__17465,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780)))
{var response = cljs.core.nth.call(null,result,(1));var id = cljs.core.get.call(null,result_1__17462,new cljs.core.Keyword(null,"id","id",-1388402092));medisoft.frontend.log.debug.call(null,"received response",response);
return medisoft.frontend.history.navigate_to_BANG_.call(null,medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("patients","show","patients/show",-1798797107),new cljs.core.Keyword(null,"id","id",-1388402092),id));
} else
{throw cljs.core.match.backtrack;

}
}catch (e17482){if((e17482 instanceof Error))
{var e__12219__auto__ = e17482;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto__;
}
} else
{throw e17482;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17480){if((e17480 instanceof Error))
{var e__12219__auto__ = e17480;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto__;
}
} else
{throw e17480;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17473){if((e17473 instanceof Error))
{var e__12219__auto__ = e17473;if((e__12219__auto__ === cljs.core.match.backtrack))
{try{var result_0__17461 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17461,new cljs.core.Keyword(null,"error","error",-978969032)))
{try{var result_1__17462 = cljs.core.nth.call(null,result,(1));if((function (){var G__17476 = result_1__17462;if(G__17476)
{var bit__4271__auto__ = (G__17476.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17476.cljs$core$ILookup$))
{return true;
} else
{if((!G__17476.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17476);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17476);
}
})())
{try{var result_1__17462_response__17468 = cljs.core.get.call(null,result_1__17462,new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if((function (){var G__17478 = result_1__17462_response__17468;if(G__17478)
{var bit__4271__auto__ = (G__17478.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17478.cljs$core$ILookup$))
{return true;
} else
{if((!G__17478.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17478);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17478);
}
})())
{try{var result_1__17462_response__17468_errors__17471 = cljs.core.get.call(null,result_1__17462_response__17468,new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if(cljs.core.not_EQ_.call(null,result_1__17462_response__17468_errors__17471,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780)))
{var response = cljs.core.get.call(null,result_1__17462,new cljs.core.Keyword(null,"response","response",-1068424192));var errors_SINGLEQUOTE_ = cljs.core.get.call(null,result_1__17462_response__17468,new cljs.core.Keyword(null,"errors","errors",-908790718));medisoft.frontend.log.error.call(null,"received response",response);
return cljs.core.reset_BANG_.call(null,errors,errors_SINGLEQUOTE_);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17479){if((e17479 instanceof Error))
{var e__12219__auto____$1 = e17479;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17479;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17477){if((e17477 instanceof Error))
{var e__12219__auto____$1 = e17477;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17477;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17475){if((e17475 instanceof Error))
{var e__12219__auto____$1 = e17475;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17475;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17474){if((e17474 instanceof Error))
{var e__12219__auto____$1 = e17474;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17474;

}
}} else
{throw e__12219__auto__;
}
} else
{throw e17473;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17472){if((e17472 instanceof Error))
{var e__12219__auto__ = e17472;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result))));
} else
{throw e__12219__auto__;
}
} else
{throw e17472;

}
}});})(patient_id,patient,errors))
);
return e.preventDefault();
});})(patient_id,patient,errors))
;medisoft.frontend.api.get_patient.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),patient_id], null),((function (patient_id,patient,errors,on_submit){
return (function (result){try{if((cljs.core.vector_QMARK_.call(null,result)) && ((cljs.core.count.call(null,result) === 2)))
{try{var result_0__17484 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17484,new cljs.core.Keyword(null,"success","success",1890645906)))
{try{var result_1__17485 = cljs.core.nth.call(null,result,(1));if((function (){var G__17504 = result_1__17485;if(G__17504)
{var bit__4271__auto__ = (G__17504.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17504.cljs$core$ILookup$))
{return true;
} else
{if((!G__17504.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17504);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17504);
}
})())
{try{var result_1__17485_id__17488 = cljs.core.get.call(null,result_1__17485,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if(cljs.core.not_EQ_.call(null,result_1__17485_id__17488,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780)))
{var response = cljs.core.nth.call(null,result,(1));var id = cljs.core.get.call(null,result_1__17485,new cljs.core.Keyword(null,"id","id",-1388402092));medisoft.frontend.log.debug.call(null,"received response",response);
return cljs.core.reset_BANG_.call(null,patient,cljs.core.dissoc.call(null,response,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"medical-visits","medical-visits",464178785),new cljs.core.Keyword(null,"prescription","prescription",1561873972)));
} else
{throw cljs.core.match.backtrack;

}
}catch (e17505){if((e17505 instanceof Error))
{var e__12219__auto__ = e17505;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto__;
}
} else
{throw e17505;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17503){if((e17503 instanceof Error))
{var e__12219__auto__ = e17503;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto__;
}
} else
{throw e17503;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17496){if((e17496 instanceof Error))
{var e__12219__auto__ = e17496;if((e__12219__auto__ === cljs.core.match.backtrack))
{try{var result_0__17484 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17484,new cljs.core.Keyword(null,"error","error",-978969032)))
{try{var result_1__17485 = cljs.core.nth.call(null,result,(1));if((function (){var G__17499 = result_1__17485;if(G__17499)
{var bit__4271__auto__ = (G__17499.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17499.cljs$core$ILookup$))
{return true;
} else
{if((!G__17499.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17499);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17499);
}
})())
{try{var result_1__17485_response__17491 = cljs.core.get.call(null,result_1__17485,new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if((function (){var G__17501 = result_1__17485_response__17491;if(G__17501)
{var bit__4271__auto__ = (G__17501.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17501.cljs$core$ILookup$))
{return true;
} else
{if((!G__17501.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17501);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17501);
}
})())
{try{var result_1__17485_response__17491_errors__17494 = cljs.core.get.call(null,result_1__17485_response__17491,new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if(cljs.core.not_EQ_.call(null,result_1__17485_response__17491_errors__17494,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780)))
{var response = cljs.core.get.call(null,result_1__17485,new cljs.core.Keyword(null,"response","response",-1068424192));var errors_SINGLEQUOTE_ = cljs.core.get.call(null,result_1__17485_response__17491,new cljs.core.Keyword(null,"errors","errors",-908790718));return medisoft.frontend.log.error.call(null,"received response",response);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17502){if((e17502 instanceof Error))
{var e__12219__auto____$1 = e17502;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17502;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17500){if((e17500 instanceof Error))
{var e__12219__auto____$1 = e17500;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17500;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17498){if((e17498 instanceof Error))
{var e__12219__auto____$1 = e17498;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17498;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17497){if((e17497 instanceof Error))
{var e__12219__auto____$1 = e17497;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17497;

}
}} else
{throw e__12219__auto__;
}
} else
{throw e17496;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17495){if((e17495 instanceof Error))
{var e__12219__auto__ = e17495;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result))));
} else
{throw e__12219__auto__;
}
} else
{throw e17495;

}
}});})(patient_id,patient,errors,on_submit))
);
return ((function (patient_id,patient,errors,on_submit){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"patient edit form",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.patients.patient_form_fields_component,patient,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),on_submit,new cljs.core.Keyword(null,"submit-button-text","submit-button-text",-178661227),"Edit"], null)], null)], null);
});
;})(patient_id,patient,errors,on_submit))
});

//# sourceMappingURL=patients.js.map