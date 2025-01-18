function fibonacci(num: number): number {
    if (num === 0) return 0
    if (num === 1) return 1

    return fibonacci(num - 1) + fibonacci(num - 2)
}

console.log("🚀 ~ fibonacci(0):", fibonacci(0))
console.log("🚀 ~ fibonacci(1):", fibonacci(1))
console.log("🚀 ~ fibonacci(6):", fibonacci(6))
console.log("🚀 ~ fibonacci(7):", fibonacci(7))
console.log("🚀 ~ fibonacci(8):", fibonacci(8))
console.log("🚀 ~ fibonacci(29):", fibonacci(29))
console.log("🚀 ~ fibonacci(200):", fibonacci(200))
