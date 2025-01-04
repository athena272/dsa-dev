type IsAnagramArgs = {
    text1: string,
    text2: string
}


function isAnagram({ text1, text2 }: IsAnagramArgs) {
    const text1Sorted = text1.split('').sort().join('')
    console.log("🚀 ~ isAnagram ~ text1Sorted:", text1Sorted)
    const text2Sorted = text2.split('').sort().join('')
    console.log("🚀 ~ isAnagram ~ text2Sorted:", text2Sorted)

    return text1Sorted === text2Sorted
}


console.log("🚀 ~ isAnagram({text1: \"anagram\", text2: \"nagaram\"}):", isAnagram({text1: "anagram", text2: "nagaram"}))
console.log("🚀 ~ ------------------------------------------------------------------------ 🚀 ~")
console.log("🚀 ~ isAnagram({text1: \"rat\", text2: \"car\"}):", isAnagram({text1: "rat", text2: "car"}))
console.log("🚀 ~ ------------------------------------------------------------------------ 🚀 ~")
console.log("🚀 ~ isAnagram({text1: \"aaabb\", text2: \"ababab\"}):", isAnagram({text1: "aaabbb", text2: "ababab"}))