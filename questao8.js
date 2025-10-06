const nota = 9
let  = "classificacao"

switch (true) {
    case (nota >= 9 && nota <= 10):
        console.log("A")
        break
    case (nota >= 7 && nota <= 8):
        console.log("B")
    case (nota >= 5 && nota <= 6):
        console.log("C")
    case (nota >= 3 && nota <= 4):
        console.log("D")
    case (nota >= 0 && nota <= 2):
        console.log("F")
}

console.log("Classificação: ", classificacao)