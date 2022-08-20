/*

Una fuente de datos registra varias edades, la edad 0 indica el final del 
ingreso de datos, realice un programa para determinar el promedio de las 
edades ingresadas y además el porcentaje de personas mayores a los 50 
años

*/

let x
let cantidad = 0
let suma = 0
let cantidad2 = 0


while (x != 0) {

    x = parseInt(prompt('ingresa la edad'))
    if (x > 0) {
        suma += x
        cantidad++

        if (x > 50) {
            cantidad2++
        }
    }

}

console.log(`el promedio es ${suma / cantidad}`);

console.log(`el porcentaje de personas mayor a 50 es: ${(cantidad2 * 100) / cantidad}`);