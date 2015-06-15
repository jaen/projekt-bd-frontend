// Compiled by ClojureScript 0.0-2371
goog.provide('medisoft.frontend.ui.medicines');
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
medisoft.frontend.ui.medicines.medicine_list_component = (function medicine_list_component(){var medicines = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);medisoft.frontend.api.list_medicines.call(null,cljs.core.PersistentArrayMap.EMPTY,((function (medicines){
return (function (result){try{if((cljs.core.vector_QMARK_.call(null,result)) && ((cljs.core.count.call(null,result) === 2)))
{try{var result_0__17695 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17695,new cljs.core.Keyword(null,"success","success",1890645906)))
{var response = cljs.core.nth.call(null,result,(1));cljs.core.reset_BANG_.call(null,medicines,response);
return medisoft.frontend.log.debug.call(null,"received response",response);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17698){if((e17698 instanceof Error))
{var e__12219__auto__ = e17698;if((e__12219__auto__ === cljs.core.match.backtrack))
{try{var result_0__17695 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17695,new cljs.core.Keyword(null,"error","error",-978969032)))
{return new cljs.core.Keyword(null,"nothing","nothing",-1022703296);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17699){if((e17699 instanceof Error))
{var e__12219__auto____$1 = e17699;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17699;

}
}} else
{throw e__12219__auto__;
}
} else
{throw e17698;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17697){if((e17697 instanceof Error))
{var e__12219__auto__ = e17697;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result))));
} else
{throw e__12219__auto__;
}
} else
{throw e17697;

}
}});})(medicines))
);
return ((function (medicines){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clearfix","div.clearfix",1775605822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pull-right","div.pull-right",-588908187),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-success","a.btn.btn-success",-1694151738),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("medicines","create","medicines/create",858792975))], null),"New medicine"], null)], null)], null),(((cljs.core.count.call(null,cljs.core.deref.call(null,medicines)) > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-hover","table.table.table-hover",-1717147080),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"GTIN"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Approved"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Producer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Type"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Wrapping"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Dose"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"200px"], null)], null),"Actions"], null)], null),cljs.core.doall.call(null,(function (){var iter__4346__auto__ = ((function (medicines){
return (function iter__17700(s__17701){return (new cljs.core.LazySeq(null,((function (medicines){
return (function (){var s__17701__$1 = s__17701;while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__17701__$1);if(temp__4423__auto__)
{var s__17701__$2 = temp__4423__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17701__$2))
{var c__4344__auto__ = cljs.core.chunk_first.call(null,s__17701__$2);var size__4345__auto__ = cljs.core.count.call(null,c__4344__auto__);var b__17703 = cljs.core.chunk_buffer.call(null,size__4345__auto__);if((function (){var i__17702 = (0);while(true){
if((i__17702 < size__4345__auto__))
{var medicine = cljs.core._nth.call(null,c__4344__auto__,i__17702);cljs.core.chunk_append.call(null,b__17703,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"gtin","gtin",-1651547591).cljs$core$IFn$_invoke$arity$1(medicine)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(cljs.core.truth_(new cljs.core.Keyword(null,"approved","approved",-803187124).cljs$core$IFn$_invoke$arity$1(medicine))?"approved":"not approved")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(medicine)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"producer-name","producer-name",-1458815353).cljs$core$IFn$_invoke$arity$1(medicine)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(medicine)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"wrapping","wrapping",-1252305316).cljs$core$IFn$_invoke$arity$1(medicine)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"dose","dose",-1241257813).cljs$core$IFn$_invoke$arity$1(medicine)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("medicines","show","medicines/show",1524988954),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(medicine))], null),"Show"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("medicines","edit","medicines/edit",500893153),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(medicine))], null),"Edit"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),medisoft.frontend.ui.utils.key_for.call(null,medicine)], null)));
{
var G__17704 = (i__17702 + (1));
i__17702 = G__17704;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17703),iter__17700.call(null,cljs.core.chunk_rest.call(null,s__17701__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17703),null);
}
} else
{var medicine = cljs.core.first.call(null,s__17701__$2);return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"gtin","gtin",-1651547591).cljs$core$IFn$_invoke$arity$1(medicine)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(cljs.core.truth_(new cljs.core.Keyword(null,"approved","approved",-803187124).cljs$core$IFn$_invoke$arity$1(medicine))?"approved":"not approved")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(medicine)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"producer-name","producer-name",-1458815353).cljs$core$IFn$_invoke$arity$1(medicine)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(medicine)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"wrapping","wrapping",-1252305316).cljs$core$IFn$_invoke$arity$1(medicine)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"dose","dose",-1241257813).cljs$core$IFn$_invoke$arity$1(medicine)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("medicines","show","medicines/show",1524988954),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(medicine))], null),"Show"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("medicines","edit","medicines/edit",500893153),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(medicine))], null),"Edit"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),medisoft.frontend.ui.utils.key_for.call(null,medicine)], null)),iter__17700.call(null,cljs.core.rest.call(null,s__17701__$2)));
}
} else
{return null;
}
break;
}
});})(medicines))
,null,null));
});})(medicines))
;return iter__4346__auto__.call(null,cljs.core.deref.call(null,medicines));
})())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No medicines to display."], null))], null);
});
;})(medicines))
});
medisoft.frontend.ui.medicines.medicine_show_component = (function medicine_show_component(){var medicine_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,medisoft.frontend.logic.current_params));var medicine = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);medisoft.frontend.api.get_medicine.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),medicine_id], null),((function (medicine_id,medicine){
return (function (result){try{if((cljs.core.vector_QMARK_.call(null,result)) && ((cljs.core.count.call(null,result) === 2)))
{try{var result_0__17712 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17712,new cljs.core.Keyword(null,"success","success",1890645906)))
{var response = cljs.core.nth.call(null,result,(1));cljs.core.reset_BANG_.call(null,medicine,response);
return medisoft.frontend.log.debug.call(null,"received response",response);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17715){if((e17715 instanceof Error))
{var e__12219__auto__ = e17715;if((e__12219__auto__ === cljs.core.match.backtrack))
{try{var result_0__17712 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17712,new cljs.core.Keyword(null,"error","error",-978969032)))
{var response = cljs.core.nth.call(null,result,(1));return medisoft.frontend.log.debug.call(null,"received response",response);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17716){if((e17716 instanceof Error))
{var e__12219__auto____$1 = e17716;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17716;

}
}} else
{throw e__12219__auto__;
}
} else
{throw e17715;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17714){if((e17714 instanceof Error))
{var e__12219__auto__ = e17714;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result))));
} else
{throw e__12219__auto__;
}
} else
{throw e17714;

}
}});})(medicine_id,medicine))
);
return ((function (medicine_id,medicine){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clearfix","div.clearfix",1775605822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pull-right","div.pull-right",-588908187),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),(function (){var temp__4421__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,medicine));if(cljs.core.truth_(temp__4421__auto__))
{var medicine_id__$1 = temp__4421__auto__;return medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("medicines","edit","medicines/edit",500893153),new cljs.core.Keyword(null,"id","id",-1388402092),medicine_id__$1);
} else
{return null;
}
})()], null),"Edit medicine"], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,medicine))," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"gtin","gtin",-1651547591).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,medicine))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-3","div.col-lg-3",-657060001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Is Approved"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"approved","approved",-803187124).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,medicine)))?"approved":"not approved")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-3","div.col-lg-3",-657060001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Producer"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.Keyword(null,"producer-name","producer-name",-1458815353).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,medicine))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-3","div.col-lg-3",-657060001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Type"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,medicine))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-3","div.col-lg-3",-657060001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Wrapping"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.Keyword(null,"wrapping","wrapping",-1252305316).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,medicine))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-3","div.col-lg-3",-657060001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Dose"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.Keyword(null,"dose","dose",-1241257813).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,medicine))], null)], null)], null)], null);
});
;})(medicine_id,medicine))
});
medisoft.frontend.ui.medicines.medicine_form_fields_component = (function medicine_form_fields_component(medicine,errors,p__17718){var map__17720 = p__17718;var map__17720__$1 = ((cljs.core.seq_QMARK_.call(null,map__17720))?cljs.core.apply.call(null,cljs.core.hash_map,map__17720):map__17720);var opts = map__17720__$1;var on_submit = cljs.core.get.call(null,map__17720__$1,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159));var submit_button_text = cljs.core.get.call(null,map__17720__$1,new cljs.core.Keyword(null,"submit-button-text","submit-button-text",-178661227));var form_input = medisoft.frontend.ui.utils.make_form_field_maker.call(null,medicine,errors);return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-5","div.col-lg-5",-285124876),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_input,new cljs.core.Keyword(null,"name","name",1843675177)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4","div.col-lg-4",-519713955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_input,new cljs.core.Keyword(null,"gtin","gtin",-1651547591)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-2","div.col-lg-2",664351046),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_input,new cljs.core.Keyword(null,"approved","approved",-803187124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-9","div.col-lg-9",2134627069),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_input,new cljs.core.Keyword(null,"producer-name","producer-name",-1458815353)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-3","div.col-lg-3",-657060001),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_input,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (form_input,map__17720,map__17720__$1,opts,on_submit,submit_button_text){
return (function (p1__17717_SHARP_){return cljs.core.swap_BANG_.call(null,medicine,cljs.core.assoc,new cljs.core.Keyword(null,"type","type",1174270348),p1__17717_SHARP_);
});})(form_input,map__17720,map__17720__$1,opts,on_submit,submit_button_text))
,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"ZAWIESINA",new cljs.core.Keyword(null,"label","label",1718410804),"ZAWIESINA"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"INJ.",new cljs.core.Keyword(null,"label","label",1718410804),"INJ."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"ZIO\u0141A",new cljs.core.Keyword(null,"label","label",1718410804),"ZIO\u0141A"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-3","div.col-lg-3",-657060001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_input,new cljs.core.Keyword(null,"wrapping","wrapping",-1252305316)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-3","div.col-lg-3",-657060001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_input,new cljs.core.Keyword(null,"dose","dose",-1241257813)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-success","a.btn.btn-success",-1694151738),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_submit], null),submit_button_text], null)], null);
});
medisoft.frontend.ui.medicines.empty_medicine = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"approved","approved",-803187124),false,new cljs.core.Keyword(null,"dose","dose",-1241257813),"",new cljs.core.Keyword(null,"gtin","gtin",-1651547591),"",new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"producer-name","producer-name",-1458815353),"",new cljs.core.Keyword(null,"type","type",1174270348),"",new cljs.core.Keyword(null,"wrapping","wrapping",-1252305316),""], null);
medisoft.frontend.ui.medicines.medicine_create_form_component = (function medicine_create_form_component(){var medicine = reagent.core.atom.call(null,medisoft.frontend.ui.medicines.empty_medicine);var errors = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var on_submit = ((function (medicine,errors){
return (function (e){medisoft.frontend.api.create_medicine.call(null,cljs.core.deref.call(null,medicine),((function (medicine,errors){
return (function (result){try{if((cljs.core.vector_QMARK_.call(null,result)) && ((cljs.core.count.call(null,result) === 2)))
{try{var result_0__17745 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17745,new cljs.core.Keyword(null,"success","success",1890645906)))
{try{var result_1__17746 = cljs.core.nth.call(null,result,(1));if((function (){var G__17765 = result_1__17746;if(G__17765)
{var bit__4271__auto__ = (G__17765.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17765.cljs$core$ILookup$))
{return true;
} else
{if((!G__17765.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17765);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17765);
}
})())
{try{var result_1__17746_id__17749 = cljs.core.get.call(null,result_1__17746,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if(cljs.core.not_EQ_.call(null,result_1__17746_id__17749,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780)))
{var response = cljs.core.nth.call(null,result,(1));var id = cljs.core.get.call(null,result_1__17746,new cljs.core.Keyword(null,"id","id",-1388402092));medisoft.frontend.log.debug.call(null,"received response",response);
return medisoft.frontend.history.navigate_to_BANG_.call(null,medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("medicines","show","medicines/show",1524988954),new cljs.core.Keyword(null,"id","id",-1388402092),id));
} else
{throw cljs.core.match.backtrack;

}
}catch (e17766){if((e17766 instanceof Error))
{var e__12219__auto__ = e17766;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto__;
}
} else
{throw e17766;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17764){if((e17764 instanceof Error))
{var e__12219__auto__ = e17764;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto__;
}
} else
{throw e17764;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17757){if((e17757 instanceof Error))
{var e__12219__auto__ = e17757;if((e__12219__auto__ === cljs.core.match.backtrack))
{try{var result_0__17745 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17745,new cljs.core.Keyword(null,"error","error",-978969032)))
{try{var result_1__17746 = cljs.core.nth.call(null,result,(1));if((function (){var G__17760 = result_1__17746;if(G__17760)
{var bit__4271__auto__ = (G__17760.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17760.cljs$core$ILookup$))
{return true;
} else
{if((!G__17760.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17760);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17760);
}
})())
{try{var result_1__17746_response__17752 = cljs.core.get.call(null,result_1__17746,new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if((function (){var G__17762 = result_1__17746_response__17752;if(G__17762)
{var bit__4271__auto__ = (G__17762.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17762.cljs$core$ILookup$))
{return true;
} else
{if((!G__17762.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17762);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17762);
}
})())
{try{var result_1__17746_response__17752_errors__17755 = cljs.core.get.call(null,result_1__17746_response__17752,new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if(cljs.core.not_EQ_.call(null,result_1__17746_response__17752_errors__17755,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780)))
{var response = cljs.core.get.call(null,result_1__17746,new cljs.core.Keyword(null,"response","response",-1068424192));var errors_SINGLEQUOTE_ = cljs.core.get.call(null,result_1__17746_response__17752,new cljs.core.Keyword(null,"errors","errors",-908790718));medisoft.frontend.log.error.call(null,"received response",response);
return cljs.core.reset_BANG_.call(null,errors,errors_SINGLEQUOTE_);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17763){if((e17763 instanceof Error))
{var e__12219__auto____$1 = e17763;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17763;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17761){if((e17761 instanceof Error))
{var e__12219__auto____$1 = e17761;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17761;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17759){if((e17759 instanceof Error))
{var e__12219__auto____$1 = e17759;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17759;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17758){if((e17758 instanceof Error))
{var e__12219__auto____$1 = e17758;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17758;

}
}} else
{throw e__12219__auto__;
}
} else
{throw e17757;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17756){if((e17756 instanceof Error))
{var e__12219__auto__ = e17756;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result))));
} else
{throw e__12219__auto__;
}
} else
{throw e17756;

}
}});})(medicine,errors))
);
return e.preventDefault();
});})(medicine,errors))
;return ((function (medicine,errors,on_submit){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"patient create form",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.medicines.medicine_form_fields_component,medicine,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),on_submit,new cljs.core.Keyword(null,"submit-button-text","submit-button-text",-178661227),"Create"], null)], null)], null);
});
;})(medicine,errors,on_submit))
});
medisoft.frontend.ui.medicines.medicine_edit_form_component = (function medicine_edit_form_component(){var medicine_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,medisoft.frontend.logic.current_params));var medicine = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var errors = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var on_submit = ((function (medicine_id,medicine,errors){
return (function (e){medisoft.frontend.api.update_medicine.call(null,cljs.core.deref.call(null,medicine),((function (medicine_id,medicine,errors){
return (function (result){try{if((cljs.core.vector_QMARK_.call(null,result)) && ((cljs.core.count.call(null,result) === 2)))
{try{var result_0__17814 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17814,new cljs.core.Keyword(null,"success","success",1890645906)))
{try{var result_1__17815 = cljs.core.nth.call(null,result,(1));if((function (){var G__17834 = result_1__17815;if(G__17834)
{var bit__4271__auto__ = (G__17834.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17834.cljs$core$ILookup$))
{return true;
} else
{if((!G__17834.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17834);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17834);
}
})())
{try{var result_1__17815_id__17818 = cljs.core.get.call(null,result_1__17815,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if(cljs.core.not_EQ_.call(null,result_1__17815_id__17818,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780)))
{var response = cljs.core.nth.call(null,result,(1));var id = cljs.core.get.call(null,result_1__17815,new cljs.core.Keyword(null,"id","id",-1388402092));medisoft.frontend.log.debug.call(null,"received response",response);
return medisoft.frontend.history.navigate_to_BANG_.call(null,medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("medicines","show","medicines/show",1524988954),new cljs.core.Keyword(null,"id","id",-1388402092),id));
} else
{throw cljs.core.match.backtrack;

}
}catch (e17835){if((e17835 instanceof Error))
{var e__12219__auto__ = e17835;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto__;
}
} else
{throw e17835;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17833){if((e17833 instanceof Error))
{var e__12219__auto__ = e17833;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto__;
}
} else
{throw e17833;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17826){if((e17826 instanceof Error))
{var e__12219__auto__ = e17826;if((e__12219__auto__ === cljs.core.match.backtrack))
{try{var result_0__17814 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17814,new cljs.core.Keyword(null,"error","error",-978969032)))
{try{var result_1__17815 = cljs.core.nth.call(null,result,(1));if((function (){var G__17829 = result_1__17815;if(G__17829)
{var bit__4271__auto__ = (G__17829.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17829.cljs$core$ILookup$))
{return true;
} else
{if((!G__17829.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17829);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17829);
}
})())
{try{var result_1__17815_response__17821 = cljs.core.get.call(null,result_1__17815,new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if((function (){var G__17831 = result_1__17815_response__17821;if(G__17831)
{var bit__4271__auto__ = (G__17831.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17831.cljs$core$ILookup$))
{return true;
} else
{if((!G__17831.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17831);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17831);
}
})())
{try{var result_1__17815_response__17821_errors__17824 = cljs.core.get.call(null,result_1__17815_response__17821,new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if(cljs.core.not_EQ_.call(null,result_1__17815_response__17821_errors__17824,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780)))
{var response = cljs.core.get.call(null,result_1__17815,new cljs.core.Keyword(null,"response","response",-1068424192));var errors_SINGLEQUOTE_ = cljs.core.get.call(null,result_1__17815_response__17821,new cljs.core.Keyword(null,"errors","errors",-908790718));medisoft.frontend.log.error.call(null,"received response",response);
return cljs.core.reset_BANG_.call(null,errors,errors_SINGLEQUOTE_);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17832){if((e17832 instanceof Error))
{var e__12219__auto____$1 = e17832;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17832;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17830){if((e17830 instanceof Error))
{var e__12219__auto____$1 = e17830;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17830;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17828){if((e17828 instanceof Error))
{var e__12219__auto____$1 = e17828;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17828;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17827){if((e17827 instanceof Error))
{var e__12219__auto____$1 = e17827;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17827;

}
}} else
{throw e__12219__auto__;
}
} else
{throw e17826;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17825){if((e17825 instanceof Error))
{var e__12219__auto__ = e17825;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result))));
} else
{throw e__12219__auto__;
}
} else
{throw e17825;

}
}});})(medicine_id,medicine,errors))
);
return e.preventDefault();
});})(medicine_id,medicine,errors))
;medisoft.frontend.api.get_medicine.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),medicine_id], null),((function (medicine_id,medicine,errors,on_submit){
return (function (result){try{if((cljs.core.vector_QMARK_.call(null,result)) && ((cljs.core.count.call(null,result) === 2)))
{try{var result_0__17837 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17837,new cljs.core.Keyword(null,"success","success",1890645906)))
{try{var result_1__17838 = cljs.core.nth.call(null,result,(1));if((function (){var G__17857 = result_1__17838;if(G__17857)
{var bit__4271__auto__ = (G__17857.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17857.cljs$core$ILookup$))
{return true;
} else
{if((!G__17857.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17857);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17857);
}
})())
{try{var result_1__17838_id__17841 = cljs.core.get.call(null,result_1__17838,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if(cljs.core.not_EQ_.call(null,result_1__17838_id__17841,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780)))
{var response = cljs.core.nth.call(null,result,(1));var id = cljs.core.get.call(null,result_1__17838,new cljs.core.Keyword(null,"id","id",-1388402092));medisoft.frontend.log.debug.call(null,"received response",response);
return cljs.core.reset_BANG_.call(null,medicine,cljs.core.dissoc.call(null,response,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"medical-visits","medical-visits",464178785),new cljs.core.Keyword(null,"prescription","prescription",1561873972)));
} else
{throw cljs.core.match.backtrack;

}
}catch (e17858){if((e17858 instanceof Error))
{var e__12219__auto__ = e17858;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto__;
}
} else
{throw e17858;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17856){if((e17856 instanceof Error))
{var e__12219__auto__ = e17856;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto__;
}
} else
{throw e17856;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17849){if((e17849 instanceof Error))
{var e__12219__auto__ = e17849;if((e__12219__auto__ === cljs.core.match.backtrack))
{try{var result_0__17837 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17837,new cljs.core.Keyword(null,"error","error",-978969032)))
{try{var result_1__17838 = cljs.core.nth.call(null,result,(1));if((function (){var G__17852 = result_1__17838;if(G__17852)
{var bit__4271__auto__ = (G__17852.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17852.cljs$core$ILookup$))
{return true;
} else
{if((!G__17852.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17852);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17852);
}
})())
{try{var result_1__17838_response__17844 = cljs.core.get.call(null,result_1__17838,new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if((function (){var G__17854 = result_1__17838_response__17844;if(G__17854)
{var bit__4271__auto__ = (G__17854.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17854.cljs$core$ILookup$))
{return true;
} else
{if((!G__17854.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17854);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17854);
}
})())
{try{var result_1__17838_response__17844_errors__17847 = cljs.core.get.call(null,result_1__17838_response__17844,new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if(cljs.core.not_EQ_.call(null,result_1__17838_response__17844_errors__17847,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780)))
{var response = cljs.core.get.call(null,result_1__17838,new cljs.core.Keyword(null,"response","response",-1068424192));var errors_SINGLEQUOTE_ = cljs.core.get.call(null,result_1__17838_response__17844,new cljs.core.Keyword(null,"errors","errors",-908790718));return medisoft.frontend.log.error.call(null,"received response",response);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17855){if((e17855 instanceof Error))
{var e__12219__auto____$1 = e17855;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17855;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17853){if((e17853 instanceof Error))
{var e__12219__auto____$1 = e17853;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17853;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17851){if((e17851 instanceof Error))
{var e__12219__auto____$1 = e17851;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17851;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17850){if((e17850 instanceof Error))
{var e__12219__auto____$1 = e17850;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17850;

}
}} else
{throw e__12219__auto__;
}
} else
{throw e17849;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17848){if((e17848 instanceof Error))
{var e__12219__auto__ = e17848;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result))));
} else
{throw e__12219__auto__;
}
} else
{throw e17848;

}
}});})(medicine_id,medicine,errors,on_submit))
);
return ((function (medicine_id,medicine,errors,on_submit){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"patient edit form",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.medicines.medicine_form_fields_component,medicine,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),on_submit,new cljs.core.Keyword(null,"submit-button-text","submit-button-text",-178661227),"Edit"], null)], null)], null);
});
;})(medicine_id,medicine,errors,on_submit))
});

//# sourceMappingURL=medicines.js.map