/*

Determinar si dos palabras son anagramas o no

*/

const esAnagrama = (a, b) => {

    a = a.toLowerCase().split('').sort().join('')
    b = b.toLowerCase().split('').sort().join('')

    let a2 = a.length
    let b2 = b.length


    if (a === b) {
        console.log("Es anagrama")
    } else if (a2 != b2) {
        console.log("No son anagramas");
    }

}

esAnagrama() 