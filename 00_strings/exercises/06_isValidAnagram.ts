type IsAnagramArgs = {
    text1: string,
    text2: string
}


function isAnagram1({ text1, text2 }: IsAnagramArgs) {
    const text1Sorted = text1.split('').sort().join('')
    const text2Sorted = text2.split('').sort().join('')
    return text1Sorted === text2Sorted
}

function isAnagram({ text1, text2 }: IsAnagramArgs) {
    const arrayZeros: number[] = new Array(26).fill(0)

    for (let i = 0; i < text1.length; i++) {
        const index = text1.charCodeAt(i) - 'a'.charCodeAt(0)
        arrayZeros[index]++
    }

    for (let i = 0; i < text2.length; i++) {
        const index = text2.charCodeAt(i) - 'a'.charCodeAt(0)
        arrayZeros[index]--
    }

    for (let value of arrayZeros) {
        if (value !== 0) {
            return false
        }
    }

    return true
}

console.log("🚀 ~ isAnagram({text1: \"anagram\", text2: \"nagaram\"}):", isAnagram({ text1: "anagram", text2: "nagaram" }))
console.log("🚀 ~ ------------------------------------------------------------------------ 🚀 ~")
console.log("🚀 ~ isAnagram({text1: \"rat\", text2: \"car\"}):", isAnagram({ text1: "rat", text2: "car" }))
console.log("🚀 ~ ------------------------------------------------------------------------ 🚀 ~")
console.log("🚀 ~ isAnagram({text1: \"aaabb\", text2: \"ababab\"}):", isAnagram({ text1: "aaabbb", text2: "ababab" }))