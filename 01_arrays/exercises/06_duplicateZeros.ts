function duplicateZeros(array: number[]) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === 0) {
            for (let j = array.length - 2; j > i; j--) {
                array[j + 1] = array[j] //shift right
            }
            array[i + 1] = 0 // array[i], always will be 0
            i++
        }
    }

    return array
}

duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])
console.log("🚀 ~ duplicateZeros([1,0,2,3,0,4,5,0]):", duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]))
