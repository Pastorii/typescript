//let estaPago = true;

//let idade = 31;

//let valor = 29.99;

//let empresa = "Unopar Arapongas"

//let nome = 'Matheus'

//let alunos = ['Matheus', 10 , 'POO']

let cor;
(function (cor: any) {
    cor[cor["Azul"] = 50] = "Azul";
    cor[cor["Vermelho"] = 60] = "Vermelho";
    cor[cor["Verde"] = 70] = "Verde";
})

(cor || (cor = {}));
let corFundo = cor.Azul;



//console.log(estaPago);
//console.log(idade);
//console.log(valor);
//console.log(empresa);
//console.log(` Meu nome é ${nome}, e tenho ${idade} anos `);
//console.log(alunos);
//console.log(alunos[2]);
console.log(corFundo);