// Criar novas constantes com base em propriedades de um objeto

const pessoa = {
    nome: "Pedro",
    idade: 26,
    profissao: "Estudante"
};

function saudacao({ nome, idade }){
    console.log(`Olá ${nome}`);

    if(idade >= 18) {
        console.log(`Já é maior de idade né ${nome}`)
    }
};

saudacao(pessoa);

const frutas = ["Banana", "Maça", "Uva", "Pera"];

const [primeiraFruta, segundaFruta, ...resto] = frutas;

console.log(`${primeiraFruta}, ${segundaFruta}`);
