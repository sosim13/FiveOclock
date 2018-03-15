function hideElementById(id)
{
	var element = document.getElementById(id);
	if (element)
  		element.style.display='none';
}

function hideElementByTag(tag)
{
  	var tags=document.getElementsByTagName(tag);
  	
	for (i = 0; i < tags.length; ++i) {
  		var element = tags[i];
  		element.style.display='none';
  	}		
}

function hideElementByClass(className)
{
  	var tags=document.getElementsByClassName(className);
  	
	for (i = 0; i < tags.length; ++i) {
  		var element = tags[i];
  		element.style.display='none';
  	}		
}

hideElementById('ch');
hideElementById('header');
hideElementById('footerArea');
hideElementByClass('post_info');
hideElementByClass('post_ext5');
hideElementByClass('post_v');
hideElementByClass('post_ut');
hideElementByClass('app_v_btn');
hideElementByClass('ut_txt');
hideElementByClass('end_pg');
hideElementById('adPostArea');
hideElementByClass('re_num');
hideElementByTag('address');
  
//window.setTimeout("agate.runScript('caller.showNow')", 100);
  