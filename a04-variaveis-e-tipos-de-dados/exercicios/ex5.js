/*
5. Simulação bancária simples:

Crie uma variável saldo iniciando com 0. Depois, simule um 
depósito de 200 e um saque de 50. Mostre o saldo final
no console com uma frase explicando.
*/

let saldo = 0;
console.log(`Saldo atual: ${saldo}`);

// Aqui é um deposito de 200 conto, entao vamos adiconar 200 á variavel saldo
saldo += 200;
console.log(`Voce fez um deposito de ${saldo} R$`); // Aqui so colocamos o valor de saldo pois estava em 0, pois se tivessemos feito isso com valor nao iria ocorrer bem
console.log(`Saldo atual: ${saldo}R$`);

// Aqui é um saque de 50 pila, entao vamos tirar 50 do valor atual de saldo
saldo -= 50;
console.log(`Voce fez um saldo de 50R$`);
console.log(`Saldo atual ${saldo}R$`)
