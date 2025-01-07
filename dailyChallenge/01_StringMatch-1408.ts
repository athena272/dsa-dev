function stringMatching(words: string[]) {
    const substringArray: string[] = []

    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words.length; j++) {
            if (words[i] !== words[j] && words[i].includes(words[j]) && !substringArray.includes(words[j])) {
                substringArray.push(words[j]);
            }
        }
    }

    return substringArray
}

stringMatching(["mass", "as", "hero", "superhero"])
console.log("🚀 ~ stringMatching(['mass''as','hero','superhero']):", stringMatching(["mass", "as", "hero", "superhero"]))
