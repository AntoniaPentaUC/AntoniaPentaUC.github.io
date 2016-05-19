document.onkeydown= function(){
  document.getElementById('demo').innerHTML=window.event.keyCode;
  var x= window.event.keyCode;
  if(x===37){izq();}
  if(x===39){der();}
}



function myBoton() {
	//document.getElementById('demo').innerHTML="cosaASDASD";
	//window.confirm("cupalo");
	//window.alert("cupalo");


}

var D=0;
var pos=200;
function der(){
	var image = document.getElementById('myImage');
  	if(D=0)
  		{image.src='der.gif';
  		D=1;}
  	else if(D=1)	
  	{
  		D=1;}
  	if(D=-1)
  		{image.src='der.gif';
  		D=1;}
  	
   	pos=pos+10;
   	if(pos>=400){pos=400;}
   	image.style.left=pos+'px';
    document.getElementById('demo').innerHTML=pos;

}

function izq(){
	var image = document.getElementById('myImage');
	if(D=0)
    {image.src='izq.gif';D=-1;}
  else if(D=-1)
    {D=-1;}
  if(D=1)
    {image.src='izq.gif';D=-1;}
  
  pos=pos-10;
  if(pos<=0){pos=0;}
  image.style.left=pos+'px';
  document.getElementById('demo').innerHTML=pos;
}
