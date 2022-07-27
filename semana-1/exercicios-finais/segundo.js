//Verificar a idade de um nadador e retornar a categoria compatível.

function verifica(idade) {

    //Verificando idade com operador condicional If
    if(idade >= 18) console.log('Adulto') 
        else if(idade > 13) console.log('Juvenil B') 
            else if(idade > 10) console.log('Juvenil A') 
                else if(idade > 7) console.log('Infantil B') 
                    else if(idade > 5) console.log('Infantil A') 
                        else console.log('Idade incompatívewl') 
}

//Chamando a função
verifica(14)