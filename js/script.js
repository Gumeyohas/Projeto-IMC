import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { notNumber, calculateIMC } from "./utils.js";

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

inputWeight.oninput = (e) => {
    if(!notNumber(e.target.value)) {
        AlertError.close();
        return;
    }
}
inputHeight.oninput = (e) => {
    if(!notNumber(e.target.value)) {
        AlertError.close();
        return;
    }
}

form.onsubmit = (e) => {
    e.preventDefault();
    
    const weight = inputWeight.value;
    const height = inputHeight.value;

    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height);

    if(weightOrHeightIsNotANumber) {
        AlertError.open();
        return;
    } 

    AlertError.close();

    const result = calculateIMC(weight, height);
    displayResultMessage(result);
}



function displayResultMessage(result) {
    Modal.result.innerText = `Seu IMC é de ${result}`;
    Modal.open();
}