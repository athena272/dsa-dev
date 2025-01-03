function alternativeVersion(cpf: string) {
    
}

function removeCPFDigits(cpf: string) {
    const regexRemoveNonDigits = /\D/g
    return cpf.replace(regexRemoveNonDigits, "")
}

console.log("🚀 ~ removeCPFDigits('87409217293'):", removeCPFDigits("87409217293"))
console.log("🚀 ~ removeCPFDigits('874092172-93'):", removeCPFDigits("874092172-93"))
console.log("🚀 ~ removeCPFDigits('874.092.172-93'):", removeCPFDigits("874.092.172-93"))
 