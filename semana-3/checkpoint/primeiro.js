//Criar uma função arrow que recebe duas notas como argumento e retorna a média entre elas.

//Criando arrow function
const media = (x, y) => console.log(`Média: ${((x + y) / 2).toFixed(1)}`) //imprimindo diretamente no retorno da função utilizando template string

//Chamando a função
media(10, 3)