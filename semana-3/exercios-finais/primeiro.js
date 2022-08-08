//Criar uma função que recebe uma string descrevendo uma operação e dois números, e retorna o resultado da opereção entre os dois números

function calcula(operacao, x1, x2) {
    //Variável para receber o resultado
    let res

    //Verica a operação passada como parametro e a atribui o valor á variável
    switch (operacao) {
        case 'soma':
            res = x1 + x2
            break;
        case 'subtrai':
            res = x1 - x2
            break;
        case 'divide':
            res = x1 / x2
            break;
        case 'multiplica':
            res = x1 * x2
            break;
        default:
            break;
    }

    //Imprimindo o resultado diretamente da função utilizando template string
    console.log(`Resultado: ${(res).toFixed(2)}`)
}

//Chamando a função
calcula('soma', 8, 4)
calcula('subtrai', 7, 3)
calcula('divide', 10, 3)
calcula('multiplica', 17, 3)