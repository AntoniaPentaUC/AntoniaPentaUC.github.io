import random


dic_alumnos = {1: "IBahamondez", 2: "EBravo", 3: "ICampos", 4: "MCari", 5: "MDuarte",
            6: "RFigueroa", 7: "FGonzalez", 8: "AGonzalez", 9: "VGonzalez",
            10: "RLopez", 11: "NMaillard", 12: "AManchilla", 13: "CMerino",
            14: "JMoreno", 15: "JOrtiz", 16: "MOsorio", 17: "DOrteiza", 18: "APerez",
            19: "NPiderit", 20: "EPimentel", 21: "CReyes", 22: "ARivera", 23: "MatiasRojas",
            24: "MarceloRojas", 25: "JRomo", 26: "MTenorio", 27: "FUrbina", 28: "AZurita"}


def retornar_grupos(dic_alumnos, lista_ausentes=[], n_integrantes=2):
    lista_alumnos = []
    for key in dic_alumnos:
        lista_alumnos.append(dic_alumnos[key])
    #eliminar ausentes
    lista_presentes = eliminar_ausentes(lista_alumnos, lista_ausentes)
    random.shuffle(lista_presentes)
    lista_desordenada = lista_presentes
    lista_grupos = armar_grupos(lista_desordenada, n_integrantes)
    return lista_grupos


def armar_grupos(lista_desordenada, n_integrantes=2):
    parejas = []
    while len(lista_desordenada) > n_integrantes - 1:
        grupito = []
        for i in range(0, n_integrantes):
            grupito.append(lista_desordenada.pop())
        parejas.append(grupito)
    if len(lista_desordenada) >= 1:
        for faltante in range(0, len(lista_desordenada)):
            nuevo_grupito = parejas[0]
            parejas.remove(nuevo_grupito)
            nuevo_grupito.append(lista_desordenada.pop())
            parejas.append(nuevo_grupito)
    return parejas


def eliminar_ausentes(lista_todos, lista_ausentes):
    nueva_lista = []
    for alumno in lista_todos:
        if not (alumno in lista_ausentes):
            nueva_lista.append(alumno)
    return nueva_lista


def imprimir_parejas(lista):
    for par in lista:
        cantidad = range(0, len(par))
        imprimir = ""
        for i in cantidad:
            imprimir+=par[i]
            if i != len(par) - 1:
                imprimir += " con "
        print(imprimir)

def consola():
    print("Bienvenido, por favor ingresa los numeros de los alumnos ausentes\n")
    for alumno in dic_alumnos:
        print(str(alumno)+ ":" + dic_alumnos[alumno])
    print("0: FINALIZAR\n")
    lista_ausentes = []
    while len(lista_ausentes) < 28:
        id = input("\ningrese numero de alumno: ")
        try:
            if int(id) == 0:
                break
            id = int(id)
            alumno = dic_alumnos[id]
            lista_ausentes.append(alumno)
        except:
            print("\nIngrese un valor valido\n")
    print("\n ¡Gracias! Ahora elija de cuantos integrantes será cada grupo:\n")
    lista_cantidades = list(range(2, (len(dic_alumnos) - len(lista_ausentes))//2 + 1))
    n_int = 0
    while True:
        cantidad = input("\nIngrese cantidad integrantes: ")
        try:
            n_int = int(cantidad)
            if n_int not in lista_cantidades:
                print("\n Póngase serio")
                raise Exception
            break
        except:
            pass

    imprimir_parejas(retornar_grupos(dic_alumnos, lista_ausentes, n_int))



consola()

