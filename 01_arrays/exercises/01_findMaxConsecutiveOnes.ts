function findMaxConsecutiveOnes(numbersArray: number[]) {
    let maxOnes = 0 // Max number of consecutives ones finded
    let countOnes = 0 // Actual sequential

    for (let value of numbersArray) {
        if (value === 1) {
            countOnes++
        }

        if (value !== 1 && countOnes > 0) {
            if (countOnes > maxOnes) {
                maxOnes = countOnes
            }

            countOnes = 0
        }
    }

    if (countOnes > maxOnes) {
        maxOnes = countOnes
    }

    return maxOnes
}