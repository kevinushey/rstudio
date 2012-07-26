/*
 * dcf_highlight_rules.js
 *
 * Copyright (C) 2009-12 by RStudio, Inc.
 *
 * This program is licensed to you under the terms of version 3 of the
 * GNU Affero General Public License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * AGPL (http://www.gnu.org/licenses/agpl-3.0.txt) for more details.
 *
 */
define("mode/dcf_highlight_rules", function(require, exports, module) {

var oop = require("ace/lib/oop");
var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;

var DcfHighlightRules = function() {

    // regexp must not have capturing parentheses
    // regexps are ordered -> the first match is used

    this.$rules = {
        
        "start" : [ {
            token : ["keyword", "text"],
            regex : "^" +"(\\w+)" + "(\\:)"
        }, {
            token : "text",
            regex : ".+"
        } ]
    };
};
oop.inherits(DcfHighlightRules, TextHighlightRules);

exports.DcfHighlightRules = DcfHighlightRules;
});