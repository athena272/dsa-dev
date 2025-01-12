function factorial(num: number): number {
    if (num === 0 || num === 1) {
        return 1
    }

    return num * factorial(num - 1)
}

console.log("🚀 ~ factorial(0):", factorial(0))
console.log("🚀 ~ factorial(1):", factorial(1))
console.log("🚀 ~ factorial(3):", factorial(3))
console.log("🚀 ~ factorial(4):", factorial(4))
console.log("🚀 ~ factorial(5):", factorial(5))
