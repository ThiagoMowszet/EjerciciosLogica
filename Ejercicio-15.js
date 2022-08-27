/*

 Calcular la media de una serie de números que se leen por teclado.

*/

let calcular
let contador = 0
let suma = 0
let media = 0

const calcularMedia = () => {

    while (calcular != 0) {

        calcular = parseInt(prompt("Ingrese una edad"))

        if (calcular != 0) {
            suma = suma + calcular
            contador++
        }

    }

    media = suma / contador
    console.log(`La media de personas es : ${media.toFixed(2)}`)
}

calcularMedia()