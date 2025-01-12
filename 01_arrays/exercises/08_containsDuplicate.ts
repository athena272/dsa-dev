function containsDuplicate(nums: number[]): boolean {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true
            }
        }
    }

    return false
}

console.log("🚀 ~ containsDuplicate([1, 2, 3, 1]):", containsDuplicate([1, 2, 3, 1]))
console.log("🚀 ~ containsDuplicate([1, 2, 3, 4]):", containsDuplicate([1, 2, 3, 4]))
console.log("🚀 ~ containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]):", containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))