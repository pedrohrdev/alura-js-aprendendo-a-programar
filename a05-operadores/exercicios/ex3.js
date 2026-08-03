/*
3. Simulação de troco
Crie uma variável valorCompra com 35.90 e valorPago com 50. Calcule e mostre o troco a ser devolvido.
*/

const valorCompra = 35.90;
const valorPago = 50;
const troco = (valorPago - valorCompra).toFixed(2);

console.log(`Deu ${troco}R$ de troco`)