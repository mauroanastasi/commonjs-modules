function fullName(firstName,lastName){
    const nomeCompleto = {
        "firstName":firstName,
        "lastName":lastName
    }
    return nomeCompleto
}

const ilMioNome = fullName("Mauro","Anastasi")
console.log(ilMioNome)

module.exports = fullName;