function fibonacci_tail_recursive(number: number) {

    return fibonacci_tail_assistant(number, 0, 1)
}

function fibonacci_tail_assistant(num: number, numSeq1: number, numSeq2: number): number {
    if (num === 0) {
        return numSeq1
    }

    if (num === 1) {
        return numSeq2
    }

    return fibonacci_tail_assistant(num - 1, numSeq2, numSeq1 + numSeq2)
}