/*
Um objeto é uma estrutura de dados que agrupa dados relacionados
a um contexto em formato de pares: chave e valor

ao inves de criarmos 5 variaveis diferente para agruparmos
informacoes de um USUARIO, criamos um objeto USUARIO
*/

let usuario = {
    nome: 'Pedro',
    idade: 16,
    trabalha: false,
    temCNH: false
};

// Podemos acessar as propriedades
console.log(`Nome do usuario: ${usuario.nome}`);

// Criando uma nova propriedade
usuario.sobrenome = 'Rossi';

console.log(`Sobrenome do usuario: ${usuario.sobrenome}`);

console.log('\n');

// Outro exemplo

const livro = {
    titulo: 'Nada pode me ferir',
    autor: 'David Goggins',
    paginas: 270
};

// podemos adcionar propriedades
livro.publicado = true;
livro.idiomas = [
    'Ingles', 'Portugues', 'Espanhol'
]