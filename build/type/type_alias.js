"use strict";
function acessar(uuid, nome) {
    console.log(`ID: ${uuid} - bem vindo ${nome}`);
}
function logarUsuario(uuid) {
    console.log(`conta referente ao UUID: ${uuid}`);
}
acessar(123, "galvao");
acessar(789, "souza");
logarUsuario(123);
function comprarItem(moeda) {
}
comprarItem("BRL");
