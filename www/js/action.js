var  ck1,ck2,ck3,ck4,ckall
var serverinduk="http://192.168.1.1" 
 
function init() {
	ck1 = document.getElementById("sw1");
	ck2 = document.getElementById("sw2");
	ck3 = document.getElementById("sw3");
	ck4 = document.getElementById("sw4");
	ckall = document.getElementById("swall");

}

function penall(checkboxElem) {
  if (checkboxElem.checked) {
	xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=on&lampu=1");
	xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=on&lampu=2");
	xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=off&lampu=3");
	xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=on&lampu=4");
  } else {
    xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=off&lampu=1");
	xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=off&lampu=2");
	xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=on&lampu=3");
	xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=off&lampu=4");
  }
}

function pen1(checkboxElem) {
  if (checkboxElem.checked) {
	xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=on&lampu=1");
  } else {
    xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=off&lampu=1");
  }
}

function pen2(checkboxElem) {
  if (checkboxElem.checked) {
	xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=on&lampu=2");
  } else {
    xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=off&lampu=2");
  }
}

function pen3(checkboxElem) {
  if (checkboxElem.checked) {
	xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=off&lampu=3");
  } else {
    xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=on&lampu=3");
  }
}

function pen4(checkboxElem) {
  if (checkboxElem.checked) {
	xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=on&lampu=4");
  } else {
    xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=off&lampu=4");
  }
}
