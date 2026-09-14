/*
1. Verificação de maioridade
Crie uma variável idade.
Exiba no console o resultado da expressão que verifica se a idade é maior ou igual a 18.
*/

let idade = 17;
let ehMaiorDeIdade = idade >= 18;

if(ehMaiorDeIdade) {
    console.log(`Sim, voce e maior de idade, voce tem ${idade} anos`)
} else {
    console.log(`Nao, voce ainda é menor de idade, voce tem ${idade} anos`)
}