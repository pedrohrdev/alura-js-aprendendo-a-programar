const livro = {
    titulo: "Nada pode me ferir",
    autor: "David Goggins",
    paginas: 270
};

console.log(livro);

console.log('\n', '============ ALTERAÇÃO ============', '\n');

livro.publicado = true;
livro.idiomas = [
    'Ingles', 'Portugues', 'Espanhol'
];

livro.idiomas.push('Mandarim');

console.log(livro);

console.log('\n', '============ ALTERAÇÃO ============', '\n');

// Podemos deletar propriedades
delete livro.paginas;
console.log(livro)