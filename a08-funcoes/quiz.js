// a cada resposta validar certo ou nn
// mostrar mensagens de acordo com a quantidade de acerto

import { createInterface } from 'readline/promises';

const leitor = createInterface({
    input: process.stdin,
    output: process.stdout
});

let acertos = 0;

const respostaUm = await leitor.question(
    '1) Qual seria a palavra correta para definir uma funcao? \n a)create \n b)func \n c)function \n Sua resposta: '
);
if(respostaUm === 'c') acertos++;

const respostaDois = await leitor.question(
    '2) Qual dessas alternativas é uma estrutura de repetição? \n a)repetir \n b)rodarDenovo \n c)for \n Sua resposta: '
);
if(respostaDois === 'c') acertos++;

const respostaTres = await leitor.question(
    '3) Qual desses valores são considerados falsy em js? \n a)0 \n b)[] \n c)" " \n Sua resposta: '
);
if(respostaTres === 'a') acertos++;

leitor.close();

if(acertos === 1) {
    console.log(`Você acertou ${acertos} alternativa, se esforce mais`);
} else if(acertos === 2) {
    console.log(`Parabéns! Voce acertou ${acertos} alternativas`);
} else if(acertos === 3) {
    console.log(`Meus parabens, voce acertou tudo`);
} else {
    console.log('Pessimo, voce errou tudo')
}