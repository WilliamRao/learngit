document.write("<STYLE TYPE='text/css'>");
document.write(".hrBorder{height:1; border-top:medium none; border-left:medium none; border-right:medium none; border-bottom:medium none;}");
document.write("</STYLE>");

function Draw_HR(pW, pC1, pC2) {
	try {
		var s = '';
		if (typeof (pW) == 'undefined')
			pW = '650px';
		if (typeof (pC1) == 'undefined')
			pC1 = '#9A9A9A';
		if (typeof (pC2) == 'undefined')
			pC2 = '#D5D5D5';

		s += "<TABLE border=0 cellpadding=0 cellspacing=0 width='" + pW
				+ "' height='2px'>";
		s += "<tr><td bgcolor='" + pC1
				+ "' class=hrBorder style='height:1px;'></td></tr>";
		s += "<tr><td bgcolor='" + pC2
				+ "' class=hrBorder style='height:1px;'></td></tr>";
		s += "</TABLE>";
		document.write(s);
	} catch (e) {
	}
}

function $(theID) {
	return document.getElementById(theID);
}