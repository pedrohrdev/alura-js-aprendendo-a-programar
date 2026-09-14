// AND -  Quando as duas condicoes tem que ser verdadeiras
const ehMaiorDeIdade = true;
const temCNH = false;

const podeDirigir = ehMaiorDeIdade && temCNH;

if(podeDirigir) {
    console.log(`Voce pode dirigir!`)
} else {
    console.log(`Voce nao pode dirigir`)
}

// OR - Quando apenas uma condição tem que ser verdadeira
const temMaca = false;
const temLaranja = false;
const podeComprar = temMaca || temLaranja;

if(podeComprar) {
    console.log(`Pode comprar`)
} else {
    console.log(`Nao pode comprar`)
}

// NOT - Inverte o valor
let carrinho = [];

function finalizarComprar(carrinho) {
    if(!carrinho.length) {
        console.log('Seu carrinho esta vazio');
        return;
    };

    if(carrinho.length > 1) {
        console.log(`Finalizando compra com ${carrinho.length} itens`)
    } else {
        console.log(`Finalizando compra com 1 item`)
    }
};

finalizarComprar(carrinho);

carrinho.push('Monster');

finalizarComprar(carrinho)