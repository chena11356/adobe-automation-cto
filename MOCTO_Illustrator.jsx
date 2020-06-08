﻿/* ——————————————————————————————*                                                                                       *   NYC Mayor's Office of the CTO*   Community Profiles Illustrator Automation                *   by ALEX CHEN**   https://tech.cityofnewyork.us/**	See https://docs.google.com/document/d/12_EYPveaweZE6aqwaQqNR2sg6BRnNpny8E1LDotbV-M/edit?usp=sharing*   for Adobe Automation Guide** ——————————————————————————————*/ function exportFileToPNG(dest) {	if (app.documents.length > 0) {		var imageFile = new File(dest); 		var options = new ImageCaptureOptions(); 		options.antiAliasing = true; 		options.resolution = 300; 		options.transparency = true; 		app.activeDocument.imageCapture(imageFile, null, options);	}}function saveFile(dest) {	if (app.documents.length > 0) {		var f = new File(dest);  		app.activeDocument.saveAs(f);	}}// --- IMPORTANT --- MAKE SURE curDistrict IS SET CORRECTLY ------------------------var curDistrict = "51"; // --- IMPORTANT --- MAKE SURE curDistrict IS SET CORRECTLY ------------------------// First, use Actions to copy district into new layer and manually adjust it to make it look pretty// Then, run this script// Export state_senate_xx_base.pngexportFileToPNG("/Users/alexchen/Desktop/Broadband\ Community\ Profiles/ID_CP_CouncilDistricts_EV_v01/Links/CD_" + curDistrict + "_basic.png");// Then remove extra basemap if there is anyvar allLayers = app.activeDocument.layers;  try {	var extraBasemapLayer = allLayers.getByName("nyc basemap copy"); 	extraBasemapLayer.remove();}catch (err) { }// Make basemap invisiblevar basemapLayer = allLayers.getByName("nyc basemap"); basemapLayer.visible = false;// Then remove fill from districtvar topLayer = allLayers.getByName("Layer 9"); topLayer.locked = false;var obj_len = topLayer.pageItems.length; var obj; for (var i = 0; i < obj_len; i++) {	obj = topLayer.pageItems[i]; 	obj.filled = false;	}// Then make fiber map visiblevar fiberLayer = allLayers.getByName("FIBER"); fiberLayer.visible = true;// Then export SAD_xx_fiber.png exportFileToPNG("/Users/alexchen/Desktop/Broadband\ Community\ Profiles/ID_CP_CouncilDistricts_EV_v01/Links/CD_" + curDistrict + "_fiber.png");// Then hide fiber map fiberLayer.visible = false;// Then make home map visible var homeLayer = allLayers.getByName("HOME");homeLayer.visible = true;  // Then export SAD_xx_home.png exportFileToPNG("/Users/alexchen/Desktop/Broadband\ Community\ Profiles/ID_CP_CouncilDistricts_EV_v01/Links/CD_" + curDistrict + "_home.png");// Then hide home map homeLayer.visible = false; // Then make mobile map visible var mobileLayer = allLayers.getByName("MOBILE");mobileLayer.visible = true;  // Then export SAD_xx_mobile.png exportFileToPNG("/Users/alexchen/Desktop/Broadband\ Community\ Profiles/ID_CP_CouncilDistricts_EV_v01/Links/CD_" + curDistrict + "_mobile.png");// Then hide mobile map mobileLayer.visible = false; // Then delete the districttopLayer.remove(); // Then show the nyc basemap and district boundariesbasemapLayer.visible = true; var boundariesLayer = allLayers.getByName("Council District"); boundariesLayer.visible = true;