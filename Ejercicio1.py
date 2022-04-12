# Ejercicio Logica 1

""" 

Dado un numero devolver su tabla de multiplicar completa

como hacerlo:
- función con parametro numero
- variable de texto encabezado
- bucle del 1 al 10
- concatenar la variable string con multiplicación y resultado


"""


# Decidi hacerlo sin una funcion, tambien que sea solamente las tablas del 1 al 10. Si se desea lo contrario, eliminar las lineas 23 y 24.

n = int(input("Elija un numero para saber su tabla de multiplicar: ")) # El usuario ingresa un numero.

if n < 0:
    print("Debe de ingresar un numero positivo entre el 1 y el 10") # Valida si el input del usuario es menor a 0 o negativo.
elif n > 10:
    print("Debe de elegir un numero entre el 1 y el 10") # Valida si el input del usuario es mayor a 10.


for i in range(1,11): 
    print(n, "por", i, "es igual a:", n*i)