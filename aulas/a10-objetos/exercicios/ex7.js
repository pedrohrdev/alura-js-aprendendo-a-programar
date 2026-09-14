/*
7. Filtrando maiores de idade
Percorra o array e exiba apenas os nomes das pessoas com 18 anos ou mais.
*/


const pessoas = [
    {
        nome: "Pedro",
        idade: 16
    },

    {
        nome: "Elon Musk",
        idade: 96
    },
    
    {
        nome: "Neymar",
        idade: 34
    },    
];

for(const pessoa of pessoas) {

    if(pessoa.idade >= 18) {
        console.log(pessoa.nome)
    }

}