//Imprimir no console todas as skills dos usuários de um array.

//Criando o array
const users = [
    {
        name: "Joao",
        skills: ["Javascript", "ReactJS", "Redux"]
    },
    {
        name: "Pedro",
        skills: ["VueJS", "Ruby on Rails", "Elixir"]
    }
]

//Laço de repetição FOR aninhado, para percorrer o array de objetos e o array de skills
for (let i = 0; i < users.length; i++) { //Percore o array com os dois objetos
    console.log(`Skills de ${users[i].name}:`)
    for (let j = 0; j < users[0].skills.length; j++) { //Percorre o array 'skills'
        console.log(`${j+1}° - ${users[i].skills[j]}`)
    }
}