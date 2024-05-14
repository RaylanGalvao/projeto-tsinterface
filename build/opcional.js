"use strict";
const novoUsuario = {
    email: "g@gmail.com",
    status: true,
};
console.log(novoUsuario);
function novoUser(usuario) {
    console.log(usuario.email, usuario.status);
}
novoUser({ email: "silva@novoUser.com", status: false });
