/*
6. Média de notas:

Crie variáveis para três disciplinas: matematica, portugues
e ciencias, contendo suas respectivas notas. Calcule e mostre a média final com uma mensagem.
*/

const notaCienciasPrimeiroTri  = 8.5;
const notaMatematicaPrimeiroTri  = 6;
const notaPortuguesPrimeiroTri  = 5.6;

const media = ((notaCienciasPrimeiroTri + notaMatematicaPrimeiroTri + notaPortuguesPrimeiroTri).toFixed(2)) / 3;

console.log(`Media final: ${media}`)