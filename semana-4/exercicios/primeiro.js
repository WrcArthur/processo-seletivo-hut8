//Imprimir todos os nomes de um array.

let nomes = "Maria, Paulo, Moisés, Joel, Ana"

function imprimeNomes(array) {
    let nomes = array.split(", ")
    for(let i = 0; i < nomes.length; i++) {
        console.log(`${nomes[i]}`)
    }
}

imprimeNomes(nomes)