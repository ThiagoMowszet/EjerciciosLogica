/*

Escribir un programa que lea una lista de números y determine cuales son positivos, y cuales son negativos.

*/

const listaNumeros = [-1, 1, -2, 2, 3, -3, 4, -4, -5, -6, 5, 6]
//                     N  P   N  P  P   N  P   N   N   N  P  P

const positivoNegativo = (a) => {
    a > 0 ? console.log("Su numero es positivo") : a < 0 ? console.log("Su numero es negativo") : a === 0 ? console.log("Su numero es 0") : console.log("Ingrese un numero valido")
}


listaNumeros.forEach( positivoNegativo )

/*

Funcion normal

// const positivoNegativo = (a) => {
//     if (a > 0) {
//         console.log("Su numero es positivo")
//     } else if (a < 0) {
//         console.log("Su numero es negativo");
//     } else if (a === 0) {
//         console.log("Su numero es 0");
//     } else {
//         console.log("Ingrese un numero valido");
//     }
// }

*/