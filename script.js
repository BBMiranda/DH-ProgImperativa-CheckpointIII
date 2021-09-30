const produtos = require('./dados');

// 2º


function filtrar(item) {
    return item.valor >= 482 && item.valor <= 1600 && item.qualidade > 6 && item.status === true;
};


let carrinho = produtos.filter(filtrar)

console.log(carrinho);
console.table(carrinho);

// 3º
const valorTotal = carrinho.reduce(function(acumulador, valorAtual) {
    return acumulador.valor + valorAtual.valor;
}); 

console.log(`O valor total dos produtos no carrinho é de R$ ${valorTotal},00`)





