/*

Dado un número entero y positivo que se introduce por teclado, 
determinar si es par o impar.

*/



const calcularParImpar = (a) => {
    a % 2 == 0 ? console.log("es par") : console.log("es impar")
}


/*

Funcion normal

function calcularParImpar(a) {

    if ( a % 2 == 0 ) { 
        console.log('es par')
    } else {
        console.log('es impar')
    }
}

calcularParImpar()

*/