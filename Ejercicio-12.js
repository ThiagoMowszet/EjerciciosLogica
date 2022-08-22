/*

Obtener la serie: 1,-1,2,-2,3,-3,... para n números

*/

let lista = []

const serieNumeros = (a) => {

    for (let i = 1; i <= a; i++) {

        lista.push(i, -i)

    }

    console.log(lista)

}

serieNumeros()