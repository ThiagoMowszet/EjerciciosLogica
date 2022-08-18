/* 

Dado un número entero que se introduce por teclado, determinar si es 
negativo o superior a 100.

*/


const negativoSuperior100 = (a) => {
    a < 0 ? console.log("Su numero es negativo") : a > 100 ? console.log("Su numero es superior a 100") : console.log("Su numero no es superior a 100")
}

negativoSuperior100()


/*

Funcion normal

function negativoSuperior100(a){
    if ( a < 0 ) {
        console.log("Su numero es negativo")
    } else if ( a > 100 ) {
        console.log("Su numero es superior a 100")
    } else {
        console.log("Su numero no es superior a 100")
    }
}

*/