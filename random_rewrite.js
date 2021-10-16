"use strict";

// Randomize output
String.prototype.random = function (length) {
	var tmp = "";
	for (var tick = 0; tick < length; tick ++) {
		tmp += this[Math.floor(Math.random() * this.length)];
	};
	return tmp;
};
let randomMap = "0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz_-~,.";

// Tag Editing
String.prototype.xmlTagEdit = function (tag, value) {
	let beforePoint = this.indexOf(`<${tag}>`);
	let before = this.slice(0, beforePoint + tag.length + 2);
	let after = this.slice(this.indexOf(`</${tag}>`));
	let result = before + value + after;
	return result;
};

// Company: docProps/app.xml, Own&Mod: docProps/core.xml
const appXmlPath = "./docProps/app.xml", coreXmlPath = "./docProps/core.xml";
let appXml = await Deno.readTextFile(appXmlPath);
let coreXml = await Deno.readTextFile(coreXmlPath);
// Easy editing app.xml
appXml = appXml.xmlTagEdit("Company", randomMap.random(Math.floor(Math.random() * 9 + 16))).xmlTagEdit("Template", randomMap.random(Math.floor(Math.random() * 25 + 8))).xmlTagEdit("Application", randomMap.random(Math.floor(Math.random() * 53 + 12)));
await Deno.writeTextFile(appXmlPath, appXml);
// Easy editing
coreXml = coreXml.xmlTagEdit("dc:creator", randomMap.random(Math.floor(Math.random() * 9 + 16))).xmlTagEdit("cp:lastModifiedBy", randomMap.random(Math.floor(Math.random() * 9 + 16)));
await Deno.writeTextFile(coreXmlPath, coreXml);
