const tipoCliente = "estudante"
let desconto

switch (tipoCliente) {
    case ('estudante'):
        console.log(0.3)
        break
    case ('aposentado'):
        console.log(0.3)
    case ('regular'):
        console.log(0)
}

console.log("Desconto: ", desconto)