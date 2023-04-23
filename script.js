import Calculator from "./Calculator.js"

//Actions
//1.Click a number----
//2.Click clear button---
//3.Click delete----
//4.Click an operation----
//5.Click the period button----
//6.Click equals-----

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const secondaryOperandDisplay = document.querySelector(
    '[data-previous-operand]')
const primeryOperandDisplay = document.querySelector(
    '[data-current-operand]')
const operationDisplay = document.querySelector('[data-operation]')


const calculator = new Calculator(
    primeryOperandDisplay,
    secondaryOperandDisplay,
    operationDisplay
)

document.addEventListener('click', e => {
    if (e.target.matches('[data-all-clear]')) {
        calculator.clear()
    }
    if (e.target.matches('[data-number]')) {
        calculator.addDigit(e.target.textContent)
    }
    if (e.target.matches('[data-delete]')) {
        calculator.removeDigit()
    }
    if (e.target.matches('[data-operation]')) {
        calculator.chooseOperation(e.target.textContent)
    }
    if (e.target.matches('[data-equals]')) {
        calculator.evaluate()
    }
})