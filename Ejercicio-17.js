/*

Dado el siguiente array, sumar el valor mas alto con el valor mas bajo: [1, 2, 3, 4, 56, 7, 8, 10]

*/

let lista = [1, 2, 3, 4, 56, 7, 8, 10]
let suma
let a


const minMax = () => {
        lista.sort((a, b) => a - b)
        suma = lista[0] + lista[lista.length - 1]

        console.log(lista)
        console.log(suma)
}

minMax()


/*

Funcion Normal

function minMax() {

        lista.sort((a,b) => a - b)
        suma = lista[0] + lista[lista.length - 1]

        console.log(lista)
        console.log(suma)


}

minMax()

*/