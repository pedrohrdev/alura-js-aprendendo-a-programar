// ## 08 — Distribuição de dinheiro

function distribuirDinheiro(valor) {

    let quantidadeFuncionarios = 7;
    let valorFuncionario = Math.floor(valor / quantidadeFuncionarios);
    let sobraParaEmpresa = valor % quantidadeFuncionarios;

    console.log(`Cada funcionário recebe: R$${valorFuncionario}`);
    console.log(`Sobra para a empresa: R$${sobraParaEmpresa}`)

};

distribuirDinheiro(123);
distribuirDinheiro(7000);
distribuirDinheiro(10000);