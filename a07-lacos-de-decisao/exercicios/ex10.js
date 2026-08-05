/*
10. Menu com repetição

Crie uma variável opcao.
Use um do...while para exibir repetidamente as opções:

1 - Ver saldo
2 - Fazer depósito
3 - Sair
O menu deve continuar sendo exibido até que a opção seja 3.
Mostre no console a ação correspondente a cada opção.

📌 Observação:
A escolha da opção deve ser simulada por valores
atribuídos à variável opcao.
*/

let opcao = 1;

do {

    console.log('1 - Ver saldo');
    console.log('2 - Fazer deposito');
    console.log('3 - Sair');

    if(opcao === 1){
        console.log(`Opçao escolhida: ${opcao} - Ver saldo: \n Seu saldo: 249,45R$ \n`)
    } else if(opcao === 2) {
        console.log(`Opcao escolhida: ${opcao} - Fazer deposito: \n Voce depositou 500R$\n`)
    } else {
        console.log(`Opcao escolhida: ${opcao} - Sair: \n tchau!\n`)
    }

    opcao++;

} while(opcao <= 3);