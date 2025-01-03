function validateBrDomain(domain: string) {
    const regex = /\.br$/
    return regex.test(domain)
}

console.log("🚀 ~ validateBrDomain(\"batata.com.br\"):", validateBrDomain("batata.com.br"))
console.log("🚀 ~ validateBrDomain(\"banana.com\"):", validateBrDomain("banana.com"))
