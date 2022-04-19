# Ejercicio Logica 1

"""

Dado un numero devolver su tabla de multiplicar completa

como hacerlo:
- función con parametro numero
- variable de texto encabezado
- bucle del 1 al 10
- concatenar la variable string con multiplicación y resultado

"""

def tablasMultiplicar(x):
    for i in range(11):
        print(x, "por", i, "es igual a:", x*i)

x = int(input("Seleccione un numero: "))
llamar = tablasMultiplicar(x)