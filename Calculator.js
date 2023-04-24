export default class Calculator {
    constructor(primeryOperandDisplay,
        secondaryOperandDisplay,
        operationDisplay) {
        this.#primeryOperandDisplay = primeryOperandDisplay;
        this.#secondaryOperandDisplay = secondaryOperandDisplay;
        this.#operationDisplay = operationDisplay
        this.clear()
    }
    #primeryOperandDisplay
    #secondaryOperandDisplay
    #operationDisplay

    get primeryOperand() {
        return parseFloat(this.#primeryOperandDisplay.dataset.value)
    }
    set primeryOperand(value) {
        this.#primeryOperandDisplay.dataset.value = value ?? ''
        this.#primeryOperandDisplay.textContent = displayNumber(value)
    }
    get secondaryOperand() {
        return parseFloat(this.#secondaryOperandDisplay.dataset.value)
    }
    set secondaryOperand(value) {
        this.#secondaryOperandDisplay.dataset.value = value ?? '';
        this.#secondaryOperandDisplay.textContent = displayNumber(value)
    }
    get operation() {
        return this.#operationDisplay.textContent
    }
    set operation(value) {
        this.#operationDisplay.textContent = value ?? '';
    }

    addDigit(e) {
        if (e === '.' &&
            this.#primeryOperandDisplay.dataset.value.includes('.')) {
            return
        }
        if (this.#primeryOperandDisplay.dataset.result) {
            this.#primeryOperandDisplay.dataset.result = ''
            this.primeryOperand = e
            return
        }
        if (this.primeryOperand === 0) {
            this.primeryOperand = e
            return
        }
        this.primeryOperand =
            this.#primeryOperandDisplay.dataset.value + e;
    }

    evaluate() {
        let result;
        switch (this.operation) {
            case 'x':
            case '*':
                result = this.secondaryOperand * this.primeryOperand;
                break
            case '÷':
                result = this.secondaryOperand / this.primeryOperand
                break
            case '+':
                result = this.secondaryOperand + this.primeryOperand
                break
            case '-':
                result = this.secondaryOperand - this.primeryOperand
                break
            default: return
        }
        this.clear()
        this.primeryOperand = result
        return result

    }
    finish() {
        this.#primeryOperandDisplay.dataset.result = true
    }

    chooseOperation(operation) {
        if (this.operation) {
            this.evaluate()
        }
        this.secondaryOperand = this.primeryOperand
        this.primeryOperand = 0;
        this.operation = operation

    }

    removeDigit() {
        if (this.#primeryOperandDisplay.dataset.value.length <= 1) {
            this.primeryOperand = 0
            return
        }
        this.primeryOperand =
            this.#primeryOperandDisplay.dataset.value.slice(0, -1)
    }

    clear() {
        this.secondaryOperand = null
        this.operation = null
        this.primeryOperand = 0;
        this.#primeryOperandDisplay.dataset.result = ''
    }
}

const NUMBER_FORMATTER = new Intl.NumberFormat('en')
function displayNumber(number) {
    const stringNumber = number?.toString() || '';
    if (stringNumber === '') return '';
    const [integer, decimal] = stringNumber.split('.');
    const formattedInteger = NUMBER_FORMATTER.format(integer);
    if (decimal == null) return formattedInteger
    return formattedInteger + '.' + decimal.slice(0, 7)
}

