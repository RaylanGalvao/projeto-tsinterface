// let loja: object



interface LojaProps{
    nome: string
    endereço: string
    status: boolean
    produtoPromoção: string
}

// const Burguek1: LojaProps = {
//     nome: "burgue K",
//     endereço: "rua logo ali",
//     status: true,
//     produtoPromoção: "burgue duplo"
// }
// console.log(Burguek1)

function novaLoja({nome, endereço, status, produtoPromoção,}: LojaProps): void{
    console.log(`loja ${nome} criada com sucesso`)
    console.log(`endereço da loja ${endereço}`)
    console.log(`status da loga ${status}`)
    console.log(`promoção do dia ${produtoPromoção}`)

    console.log("------------------------------------------------")
}

novaLoja({nome:"subway", endereço:"rua tiu dos bangos tus dos bagos", status:true, produtoPromoção:"triplo bacon"})
novaLoja({nome:"burgue king", endereço:"rua dos doce", status: false, produtoPromoção:"x-burgue"})
