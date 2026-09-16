// 08 — Divisão de dinheiro

let valorTotal = 67412;
let quantidadeDePessoas = 67;
let quantiaPorPessoa = valorTotal / quantidadeDePessoas;

let sobra = 0;

console.log(`Total: R$ ${valorTotal}`);
console.log(`Pessoas: ${quantidadeDePessoas}`);
console.log(`\nCada pessoa recebe: ${quantiaPorPessoa.toFixed(2)}`);

if(valorTotal % quantidadeDePessoas !== 0) {
    sobra = valorTotal / quantiaPorPessoa;
    console.log(`Sobra: R$ ${sobra}`)
};