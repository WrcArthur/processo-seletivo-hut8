//Criar uma função que mostra qual é o maior número de um array.

//Criando array
// let array = [6, 21, 9, 2, 50, 98, 1]
let array = [6, 21, 9, 2, 50, 98, 1]

function verificarMaior(array) {
    //Variável auxiliar para armazenar o maior número
    let aux = array[0]

    //Criando o laço de repetição FOR para percorrer o array
    for (let i = 0; i < array.length; i++) {
        if (array[i+1] > array[i]) {
            aux = array[i+1]
        }
    }

//Imprimindo o resultado
    console.log(aux)
}

//Chamando a função
verificarMaior(array)

//Toda a função poderia ser substituída pelo método Math.max, segue o exemplo:
// console.log(Math.max(...array))
