function sumNaturals(num: number): number  {
    if (num === 0) {
        return num
    }
    
    return num + sumNaturals(num - 1)
}

console.log("🚀 ~ sumNaturals(0):", sumNaturals(0))
console.log("🚀 ~ sumNaturals(2):", sumNaturals(2))
console.log("🚀 ~ sumNaturals(4):", sumNaturals(4))
