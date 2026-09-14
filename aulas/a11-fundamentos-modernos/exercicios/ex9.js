/*
9. Destructuring em parâmetros de função
Crie um objeto livro com titulo e autor. Crie uma função
descreverLivro que recebe o objeto já desestruturado nos
parâmetros ({ titulo, autor }) e retorna uma frase como "O livro
[titulo] foi escrito por [autor].". Teste chamando a função com
dois livros diferentes.
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


console.log(descreverLivro(livro1));
console.log(descreverLivro(livro2));