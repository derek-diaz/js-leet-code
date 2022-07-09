const assert = require('assert');
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var merged = sorterMerger(nums1, nums2);
    var medianIndex = Math.floor(merged.length / 2);

    if (merged.length % 2 === 0){
        //EVEN
        return ((merged[medianIndex - 1] + merged[medianIndex])/2)
    }else{
        //ODD
        return merged[medianIndex]
    }
};

function sorterMerger(nums1, nums2) {
    const n1 = [...nums1];
    const n2 = [...nums2];
    var merged = [];
    var done = false
    let a = "X"
    let b = "X"
    while (n1.length > 0 || n2.length > 0 || !done) {
        if (a === "X" && n1.length !== 0)
            a = n1.shift();

        if (b === "X" && n2.length !== 0)
            b = n2.shift();

        if (a === "X" && (b || b === 0)){
            merged.push(b);
            b = "X"
        }
        else  if ((a || a === 0) && b === "X"){
            merged.push(a);
            a = "X"
        }
        else if (a < b) {
            merged.push(a);
            a = "X";
        } else if (a > b){
            merged.push(b);
            b = "X";
        }else if (a === b){
            merged.push(a);
            a = "X"
        }
        if (a === "X" && b === "X") done = true
    }
    return merged;
}

try {
    assert.equal(findMedianSortedArrays([1,3], [2]), 2.0000);
    console.log('PASSED: ' + 'findMedianSortedArrays should return 2.0000');
} catch (err) {
    console.log(err);
}

try {
    assert.equal(findMedianSortedArrays([1,2], [3,4]), 2.5000);
    console.log('PASSED: ' + 'findMedianSortedArrays should return 2.5000');
} catch (err) {
    console.log(err);
}

try {
    assert.equal(findMedianSortedArrays([0, 0], [0,0]), 0);
    console.log('PASSED: ' + 'findMedianSortedArrays should return 0');
} catch (err) {
    console.log(err);
}



