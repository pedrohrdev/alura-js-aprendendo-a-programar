// spread
let pedro1 = {
    nome: "Pedro",
    idade: 16,
    profissao: "Desenvolvedor"
};

// sobrescrevendo e adiconando propriedades

pedro1 = {
    ...pedro1,
    profissao: "CEO",
    possuiCNH: true
};

console.log(pedro1);

// rest
const { nome, ...restante } = pedro1;

console.log(nome);
console.log(restante);