// ## 05 — Caixa de produtos


function organizarProdutos(quantidadeDeProdutos) {

    // Cada caixa cabe 12 produtos

    let caixas = Math.floor(quantidadeDeProdutos / 12);
    let vaoSobrarProdutos = quantidadeDeProdutos % caixas;

    console.log(`${caixas} caixas completas\n${vaoSobrarProdutos} produtos sobrando\n`);
};

organizarProdutos(157);
organizarProdutos(9999);
organizarProdutos(242);