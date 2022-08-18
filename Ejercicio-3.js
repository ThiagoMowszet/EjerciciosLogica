/*

Dado un numero devolver su tabla de multiplicar completa
como hacerlo:
- función con parametro numero
- variable de texto encabezado
- bucle del 1 al 10
- concatenar la variable string con multiplicación y resultado

*/


const tablaMultiplicar = (a) => { 
    for ( let i = 0 ; i < 11 ; i++ ){
        console.log(`${a} x ${i} = ${a * i}`)
    }
}

tablaMultiplicar()


/* 

Funcion normal 

function tablasMultiplicar(a){
    for ( let i = 0 ; i < 11 ; i++ ){
        console.log(`${a} por ${i} es igual a ${a * i}`)
    }
}

tablasMultiplicar()

*/