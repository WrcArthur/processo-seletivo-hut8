//Criar um algoritmo que tem como entrada um array de números e imprime no console a soma dos elementos sendo cada um deles multiplicado pelo seu índice.

//Criando o array
let array = [5, 9, 10, 6]

//Variável auxiliar para fazer a operação
let aux = 0

//Criando o laço de repetição FOR para percorrer o array
for (let i = 0; i < array.length; i++) {
    aux = aux + (array[i] * i)
}

//Imprimindo resultado
console.log(`Resultado: ${aux}`)