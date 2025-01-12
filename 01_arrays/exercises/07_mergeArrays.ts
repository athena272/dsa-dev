function mergeArrays(arr1: number[], lengthArr1: number, arr2: number[], lengthArr2: number) {
    for (let i = 0; i < lengthArr2; i++) {
        arr1[i + lengthArr1] = arr2[i];
    }

    return arr1.sort((a, b) => a - b)
}

console.log("🚀 ~ mergeArrays([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3):", mergeArrays([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))

console.log("🚀 ~ mergeArrays([1], 1, [], 0):", mergeArrays([1], 1, [], 0))

console.log("🚀 ~ mergeArrays([0], 0, [1], 1):", mergeArrays([0], 0, [1], 1))
