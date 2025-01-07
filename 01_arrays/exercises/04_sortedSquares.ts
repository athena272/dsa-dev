function sortedSquares(nums: number[]) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] *= nums[i]
    }

    nums.sort((a, b) => a - b)
    return nums
}

console.log("🚀 ~ sortedSquares([-4,-1,0,3,10]):", sortedSquares([-4,-1,0,3,10]))
console.log("🚀 ~ sortedSquares([-7,-3,2,3,11]):", sortedSquares([-7,-3,2,3,11]))
