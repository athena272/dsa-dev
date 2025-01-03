function removeNoDigits(cpf: string) {
    const regex = /\D/g
    return cpf.replace(regex, "")
}

console.log("🚀 ~ removeNoDigits(\"04023784799\"):", removeNoDigits("04023784799"))
console.log("🚀 ~ removeNoDigits(\"213.445.034-82\"):", removeNoDigits("213.445.034-82!"))