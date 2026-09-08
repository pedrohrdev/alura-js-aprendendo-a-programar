/*
5. Spread operator com objetos
Crie dois objetos: um com nome e outro com idade. Combine-os em um terceiro objeto usando spread.
*/

const objetoComNome = {
    nome: 'Pedro',
};

const objetoComIdade = {
    idade: 16,
};

const objetoCompleto = {...objetoComNome, ...objetoComIdade};

console.log(objetoCompleto)