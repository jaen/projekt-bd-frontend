// Compiled by ClojureScript 0.0-2371
goog.provide('medisoft.frontend.ui.employees');
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
goog.require('reagent.ratom');
goog.require('re_com.core');
goog.require('reagent.core');
goog.require('medisoft.frontend.routes');
goog.require('medisoft.frontend.api');
goog.require('medisoft.frontend.history');
goog.require('reagent.ratom');
goog.require('cuerdas.core');
goog.require('medisoft.frontend.validations');
goog.require('cljs.core.match');
goog.require('medisoft.frontend.routes');
goog.require('cuerdas.core');
goog.require('medisoft.frontend.log');
medisoft.frontend.ui.employees.address_for_employee = (function address_for_employee(patient){return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"street-name","street-name",-67507047).cljs$core$IFn$_invoke$arity$1(patient)," ",new cljs.core.Keyword(null,"house-number","house-number",30291003).cljs$core$IFn$_invoke$arity$1(patient),"/",new cljs.core.Keyword(null,"flat-number","flat-number",80119180).cljs$core$IFn$_invoke$arity$1(patient),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.Keyword(null,"zip-code","zip-code",884340280).cljs$core$IFn$_invoke$arity$1(patient)," ",new cljs.core.Keyword(null,"city","city",-393302614).cljs$core$IFn$_invoke$arity$1(patient),", ",new cljs.core.Keyword(null,"country","country",312965309).cljs$core$IFn$_invoke$arity$1(patient)], null);
});
medisoft.frontend.ui.employees.employee_list_component = (function employee_list_component(){var employee = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);medisoft.frontend.api.list_employees.call(null,cljs.core.PersistentArrayMap.EMPTY,((function (employee){
return (function (result){try{if((cljs.core.vector_QMARK_.call(null,result)) && ((cljs.core.count.call(null,result) === 2)))
{try{var result_0__17153 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17153,new cljs.core.Keyword(null,"success","success",1890645906)))
{var response = cljs.core.nth.call(null,result,(1));cljs.core.reset_BANG_.call(null,employee,response);
return medisoft.frontend.log.debug.call(null,"received response",response);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17156){if((e17156 instanceof Error))
{var e__12219__auto__ = e17156;if((e__12219__auto__ === cljs.core.match.backtrack))
{try{var result_0__17153 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17153,new cljs.core.Keyword(null,"error","error",-978969032)))
{return new cljs.core.Keyword(null,"nothing","nothing",-1022703296);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17157){if((e17157 instanceof Error))
{var e__12219__auto____$1 = e17157;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17157;

}
}} else
{throw e__12219__auto__;
}
} else
{throw e17156;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17155){if((e17155 instanceof Error))
{var e__12219__auto__ = e17155;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result))));
} else
{throw e__12219__auto__;
}
} else
{throw e17155;

}
}});})(employee))
);
return ((function (employee){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clearfix","div.clearfix",1775605822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pull-right","div.pull-right",-588908187),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-success","a.btn.btn-success",-1694151738),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("employees","create","employees/create",-1749638653))], null),"New employee"], null)], null)], null),(((cljs.core.count.call(null,cljs.core.deref.call(null,employee)) > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-hover","table.table.table-hover",-1717147080),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"First name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Surname"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Personal ID"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Address"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"200px"], null)], null),"Actions"], null)], null),cljs.core.doall.call(null,(function (){var iter__4346__auto__ = ((function (employee){
return (function iter__17158(s__17159){return (new cljs.core.LazySeq(null,((function (employee){
return (function (){var s__17159__$1 = s__17159;while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__17159__$1);if(temp__4423__auto__)
{var s__17159__$2 = temp__4423__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17159__$2))
{var c__4344__auto__ = cljs.core.chunk_first.call(null,s__17159__$2);var size__4345__auto__ = cljs.core.count.call(null,c__4344__auto__);var b__17161 = cljs.core.chunk_buffer.call(null,size__4345__auto__);if((function (){var i__17160 = (0);while(true){
if((i__17160 < size__4345__auto__))
{var employee__$1 = cljs.core._nth.call(null,c__4344__auto__,i__17160);cljs.core.chunk_append.call(null,b__17161,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"firstname","firstname",1659984849).cljs$core$IFn$_invoke$arity$1(employee__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"surname","surname",1407918027).cljs$core$IFn$_invoke$arity$1(employee__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"personal-id","personal-id",743022525).cljs$core$IFn$_invoke$arity$1(employee__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),medisoft.frontend.ui.employees.address_for_employee.call(null,employee__$1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("employees","show","employees/show",-127534506),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(employee__$1))], null),"Show"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("employees","edit","employees/edit",995723221),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(employee__$1))], null),"Edit"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),medisoft.frontend.ui.utils.key_for.call(null,employee__$1)], null)));
{
var G__17162 = (i__17160 + (1));
i__17160 = G__17162;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17161),iter__17158.call(null,cljs.core.chunk_rest.call(null,s__17159__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17161),null);
}
} else
{var employee__$1 = cljs.core.first.call(null,s__17159__$2);return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"firstname","firstname",1659984849).cljs$core$IFn$_invoke$arity$1(employee__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"surname","surname",1407918027).cljs$core$IFn$_invoke$arity$1(employee__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"personal-id","personal-id",743022525).cljs$core$IFn$_invoke$arity$1(employee__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),medisoft.frontend.ui.employees.address_for_employee.call(null,employee__$1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("employees","show","employees/show",-127534506),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(employee__$1))], null),"Show"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("employees","edit","employees/edit",995723221),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(employee__$1))], null),"Edit"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),medisoft.frontend.ui.utils.key_for.call(null,employee__$1)], null)),iter__17158.call(null,cljs.core.rest.call(null,s__17159__$2)));
}
} else
{return null;
}
break;
}
});})(employee))
,null,null));
});})(employee))
;return iter__4346__auto__.call(null,cljs.core.deref.call(null,employee));
})())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No employees to display."], null))], null);
});
;})(employee))
});
medisoft.frontend.ui.employees.employee_show_component = (function employee_show_component(){var employee_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,medisoft.frontend.logic.current_params));var employee = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);medisoft.frontend.api.get_employee.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),employee_id], null),((function (employee_id,employee){
return (function (result){try{if((cljs.core.vector_QMARK_.call(null,result)) && ((cljs.core.count.call(null,result) === 2)))
{try{var result_0__17170 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17170,new cljs.core.Keyword(null,"success","success",1890645906)))
{var response = cljs.core.nth.call(null,result,(1));cljs.core.reset_BANG_.call(null,employee,response);
return medisoft.frontend.log.debug.call(null,"received response",response);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17173){if((e17173 instanceof Error))
{var e__12219__auto__ = e17173;if((e__12219__auto__ === cljs.core.match.backtrack))
{try{var result_0__17170 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17170,new cljs.core.Keyword(null,"error","error",-978969032)))
{var response = cljs.core.nth.call(null,result,(1));return medisoft.frontend.log.debug.call(null,"received response",response);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17174){if((e17174 instanceof Error))
{var e__12219__auto____$1 = e17174;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17174;

}
}} else
{throw e__12219__auto__;
}
} else
{throw e17173;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17172){if((e17172 instanceof Error))
{var e__12219__auto__ = e17172;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result))));
} else
{throw e__12219__auto__;
}
} else
{throw e17172;

}
}});})(employee_id,employee))
);
return ((function (employee_id,employee){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clearfix","div.clearfix",1775605822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pull-right","div.pull-right",-588908187),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),(function (){var temp__4421__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,employee));if(cljs.core.truth_(temp__4421__auto__))
{var patient_id = temp__4421__auto__;return medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("employees","edit","employees/edit",995723221),new cljs.core.Keyword(null,"id","id",-1388402092),patient_id);
} else
{return null;
}
})()], null),"Edit employee"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"firstname","firstname",1659984849).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,employee))," ",new cljs.core.Keyword(null,"surname","surname",1407918027).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,employee))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-3","div.col-lg-3",-657060001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Personal ID"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.Keyword(null,"personal-id","personal-id",743022525).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,employee))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-3","div.col-lg-3",-657060001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Address"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),medisoft.frontend.ui.employees.address_for_employee.call(null,cljs.core.deref.call(null,employee))], null)], null)], null)], null);
});
;})(employee_id,employee))
});
medisoft.frontend.ui.employees.employee_form_fields_component = (function employee_form_fields_component(employee,errors,p__17177){var map__17185 = p__17177;var map__17185__$1 = ((cljs.core.seq_QMARK_.call(null,map__17185))?cljs.core.apply.call(null,cljs.core.hash_map,map__17185):map__17185);var opts = map__17185__$1;var on_submit = cljs.core.get.call(null,map__17185__$1,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159));var submit_button_text = cljs.core.get.call(null,map__17185__$1,new cljs.core.Keyword(null,"submit-button-text","submit-button-text",-178661227));var job_titles = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);var form_input = medisoft.frontend.ui.utils.make_form_field_maker.call(null,employee,errors);medisoft.frontend.api.list_job_titles.call(null,cljs.core.PersistentArrayMap.EMPTY,((function (job_titles,form_input,map__17185,map__17185__$1,opts,on_submit,submit_button_text){
return (function (result){try{if((cljs.core.vector_QMARK_.call(null,result)) && ((cljs.core.count.call(null,result) === 2)))
{try{var result_0__17187 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17187,new cljs.core.Keyword(null,"success","success",1890645906)))
{var response = cljs.core.nth.call(null,result,(1));cljs.core.reset_BANG_.call(null,job_titles,response);
return medisoft.frontend.log.debug.call(null,"received response",response);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17190){if((e17190 instanceof Error))
{var e__12219__auto__ = e17190;if((e__12219__auto__ === cljs.core.match.backtrack))
{try{var result_0__17187 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17187,new cljs.core.Keyword(null,"error","error",-978969032)))
{var response = cljs.core.nth.call(null,result,(1));return medisoft.frontend.log.debug.call(null,"received response",response);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17191){if((e17191 instanceof Error))
{var e__12219__auto____$1 = e17191;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17191;

}
}} else
{throw e__12219__auto__;
}
} else
{throw e17190;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17189){if((e17189 instanceof Error))
{var e__12219__auto__ = e17189;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result))));
} else
{throw e__12219__auto__;
}
} else
{throw e17189;

}
}});})(job_titles,form_input,map__17185,map__17185__$1,opts,on_submit,submit_button_text))
);
return ((function (job_titles,form_input,map__17185,map__17185__$1,opts,on_submit,submit_button_text){
return (function (){medisoft.frontend.log.debug.call(null,"welp:",cljs.core.deref.call(null,employee));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4","div.col-lg-4",-519713955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_input,new cljs.core.Keyword(null,"firstname","firstname",1659984849)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4","div.col-lg-4",-519713955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_input,new cljs.core.Keyword(null,"surname","surname",1407918027)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-2","div.col-lg-2",664351046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_input,new cljs.core.Keyword(null,"personal-id","personal-id",743022525)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4","div.col-lg-4",-519713955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_input,new cljs.core.Keyword(null,"job-title","job-title",1246185035),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"model","model",331153215),reagent.ratom.make_reaction.call(null,((function (job_titles,form_input,map__17185,map__17185__$1,opts,on_submit,submit_button_text){
return (function (){return cljs.core.get_in.call(null,cljs.core.deref.call(null,employee),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"job-title","job-title",1246185035),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
});})(job_titles,form_input,map__17185,map__17185__$1,opts,on_submit,submit_button_text))
),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (job_titles,form_input,map__17185,map__17185__$1,opts,on_submit,submit_button_text){
return (function (p1__17175_SHARP_){return cljs.core.swap_BANG_.call(null,employee,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"job-title","job-title",1246185035)], null),cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),p1__17175_SHARP_);
});})(job_titles,form_input,map__17185,map__17185__$1,opts,on_submit,submit_button_text))
,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),((function (job_titles,form_input,map__17185,map__17185__$1,opts,on_submit,submit_button_text){
return (function (p1__17176_SHARP_){return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__17176_SHARP_);
});})(job_titles,form_input,map__17185,map__17185__$1,opts,on_submit,submit_button_text))
,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"choices","choices",1385611597),job_titles], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-2","div.col-lg-2",664351046),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_input,new cljs.core.Keyword(null,"is-doctor","is-doctor",-443448735),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-6","div.col-lg-6",-987495203),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_input,new cljs.core.Keyword(null,"street-name","street-name",-67507047)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-1","div.col-lg-1",-1562742805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_input,new cljs.core.Keyword(null,"flat-number","flat-number",80119180)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-1","div.col-lg-1",-1562742805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_input,new cljs.core.Keyword(null,"house-number","house-number",30291003)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-1","div.col-lg-1",-1562742805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_input,new cljs.core.Keyword(null,"zip-code","zip-code",884340280)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4","div.col-lg-4",-519713955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_input,new cljs.core.Keyword(null,"city","city",-393302614)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-3","div.col-lg-3",-657060001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_input,new cljs.core.Keyword(null,"country","country",312965309)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-success","a.btn.btn-success",-1694151738),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_submit], null),submit_button_text], null)], null);
});
;})(job_titles,form_input,map__17185,map__17185__$1,opts,on_submit,submit_button_text))
});
medisoft.frontend.ui.employees.empty_employee = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"is-doctor","is-doctor",-443448735),new cljs.core.Keyword(null,"city","city",-393302614),new cljs.core.Keyword(null,"surname","surname",1407918027),new cljs.core.Keyword(null,"flat-number","flat-number",80119180),new cljs.core.Keyword(null,"firstname","firstname",1659984849),new cljs.core.Keyword(null,"zip-code","zip-code",884340280),new cljs.core.Keyword(null,"street-name","street-name",-67507047),new cljs.core.Keyword(null,"house-number","house-number",30291003),new cljs.core.Keyword(null,"country","country",312965309),new cljs.core.Keyword(null,"personal-id","personal-id",743022525)],[false,"","","","","","","","",""]);
medisoft.frontend.ui.employees.current_user = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(23)], null));
medisoft.frontend.ui.employees.employee_create_form_component = (function employee_create_form_component(){var employee = reagent.core.atom.call(null,medisoft.frontend.ui.employees.empty_employee);var errors = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var on_submit = ((function (employee,errors){
return (function (e){medisoft.frontend.api.create_employee.call(null,cljs.core.merge.call(null,cljs.core.deref.call(null,employee),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),cljs.core.deref.call(null,medisoft.frontend.ui.employees.current_user)], null)),((function (employee,errors){
return (function (result){try{if((cljs.core.vector_QMARK_.call(null,result)) && ((cljs.core.count.call(null,result) === 2)))
{try{var result_0__17216 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17216,new cljs.core.Keyword(null,"success","success",1890645906)))
{try{var result_1__17217 = cljs.core.nth.call(null,result,(1));if((function (){var G__17236 = result_1__17217;if(G__17236)
{var bit__4271__auto__ = (G__17236.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17236.cljs$core$ILookup$))
{return true;
} else
{if((!G__17236.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17236);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17236);
}
})())
{try{var result_1__17217_id__17220 = cljs.core.get.call(null,result_1__17217,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if(cljs.core.not_EQ_.call(null,result_1__17217_id__17220,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780)))
{var response = cljs.core.nth.call(null,result,(1));var id = cljs.core.get.call(null,result_1__17217,new cljs.core.Keyword(null,"id","id",-1388402092));medisoft.frontend.log.debug.call(null,"received response",response);
return medisoft.frontend.history.navigate_to_BANG_.call(null,medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("employees","show","employees/show",-127534506),new cljs.core.Keyword(null,"id","id",-1388402092),id));
} else
{throw cljs.core.match.backtrack;

}
}catch (e17237){if((e17237 instanceof Error))
{var e__12219__auto__ = e17237;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto__;
}
} else
{throw e17237;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17235){if((e17235 instanceof Error))
{var e__12219__auto__ = e17235;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto__;
}
} else
{throw e17235;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17228){if((e17228 instanceof Error))
{var e__12219__auto__ = e17228;if((e__12219__auto__ === cljs.core.match.backtrack))
{try{var result_0__17216 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17216,new cljs.core.Keyword(null,"error","error",-978969032)))
{try{var result_1__17217 = cljs.core.nth.call(null,result,(1));if((function (){var G__17231 = result_1__17217;if(G__17231)
{var bit__4271__auto__ = (G__17231.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17231.cljs$core$ILookup$))
{return true;
} else
{if((!G__17231.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17231);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17231);
}
})())
{try{var result_1__17217_response__17223 = cljs.core.get.call(null,result_1__17217,new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if((function (){var G__17233 = result_1__17217_response__17223;if(G__17233)
{var bit__4271__auto__ = (G__17233.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17233.cljs$core$ILookup$))
{return true;
} else
{if((!G__17233.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17233);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17233);
}
})())
{try{var result_1__17217_response__17223_errors__17226 = cljs.core.get.call(null,result_1__17217_response__17223,new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if(cljs.core.not_EQ_.call(null,result_1__17217_response__17223_errors__17226,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780)))
{var response = cljs.core.get.call(null,result_1__17217,new cljs.core.Keyword(null,"response","response",-1068424192));var errors_SINGLEQUOTE_ = cljs.core.get.call(null,result_1__17217_response__17223,new cljs.core.Keyword(null,"errors","errors",-908790718));medisoft.frontend.log.error.call(null,"received response",response);
return cljs.core.reset_BANG_.call(null,errors,errors_SINGLEQUOTE_);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17234){if((e17234 instanceof Error))
{var e__12219__auto____$1 = e17234;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17234;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17232){if((e17232 instanceof Error))
{var e__12219__auto____$1 = e17232;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17232;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17230){if((e17230 instanceof Error))
{var e__12219__auto____$1 = e17230;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17230;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17229){if((e17229 instanceof Error))
{var e__12219__auto____$1 = e17229;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17229;

}
}} else
{throw e__12219__auto__;
}
} else
{throw e17228;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17227){if((e17227 instanceof Error))
{var e__12219__auto__ = e17227;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result))));
} else
{throw e__12219__auto__;
}
} else
{throw e17227;

}
}});})(employee,errors))
);
return e.preventDefault();
});})(employee,errors))
;return ((function (employee,errors,on_submit){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"patient create form",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.employees.employee_form_fields_component,employee,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),on_submit,new cljs.core.Keyword(null,"submit-button-text","submit-button-text",-178661227),"Create"], null)], null)], null);
});
;})(employee,errors,on_submit))
});
medisoft.frontend.ui.employees.employee_edit_form_component = (function employee_edit_form_component(){var employee_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,medisoft.frontend.logic.current_params));var employee = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var errors = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var on_submit = ((function (employee_id,employee,errors){
return (function (e){medisoft.frontend.api.update_employee.call(null,cljs.core.merge.call(null,cljs.core.deref.call(null,employee),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),cljs.core.deref.call(null,medisoft.frontend.ui.employees.current_user)], null)),((function (employee_id,employee,errors){
return (function (result){try{if((cljs.core.vector_QMARK_.call(null,result)) && ((cljs.core.count.call(null,result) === 2)))
{try{var result_0__17285 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17285,new cljs.core.Keyword(null,"success","success",1890645906)))
{try{var result_1__17286 = cljs.core.nth.call(null,result,(1));if((function (){var G__17305 = result_1__17286;if(G__17305)
{var bit__4271__auto__ = (G__17305.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17305.cljs$core$ILookup$))
{return true;
} else
{if((!G__17305.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17305);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17305);
}
})())
{try{var result_1__17286_id__17289 = cljs.core.get.call(null,result_1__17286,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if(cljs.core.not_EQ_.call(null,result_1__17286_id__17289,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780)))
{var response = cljs.core.nth.call(null,result,(1));var id = cljs.core.get.call(null,result_1__17286,new cljs.core.Keyword(null,"id","id",-1388402092));medisoft.frontend.log.debug.call(null,"received response",response);
return medisoft.frontend.history.navigate_to_BANG_.call(null,medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("employees","show","employees/show",-127534506),new cljs.core.Keyword(null,"id","id",-1388402092),id));
} else
{throw cljs.core.match.backtrack;

}
}catch (e17306){if((e17306 instanceof Error))
{var e__12219__auto__ = e17306;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto__;
}
} else
{throw e17306;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17304){if((e17304 instanceof Error))
{var e__12219__auto__ = e17304;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto__;
}
} else
{throw e17304;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17297){if((e17297 instanceof Error))
{var e__12219__auto__ = e17297;if((e__12219__auto__ === cljs.core.match.backtrack))
{try{var result_0__17285 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17285,new cljs.core.Keyword(null,"error","error",-978969032)))
{try{var result_1__17286 = cljs.core.nth.call(null,result,(1));if((function (){var G__17300 = result_1__17286;if(G__17300)
{var bit__4271__auto__ = (G__17300.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17300.cljs$core$ILookup$))
{return true;
} else
{if((!G__17300.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17300);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17300);
}
})())
{try{var result_1__17286_response__17292 = cljs.core.get.call(null,result_1__17286,new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if((function (){var G__17302 = result_1__17286_response__17292;if(G__17302)
{var bit__4271__auto__ = (G__17302.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17302.cljs$core$ILookup$))
{return true;
} else
{if((!G__17302.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17302);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17302);
}
})())
{try{var result_1__17286_response__17292_errors__17295 = cljs.core.get.call(null,result_1__17286_response__17292,new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if(cljs.core.not_EQ_.call(null,result_1__17286_response__17292_errors__17295,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780)))
{var response = cljs.core.get.call(null,result_1__17286,new cljs.core.Keyword(null,"response","response",-1068424192));var errors_SINGLEQUOTE_ = cljs.core.get.call(null,result_1__17286_response__17292,new cljs.core.Keyword(null,"errors","errors",-908790718));medisoft.frontend.log.error.call(null,"received response",response);
return cljs.core.reset_BANG_.call(null,errors,errors_SINGLEQUOTE_);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17303){if((e17303 instanceof Error))
{var e__12219__auto____$1 = e17303;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17303;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17301){if((e17301 instanceof Error))
{var e__12219__auto____$1 = e17301;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17301;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17299){if((e17299 instanceof Error))
{var e__12219__auto____$1 = e17299;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17299;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17298){if((e17298 instanceof Error))
{var e__12219__auto____$1 = e17298;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17298;

}
}} else
{throw e__12219__auto__;
}
} else
{throw e17297;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17296){if((e17296 instanceof Error))
{var e__12219__auto__ = e17296;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result))));
} else
{throw e__12219__auto__;
}
} else
{throw e17296;

}
}});})(employee_id,employee,errors))
);
return e.preventDefault();
});})(employee_id,employee,errors))
;medisoft.frontend.api.get_employee.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),employee_id], null),((function (employee_id,employee,errors,on_submit){
return (function (result){try{if((cljs.core.vector_QMARK_.call(null,result)) && ((cljs.core.count.call(null,result) === 2)))
{try{var result_0__17308 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17308,new cljs.core.Keyword(null,"success","success",1890645906)))
{try{var result_1__17309 = cljs.core.nth.call(null,result,(1));if((function (){var G__17328 = result_1__17309;if(G__17328)
{var bit__4271__auto__ = (G__17328.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17328.cljs$core$ILookup$))
{return true;
} else
{if((!G__17328.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17328);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17328);
}
})())
{try{var result_1__17309_id__17312 = cljs.core.get.call(null,result_1__17309,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if(cljs.core.not_EQ_.call(null,result_1__17309_id__17312,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780)))
{var response = cljs.core.nth.call(null,result,(1));var id = cljs.core.get.call(null,result_1__17309,new cljs.core.Keyword(null,"id","id",-1388402092));medisoft.frontend.log.debug.call(null,"received response",response);
return cljs.core.reset_BANG_.call(null,employee,cljs.core.dissoc.call(null,response,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"medical-visits","medical-visits",464178785),new cljs.core.Keyword(null,"prescriptions","prescriptions",-1006145213),new cljs.core.Keyword(null,"specializations","specializations",399139461),new cljs.core.Keyword(null,"device-reservations","device-reservations",1712958963),new cljs.core.Keyword(null,"room-reservations","room-reservations",1327072628),new cljs.core.Keyword(null,"schedules","schedules",2099585369),new cljs.core.Keyword(null,"users","users",-713552705)));
} else
{throw cljs.core.match.backtrack;

}
}catch (e17329){if((e17329 instanceof Error))
{var e__12219__auto__ = e17329;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto__;
}
} else
{throw e17329;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17327){if((e17327 instanceof Error))
{var e__12219__auto__ = e17327;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto__;
}
} else
{throw e17327;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17320){if((e17320 instanceof Error))
{var e__12219__auto__ = e17320;if((e__12219__auto__ === cljs.core.match.backtrack))
{try{var result_0__17308 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17308,new cljs.core.Keyword(null,"error","error",-978969032)))
{try{var result_1__17309 = cljs.core.nth.call(null,result,(1));if((function (){var G__17323 = result_1__17309;if(G__17323)
{var bit__4271__auto__ = (G__17323.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17323.cljs$core$ILookup$))
{return true;
} else
{if((!G__17323.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17323);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17323);
}
})())
{try{var result_1__17309_response__17315 = cljs.core.get.call(null,result_1__17309,new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if((function (){var G__17325 = result_1__17309_response__17315;if(G__17325)
{var bit__4271__auto__ = (G__17325.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17325.cljs$core$ILookup$))
{return true;
} else
{if((!G__17325.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17325);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17325);
}
})())
{try{var result_1__17309_response__17315_errors__17318 = cljs.core.get.call(null,result_1__17309_response__17315,new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if(cljs.core.not_EQ_.call(null,result_1__17309_response__17315_errors__17318,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780)))
{var response = cljs.core.get.call(null,result_1__17309,new cljs.core.Keyword(null,"response","response",-1068424192));var errors_SINGLEQUOTE_ = cljs.core.get.call(null,result_1__17309_response__17315,new cljs.core.Keyword(null,"errors","errors",-908790718));return medisoft.frontend.log.error.call(null,"received response",response);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17326){if((e17326 instanceof Error))
{var e__12219__auto____$1 = e17326;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17326;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17324){if((e17324 instanceof Error))
{var e__12219__auto____$1 = e17324;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17324;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17322){if((e17322 instanceof Error))
{var e__12219__auto____$1 = e17322;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17322;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17321){if((e17321 instanceof Error))
{var e__12219__auto____$1 = e17321;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17321;

}
}} else
{throw e__12219__auto__;
}
} else
{throw e17320;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17319){if((e17319 instanceof Error))
{var e__12219__auto__ = e17319;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result))));
} else
{throw e__12219__auto__;
}
} else
{throw e17319;

}
}});})(employee_id,employee,errors,on_submit))
);
return ((function (employee_id,employee,errors,on_submit){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"patient edit form",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.employees.employee_form_fields_component,employee,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),on_submit,new cljs.core.Keyword(null,"submit-button-text","submit-button-text",-178661227),"Edit"], null)], null)], null);
});
;})(employee_id,employee,errors,on_submit))
});

//# sourceMappingURL=employees.js.map