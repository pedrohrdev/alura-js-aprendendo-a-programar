const frutas = ['Maçã', 'Banana', 'Goiaba'];

const maisFrutas = ['Uva', 'Pera'];

// Criando outro array com os mesmos elementos do array frutas
const clone = [...frutas];

frutas.push("Manga");

const todasAsFrutas = [...frutas, ...maisFrutas]

console.log(todasAsFrutas)

// console.log(clone)