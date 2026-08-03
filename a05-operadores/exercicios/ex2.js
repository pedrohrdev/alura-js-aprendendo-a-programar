/*
2. Situação do aluno
Crie duas variáveis com notas de um aluno.
Calcule a média e exiba no console o resultado da expressão que verifica se a média é maior ou igual a 7.
*/

const nota1 = 7.5;
const nota2 = 4.2;
const media = (nota1 + nota2) / 2;

if(media >= 7) {
    console.log(`Voce esta na media! sua nota: ${media}`)
} else {
    console.log(`Voce nao esta na media, sua nota: ${media}`)
}