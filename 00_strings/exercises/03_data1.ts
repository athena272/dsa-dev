function extractDateData(date: string) {
    const dateSplited = date.split('/')
    const day = Number(dateSplited[0])
    const month = Number(dateSplited[1])
    const year = Number(dateSplited[2])

    return { day, month, year }
}

function extractDateData2(date: string) {

    // assumindo sempre vai ter zero à esquerda, podemos usar substring
    const day = Number(date.substring(0, 2));
    const month = Number(date.substring(3, 5));
    const year = Number(date.substring(6));

    return { day, month, year };
}

let obj = extractDateData("21/07/2010");
console.log(`Dia: ${obj.day}`);
console.log(`Mês: ${obj.month}`);
console.log(`Ano: ${obj.year}`);