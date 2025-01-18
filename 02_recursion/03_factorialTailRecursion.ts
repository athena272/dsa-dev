function factorial_tail_recursive(num: number) {

    return factorial_tail_assistant(num, 1)
}

function factorial_tail_assistant(num: number, total: number) {
    if (num === 0) {
        return total
    }

    return factorial_tail_assistant(num - 1, total * num)
}

console.log("🚀 ~ factorial_tail_recursive(0):", factorial_tail_recursive(0))
console.log("🚀 ~ factorial_tail_recursive(1):", factorial_tail_recursive(1))
console.log("🚀 ~ factorial_tail_recursive(3):", factorial_tail_recursive(3))
console.log("🚀 ~ factorial_tail_recursive(4):", factorial_tail_recursive(4))
console.log("🚀 ~ factorial_tail_recursive(5):", factorial_tail_recursive(5))
