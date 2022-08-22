/*

Dado un número entero que se introduce por teclado, determinar si se 
encuentra en el intervalo cerrado 51 - 100.

*/


const rango = (a) => {
    a <= 50 ? console.log("Su numero no se encuentra en el intervalo cerrado de 51-100") : a > 50 && a < 101 ? console.log("Su numero se encuentra en el intervalo cerrado de 51-100") : console.log("Su numero es mayor al intervalo cerrado 51-100")
}

rango()



/*

Funcion normal 

function rango(a){
    if ( a <= 50 ) {
        console.log("Su numero no se encuentra en el intervalo cerrado de 51-100")

    } else if ( a > 50 && a < 101 ) { 
        console.log("Su numero se encuentra en el intervalo cerrado de 51-100")
    
    } else {
        console.log("Su numero es mayor al intervalo cerrado 51-100")
    }
}

rango()

*/