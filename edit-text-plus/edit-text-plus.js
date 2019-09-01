/*\
title: $:/plugins/abraham/edit-text-plus.js
type: application/javascript
module-type: widget

Enhanced-Edit-text widget

\*/

(function () {
    /*jslint node: true, browser: true */
    /*global $tw: false */
    "use strict";
    var editTextWidgetFactory = require("$:/plugins/abraham/modules/editor/factory.js").editTextWidgetFactory,
    FramedEngine = require("$:/core/modules/editor/engines/framed.js").FramedEngine,
    SimpleEngine = require("$:/plugins/abraham/editor/engines/simple.js").SimpleEngine;
    
    var EditTextWidget = editTextWidgetFactory(FramedEngine, SimpleEngine);

    exports["edit-text-plus"] = EditTextWidget;
})();