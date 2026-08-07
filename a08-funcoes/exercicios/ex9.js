/*
9. Callback simples

Crie uma função executarAcao(acao) que recebe uma
função como parâmetro e a executa. Teste passando
uma função que imprime "Executando ação!".
*/

function executaAcao(acao) { // Aqui recebemos uma funcao como parametro
    acao();
}

function mostraMensagem() {
    console.log('Executando ação!');
};

executaAcao(mostraMensagem);// Aqui estamos passando a funcao mostraMensagem() como um argumento