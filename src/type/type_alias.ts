type Uuid = number | string | null


function acessar(uuid: Uuid, nome: string) {
    console.log(`ID: ${uuid} - bem vindo ${nome}`)
}

function logarUsuario(uuid: Uuid){
    console.log(`conta referente ao UUID: ${uuid}`)
}

acessar(123, "galvao")

acessar(789,"souza")

logarUsuario(123)

type Moeda = "BRL" | "EUR" | "USD"

function comprarItem(moeda:Moeda) { 

}

comprarItem("BRL")