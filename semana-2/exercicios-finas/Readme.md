### 1° Exercício
   * Criar um algoritmo que tem como entrada um array de números e imprime no console a soma dos elementos sendo cada um deles multiplicado pelo seu índice.
    Utilizei um laço de repetição FOR para percorrer o array e fazer a operação matemática. Armazenei o resultado da operação em uma variável auxiliar.

### 2° Exercício
   * Criar um algoritmo que tem como entrada um objeto e imprime no console os nomes dos projetos ativos do usuário.
    Percorri o array utilizando FOR, e dentro do laço de repetição utilizei um operador condicional IF para verificar quais projetos estavam ativos para imprimí-los.

### 3° Exercício
   * Criar uma função que mostra qual é o maior número de um array.
    Criei uma função que recebe o array como parâmetro, ô percorre verificando se o elemento que está no próximo índice é maior do que o que está no índice atual. Caso seja maior, ele é atribuído á váriavel auxiliar. Toda a função poderia ser substituída pelo método Math.max, mas utilizei a função, pois creio que fica mais dinâmico para avaliação.

### 4° Exercício
   * Criar uma função que conte quantas palavras existem na frase que for passada comoparâmetro
    Utilizei o método split para contar quantas ocorrências aconteciam na frase passada como parâmetro.

### 5° Exercício
   * Imprimir no console todas as skills dos usuários de um array.
    Utilizei um laço de repetição FOR aninhado, para percorrer o array de objetos e o array de skills.

### 6° Exercício
    * Criar uma função que recebe dois valores randômicos como parâmetro para o Pedra Papel e Tesoura, e mostra qual usuário ganhou.
    Dentro da função instanciei as variáveis para os dois jogadores(Player 1 e Player 2), que recebem valores rendômicos entre 0 e 2. Dentro da função tem um operador condicional IF para comparar os valores, verificar quem ganhou ou se houve empate, e imprimir o resultado no console.