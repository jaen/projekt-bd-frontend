// Compiled by ClojureScript 0.0-2371
goog.provide('medisoft.frontend.ui.application');
goog.require('cljs.core');
goog.require('medisoft.frontend.logic');
goog.require('medisoft.frontend.ui.employees');
goog.require('reagent.core');
goog.require('medisoft.frontend.validations');
goog.require('medisoft.frontend.ui.dashboard');
goog.require('medisoft.frontend.log');
goog.require('re_com.core');
goog.require('medisoft.frontend.ui.medicines');
goog.require('medisoft.frontend.api');
goog.require('medisoft.frontend.logic');
goog.require('medisoft.frontend.ui.utils');
goog.require('medisoft.frontend.ui.medicines');
goog.require('medisoft.frontend.ui.utils');
goog.require('re_com.core');
goog.require('reagent.core');
goog.require('medisoft.frontend.ui.job_titles');
goog.require('medisoft.frontend.routes');
goog.require('medisoft.frontend.api');
goog.require('medisoft.frontend.ui.patients');
goog.require('medisoft.frontend.ui.dashboard');
goog.require('medisoft.frontend.ui.patients');
goog.require('medisoft.frontend.ui.employees');
goog.require('medisoft.frontend.ui.job_titles');
goog.require('cuerdas.core');
goog.require('medisoft.frontend.validations');
goog.require('cljs.core.match');
goog.require('medisoft.frontend.routes');
goog.require('cuerdas.core');
goog.require('medisoft.frontend.log');
if(typeof medisoft.frontend.ui.application.show_login_dialog_QMARK_ !== 'undefined')
{} else
{medisoft.frontend.ui.application.show_login_dialog_QMARK_ = reagent.core.atom.call(null,false);
}
medisoft.frontend.ui.application.dropdown_menu_component = (function dropdown_menu_component(){var dropdown_open_QMARK_ = reagent.core.atom.call(null,false);var component_blur_closer = cljs.core.atom.call(null,null);return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"dropdown-menu",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (dropdown_open_QMARK_,component_blur_closer){
return (function (component){return document.addEventListener("click",cljs.core.reset_BANG_.call(null,component_blur_closer,medisoft.frontend.ui.utils.make_component_blur_notifier.call(null,reagent.core.dom_node.call(null,component),((function (dropdown_open_QMARK_,component_blur_closer){
return (function (){return cljs.core.reset_BANG_.call(null,dropdown_open_QMARK_,false);
});})(dropdown_open_QMARK_,component_blur_closer))
)));
});})(dropdown_open_QMARK_,component_blur_closer))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (dropdown_open_QMARK_,component_blur_closer){
return (function (_){return document.removeEventListener("click",cljs.core.deref.call(null,component_blur_closer));
});})(dropdown_open_QMARK_,component_blur_closer))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (dropdown_open_QMARK_,component_blur_closer){
return (function (){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.dropdown","li.dropdown",234951810),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref.call(null,dropdown_open_QMARK_))?"open":null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.dropdown-toggle","a.dropdown-toggle",-264466802),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (dropdown_open_QMARK_,component_blur_closer){
return (function (e){cljs.core.swap_BANG_.call(null,dropdown_open_QMARK_,cljs.core.not);
return e.preventDefault();
});})(dropdown_open_QMARK_,component_blur_closer))
], null),"Menu",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.caret","span.caret",-1405994877)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.dropdown-menu","ul.dropdown-menu",-867384656),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (dropdown_open_QMARK_,component_blur_closer){
return (function (e){medisoft.frontend.api.set_api_token_BANG_.call(null,null);
return e.preventDefault();
});})(dropdown_open_QMARK_,component_blur_closer))
], null),"Log out"], null)], null)], null)], null);
});})(dropdown_open_QMARK_,component_blur_closer))
], null));
});
medisoft.frontend.ui.application.user_component = (function user_component(){if(cljs.core.truth_(cljs.core.deref.call(null,medisoft.frontend.api.logged_in_QMARK_)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav.navbar-right","ul.nav.navbar-nav.navbar-right",1710300738),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.navbar-text","li.navbar-text",879072919),"Logged in"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.application.dropdown_menu_component], null)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-info.navbar-btn.navbar-right","a.btn.btn-info.navbar-btn.navbar-right",-2111746290),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){cljs.core.reset_BANG_.call(null,medisoft.frontend.ui.application.show_login_dialog_QMARK_,true);
return e.preventDefault();
})], null),"Log in"], null);
}
});
medisoft.frontend.ui.application.header_component = (function header_component(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar.navbar-inverse.navbar-fixed-top","nav.navbar.navbar-inverse.navbar-fixed-top",1741778939),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbard-header","div.navbard-header",-1981170131),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",691442118),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("home","dashboard","home/dashboard",-620150739))], null),"MediApp"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-collapse.collapse","div.navbar-collapse.collapse",-1723910318),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.application.user_component], null),(cljs.core.truth_(cljs.core.deref.call(null,medisoft.frontend.api.logged_in_QMARK_))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav.navbar-right","ul.nav.navbar-nav.navbar-right",1710300738),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("job-titles","list","job-titles/list",-638634234))], null),"Job Titles"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("employees","list","employees/list",-2006949664))], null),"Employees"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("patients","list","patients/list",-453576607))], null),"Patients"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),medisoft.frontend.routes.app_path_for.call(null,new cljs.core.Keyword("medicines","list","medicines/list",-1495277844))], null),"Medicines"], null)], null)], null):null)], null)], null)], null);
});
medisoft.frontend.ui.application.main_component = (function main_component(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 0px",new cljs.core.Keyword(null,"padding","padding",1660304693),"70px 0px 20px 0px"], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,medisoft.frontend.api.logged_in_QMARK_))?(function (){var ocr_17065 = cljs.core.deref.call(null,medisoft.frontend.logic.current_page);try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_17065,new cljs.core.Keyword("home","dashboard","home/dashboard",-620150739)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.dashboard.dashboard_component], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17067){if((e17067 instanceof Error))
{var e__12219__auto__ = e17067;if((e__12219__auto__ === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_17065,new cljs.core.Keyword("job-titles","list","job-titles/list",-638634234)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.job_titles.job_title_list_component], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17068){if((e17068 instanceof Error))
{var e__12219__auto____$1 = e17068;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_17065,new cljs.core.Keyword("job-titles","show","job-titles/show",-1982872596)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.job_titles.job_title_show_component], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17069){if((e17069 instanceof Error))
{var e__12219__auto____$2 = e17069;if((e__12219__auto____$2 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_17065,new cljs.core.Keyword("job-titles","create","job-titles/create",1203657629)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.job_titles.job_title_create_form_component], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17070){if((e17070 instanceof Error))
{var e__12219__auto____$3 = e17070;if((e__12219__auto____$3 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_17065,new cljs.core.Keyword("job-titles","edit","job-titles/edit",-355152225)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.job_titles.job_title_edit_form_component], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17071){if((e17071 instanceof Error))
{var e__12219__auto____$4 = e17071;if((e__12219__auto____$4 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_17065,new cljs.core.Keyword("employees","list","employees/list",-2006949664)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.employees.employee_list_component], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17072){if((e17072 instanceof Error))
{var e__12219__auto____$5 = e17072;if((e__12219__auto____$5 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_17065,new cljs.core.Keyword("employees","show","employees/show",-127534506)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.employees.employee_show_component], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17073){if((e17073 instanceof Error))
{var e__12219__auto____$6 = e17073;if((e__12219__auto____$6 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_17065,new cljs.core.Keyword("employees","create","employees/create",-1749638653)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.employees.employee_create_form_component], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17074){if((e17074 instanceof Error))
{var e__12219__auto____$7 = e17074;if((e__12219__auto____$7 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_17065,new cljs.core.Keyword("employees","edit","employees/edit",995723221)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.employees.employee_edit_form_component], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17075){if((e17075 instanceof Error))
{var e__12219__auto____$8 = e17075;if((e__12219__auto____$8 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_17065,new cljs.core.Keyword("patients","list","patients/list",-453576607)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.patients.patient_list_component], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17076){if((e17076 instanceof Error))
{var e__12219__auto____$9 = e17076;if((e__12219__auto____$9 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_17065,new cljs.core.Keyword("patients","show","patients/show",-1798797107)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.patients.patient_show_component], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17077){if((e17077 instanceof Error))
{var e__12219__auto____$10 = e17077;if((e__12219__auto____$10 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_17065,new cljs.core.Keyword("patients","create","patients/create",1288118394)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.patients.patient_create_form_component], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17078){if((e17078 instanceof Error))
{var e__12219__auto____$11 = e17078;if((e__12219__auto____$11 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_17065,new cljs.core.Keyword("patients","edit","patients/edit",-406191300)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.patients.patient_edit_form_component], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17079){if((e17079 instanceof Error))
{var e__12219__auto____$12 = e17079;if((e__12219__auto____$12 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_17065,new cljs.core.Keyword("medicines","list","medicines/list",-1495277844)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.medicines.medicine_list_component], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17080){if((e17080 instanceof Error))
{var e__12219__auto____$13 = e17080;if((e__12219__auto____$13 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_17065,new cljs.core.Keyword("medicines","show","medicines/show",1524988954)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.medicines.medicine_show_component], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17081){if((e17081 instanceof Error))
{var e__12219__auto____$14 = e17081;if((e__12219__auto____$14 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_17065,new cljs.core.Keyword("medicines","create","medicines/create",858792975)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.medicines.medicine_create_form_component], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17082){if((e17082 instanceof Error))
{var e__12219__auto____$15 = e17082;if((e__12219__auto____$15 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_17065,new cljs.core.Keyword("medicines","edit","medicines/edit",500893153)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.medicines.medicine_edit_form_component], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17083){if((e17083 instanceof Error))
{var e__12219__auto____$16 = e17083;if((e__12219__auto____$16 === cljs.core.match.backtrack))
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_17065))));
} else
{throw e__12219__auto____$16;
}
} else
{throw e17083;

}
}} else
{throw e__12219__auto____$15;
}
} else
{throw e17082;

}
}} else
{throw e__12219__auto____$14;
}
} else
{throw e17081;

}
}} else
{throw e__12219__auto____$13;
}
} else
{throw e17080;

}
}} else
{throw e__12219__auto____$12;
}
} else
{throw e17079;

}
}} else
{throw e__12219__auto____$11;
}
} else
{throw e17078;

}
}} else
{throw e__12219__auto____$10;
}
} else
{throw e17077;

}
}} else
{throw e__12219__auto____$9;
}
} else
{throw e17076;

}
}} else
{throw e__12219__auto____$8;
}
} else
{throw e17075;

}
}} else
{throw e__12219__auto____$7;
}
} else
{throw e17074;

}
}} else
{throw e__12219__auto____$6;
}
} else
{throw e17073;

}
}} else
{throw e__12219__auto____$5;
}
} else
{throw e17072;

}
}} else
{throw e__12219__auto____$4;
}
} else
{throw e17071;

}
}} else
{throw e__12219__auto____$3;
}
} else
{throw e17070;

}
}} else
{throw e__12219__auto____$2;
}
} else
{throw e17069;

}
}} else
{throw e__12219__auto____$1;
}
} else
{throw e17068;

}
}} else
{throw e__12219__auto__;
}
} else
{throw e17067;

}
}})():new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.dashboard.dashboard_component], null))], null);
});
medisoft.frontend.ui.application.footer_component = (function footer_component(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-muted","p.text-muted",1410245564),"Footer"], null)], null)], null);
});
/**
* @param {...*} var_args
*/
medisoft.frontend.ui.application.login_fields_component = (function() { 
var login_fields_component__delegate = function (form_data,p__17084){var vec__17087 = p__17084;var map__17088 = cljs.core.nth.call(null,vec__17087,(0),null);var map__17088__$1 = ((cljs.core.seq_QMARK_.call(null,map__17088))?cljs.core.apply.call(null,cljs.core.hash_map,map__17088):map__17088);var options = map__17088__$1;var errors = cljs.core.get.call(null,map__17088__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));medisoft.frontend.log.debug.call(null,"options:",options);
var form_input = medisoft.frontend.ui.utils.make_form_field_maker.call(null,form_data,errors);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Please log in"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_input,new cljs.core.Keyword(null,"login","login",55217519)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_input,new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"password","password",417022471)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 15px"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"actions",new cljs.core.Keyword(null,"gap","gap",80255254),"12px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Log in",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-submit","on-submit",1227871159).cljs$core$IFn$_invoke$arity$1(options)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Cancel",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-danger",new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932).cljs$core$IFn$_invoke$arity$1(options)], null)], null)], null)], null)], null);
};
var login_fields_component = function (form_data,var_args){
var p__17084 = null;if (arguments.length > 1) {
  p__17084 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return login_fields_component__delegate.call(this,form_data,p__17084);};
login_fields_component.cljs$lang$maxFixedArity = 1;
login_fields_component.cljs$lang$applyTo = (function (arglist__17089){
var form_data = cljs.core.first(arglist__17089);
var p__17084 = cljs.core.rest(arglist__17089);
return login_fields_component__delegate(form_data,p__17084);
});
login_fields_component.cljs$core$IFn$_invoke$arity$variadic = login_fields_component__delegate;
return login_fields_component;
})()
;
medisoft.frontend.ui.application.login_component = (function login_component(){var form_data = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"login","login",55217519),"",new cljs.core.Keyword(null,"password","password",417022471),""], null));var form_errors = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var form_processing_QMARK_ = reagent.core.atom.call(null,false);var on_cancel = ((function (form_data,form_errors,form_processing_QMARK_){
return (function (){return cljs.core.reset_BANG_.call(null,medisoft.frontend.ui.application.show_login_dialog_QMARK_,false);
});})(form_data,form_errors,form_processing_QMARK_))
;var on_submit = ((function (form_data,form_errors,form_processing_QMARK_,on_cancel){
return (function (){var validation_errors = medisoft.frontend.validations.login_form.call(null,cljs.core.deref.call(null,form_data));cljs.core.reset_BANG_.call(null,form_errors,validation_errors);
if(cljs.core.truth_(validation_errors))
{return null;
} else
{cljs.core.reset_BANG_.call(null,form_processing_QMARK_,true);
return medisoft.frontend.api.validate_log_in.call(null,cljs.core.deref.call(null,form_data),((function (validation_errors,form_data,form_errors,form_processing_QMARK_,on_cancel){
return (function (result){try{if((cljs.core.vector_QMARK_.call(null,result)) && ((cljs.core.count.call(null,result) === 2)))
{try{var result_0__17117 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17117,new cljs.core.Keyword(null,"success","success",1890645906)))
{return medisoft.frontend.api.log_in.call(null,cljs.core.deref.call(null,form_data),((function (result_0__17117,validation_errors,form_data,form_errors,form_processing_QMARK_,on_cancel){
return (function (result_SINGLEQUOTE_){try{if((cljs.core.vector_QMARK_.call(null,result_SINGLEQUOTE_)) && ((cljs.core.count.call(null,result_SINGLEQUOTE_) === 2)))
{try{var result_SINGLEQUOTE__0__17129 = cljs.core.nth.call(null,result_SINGLEQUOTE_,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_SINGLEQUOTE__0__17129,new cljs.core.Keyword(null,"success","success",1890645906)))
{var response_SINGLEQUOTE_ = cljs.core.nth.call(null,result_SINGLEQUOTE_,(1));cljs.core.reset_BANG_.call(null,form_processing_QMARK_,false);
cljs.core.reset_BANG_.call(null,medisoft.frontend.ui.application.show_login_dialog_QMARK_,false);
return medisoft.frontend.api.set_api_token_BANG_.call(null,new cljs.core.Keyword(null,"access-token","access-token",-654201199).cljs$core$IFn$_invoke$arity$1(response_SINGLEQUOTE_));
} else
{throw cljs.core.match.backtrack;

}
}catch (e17135){if((e17135 instanceof Error))
{var e__12219__auto__ = e17135;if((e__12219__auto__ === cljs.core.match.backtrack))
{try{var result_SINGLEQUOTE__0__17129 = cljs.core.nth.call(null,result_SINGLEQUOTE_,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_SINGLEQUOTE__0__17129,new cljs.core.Keyword(null,"error","error",-978969032)))
{try{var result_SINGLEQUOTE__1__17130 = cljs.core.nth.call(null,result_SINGLEQUOTE_,(1));if((function (){var G__17138 = result_SINGLEQUOTE__1__17130;if(G__17138)
{var bit__4271__auto__ = (G__17138.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17138.cljs$core$ILookup$))
{return true;
} else
{if((!G__17138.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17138);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17138);
}
})())
{try{var result_SINGLEQUOTE__1__17130_errors__17133 = cljs.core.get.call(null,result_SINGLEQUOTE__1__17130,new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if(cljs.core.not_EQ_.call(null,result_SINGLEQUOTE__1__17130_errors__17133,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780)))
{var errors_SINGLEQUOTE_ = cljs.core.get.call(null,result_SINGLEQUOTE__1__17130,new cljs.core.Keyword(null,"errors","errors",-908790718));cljs.core.reset_BANG_.call(null,form_errors,errors_SINGLEQUOTE_);
return cljs.core.reset_BANG_.call(null,form_processing_QMARK_,false);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17139){if((e17139 instanceof Error))
{var e__12219__auto____$1 = e17139;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17139;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17137){if((e17137 instanceof Error))
{var e__12219__auto____$1 = e17137;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17137;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17136){if((e17136 instanceof Error))
{var e__12219__auto____$1 = e17136;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17136;

}
}} else
{throw e__12219__auto__;
}
} else
{throw e17135;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17134){if((e17134 instanceof Error))
{var e__12219__auto__ = e17134;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_SINGLEQUOTE_))));
} else
{throw e__12219__auto__;
}
} else
{throw e17134;

}
}});})(result_0__17117,validation_errors,form_data,form_errors,form_processing_QMARK_,on_cancel))
);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17123){if((e17123 instanceof Error))
{var e__12219__auto__ = e17123;if((e__12219__auto__ === cljs.core.match.backtrack))
{try{var result_0__17117 = cljs.core.nth.call(null,result,(0));if(cljs.core.keyword_identical_QMARK_.call(null,result_0__17117,new cljs.core.Keyword(null,"error","error",-978969032)))
{try{var result_1__17118 = cljs.core.nth.call(null,result,(1));if((function (){var G__17126 = result_1__17118;if(G__17126)
{var bit__4271__auto__ = (G__17126.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4271__auto__) || (G__17126.cljs$core$ILookup$))
{return true;
} else
{if((!G__17126.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17126);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__17126);
}
})())
{try{var result_1__17118_response__17121 = cljs.core.get.call(null,result_1__17118,new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if(cljs.core.not_EQ_.call(null,result_1__17118_response__17121,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780)))
{var errors = cljs.core.get.call(null,result_1__17118,new cljs.core.Keyword(null,"response","response",-1068424192));cljs.core.reset_BANG_.call(null,form_errors,clojure.set.rename_keys.call(null,errors,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"login","login",55217519)], null)));
return cljs.core.reset_BANG_.call(null,form_processing_QMARK_,false);
} else
{throw cljs.core.match.backtrack;

}
}catch (e17127){if((e17127 instanceof Error))
{var e__12219__auto____$1 = e17127;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17127;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17125){if((e17125 instanceof Error))
{var e__12219__auto____$1 = e17125;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17125;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17124){if((e17124 instanceof Error))
{var e__12219__auto____$1 = e17124;if((e__12219__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12219__auto____$1;
}
} else
{throw e17124;

}
}} else
{throw e__12219__auto__;
}
} else
{throw e17123;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e17122){if((e17122 instanceof Error))
{var e__12219__auto__ = e17122;if((e__12219__auto__ === cljs.core.match.backtrack))
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result))));
} else
{throw e__12219__auto__;
}
} else
{throw e17122;

}
}});})(validation_errors,form_data,form_errors,form_processing_QMARK_,on_cancel))
);
}
});})(form_data,form_errors,form_processing_QMARK_,on_cancel))
;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.utils.loading_component,form_processing_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.application.login_fields_component,form_data,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"errors","errors",-908790718),form_errors,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),on_cancel,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),on_submit], null)], null)], null);
});
medisoft.frontend.ui.application.dialogs_component = (function dialogs_component(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dialog-holder","div.dialog-holder",311791742),(cljs.core.truth_(cljs.core.deref.call(null,medisoft.frontend.ui.application.show_login_dialog_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.application.login_component], null)], null):null)], null);
});
medisoft.frontend.ui.application.application_component = (function application_component(){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"min-height","min-height",398480837),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.application.header_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.application.main_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.application.footer_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.application.dialogs_component], null)], null)], null);
});

//# sourceMappingURL=application.js.map