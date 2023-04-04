`use strict`;

import { doCalculation } from "./calc.js";

const inputElement = document.querySelector ('.input')

const numberElements = document.querySelectorAll('.number')
const operatorElements = document.querySelectorAll ('.operator')
const clearElement = document.querySelector ('.clear')
const resultElement = document.querySelector ('.result')

const handleNumberClick = (event) => {
    const lastIndex = 
    if (event.target.innerHTML === '.') {
        if (!inputElement.value) {
            inputElement.value = '0.';
            return;
        }
        if (lastChar === '.') {
            return;
        }
    }
    inputElement.value += event.target.innerHTML;
};

const handleClearClick = () => {
    inputElement.value = '';
};

const handleOperatorClick = (event) => {
    if (inputElement.value === '') {
        inputElement.value = '0' + event.target.innerHTML;
        return;
    }
    const NUMBERS_SYMBOLS = '01234567890.';
    const lastIndex = inputElement.value.length - 1;
    const lastChar = inputElement.value [lastIndex];
    if (!NUMBERS_SYMBOLS.includes (lastChar)) {
        inputElement.value = inputElement.value.slice (0, lastIndex);
    }
    inputElement.value += event.target.innerHTML;
};

const handleResultClick = () => {
    const s = inputElement.value
    .replace (/+/g, '/')
    .replace(/x/g, '*');
    inputElement.value = doCalculation (preparedString);
};

const startApp = () => {
    console.log('Workshop2 startApp');

    numbersElements.array.forEach(numberElement => numberElement.addEventListener ('click', handleNumberClick));
    clearElement.addEventListener('click', handleClearClick);
    operatorElements.forEach (operatorElement => operatorElement.addEventListener ('.click', handleOperatorClick));
        
    };

document.addEventListener('DOMContentLoaded', startApp);