/*
6. Jogo do número secreto

Crie uma variável numeroSecreto com valor fixo.
Simule até 3 tentativas usando um for.
Em cada tentativa, compare o valor tentado com o número secreto e mostre no console:

"Acertou!" se for igual
"Tente novamente" se for diferente
📌 Observação:
As tentativas devem ser simuladas por variáveis dentro do laço.
*/

const numeroSecreto = 5;

for(let contador = 1; contador <= 3; contador++) {
    
    // Ok, ja consegucontadormos fazer com que o for rode 3 vezes

    let tentativaUm = 10;
    let tentativaDois = 40;
    let tentativaTres = 5;

    if(contador === 1) {

        console.log(`Sua tentativa: ${tentativaUm}`);

        if(tentativaUm === numeroSecreto) {
            console.log('Acertou!')
        } else {
            console.log('Tente novamente \n')
        }

    } else if(contador === 2) {

        console.log(`Sua tentativa: ${tentativaDois}`);

        if(tentativaDois === numeroSecreto) {
            console.log('Acertou');
        } else {
            console.log('Tente novamente \n')
        }

    } else if(contador === 3) {

        console.log(`Sua tentativa: ${tentativaTres}`);

        if(tentativaTres === numeroSecreto) {
            console.log('Acertou!')
        } else {
            console.log('Tente novamente \n')
        }
    }

}