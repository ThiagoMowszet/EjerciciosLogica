/*

Escribir un programa que permita adivinar un número que se genere internamente al azar, el cual está en el rango de 1 a 50. 
El usuario debe adivinar este número en base a aproximaciones, para lo cual se dispone de 5 intentos

*/

let a = Math.floor(Math.random() * 51)
let contador = 0


do {
    let adivinar = parseInt(prompt("Elija un numero del 0 al 50"))

    if (a === adivinar) {
        console.log("Correcto!")
        break
    } else if (a < 25) {
        console.log("El numero esta entre 0 y 25");
        contador++

    } else {
        console.log("El numero esta entre 25 y 50");
        contador++
    }


} while (contador < 5)

if (contador === 5) {
    console.log("Game Over");
}

console.log(`El numero era ${a}`)