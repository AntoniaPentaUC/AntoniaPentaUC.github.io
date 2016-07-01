
function cuestionario() {
	// body...
	var a = prompt('Las ilusiones opticas son percibidas por las personas de manera:\r 1=Igual 2=Diferente')
	var puntos=0;
	if (a==2) {
		window.alert('bien')
        puntos=puntos+1
	}
	else {
		window.alert('mal')
	}
	a = prompt('Cuando una persona mantiene su mirada fija en una interseccion de la ilusion de cuadricula centelleante los puntos:\r 1=los puntos se mueven\r 2=los puntos desaparecen')

	if (a==2) {
		window.alert('bien')
        puntos=puntos+1
	}
	else {
		window.alert('mal')
	}
	a = prompt('De las siguientes clasificaciones, cual no existe?:\r 1=Refracción \r 2=Irradiación\r 3=Espejismo')
	if (a==1) {
		window.alert('bien')
        puntos=puntos+1
	}
	else {
		window.alert('mal')
	}
	a = prompt('¿En cuantos objetos se puede fijar el cerebro humano?\r1=2 \r2=1 \r3=4 \r4=3')
	if (a==2) {
		window.alert('bien')
        puntos=puntos+1
	}
	else {
		window.alert('mal')
	}
	a = prompt('¿Hay causas secundarias en ver muchas ilusiones opticas?\r2=si \r1=no')
	if (a==1) {
		window.alert('bien')
        puntos=puntos+1
	}
	else {
		window.alert('mal')
	}
	a = prompt('Usted es un terrorista? \r 1= si 2=no')
	if (a==2) {
		window.alert('bien')
        puntos=puntos+1

	}
	else {
		window.alert('Los terroristas no son aceptados')
		puntos=puntos-10
	}
	if (puntos>=3) {
		window.alert('Usted ha aprobado')
		window.open('http://zoomquilt.org/')
	}
	else {
		window.alert('Usted ha reprobado por favor no vuelva por aqui')
	}
}