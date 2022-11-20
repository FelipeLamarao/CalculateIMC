export const Modal = {

    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose:document.querySelector('.modal button.close'),

    open(){
        Modal.wrapper.classList.add('open')// adiciona a classe no wrapper
    },
    close(){
        Modal.wrapper.classList.remove('open')// retira a classe no wrapper
    }
}

//funcao que pega o evento de fechar o modal
Modal.buttonClose.onclick = () => {
    Modal.close()
}

window.addEventListener('keydown',handleKeydown)

function handleKeydown(event){
    if (event.key == 'Escape') {
        Modal.close()
    }
}