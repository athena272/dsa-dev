function getDoProductArrays(array1: number[], array2: number[]) {
    let dotProduct = 0
    for (let i = 0; i < array1.length; i++) {
            dotProduct += array1[i] * array2[i]
    }

    return dotProduct
}

let nums1 = [1,0,0,2,3];
let nums2 = [0,3,0,4,0];
// = 1*0 + 0*3 + 0*0 + 2*4 + 3*0 = 8
console.log(getDoProductArrays(nums1, nums2));

nums1 = [0,1,0,0,0];
nums2 = [0,0,0,0,2];
// = 0*0 + 1*0 + 0*0 + 0*0 + 0*2 = 0
console.log(getDoProductArrays(nums1, nums2));

nums1 = [0,1,0,0,2,0,0];
nums2 = [1,0,0,0,3,0,4];
// = 0*1 + 1*0 + 0*0 + 0*0 + 2*3 + 0*0 + 0*4
console.log(getDoProductArrays(nums1, nums2));