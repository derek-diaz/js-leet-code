const assert = require('assert');

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let num = parseInt(digits.join(""))
    num = num + 1;
    return String(num).split("").map((num1) => {
        return Number(num1)
    });
};


try {
    let digits = [1,2,3]
    assert.equal(plusOne(digits), [1,2,4]);
    console.log('PASSED: ' + ' exist should return true');
} catch (err) {
    console.log(err);
}

try {
    let digits = [4,3,2,1]
    assert.equal(plusOne(digits), [4,3,2,2]);
    console.log('PASSED: ' + ' exist should return true');
} catch (err) {
    console.log(err);
}

try {
    let digits = [9]
    assert.equal(plusOne(digits), [1,0]);
    console.log('PASSED: ' + ' exist should return false');
} catch (err) {
    console.log(err);
}
