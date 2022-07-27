//Ler dois valores e dizer se um deles é positivo

//Função para verificar
function verifica(x, y) {
    if(x > 0 && y < 0 ) console.log(`O valor ${x} é positivo`)
    if(y > 0 && x < 0) console.log(`O valor ${y} é positivo`)
    if(x > 0 && y > 0) console.log(`Ambos os valores(${x} e ${y}) são positivos`)
    if(x < 0 && y < 0) console.log('Nenhum dos valores é positivo')
}

verifica(10, -5)