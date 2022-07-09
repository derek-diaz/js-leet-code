const assert = require('assert');

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let arr = x.toString().split("");

    let arrRev = [...arr]
    arrRev.reverse();

    return arr.toString() === arrRev.toString();
};

try {
    assert.equal(isPalindrome(121), true);
    console.log('PASSED: ' + ' isPalindrome 121 should return true');
} catch (err) {
    console.log(err);
}

try {
    assert.equal(isPalindrome(-121), false);
    console.log('PASSED: ' + ' isPalindrome -121 should return false');
} catch (err) {
    console.log(err);
}

try {
    assert.equal(isPalindrome(10), false);
    console.log('PASSED: ' + ' isPalindrome 10 should return false');
} catch (err) {
    console.log(err);
}