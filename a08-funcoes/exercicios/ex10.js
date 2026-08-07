/*
10. Desafio do quiz

Crie uma função fazerPergunta(pergunta, respostaCorreta). A função
deve exibir a pergunta e depois mostrar se a resposta está certa ou
errada (simule a resposta com uma variável).
*/

import { createInterface } from 'readline/promises';

const leitor = createInterface({
    input: process.stdin,
    output: process.stdout
});

async function fazerPergunta(pergunta, respostaCorreta) {

    const resposta = await leitor.question(pergunta)

    if(resposta === respostaCorreta) {
        console.log('Correto');
    } else {
        console.log('Errado');
    }

    leitor.close()

}

const perguntaUm = '1) Qual dessas linguagems é um superset do JavaScript? \n a)Java \n b) TypeScript';
const respostaUmPerguntaUm = 'b';

fazerPergunta(perguntaUm, respostaUmPerguntaUm)