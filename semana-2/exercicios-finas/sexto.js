//Criar uma função que recebe dois valores randômicos como parâmetro para o Pedra Papel e Tesoura, e mostra qual usuário ganhou.

function rockPaperScissorsWinner() {
    //Criando os players e atribuindo os valores randomicamente entre 0 e 2
    let p1 = Math.floor(Math.random() * 3);
    let p2 = Math.floor(Math.random() * 3);

    //Verificando qual player ganhou, ou se houve empate. E imprimindo o resultado
    if(p1 == p2) console.log('Empate')
    if(p1 == 0 && p2 == 1) console.log(`Tesoura > Papel\nPlayer 1 Ganhou`)
    if(p1 == 0 && p2 == 2) console.log(`Tesoura < Pedra\nPlayer 2 Ganhou`)
    if(p1 == 1 && p2 == 0) console.log(`Papel < Tesoura\nPlayer 2 Ganhou`)
    if(p1 == 1 && p2 == 2) console.log(`Papel > Pedra\nPlayer 1 Ganhou`)
    if(p1 == 2 && p2 == 0) console.log(`Pedra > Tesoura\nPlayer 1 Ganhou`)
    if(p1 == 2 && p2 == 1) console.log(`Pedra < Papel\nPlayer 2 Ganhou`)
}

//Chamando a função
rockPaperScissorsWinner()