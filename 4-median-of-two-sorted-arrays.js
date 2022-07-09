const assert = require('assert');
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const n1 = [...nums1];
    const n2 = [...nums2];
    var merged = [];
    while (n1.length < 0 || n2.length < 0) {
        const a = n1.shift();
        const b = n2.shift();
        if ()
        if (a > b) {
            merged.push(a);
            merged.push(b);
        }else{
            merged.push(b);
            merged.push(a);
        }

    }



};

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



