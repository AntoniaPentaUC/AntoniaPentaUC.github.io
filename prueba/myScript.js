document.onkeydown= function(){
  document.getElementById('demo').innerHTML=window.event.keyCode;
  var x= window.event.keyCode;
  if(x===37){izq();}
  if(x===38){up();}
  if(x===39){der();}
  if(x===40){down();}
}

function myBoton() {
	//
	//window.confirm("cupalo");
	//window.alert("cupalo");
}

var posx=200;
var posy=200;

function der(){
	var image = document.getElementById('myImage');
  image.src='der.gif'
  posx=posx+10;
  if(posx>=1500){posx=1500;}
  image.style.left=posx+'px';
  document.getElementById('demo').innerHTML=posx;

}

function izq(){
	var image = document.getElementById('myImage');
	image.src='izq.gif'
  posx=posx-10;
  if(posx<=0){posx=0;}
  image.style.left=posx+'px';
  document.getElementById('demo').innerHTML=posx;
}

function down(){
  var image = document.getElementById('myImage');
  image.src='down.gif';
  posy=posy+10;
  if(posy>=1000){posy=1000;}
  image.style.top=posy+'px';
  document.getElementById('demo').innerHTML=posy;
}

function up(){
  var image = document.getElementById('myImage');
  image.src='up.gif';
  posy=posy-10;
  if(posy<=200){posy=200;}
  image.style.top=posy+'px';
  document.getElementById('demo').innerHTML=posy;
}
