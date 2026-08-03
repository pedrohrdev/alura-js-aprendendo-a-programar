/*
9. Compra com saldo

Crie duas variáveis: saldoDisponivel e valorCompra. Se
o saldo for suficiente, mostre "Compra aprovada". Caso
contrário, "Saldo insuficiente".
*/

let saldoDisponivel = 49.9;
const valorCompra = 50;

if(saldoDisponivel - valorCompra >= 0) {

    saldoDisponivel -= valorCompra;
    console.log('Compra aprovada');

    console.log(`Seu saldo atual: ${saldoDisponivel}R$`);

} else {
    console.log(`Saldo insuficiente. \nValor da compra: ${valorCompra}\n Seu saldo: ${saldoDisponivel}\n Faltam ${(valorCompra - saldoDisponivel).toFixed(2)}R$ para voce poder comprar`)
};
