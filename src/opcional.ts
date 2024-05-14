interface CadastroProps{
    nome?: string
    email: string
    status: boolean
}

const novoUsuario: CadastroProps = {
    
    email: "g@gmail.com",
    status: true,
}

console.log(novoUsuario)


function novoUser(usuario: CadastroProps){
    console.log(usuario.email, usuario.status)
}

novoUser({email: "silva@novoUser.com", status: false})