interface produtoProps{
    readonly id: string,
    nome: string,
    descricao: string,
}

let produto1: produtoProps = {
    id: "r",
    nome: "tenis nike",
    descricao: "super tenis descolado",
}

console.log(produto1)
 
produto1.nome = "tenis adidas"

console.log(produto1)