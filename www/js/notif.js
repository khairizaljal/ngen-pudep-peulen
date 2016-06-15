function bacahaba(){
    xmlhttpPost("GET","http://192.168.0.100/cgi-bin/ajax","status");  
}

function xmlhttpPost(method,strURL,strQuery) {
    var xmlHttpReq = false;
    var self = this;
    if (window.XMLHttpRequest) {
        self.xmlHttpReq = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        self.xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
    }
    self.xmlHttpReq.open(method, strURL, true);
    self.xmlHttpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    self.xmlHttpReq.onreadystatechange = function() {
        if (self.xmlHttpReq.status==200) {
            var snackbarText=1;$("body").snackbar({
			content:"Sukses Menyambung ke Server",show:function(){snackbarText++}})
    } else {
		var snackbarText=1;$("body").snackbar({
			content:"Gagal Menyambung ke Server",show:function(){snackbarText++}})
	}

    }
      self.xmlHttpReq.send(strQuery);
}