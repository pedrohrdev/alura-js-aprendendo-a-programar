/*
10. Atualizando objetos com spread
A partir do livro1, crie um livro1Atualizado usando spread, alterando
apenas o autor para "Edição revisada" e adicionando uma nova propriedade
edicao: 2. Exiba livro1 e livro1Atualizado no console e confirme que o
original não foi alterado.
*/

function descreverLivro({ livro, autor }) {
    return `O livro ${livro} foi escrito por ${autor}`;
};

const livro1 = {
    livro: 'Nada pode me ferir',
    autor: "David Gogins"
};

const livro2 = {
    livro: 'Nunca e hora de parar',
    autor: "David Gogins"
};

const livro1Atualizado = {
    autor: 'Edição Revisada',
    edicao2: 'Teste',
    ...livro1
}

console.log(livro1);
console.log(livro1Atualizado)