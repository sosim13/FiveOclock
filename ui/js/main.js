
?function hideElement(id)
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

function cssAddFont(name, url) {

	var rule = "@font-face{font-family: '" + name + "'; src: url('" + url+ "')}";
    for (var i=0; i < document.styleSheets.length; ++i) {
	    try { 
			document.styleSheets[i].insertRule(rule, 0);
		} catch(err) {
		}
	}
}

function getFileName(path)
{
	var i = path.lastIndexOf('/');
	if (i >= 0)
		path = path.substring(i + 1);
	
	i = path.lastIndexOf('.');

	if (i >= 0)
		path = path.substring(0, i);
	
	return path;
}

function addMomlFont(url) {
	var fontUrl = agate.runScript("file.pathToUrl('" + url + "')");
	var fontName = getFileName(url); // ��ü ���� path �߿� ���ϸ� �۲� �̸����� ����ϵ��� �Ѵ�.
	
	cssAddFont(fontName, fontUrl);
}


// �ѱ��� word-wrap:break-word �� �������� �ʴ´�. �� �ܾ div �±׷� ��� break-word ó�� ���̵��� �Ѵ�.
function makeKorWordWrapInnerHTML(element)
{
	var nonHTMLText = element.innerHTML;
	if (nonHTMLText.indexOf("<div") < 0) { // <div �� �����ϰ� ������ �̹� �۾��� ������ �����Ѵ�.
		element.setAttribute("orgText", nonHTMLText);
  		var words = nonHTMLText.split(" ");
  		var text = "";
  		for (var i = 0; i < words.length; ++i) {
  			if (i != 0)
  				text = text + " ";
  			text = text + "<div style='display:inline-block'>" + words[i] + "</div>";
  		}
  		element.innerHTML = text;
	}
}

function adjustTextAlign()
{
  	var tags=document.getElementsByClassName("pname");
  	
	for (i = 0; i < tags.length; ++i) {
  		var element = tags[i];
  		element.style.height="auto";
  		element.style.whiteSpace="normal";
  		element.style.paddingTop="0px"
  		element.style.fontSize="9pt"
  		makeKorWordWrapInnerHTML(element);
  		
  	}		
}

// enlarge image
function enlargeImage()
{
	//setStatusText('loading.');
  	var imgs=document.getElementsByTagName("img");

	for (i = 0; i < imgs.length; ++i) {
  		var img = imgs[i];
			
		img.style.width = "980px";
//  		if (img.src.indexOf("/bbs/icon/") >= 0)
//  			img.style.width = "71px";
//		if (img.src.indexOf("/members/icon/") >= 0)
//  			img.style.width = "100px";
  	}
}

function enlargeImage2()
{
  	var imgs=document.getElementsByTagName("img");
  	var totalWidth = document.getElementById("container").offsetWidth;
  	
    var width = (totalWidth) / 3 - 10;
    
    width = Math.min(width, 115);
    width = Math.max(width, 90);
    
	for (i = 0; i < imgs.length; ++i) {
  		var img = imgs[i];
  		var dd = img.parentNode;
  		
  		if (dd && dd.nodeName.toLowerCase() == "dd") {
  			var dl = dd.parentNode;
  			if (dl && dl.nodeName.toLowerCase() == "dl") {
  				var li = dl.parentNode;
	  			if (li && li.nodeName.toLowerCase() == "li") {
	  				var ul = li.parentNode;			
			  		li.style.width = (width + 5) + "px";
			  		//li.style.height="auto";
			  		li.style.marginBottom="20px"
  					
                    //alert(img.style.width);
  			 		img.style.width = width + "px";
 		 			img.style.height = width + "px";
                    //++ 2014-02-19 ���� ������ ��������  Android������ �ձ� �𼭸� ȿ���� �������� ����.
 		 			img.style["border-radius"] =  (width / 10) + "px";
 		 			img.style["box-shadow"] = "2px 2px 5px rgba(110,110,135,0.5)";
 	  			}
  			}
  		}
  	}
}
