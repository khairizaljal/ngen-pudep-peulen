/* Code Create by KHAIRIZAL */
timeout_value = 6000; // 6 detik
var serverinduk="http://192.168.1.1"
var ngng="e";
function cekstatus(){
	$.ajax({
		url: serverinduk+'/cgi-bin/ajax',
		type: 'GET',
		data: '',
		timeout: timeout_value,
		success: function(data) {
			if (ngng=="e"){
				var snackbarText=1;$("body").snackbar({
				content:"Sukses Menyambung ke Server",show:function(){snackbarText++}})
				document.getElementById('loding_sambong').classList.add('el-loading-done');
				console.log('Tersambung ke server i');
				ngng="s";
			} else {
				console.log('Tersambung ke server e');				
			}
		},
		error: function() {
			var snackbarText=1;$("body").snackbar({
			content:"Gagal Menyambung ke Server",show:function(){snackbarText++}})
			document.getElementById('loding_sambong').classList.remove('el-loading-done');
			ngng="e";
			console.log('gagal tersambung ke server'+ngng);
			
		}
		});
}

function bacastatus(){
    xmlhttpPost("GET",serverinduk+"/cgi-bin/ajax","status");  
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
            status=self.xmlHttpReq.responseText;
            var PG=status.substring(0,7);
            if (PG == "PAGAROK"){enablepagar="true";enablebtn();} 
            if (status.length==71 && status[0]=='S'){
            var i;
            var j=5;
            var k=0;
            var T=status.substring(11,70);
            T=T.split(' ');
            for (i = 1; i < 5; i++) {
                 j=j+1
				 var stat = (status[1]=="1") && (status[2]=="1") && (status[3]=="0") && (status[4]=="1");
				 if (stat){
                      document.getElementById("swall").checked = true;
                     }
                 else{
                     document.getElementById("swall").checked = false;
                     }
				if (status[1]=="1"){
                      document.getElementById("sw1").checked = true;
                     }
                 else{
                     document.getElementById("sw1").checked = false;
                     }
				if (status[2]=="1"){
                      document.getElementById("sw2").checked = true;
                     }
                 else{
                     document.getElementById("sw2").checked = false;
                     }
				if (status[3]=="1"){
                      document.getElementById("sw3").checked = false;
                     }
                 else{
                     document.getElementById("sw3").checked = true;
                     }
				if (status[4]=="1"){
                      document.getElementById("sw4").checked = true;
                     }
                 else{
                     document.getElementById("sw4").checked = false;
                     }
                 if (status[j]=="1"){
                     document.getElementById("tmr"+i).checked = true;}
                 else{
                     document.getElementById("tmr"+i).checked = false;}
                 document.getElementById("time"+i).innerHTML =T[k];
                 k=k+1;
                 
    }}
    } else {
		//cekstatus();
	}

    }
      self.xmlHttpReq.send(strQuery);
}