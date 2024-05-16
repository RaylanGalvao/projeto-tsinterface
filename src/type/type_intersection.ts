//type alias cinseguimos criar tipos mais poderosos, com mais= iniformações do que os tipos primitivos

type Info = {
    id: number,
    nome: string,
    descrição?: string,
}

const produtoInfo: Info = {
     id: 123,
     nome: "placa de video",
    //  descrição:"placa gtx 2090",
}

type Categoria = {
    slug: string,
    quantidadeProduto: number,
}

const Categoria1: Categoria = {
    slug:"hardware",
    quantidadeProduto:2,
}

type produtoInfo = Info & Categoria


const produto2: produtoInfo = {
    id:123,
    nome:"ra",
    quantidadeProduto:2,
    slug:"marca",
    descrição:"melhor da regiao"
} 

console.log(produto2)