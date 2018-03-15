// 2014/01/08 에 서버 페이지가 변경됨

﻿function hideElement(id)
{
	var element = document.getElementById(id);

	if (element)
  		element.style.display='none';
}

function hideElementByClass(className)
{
  	var tags=document.getElementsByClassName(className);
  	
	for (var i = 0; i < tags.length; ++i) {
  		var element = tags[i];
  		element.style.display='none';
  	}		
}

function css(selector, property, value) {
    for (var i=0; i < document.styleSheets.length; ++i) {
        try { 
        	document.styleSheets[i].insertRule(selector+ ' {'+property+':'+value+'}', document.styleSheets[i].cssRules.length);
        } catch(err) {
        }
    }
}

hideElement('header-container');
hideElement('footer-container');
hideElement('menu-container');


css("body", "background-color", "rgba(255, 255, 255, 0.01)");
css("#listWrap.index h2 span", "background-color", "rgba(255, 255, 255, 0.01)");
//css("input", "background-color", "rgba(255, 255, 255, 0.01)");

window.setTimeout("agate.runScript('caller.showNow')", 500);

  