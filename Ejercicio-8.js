/*

Escribir un programa que pida una contraseña numérica y permita tres intentos. Si el usuario ingresa la contraseña correcta, que se muestre "Correcto!".
En caso contrario el programa debe mostrar " Contraseña equivocada". Posteriormente terminar el programa de inmediato

*/

let contador = 0
let password = parseInt(prompt("Ingrese una contraseña numerica"))
let verify

while (contador < 3) {

    verify = parseInt(prompt("Ingrese la contraseña creada"))

    if (verify === password) {
        console.log("Correcta!")
        break;
    } else {
        console.log("Su contraseña es incorrecta")
        contador++
    }
}

if (contador === 3) {
    console.log("Ha superado el numero de intentos, porfavor vuelvalo a intentar mas tarde")
}