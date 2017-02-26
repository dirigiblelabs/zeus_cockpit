/* globals $ */
/* eslint-env node, dirigible */

var response = require('net/http/response');
var cockpitExtensions = require('zeus/cockpit/extension/cockpitExtensionUtils');

var sidebarItems = cockpitExtensions.getSidebarItems();

response.println(JSON.stringify(sidebarItems));
response.flush();
response.close();
