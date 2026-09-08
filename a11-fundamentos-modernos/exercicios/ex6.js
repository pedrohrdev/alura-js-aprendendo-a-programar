/*
6. Função com parâmetro default
Crie uma função que recebe um nome e imprime "Olá, [nome]". Se o nome não for passado, use "visitante" como valor padrão.
*/

function saudacao(nome = "Visitante") {
    return `Olá ${nome}`;
};

console.log(saudacao('Pedro'));
console.log(saudacao());