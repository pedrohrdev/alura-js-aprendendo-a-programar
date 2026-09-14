/*
5. Média de notas

Crie um array com 4 notas. Some os valores e calcule a
média, exibindo uma mensagem de "Aprovado" ou "Reprovado" com base na média >= 7.
*/

const notas = [2, 8, 10, 4];

let quantidadeNotas = notas.length;
let somaTotal = 0;

notas.forEach((nota, indice) => {

    return somaTotal += notas[indice];

});

let media = (somaTotal / quantidadeNotas).toFixed(2);

if(media >= 7) {
    console.log(`Aprovado! sua media: ${media}`);
} else {
    console.log(`Reprovado! sua media: ${media}`)
}