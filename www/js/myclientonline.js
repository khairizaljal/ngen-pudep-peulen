var serverinduk="http://khairizalhotspot.ddns.net:99"
var enablepagar="true";
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
            for (i = 1; i < 6; i++) {
                 j=j+1
                 if (status[i]=="1"){
                      document.getElementById("sw"+i).checked = true;
                     }
                 else{
                     document.getElementById("sw"+i).checked = false;
                     }
                 if (status[j]=="1"){
                     document.getElementById("tmr"+i).checked = true;}
                 else{
                     document.getElementById("tmr"+i).checked = false;}
                 document.getElementById("time"+i).innerHTML =T[k];
                 k=k+1;
                 
    }}
    } else {
		var snackbarText=1;$("body").snackbar({
			content:"Gagal Menyambung ke Server : "+serverinduk,show:function(){snackbarText++}})
	}

    }
      self.xmlHttpReq.send(strQuery);
}

function w3_open() { alert("edit Timer");
}
function pencet(param)
{
  if (document.getElementById('sw'+param).checked == true){
      xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=on&lampu="+param);
      document.getElementById('tmr'+param).checked=false;}

  else{
      xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=off&lampu="+param);  
      document.getElementById('tmr'+param).checked=false;}
} 
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