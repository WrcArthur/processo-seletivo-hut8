// Criar uma função que recebe um objeto usuário e imprime se ele é maior de idade


//Objeto
const user = {
    nome: 'Juca',
    idade: 28
}

//Função para vericar maioridade
function verifica(objeto) {
    //Variável que recebe o resultado
    let res

    //Condicional If ternário
    res = objeto.idade >= 18 ? 'maior' : 'menor' 

    //Imprimindo diretamente da função utilizando template string
    console.log(`${objeto.nome} é ${res} de idade`)
}

//Chamando a função
verifica(user)