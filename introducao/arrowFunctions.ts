const precos = [2,5,10,20,30,40,50,60];

const valoresReais = precos.map(function(preco){
    //return 'R$' + precos + ',00';
    return `R$ ${preco},00`;

})

const precoReais = precos.map(preco => 'R$' + preco + ',00');

const acimavinte = precos.filter(preco => preco > 20).map(preco => `R$ ${preco},00`);
const menorVinte = precos.filter(preco => preco < 20).map(preco => `R$ ${preco},00`);

console.log(acimavinte);
console.log(menorVinte);
    

