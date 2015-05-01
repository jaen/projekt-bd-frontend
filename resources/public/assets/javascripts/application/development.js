if(typeof goog == "undefined") document.write('<script src="/assets/javascripts/application/out/development/goog/base.js"></script>');
document.write('<script src="/assets/javascripts/application/out/development/cljs_deps.js"></script>');
document.write('<script>if (typeof goog != "undefined") { goog.require("medisoft.frontend.dev"); } else { console.warn("ClojureScript could not load :main, did you forget to specify :asset-path?"); };</script>');
