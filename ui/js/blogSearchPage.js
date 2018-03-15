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

hideElementByTag('header');
hideElementByTag('footer');
hideElementByClass('u_sel3');
hideElementByClass('prvr_area');
hideElementByClass('dsctw');


function insertAdBefore(index, html)
{
	var sc = document.getElementsByClassName("sc");
	if (sc.length == 0)
		return;
	
	var uls = sc[0].getElementsByTagName("ul");
	if (uls.length == 0)
		return;

	var lis = uls[0].getElementsByTagName("li");
	
	if (lis.length < index)
		return;
		
	var element = lis[index];
	if (element) {
		var newNode = document.createElement("div");
	  	var parent = element.parentNode;
	  	newNode.innerHTML = html;
	  	parent.insertBefore(newNode, element);
	}
}

function getRandomAd()
{
	var ads = new Array();
	ads[0] = '<div style="border:solid 1px;border-color:#c0c0c0;"><table width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;" ><tr><td style="padding:0; margin:0;"><span style="font-size:10px; color:#ffffff;"><a href="javascript:agate.appLauncher.openUri(\'http://applusForm.com\', \'\')" ><img src="http://applusform.com/images/logo.png" align="left"/>네이티브 기반 앱 개발 템플릿 서비스<br/><br/><font color="#ff8080" style="font-size:13px;" >지금 바로 다양한 앱을 만나보십시오 !!</font> </a></span></td><td style="padding:0; margin:0;" align="right"><span style="font-size:7px; color:#808080;">adbar &nbsp;</spad></td><tr></table></div>';
	ads[1] = '<table width="100%" cellpadding="0" cellspacing="0" style="background:#e0ffe0" ><tr><td style="padding:0; margin:0;"><span style="font-size:10px; color:#ffffff;"><a href="javascript:agate.appLauncher.openUri(\'http://mospi.org/download.html\', \'\')" >Get the new version of Citrine SDK now !!</a></span></td><td style="padding:0; margin:0;" align="right"><span style="font-size:7px; color:#ffffff;">adbar &nbsp;</spad></td><tr></table>';
	ads[2] = '<table width="100%" cellpadding="0" cellspacing="0" style="background:#ffe0e0" ><tr><td style="padding:0; margin:0;"><a href="javascript:agate.appLauncher.openUri(\'https://play.google.com/store/apps/details?id=kr.co.logeo.checkpersonid\', \'\')" ><img src="http://lh5.ggpht.com/fRTOe9HH1AsWK_dAb52k6wPMgq8sxrDQCVE2HqEZ3_QQnUTT4tWT6fP0BzDwo_xu9w=w300" width="40px" height="40px" align="left" style="margin-right:10px;"/><span style="font-size:13px; color:#e93080;">미성년자 신분증 검사 <br/>스마트 패스로 간단히 하자 !</span></a></td><td style="padding:0; margin:0;" align="right"><span style="font-size:7px; color:#ffffff;">adbar &nbsp;</spad></td><tr></table>';
	
	var index = Math.floor(Math.random() * ads.length);
	
	return ads[index]; 
}

function getMomlAd()
{
	var momlAd = '<div style="width: 100%;"><div class="adBar" id="adBar" style="padding-top: 13%;" ><script type="xml/momloverlay"><container src="momlAd.xml" /></script></div></div>';
	return momlAd; 
}

insertAdBefore(3,getMomlAd());
insertAdBefore(7,getRandomAd());

