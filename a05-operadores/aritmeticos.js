const numeroUm = 50;
const numeroDois = 10;

const subtracao = numeroUm - numeroDois;
const adicao = numeroUm + numeroDois;
const multiplicacao = numeroUm * numeroDois;
const divisao = numeroUm / numeroDois;

console.log(`Subtração: ${subtracao}`);
console.log(`Adição: ${adicao}`);
console.log(`Multiplicação: ${multiplicacao}`);
console.log(`Divisão: ${divisao}`);

console.log('=============================== \n');

const contaComplexa = numeroUm - numeroDois * numeroUm;
// Isso aqui pela ordem de precedencia dos operadores
// acontece primeiro -> numeroDois * numeroUm
//                         10          50
console.log(contaComplexa);

// Agora se quisermos que em uma operacao, algo seja calculado primeiro, basta usar os parenteses ()
const contaComplexaComRegra = (numeroUm - numeroDois) * numeroUm;
//                              (  50    -    10  )  *    50
//                                      40   *    50
console.log(contaComplexaComRegra);


console.log('=============================== \n');
// Tambem temos o operador resto da divisao, que
// literalmente executa uma divisao e se houver
// resto retorna 1, se ou houver, retorna zero
const resto = 12 % 2; // O resto da divisao de 12 por 2 é 0;
console.log(resto);

// Tambem temos o operador de potenciacao
const potencia = 2 ** 3; // 2 Ekevado a 3
console.log(potencia);
console.log('=============================== \n');



console.log('=============================== \n');
// Operador de incremento e decremento:
let contador = 5;
++contador;

console.log(contador);

--contador;

console.log(contador);

console.log('=============================== \n');