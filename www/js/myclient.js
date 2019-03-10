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

function w3_open() { alert("edit Timer");
}
/* function pencet(param)
{
  if (document.getElementById('sw'+param).checked == true){
      xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=on&lampu="+param);
      document.getElementById('tmr'+param).checked=false;}

  else{
      xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=off&lampu="+param);  
      document.getElementById('tmr'+param).checked=false;}
}  */
function pencet2(param)
{
  if (document.getElementById('tmr'+param).checked == true){
      xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","timer=on&lampu="+param);}
  else{
      xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","timer=off&lampu="+param);}  
}

function editTimer(param) {
    var currenttmr=document.getElementById(param).innerHTML;
    var IN = prompt("Masukkan Timer sesuai format",currenttmr);
    
    if (IN != null) {
         document.getElementById(param).innerHTML=IN;
         xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","time=set&value="+IN+"&lampu="+param);
    }
}

function pagar(param){
   if(enablepagar=="true"){
    disablebtn();
    enablepagar="false";  
    xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax",param);}
}
function disablebtn(){
  document.getElementById("btnpagar1").className="w3-btn w3-disabled";
  document.getElementById("btnpagar2").className="w3-btn w3-disabled";
  document.getElementById("btnpagar3").className="w3-btn w3-disabled";
  document.getElementById("btnpagar4").className="w3-btn w3-disabled";
}
function enablebtn(){

  document.getElementById("btnpagar1").className="w3-btn w3-dark-grey w3-border";
  document.getElementById("btnpagar2").className="w3-btn w3-dark-grey w3-border";
  document.getElementById("btnpagar3").className="w3-btn w3-dark-grey w3-border";
  document.getElementById("btnpagar4").className="w3-btn w3-dark-grey w3-border";
}