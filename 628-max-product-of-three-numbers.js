const assert = require('assert');

function maxProductOfThree(nums) {
    var i = nums.length;
    nums.sort((a,b) => a-b);
    return Math.max(nums[0] * nums[1] * nums[i  - 1], nums[i - 1] * nums[i - 2] * nums[i - 3]);
}

try {
    assert.deepEqual(maxProductOfThree([0, 1, 2, 3]), 6);

    console.log('PASSED: ' + 'maxProductOfThree[0, 1, 2, 3] should equal 6');
} catch (err) {
    console.log(err);
}

try {
    assert.deepEqual(maxProductOfThree([-12, -7, -1, 11, 17]), 1428);

    console.log(
        'PASSED: ' + 'maxProductOfThree([-12, -7, -1, 11, 17]) should equal 1428'
    );
} catch (err) {
    console.log(err);
}

try {
    assert.deepEqual(maxProductOfThree([0, 4, -9, 19, 7, -5]), 855);

    console.log(
        'PASSED: ' + 'maxProductOfThree([0, 4, -9, 19, 7, -5]) should equal 855'
    );
} catch (err) {
    console.log(err);
}

try {
    assert.equal(maxProductOfThree([-1, 9, 22, 3, -15, -7]), 2310);

    console.log(
        'PASSED: ' + 'maxProductOfThree([-1, 9, 22, 3, -15, -7] should return 2310'
    );
} catch (err) {
    console.log(err);
}