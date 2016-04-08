import random

dic_alumnos = {1: "IBahamondez", 2: "EBravo", 3: "ICampos", 4: "MCari", 5: "MDuarte",
			   6: "RFigueroa", 7: "FGonzalez", 8: "AGonzalez", 9: "VGonzalez", 
			   10: "RLopez", 11: "NMaillard", 12: "AManchilla", 13: "CMerino", 
			   14: "JMoreno", 15: "JOrtiz", 16: "MOsorio", 17: "DOrteiza", 18: "APerez",
			   19: "NPiderit", 20: "EPimentel", 21: "CReyes", 22: "ARivera", 23: "MatiasRojas",
			   24: "MarceloRojas", 25: "JRomo", 26: "MTenorio", 27: "FUrbina", 28: "AZurita"}

def retornar_grupos(dic_alumnos, lista_ausentes=[]):
	nuevo_dic = dict(dic_alumnos)

	lista_numeros = list(range(1, 29))
	lista_parejas = []
	while len(lista_numeros) > 1:
		numero = lista_numeros.pop()
		numero2 = random.choice(lista_numeros)
		lista_numeros.remove(numero2)
		pareja = [dic_alumnos[numero], dic_alumnos[numero2]]
		lista_parejas.append(pareja)
	if len(lista_numeros) == 1:
		ultimo = lista_numeros[0]
		p_ultima = dic_alumnos[ultimo]
		grupo = random.randint(0, 28)
		lista_parejas[grupo].append(p_ultima)
	for pareja in lista_parejas:
		for ausente in lista_ausentes:
			if ausente in pareja:
				pareja.remove(ausente)
	return lista_parejas

def imprimir_parejas(lista):
	for par in lista:
		if len(par) == 2:
			imprimir = " con "
			print(par[0] + imprimir + par[1])
		elif len(par) == 1:
			imprimir = " esta solito :( Elige grupo! O solo"
			print(par[0] + imprimir)
		else:
			print(par[0] + "es con" + par[1] + "y es con" + par[2])



imprimir_parejas(retornar_grupos(dic_alumnos, ["JMoreno"]))
