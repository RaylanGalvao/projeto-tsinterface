interface cursoProps{
    id: string, 
    nome: string, 
    preço: number,

    //definir apenas  a funcao e o que ela deve esperar e retornar
    promocao: (preco: number) => void
}

function mostraPromocao(preço: number): void{
    console.log(`promocao do curso por apenas R$ ${preço}`)
}

const novoCurso: cursoProps = {
    id: "i",
    nome: "curso full",
    preço: 765, 
    promocao: mostraPromocao
}

console.log(novoCurso)
console.log(novoCurso.promocao(350))

console.log("======================================================================")

interface somaProps {
    (valor1: number, valor2: number): number
}
let somaNumeros: somaProps = (valor1:number, valor2:number):number => {
    console.log(`resultado`, valor1 + valor2)

    return valor1+valor2

}

const resultado = somaNumeros(15,10)

console.log(`resultado da variavel`, resultado)
