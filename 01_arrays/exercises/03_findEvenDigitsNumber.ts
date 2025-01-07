function getEvenDigitsNumbers(array: number[]) {
    let numbersWithEvenDigits = 0
    for (let number of array) {
        const quantityDigits = number.toString().length
        if (quantityDigits % 2 === 0) {
            numbersWithEvenDigits++
        }
    }

    return numbersWithEvenDigits
}

console.log("🚀 ~ getEvenDigitsNumbers([12,345,2,6,7896]):", getEvenDigitsNumbers([12,345,2,6,7896]))
console.log("🚀 ~ getEvenDigitsNumbers([555,901,482,1771]):", getEvenDigitsNumbers([555,901,482,1771]))
