/*

Escribir un programa que lea una lista de números y determine cuantos son positivos, y cuantos son negativos.

*/

const listaNumeros = [-1, 1, -2, 2, 3, -3, 4, -4, -5, -6, 5, 6]

let positivo = 0 
let negativo = 0 


for (let i = 0; i < listaNumeros.length; i++) {
    
    if (listaNumeros[i] > 0){
        positivo++
    } else {
        negativo++
    }
    
}

console.log(`Hay ${positivo} numeros positivos`)
console.log(`Hay ${negativo} numeros negativos`)