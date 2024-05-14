"use strict";
function mostraPromocao(preço) {
    console.log(`promocao do curso por apenas R$ ${preço}`);
}
const novoCurso = {
    id: "i",
    nome: "curso full",
    preço: 765,
    promocao: mostraPromocao
};
console.log(novoCurso);
console.log(novoCurso.promocao(350));
console.log("======================================================================");
let somaNumeros = (valor1, valor2) => {
    console.log(`resultado`, valor1 + valor2);
    return valor1 + valor2;
};
const resultado = somaNumeros(15, 10);
console.log(`resultado da variavel`, resultado);
