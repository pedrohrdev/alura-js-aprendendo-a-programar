/*
2. Adicionar e remover itens

Comece com um array de frutas. Adicione uma nova
fruta ao final com push() e remova a primeira com
shift(). Mostre o array antes e depois.
*/

const frutas = ['Manga', 'Banana', 'Maça'];

// Array antes de nenhuma mudanca
console.log(frutas, '\n');

// Adcionando uva
frutas.push('Uva');
console.log(frutas, '\n');

// Removendo a manga
frutas.shift(0, 1);
console.log(frutas, '\n');