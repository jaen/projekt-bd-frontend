// Compiled by ClojureScript 0.0-2371
goog.provide('medisoft.frontend.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('medisoft.frontend.ui.application');
goog.require('medisoft.frontend.log');
goog.require('medisoft.frontend.history');
goog.require('reagent.core');
goog.require('devtools.core');
goog.require('medisoft.frontend.history');
goog.require('medisoft.frontend.ui.application');
goog.require('devtools.core');
goog.require('medisoft.frontend.log');
medisoft.frontend.core.install_devtools_BANG_ = (function install_devtools_BANG_(){return devtools.core.install_BANG_.call(null);
});
medisoft.frontend.core.mount_root_BANG_ = (function mount_root_BANG_(){return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medisoft.frontend.ui.application.application_component], null),document.body);
});
if(typeof medisoft.frontend.core.old_handler !== 'undefined')
{} else
{medisoft.frontend.core.old_handler = cljs.core.atom.call(null,null);
}
medisoft.frontend.core.setup_error_handler_BANG_ = (function setup_error_handler_BANG_(){if(cljs.core.truth_(cljs.core.deref.call(null,medisoft.frontend.core.old_handler)))
{} else
{cljs.core.reset_BANG_.call(null,medisoft.frontend.core.old_handler,window.onerror);
}
var on_error_handler = (function (error_msg,url,line,column,error){medisoft.frontend.log.error.call(null,"Error: ",error_msg,"\n",url,":",line,":",column,"\n",error);
return false;
});return window.onerror = on_error_handler;
});
medisoft.frontend.core.init_BANG_ = (function init_BANG_(){medisoft.frontend.core.install_devtools_BANG_.call(null);
medisoft.frontend.core.setup_error_handler_BANG_.call(null);
medisoft.frontend.core.mount_root_BANG_.call(null);
return medisoft.frontend.history.setup_history_BANG_.call(null,document.body);
});

//# sourceMappingURL=core.js.map