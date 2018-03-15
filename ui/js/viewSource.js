function escapeFunctionScript(text)
{
	text = text.replace(/\\/gm, "\\\\");
	text = text.replace(/\n/gm, "\\n");
	text = text.replace(/\r/gm, "\\r");
	text = text.replace(/'/gm, "\\'");
	
	return text;	
}

var source =  document.all[0].outerHTML;

if (!source) {
	source =  "<html>\r\n" + document.all[0].innerHTML + "\r\n</html>";
}
    
agate.runScript("function.popupSource('"+  escapeFunctionScript(source) + "')");

