// Operadores de comparacao comparam um valor á outro
/*

Operador de igualdade: ==, Compara apenas o valor, ignora
o tipo, ou seja so quer saber se o valor de x e igual ao
valor de y, ele nao liga se x tem o tipo diferente de
y, ele so quer saber se o valor de x e y sao iguais

Operador de igualdade restrita: ===, Compara valor e tipo,
ex: x === y, <- x é exatamente igual a y? ou seja se tivermos
uma variavel: let x = 10; e: let y = '10'; o operador === retorna
false, x e y podem ter o mesmo valor, porem nao sao exatamente
iguais, pois tem o tipo difernete, entao === compara valor e tipo;

Operador de diferente e diferenca estrita seguem a mesma logica
do operador de igualdade, porem aplicando o contexto de diferenca,
entao: != compara se os valores sao diferentes, independente do tipo;
e !== compara se o valor e o tipo é diferente

Operador maior que: compara se algo é maior que algo

Operador maior ou igual: compara se algo é maior ou igual que algo

Operador menor que: compara se algo é menor que algo

Operador menor ou igual: compara se algo é menor ou igual que algo

*/

const idadeVinny = 36;
const idadePedro = 16;

// Operador de igualdade - A idade do Vinny e a do Pedro sao iguais?
const asIdadesSaoIguais = idadeVinny == idadePedro;

if(asIdadesSaoIguais) {
    console.log(`Sim, as idades sao iguais, ambos tem ${idadePedro} anos`)
} else {
    console.log(`Não, as idades nao sao iguais, Pedro tem ${idadePedro} anos e o Vinny tem ${idadeVinny} anos`)
}

// Operador maior que - A idade do Vinny e maior doque a idade do Pedro?
// O operador menor que segue a mesma logica
if(idadeVinny > idadePedro) {
    console.log(`Sim a idade do Vinny é maior, Vinny tem ${idadeVinny} e o Pedro tem ${idadePedro}`)
} else {
    console.log(`Não, a idade do Vinny nao é maior doque a do Pedro, Pedro tem ${idadePedro} e Vinny tem ${idadeVinny}`)
};

// Operador maior ou igual - Pedro é maior de idade?
// O operador menor ou igual segue a mesma logica
// Para sabermos, se pedro tiver a idade MAIOR OU IGUAL que 18, sim
const pedroEhMaiorDeIdade = idadePedro >= 18;

if(pedroEhMaiorDeIdade) {
    console.log(`Ja conseguiu a primeira vaga Pedrao?`)
} else {
    console.log(`Vai Pedrao, ta com ${idadePedro} anos, estuda cara`)
};


