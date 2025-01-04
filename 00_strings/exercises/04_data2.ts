type DateType = {
    day: number,
    month: number,
    year: number
}

function addZero(number: number) {
    if (number >= 1 && number <= 9) {
        return `0${number}`
    }

    return number
}

function formatDate({ day, month, year }: DateType) {

    const formatedDay = String(day).padStart(2, '0')
    const formatedMonth = String(month).padStart(2, '0')

    // return `${addZero(day)}/${addZero(month)}/${year}`
    return `${formatedDay}/${formatedMonth}/${year}`
}

console.log(formatDate({ day: 2, month: 7, year: 2010 })); 