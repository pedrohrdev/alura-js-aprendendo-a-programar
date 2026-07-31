/* Ja com let e const, nao tem o mesmo padrao, pois o
var tem o escopo global, ou seja, ele consegue ser alterado
em qualquer momento no codigo, let e const nao, eles tem escopo
de bloco, logo quando voce tenta acessar uma variavel com let ou const antes
da sua atribuicao vai retornar reference error pois voce nao a declarou ainda
*/

console.log(nome);

let nome = "Romario"