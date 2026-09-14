const pessoa = {
    nome: "Pedro",
    idade: 16,
    nacionalidade: "Brasileiro",
    stack: ['TypeScript', 'NodeJS', 'Express', 'React', 'PostgreSQL', 'Claude']
};

// for(const chave in pessoa) {
//     console.log(`Chave: ${chave} \nValor: ${pessoa[chave]}`)
// };

// Pega so as chaves do objeto
const chaves = Object.keys(pessoa);

// Pega so os valores do objeto
const valores = Object.values(pessoa);

// Pega chave e valor, e retorna um array de arrays
const entradas = Object.entries(pessoa);

console.log(chaves, '\n');
console.log(valores, '\n');
console.log(entradas);