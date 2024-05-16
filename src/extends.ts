 interface jogoProps {
    readonly id: string,
    nome: string, 
    descrição: string, 
    plataforma: string[],
}
const left4Dead: jogoProps = {
    id:"123",
    nome: "left 4 dead 2",
    descrição: "jogo de acao e tiro",
    plataforma: ["ps5", "pc"],
}

console.log(left4Dead)

interface DLC extends jogoProps {
    jogoOriginal:jogoProps
    novoConteudo: string[],
}

const left4DeadDLC: DLC = {
    id:"90",
    nome:"left Dead 4 - novo imperio",
    descrição:"4 novos mapas para jogar online",
    plataforma:["ps5", "PC"],
    novoConteudo:["modo coup", "mais 5 horas de jogo", "medalhas"],
    jogoOriginal:left4Dead,
}

console.log(left4DeadDLC)

