var pos=[0,1,2,3,4,5,6,7,8,9,10,11];			//posiciones
var pares=[1,1,2,2,3,3,4,4,5,5,6,6];			//diccionario  de parejas
var dicImg=['img/shelby.png','img/shelby.png','img/bmo.jpg','img/bmo.jpg',
		    'img/giusepe.jpg','img/giusepe.jpg','img/finn.jpg','img/finn.jpg',
			'img/pc.png','img/pc.png','img/lemonagrio.jpg','img/lemonagrio.jpg'];  //diccionario de imagenes


var contador=0;
var var1=0;
var var2=0;

reset();// reseteamos al principio

/*
Funcion reset: setea un nuevo tablero. genera nuevas posiciones. resetea las variables.
*/
function reset(){
shuffle(pos);
var1=0;
var2=0;
counter=0;
clear();
}

/*
funcion clear: flipea todas las imagenes "boca a bajo"
*/
function clear(){
	var imagen= document.getElementById('b0');
	for (var i = 0; i<12; i++) {
	imagen=document.getElementById('b'+i);
	imagen.src="img/fondo.png";
}
}

/*
funcion toggle:es el main del juego.
revisa que imagen fue presionada y le hace un flip.
revisa por medio de var1 var2 y contador si es que hubo alguna
coinsidencia.
*/
var idSelOld='bx';

function toggle(e) {
var idSel=e.target.id;										//vemos el id del objeto

if(idSelOld!=idSel){
	if(contador==0){											
		var1=getPar(idSel);
		flipImg(idSel);
		contador+=1;
	}															
	else if(contador==1){
		var2=getPar(idSel);
		flipImg(idSel);
		contador=0;
		if(!isMatch(var1,var2)){setTimeout('clear()',1000);}
		var2=0;
		var1=0;
		
	}
	document.getElementById('demo1').innerHTML='var1: '+var1;	//solo para debug
	document.getElementById('demo2').innerHTML='var2: '+var2;	//solo para debug
	document.getElementById('demo3').innerHTML='contador: '+contador;	//solo para debug

idSelOld=idSel;	
}
else{ }

}




/*
funcion flipear imagen.
dependiendo de que imagen fue seleccionada
por la id idsel le realiza un flip
*/
function flipImg(idSel){
	var imagen= document.getElementById(idSel);
	switch(idSel){
		case 'b0': 
			imagen.src=dicImg[pos[0]];
			break;
		case 'b1': 
			imagen.src=dicImg[pos[1]];
			break;
		case 'b2': 
			imagen.src=dicImg[pos[2]];
			break;
		case 'b3': 
			imagen.src=dicImg[pos[3]];
			break;
		case 'b4': 
			imagen.src=dicImg[pos[4]];
			break;	
		case 'b5': 
			imagen.src=dicImg[pos[5]];
			break;
		case 'b6': 
			imagen.src=dicImg[pos[6]];
			break;
		case 'b7': 
			imagen.src=dicImg[pos[7]];
			break;
		case 'b8': 
			imagen.src=dicImg[pos[8]];
			break;
		case 'b9': 
			imagen.src=dicImg[pos[9]];
			break;		
		case 'b10': 
			imagen.src=dicImg[pos[10]];
			break;	
		case 'b11': 
			imagen.src=dicImg[pos[11]];
			break;	
	}	
}

/*
En pares[] se almacenan los grupo de pares
Esta funcion revisa cual es el grupo de paridad de la imagen
recien presionada
*/
function getPar(idSel){
	var aux=0;
	switch(idSel){
		case 'b0': 
			aux=pares[pos[0]];
			break;
		case 'b1': 
			aux=pares[pos[1]];
			break;
		case 'b2': 
			aux=pares[pos[2]];
			break;
		case 'b3': 
			aux=pares[pos[3]];
			break;
		case 'b4': 
			aux=pares[pos[4]];			
			break;	
		case 'b5': 
			aux=pares[pos[5]];
			break;
		case 'b6': 
			aux=pares[pos[6]];
			break;
		case 'b7': 
			aux=pares[pos[7]];
			break;
		case 'b8': 
			aux=pares[pos[8]];
			break;
		case 'b9': 
			aux=pares[pos[9]];
			break;		
		case 'b10': 
			aux=pares[pos[10]];
			break;	
		case 'b11': 
			aux=pares[pos[11]];
			break;	
	}	
	return aux;
}

/*revisa se los dos grupos de paridad son el mismo. es decir si hubo match*/
function isMatch(var1,var2){
	if(var1==var2){return 1;}
	else{return 0;}
}

/*desordena un arreglo dado en array*/
function shuffle(array){
	 var counter = array.length;

    while (counter > 0) {
        var index = Math.floor(Math.random() * counter);

        counter--;

        var temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
