"use strict";
function alternativeVersion(cpf) {
    // let onlyCpfNumbers = ''
    let onlyCpfNumbers = [];
    for (let index = 0; index < cpf.length; index++) {
        if (cpf[index] >= '0' && cpf[index] <= '9') {
            // onlyCpfNumbers += cpf[index]
            onlyCpfNumbers.push(cpf[index]);
        }
    }
    // return onlyCpfNumbers
    return onlyCpfNumbers.join('');
}
function removeCPFDigits(cpf) {
    const regexRemoveNonDigits = /\D/g;
    return cpf.replace(regexRemoveNonDigits, "");
}
console.log("🚀 ~ removeCPFDigits('87409217293'):", removeCPFDigits("87409217293"));
console.log("🚀 ~ removeCPFDigits('874092172-93'):", removeCPFDigits("874092172-93"));
console.log("🚀 ~ removeCPFDigits('874.092.172-93'):", removeCPFDigits("874.092.172-93"));
console.log("🚀 ~ ------------------------------------------------------------------------ 🚀 ~");
console.log("🚀 ~ alternativeVersion('87409217293'):", alternativeVersion("87409217293"));
console.log("🚀 ~ alternativeVersion('874092172-93'):", alternativeVersion("874092172-93"));
console.log("🚀 ~ alternativeVersion('874.092.172-93'):", alternativeVersion("874.092.172-93"));
