// 5. Controle de faltas
// Crie as variáveis totalAulas e faltas.
// Calcule o limite de faltas permitido (25% do total)
// e exiba no console o resultado da expressão
// que verifica se as faltas ultrapassam esse limite.

const aulas = 100;
const faltas = 27

const quantidadePermitidaDeFaltas = aulas * 0.25; // 25%
const faltasExcedidasDoPermitido = faltas > quantidadePermitidaDeFaltas ? faltas - quantidadePermitidaDeFaltas : faltas;

if(faltas > quantidadePermitidaDeFaltas) {
    console.log(
        `Voce faltou mais doque a quantidade
        permitida, voce tem ${faltasExcedidasDoPermitido} faltas a mais doque é permitido,
        e a quantidade permitida é ${quantidadePermitidaDeFaltas}`)
} else {
    console.log(`Ta tudo certo, voce tem ${faltas}, o maximo que pode faltar sao ${quantidadePermitidaDeFaltas} faltas`)
}