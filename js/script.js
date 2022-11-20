import { Modal } from './modal.js'
import {AlertError} from './alert-error.js'
import { NotANumber , IMC } from './utils.js'

// Variaveis que pegam os id do html
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight') 
const inputHeight = document.querySelector('#height')
const input = document.querySelector('input')

//funcao que pega o evento
form.onsubmit = function(event){
    event.preventDefault()

    const weight = inputWeight.value // o .value pega o valor colocado ou digitado 
    const height = inputHeight.value // o .value pega o valor colocado ou digitado 

    const showAlertError = NotANumber(weight) || NotANumber(height)

    if (showAlertError) {
        AlertError.open()
        return
    }

    AlertError.close() 

    const result = IMC(weight,height) // funcao que faz o calculo do imc em uma variavel result
    const message = `Seu IMC é de ${result}` // variavel message recebe o resultado do calculo realizado na funcçao

     displayresultMessage(message)
}

function displayresultMessage(message){
    Modal.message.innerText = message
    Modal.open()  
}




 
/* input.onkeyup = function(){
    AlertError.close()
}
 */
inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()