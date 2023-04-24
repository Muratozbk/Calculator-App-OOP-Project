// export default class Calculator {
//     constructor(primeryOperandDisplay,
//         secondaryOperandDisplay,
//         operationDisplay) {
//         this.#primeryOperandDisplay = primeryOperandDisplay;
//         this.#secondaryOperandDisplay = secondaryOperandDisplay;
//         this.#operationDisplay = operationDisplay

//         this.clear()
//     }
//     #primeryOperandDisplay
//     #secondaryOperandDisplay
//     #operationDisplay

//     get primeryOperand() {
//         return parseFloat(this.#primeryOperandDisplay.dataset.value)
//     }
//     set primeryOperand(value) {
//         //one is internal actual number value
//         //second for display text content
//         this.#primeryOperandDisplay.dataset.value = value ?? '';
//         this.#primeryOperandDisplay.textContent = displayNumber(value);
//     }

//     get secondaryOperand() {
//         return parseFloat(this.#secondaryOperandDisplay.textContent)
//     }
//     set secondaryOperand(value) {
//         this.#secondaryOperandDisplay.dataset.value = value ?? '';
//         this.#secondaryOperandDisplay.textContent = displayNumber(value);
//     }

//     get operation() {
//         return this.#operationDisplay.textContent
//     }
//     set operation(value) {
//         this.#operationDisplay.textContent = value ?? '';
//     }

//     addDigit(digit) {
//         if (digit === '.' &&
//             this.#primeryOperandDisplay.dataset.value.includes('.')) {
//             return
//         }
//         if (this.primeryOperand === 0) {
//             this.primeryOperand = digit
//             return
//         }
//         console.log(this.#primeryOperandDisplay.dataset.value)
//         this.primeryOperand =
//             this.#primeryOperandDisplay.dataset.value + digit
//     }

//     removeDigit() {
//         const numberString = this.#primeryOperandDisplay.dataset.value
//         if (numberString.length <= 1) {
//             this.primeryOperand = 0;
//             return
//         }
//         this.primeryOperand = numberString.substring(0, numberString.length - 1)
//         // this.primeryOperand = numberString.slice(0, -1)
//     }

//     evaluate() {
//         let result;
//         switch (this.operation) {
//             case '*':
//                 result = this.secondaryOperand * this.primeryOperand
//                 break
//             case '÷':
//                 result = this.secondaryOperand / this.primeryOperand
//                 break
//             case '+':
//                 result = this.secondaryOperand + this.primeryOperand
//                 break
//             case '-':
//                 result = this.secondaryOperand - this.primeryOperand
//                 break
//             default:
//                 return
//         }
//         this.clear()
//         this.primeryOperand = result
//         return result
//     }

//     // chooseOperation(operation) {
//     //     if (!this.operation) {
//     //         this.operation = operation;
//     //         this.secondaryOperand = this.primeryOperand
//     //         this.primeryOperand = 0
//     //     }
//     //     console.log(operation)
//     // }
//     chooseOperation(operation) {
//         if (this.operation) {
//             this.evaluate();
//         }
//         this.operation = operation;
//         this.secondaryOperand = this.primeryOperand;
//         this.primeryOperand = 0;
//     }


//     clear() {
//         this.primeryOperand = 0;
//         this.secondaryOperand = null
//         this.operation = null
//     }
// }

// const NUMBER_FORMATTER = new Intl.NumberFormat('en')
// function displayNumber(number) {
//     const stringNumber = number?.toString() || '';
//     if (stringNumber === '') return ''
//     const [integer, decimal] = stringNumber.split('.');
//     const formattedInteger = NUMBER_FORMATTER.format(integer)
//     // console.log(integer, decimal)
//     if (decimal == null) return formattedInteger
//     return formattedInteger + '.' + decimal
// }


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
        if (this.primeryOperand === 0) {
            this.primeryOperand = e
            return
        }
        this.primeryOperand =
            this.#primeryOperandDisplay.dataset.value + e;
    }

    clear() {
        this.secondaryOperand = null
        this.operation = null
        this.primeryOperand = 0;
    }
}


const NUMBER_FORMATTER = new Intl.NumberFormat('en')
function displayNumber(number) {
    const stringNumber = number?.toString() || '';
    if (stringNumber === '') return '';
    const [integer, decimal] = stringNumber.split('.');
    const formattedInteger = NUMBER_FORMATTER.format(integer);
    if (decimal == null) return formattedInteger
    return formattedInteger + '.' + decimal
}




// let num1 = "3.14";
// console.log(parseFloat(num1)); // Output: 3.14

