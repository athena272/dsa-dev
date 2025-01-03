function findEmails(text: string) {
    const regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
    const result = text.match(regex);
    if (result) {
        return result;
    }
    return [];
}

let text = "Para mais informações, contate-nos em contato@exemplo.com ou suporte@exemplo.com.br.";

let emails = findEmails(text);
console.log("🚀 ~ emails:", emails)

if (emails.length > 0) {
    console.log("Emails encontrados:");
    for (let i = 0; i < emails.length; i++) {
        console.log(emails[i]);
    }
}
else {
    console.log("Nenhum email encontrado.")
}
