/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Mozilla Skywriter.
 *
 * The Initial Developer of the Original Code is
 * Mozilla.
 * Portions created by the Initial Developer are Copyright (C) 2009
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *   Joe Walker (jwalker@mozilla.com)
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

define(function(require, exports, module) {

exports.startup = function(data, reason) {
    var settings = data.env.settings;
    // TODO register these using new registration functionality
    
    // catalog.addExtensionPoint("command", {
    //     "description":
    //         "A command is a bit of functionality with optional typed arguments which can do something small like moving the cursor around the screen, or large like cloning a project from VCS.",
    //     "indexOn": "name"
    // });
    // catalog.addExtensionPoint("addedRequestOutput", {
    //     "description":
    //         "An extension point to be called whenever a new command begins output."
    // });
    // catalog.addExtensionPoint("dimensionsChanged", {
    //     "description":
    //         "A dimensionsChanged is a way to be notified of changes to the dimension of Skywriter"
    // });
    settings.addSetting({
        "name": "historyLength",
        "description": "How many typed commands do we recall for reference?",
        "type": "number",
        "defaultValue": 50
    });
};

exports.shutdown = function(data, reason) {
    var settings = data.env.settings;
    settings.removeSetting('historyLength');
};

exports.Canon = function() {
    this._commands = {};
};

exports.Canon.prototype = {
    addCommand: function(options) {
        if (!options.name) {
            throw new Error("All registered commands must have a name");
        }
        this._commands[name] = options;
    },
    
    removeCommand: function(name) {
        delete this._commands[name];
    }
};

});