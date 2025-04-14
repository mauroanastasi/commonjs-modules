function info(firstName,lastName){
    const nomeCompleto = {
        "firstName":firstName,
        "lastName":lastName
    }
    return nomeCompleto
}

const ilMioNome = info("Mauro","Anastasi")
console.log(ilMioNome)