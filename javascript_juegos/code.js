var pos=[0,1,2,3,4,5,6,7,8,9,10,11];
var estados=[0,0,0,0,0,0,0,0,0,0,0,0];
var pares=[1,0,3,2,5,4,7,6,9,8,11,10];
var dicImg=['img/shelby.png','img/shelby.png','img/bmo.jpg','img/bmo.jpg',
		    'img/giusepe.jpg','img/giusepe.jpg','img/finn.jpg','img/finn.jpg',
			'img/pc.png','img/pc.png','img/lemonagrio.jpg','img/lemonagrio.jpg'];

var puntos=0;
var intentos=0;
reset();


function reset(){
shuffle(pos);
puntos=0;		//reseteamos los puntos
intentos=0;		//reseteamos los intentos
var imagen= document.getElementById('b0');
for (var i = 0; i <12; i++) {
	imagen=document.getElementById('b'+i);
	imagen.src="img/fondo.png";
}
}


function toggle(e) {
	var idSel=e.target.id;
	document.getElementById('demo1').innerHTML='id: '+idSel;	
	showImg(idSel);
}

function showImg(idSel){
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