//Trocar todas as virgúlas de uma string por ponto ponto final.

let array = "Olá, mundo, meu, nome, é, Juca1"

const troca = (array) => console.log(array.replace(/,/g, "."))

troca(array)