/* 

Dado un número entero que se introduce por teclado, determinar si es 
positivo, negativo o nulo.

*/

// Operador Ternario 
const calcularPositivoNegativoNulo = (a) => {
    a > 0 ? console.log("Es Positivo") : a < 0 ? console.log("Es Negativo") : a === 0 ? console.log("Es 0") : console.log("Es Nulo")
}

calcularPositivoNegativoNulo()



/*

Funcion normal 

function CalcularPositivoNegativoNulo(a) { 

    if ( a > 0 ) { 
        console.log("Es Positivo") 
    } else if ( a < 0 ) {
        console.log("Es Negativo") 
    } else if ( a === 0) {
        console.log("Es 0")
    } else {
        console.log("Es nulo")
    }
 
}

*/