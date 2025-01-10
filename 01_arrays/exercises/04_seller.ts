type Salesman = {
    name: string,
    amount: number,
}

const sales = [
    {
        "name": "Barry Allen",
        "amount": 18196.0
    },
    {
        "name": "Logan",
        "amount": 4255.0
    },
    {
        "name": "Maria",
        "amount": 10298.0
    },
    {
        "name": "Ana",
        "amount": 26485.0
    },
    {
        "name": "Aurora",
        "amount": 19982.0
    },
    {
        "name": "Noah",
        "amount": 15820.0
    },
    {
        "name": "Leo",
        "amount": 21412.0
    },
    {
        "name": "Alex",
        "amount": 12000.0
    }
]

function bestSeller(salesmanArray: Salesman[]) {
    let bestSeller = salesmanArray[0]

    for (let salesman of salesmanArray) {
        if (salesman.amount > bestSeller.amount) {
            bestSeller = salesman
        }
    }

    return bestSeller.name
}

console.log("🚀 ~ bestSeller(sales):", bestSeller(sales))
