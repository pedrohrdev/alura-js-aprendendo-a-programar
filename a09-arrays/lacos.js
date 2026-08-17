const frutas = ['Uva', 'Banana', 'Kiwi', 'Maça', 'Morango'];
const nomes = ['Pedro', 'Kauan', 'Joao'];

console.log(frutas);

// Removendo um item(ou mais)

frutas.splice(0, 1); // Posicao, quantidade a remover

console.log(`Array depois de remover: `, frutas); // Poderia ter colocado dentro da str porem quero exibir no mesmo formato de cima

// Percorrendo o array com o for convencional

// for(let i = 0; i < frutas.length; i++) {
//     console.log(`Indice: ${i}, item: ${frutas[i]}`)
// }

// usando forEach, quando queremos usar o indice tambem
frutas.forEach((valor, indice) => {
    console.log(`Indice: ${indice}, valor: ${valor}`)
});

console.log('\n');

// Usando for of, quando nao ligamos pro indice
for(const nome of nomes) {
    console.log(nome)
}