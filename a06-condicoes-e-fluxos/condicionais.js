/*

As condicionais permitem tomar-mos condicoes
no nosso codigo, sendo assim possivel deixar
o codigo com muito mais funcionalidades.

Vamos enxergar um cenário real:

Um aluno tirou 3 notas, dependendo da sua media,
ele passa ou nao de ano, e também dependendo da
sua media ele recebe uma mensagem diferente.

Vamos pensar assim:

 -- Se o aluno tirou entre 0 e 3
 ele reprovou, e ele tem uma mensagem do
 tipo: "Se esforce mais, voce tirou 2!";

 -- Se o aluno tirou entre 4 e 5 ele
 reprovou, porem ele recebe: "Voce reprovou
 por pouco, se esforçe mais, voce é capaz!";

 -- Se ele tirou entre 6 e 7 ele 
 passou de ano e recebe uma mensagem do tipo:
 "Parabens! voce passou de ano, e tirou uma nota legal"

 -- Se ele tirou entre 8 e 9, obviamente passou de ano
 e recebe: "Parabens! voce passou de ano e tirou um notão";

 -- Se ele tirou uma nota maior que 9, passou de ano
 e recebe uma mensagem do tipo: "Voce passou de ano!
 parabens! voce tirou uma nota excelente!"


 Percebe que queremos tomar decisoes com base em casos
 especificos? se uma nota for x, acontece isso, se uma nota for
 y, acontece z. É pra isso que as condicionais servem, tomar
 decisoes no codigo seguindo um fluxo com base em uma condicao.

*/

const notaMinimaParaPassar = 6;
const notaUm = 8.8;
const notaDois = 4.5;
const notaTres = 6;

let faltouPraPassar = null;
let mensagemFinal = null; // Ausencia proposital de valor

const media = ((notaUm + notaDois + notaTres) / 3).toFixed(1); // Com base naquelas notas, a media é de 6.4

if(media > 9) {

    mensagemFinal = `Parabens! você passou de ano e tirou uma nota excelente! \n Sua nota: ${media}`;

} else if(media >= 8) {

    mensagemFinal = `Parabens! voce passou de ano e tirou um notão! \n Sua nota: ${media}`;

} else if(media >= 6) {

    mensagemFinal = `Parabens! voce passou de ano, e tirou uma nota legal \n Sua nota; ${media}`;

} else if(media >= 4) {

    mensagemFinal = `Voce reprovou por pouco, se esforçe mais, voce é capaz! \ Sua nota: ${media}, faltou apenas ${notaMinimaParaPassar - media}`

} else {

    mensagemFInal = `Se esforce mais, voce tirou ${media}!`

};

console.log(mensagemFinal)