//Exercício sobre criar variáveis para armazenar algumas informações

//Criando as variáveis
let nome = 'Arthur'
let sobrenome = 'Weirich'
let diaNasc = 18
let mesNasc = 9
let anoNasc = 2001
let primeiraNota = 9
let segundaNota = 8
let idade

//Calculando idade

//Pegando a data atual
const date = new Date()
const diaAtual = date.getDate()
const mesAtual = date.getMonth() + 1
const anoAtual = date.getFullYear()

//Verificando o aniversário
if (mesAtual < mesNasc) {
    idade = anoAtual - anoNasc - 1
} else if (diaAtual < diaNasc) {
    idade = anoAtual - anoNasc - 1
} else {
    idade = anoAtual - anoNasc
}

//Media das notas
let media = (primeiraNota + segundaNota) / 2

//formatando data de nascimento
let nas = `${String(diaNasc)}/${mesNasc}/${anoNasc}`

//Mostrando informações
console.log(`Nome Completo: ${nome} ${sobrenome}`)
console.log(`Idade: ${idade}`)
console.log(`Data de Nascimento: ${nas}`)
console.log(`Média: ${media}`)