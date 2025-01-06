class Transaction {
    name: string;
    time: number;
    amount: number;
    city: string;

    constructor(csvTransaction: string) {
        const infos = csvTransaction.split(',')
        this.name = infos[0]
        this.time = Number(infos[1])
        this.amount = Number(infos[2])
        this.city = infos[3]
    }
}

function getInvalidTransactions(transactionsArray: string[]) {
    const result = []
    const invalidTransactons = new Array(transactionsArray.length).fill(false)

    for (let i = 0; i < transactionsArray.length; i++) {
        const iTransaction = new Transaction(transactionsArray[i])
        
        if (iTransaction.amount > 1000) {
            invalidTransactons[i] = true
        }

        for (let j = i + 1; j < transactionsArray.length; j++) {
            const jTransaction = new Transaction(transactionsArray[j]) 
            const isSameName = iTransaction.name === jTransaction.name
            const isTimeLess60Min = Math.abs(iTransaction.time - jTransaction.time) <= 60
            const isDifferentCity = iTransaction.city !== jTransaction.city

            if(isSameName && isTimeLess60Min && isDifferentCity) {
                invalidTransactons[i] = true
                invalidTransactons[j] = true
            }
        }
    } 

    for (let i = 0; i < transactionsArray.length; i++) {
        if(invalidTransactons[i]) {
            result.push(transactionsArray[i])
        }        
    }

    return result
}

console.log(getInvalidTransactions(["alice,20,800,mtv","alice,50,100,beijing"]));
console.log(getInvalidTransactions(["alice,20,800,mtv","alice,50,1200,mtv"]));
console.log(getInvalidTransactions(["alice,20,800,mtv","bob,50,1200,mtv"]));