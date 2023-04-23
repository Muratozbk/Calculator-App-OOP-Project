export default class Calculator {
    constructor(primeryOperandDisplay,
        secondaryOperandDisplay,
        operationDisplay) {
        this.primeryOperandDisplay = primeryOperandDisplay;
        this.secondaryOperandDisplay = secondaryOperandDisplay;
        this.operationDisplay = operationDisplay

        this.clear()
    }

    get primeryOperand() {
        return parseFloat(this.primeryOperandDisplay.dataset.value)
    }
    set primeryOperand(value) {
        //one is internal actual number value
        //second for display text content
        this.primeryOperandDisplay.dataset.value = value ?? '';
        this.primeryOperandDisplay.textContent = displayNumber(value);
    }

    get secondaryOperand() {
        return parseFloat(this.secondaryOperandDisplay.textContent)
    }
    set secondaryOperand(value) {
        this.secondaryOperandDisplay.dataset.value = value ?? '';
        this.secondaryOperandDisplay.textContent = displayNumber(value);
    }

    get operation() {
        return parseFloat(this.operationDisplay.textContent)
    }
    set operation(value) {
        this.operationDisplay.textContent = value ?? '';
    }

    addDigit(digit) {
        if (this.primeryOperand === 0) {
            this.primeryOperand = digit
            return
        }
        this.primeryOperand = this.primeryOperand.toString() + digit
    }

    clear() {
        this.primeryOperand = 0;
        this.secondaryOperand = null
        this.operation = null
    }
}

const NUMBER_FORMATTER = new Intl.NumberFormat('en', {
    maximumFractionDigits: 20
})
function displayNumber(number) {
    return NUMBER_FORMATTER.format(number)
}

//18:30 period . digit