/*

Dado un número que se introduce por teclado, si es positivo verificar si se 
encuentra en el intervalo abierto 60 – 90, de lo contrario emitir un mensaje 
de error

*/

const intervaloError = (a) => {
    a > 0  && a >= 60 && a <= 90 ? console.log("Su numero es positivo y se encuentra en el intervalo abierto 60-90") : console.log("Error")
}


intervaloError()


/*

Funcion normal 

function intervaloError(a){
    if ( a > 0  && a >= 60 && a <= 90 ){
        console.log("Su numero es positivo y se encuentra en el intervalo abierto 60-90")
    } else  {
        console.log("Error")
    }
}

*/