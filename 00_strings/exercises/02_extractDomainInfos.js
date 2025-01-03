"use strict";
function extractEmailInformations(email) {
    const parts = email.split("@");
    const userName = parts[0];
    const domain = parts[1];
    const isBrazilian = email.endsWith('.br');
    return { userName, domain, isBrazilian };
}
let emailInfo1 = extractEmailInformations("joao.silva23@yahoo.com.br");
console.log("Usuario:", emailInfo1.userName);
console.log("Dominio:", emailInfo1.domain);
console.log("Brasileiro:", emailInfo1.isBrazilian ? "sim" : "nao");
console.log("🚀 ~ ------------------------------------------------------------------------ 🚀 ~");
let emailInfo2 = extractEmailInformations("maria123@gmail.com");
console.log("Usuario:", emailInfo2.userName);
console.log("Dominio:", emailInfo2.domain);
console.log("Brasileiro:", emailInfo2.isBrazilian ? "sim" : "nao");
