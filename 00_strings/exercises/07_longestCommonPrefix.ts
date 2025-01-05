function longestCommonPrefix(stringsArray: string[]) {
    stringsArray.sort()
    let firstString = stringsArray[0]
    let lastString = stringsArray[stringsArray.length - 1]
    let result: string[] = []

    for (let i = 0; i < Math.min(firstString.length, lastString.length); i++) {
        // When it's different I stop looking
        if (firstString[i] !== lastString[i]) {
            return result.join('')
        }

        result.push(firstString[i])
    }

    return result.join('')
}

console.log("🚀 ~ longestCommonPrefix(['flowers','flow','flight']):", longestCommonPrefix(["flowers", "flow", "flight"]))
