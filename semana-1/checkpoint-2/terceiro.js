//Calcular o valor a ser pago por um produto, em função da forma de pagamento.

//Função para calcular o valor, recebendo o valor da compra e a opção
function calcula(valor, x) {
    //variável do valor total a pagar
    let totaPagar

    //verificando a opção escolhida
    switch (x) {
        case 1:
            totaPagar = valor * 0.9
            break;
        case 2:
            totaPagar = valor * 0.85
            break;
        case 3:
            totaPagar = valor
            break;
        case 4:
            totaPagar = valor * 1.1
            break;
        default:
            break;
    }

    //imprimindo o valor final
    console.log(`Valor final: R$${totaPagar.toFixed(2)}`)
}

//Chamando a função
calcula(137, 4)