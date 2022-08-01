//Criar um algoritmo que tem como entrada um objeto e imprime no console os nomes dos projetos ativos do usuário.

//Criando objeto
const user = {
    name: "Juca",
    projects: [
        {name: "Projeto 1", start: "01/02/2021", active: true},
        {name: "Projeto 2", start: "03/03/2021", active: false},
        {name: "Projeto 3", start: "10/08/2021", active: true},
        {name: "Projeto 4", start: "20/08/2021", active: false},
        {name: "Projeto 5", start: "18/10/2021", active: true}
    ]
}

//Criando o laço de repetição FOR para percorrer o objeto
for (let i = 0; i < user.projects.length; i++) {
    //Verifica quais projetos estão ativos
    if (user.projects[i].active == true) {
       console.log(user.projects[i].name)
    }
}