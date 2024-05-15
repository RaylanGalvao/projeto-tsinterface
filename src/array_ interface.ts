// interface tecnologiasProps{
//     id: string,
//     nome: string,
//     slug: (string | number)[],
// }
// let tecnologia1: tecnologiasProps = {
//     id: "asd",
//     nome: "java",
//     slug: ["java script", "java", 123]
// }

// console.log(tecnologia1)

interface tecnologiasProps{
    id: string,
    nome: string,
    descricao?: string,
}
interface NomeProps{
    tecnologia: tecnologiasProps[]
}
let frontEnd: NomeProps = {
    tecnologia: [
        {id: "12", nome: "react", descricao: "biblioteca para criar interface"},
        {id: "43", nome: "vale", descricao: "empresa de mineracao"},
    ]
}

console.log(frontEnd.tecnologia)
