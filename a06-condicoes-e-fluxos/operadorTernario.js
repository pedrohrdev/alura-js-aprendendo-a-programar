/*

Vamos usar outra maneira de escrever if, else if e else,
o operador ternario

*/

let idade = 9;
let ehMaiorDeIdade = idade >= 18 ? 'Maior de idade' : 'Menor de idade';
console.log(ehMaiorDeIdade);

// No cenario acima so tinhamos 2 condicoes, agora 
// em um cenario de msotrar mensagens diferentes 
// com base em uma nota, ate funciona, porem fica
// dificil de ler

const notaFinal = 3.5;

const mensagemFinal = 
    notaFinal > 9 ? 'Excelente' :
        notaFinal >= 8 ? 'Otimo' :
            notaFinal >= 6 ? 'Ok':
                notaFinal >= 3 ? 'Ruim' : 'Pessimo';

console.log(mensagemFinal);

// Perceba que ao rodar o codigo, vai funcionar, porem ta meio ruim de ler, 
// Usando if, else if e else o codigo ficaria melhor na minha opiniao, NESTA SITUACAO