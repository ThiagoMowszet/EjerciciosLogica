/*

Escribir un programa que permita obtener el valor aproximado de PI, mediante la serie: 4 - 4/3 + 4/5 - 4/7 + 4/9 - 4/11 + ... para n términos.

}


*/


const calcularPi = (a) => {
    numerador = 4
    denominador = 1
    pi = 0
    x = 0
    operador = 1

    for (let i = 0; i < a; i++) {
        pi += operador * (numerador / denominador)
        denominador += 2
        operador *= -1
    }

    console.log(pi)

}

calcularPi()