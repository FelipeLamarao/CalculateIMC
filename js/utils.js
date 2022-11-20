//funcao que faz a verificaçao se é um numero ou não
export function NotANumber (value){
    return isNaN(value) || value == "" 
}

//funcao que faz o calculo de IMC
export function IMC(weight,height){
    return (weight / ((height / 100) ** 2)) .toFixed(2)
}