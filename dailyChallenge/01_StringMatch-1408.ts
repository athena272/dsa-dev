function stringMatching(words: string[]) {
    const substringArray: string[] = []

    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words.length; j++) {
            const isSameWord = words[i] === words[j] 
            if (isSameWord)
                continue

            const isSubstring = words[i].includes(words[j])
            const isNotAlreadySubstring = !substringArray.includes(words[j])
            if (isSubstring && isNotAlreadySubstring) {
                substringArray.push(words[j]);
            }
        }
    }

    return substringArray
}

stringMatching(["mass", "as", "hero", "superhero"])
console.log("🚀 ~ stringMatching(['mass''as','hero','superhero']):", stringMatching(["mass", "as", "hero", "superhero"]))
