

// variáveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const error = document.querySelector(".error")

const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal  span')
const modalBtnClose = document.querySelector('.modal button.close')
const Modal = {
    open() {modalWrapper.classList.add('open')},
    close() {modalWrapper.classList.remove('open')}
}

inputHeight.addEventListener('click',() => {

error.classList.add('hide')})

inputWeight.addEventListener('click',() => {

    error.classList.add('hide')})

form.onsubmit = event => {
    event.preventDefault()

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);
    const result = IMC(weight, height)

    if(result == 'NaN')   
    {  error.classList.remove('hide')}
    

    else{
        const message = ` O seu IMC é ${result}`
        modalMessage.innerText = message
        error.classList.add('hide')
        Modal.open(); }
      
        }
    
  
    


modalBtnClose.onclick = () => {
    
    Modal.close();
}

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}