// 2 - Dividindo uma conta
function dividirConta(preco) {
    //taxa de servico
    let taxa = preco * 0.10;

    // total
    let total = preco + taxa;

    // valor por pessoa
    let valorPorPessoa = total / 4;

    return valorPorPessoa.toFixed(2);
};

console.log(dividirConta(201.50))