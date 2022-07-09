const assert = require('assert');
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const isNegative = (Math.sign(x) === -1)
    let num = x;

    if (isNegative)
        num = num * -1;

    let reversedString = ""
    let string = num.toString()
    for (let i = string.length; i >= 0; i--){
        reversedString = reversedString.concat(string.charAt(i))
    }
    num = parseInt(reversedString);
    if (isNegative)
        num = num * -1

    // check if 32 bit
    if (num > 2147483648 || num < -2147483648)
        return 0

    return num;
};

try {
    assert.equal(reverse(123), 321);
    console.log('PASSED: ' + 'reverse 123 should return 321');
} catch (err) {
    console.log(err);
}

try {
    assert.equal(reverse(-123), -321);
    console.log('PASSED: ' + 'reverse -123 should return -321');
} catch (err) {
    console.log(err);
}

try {
    assert.equal(reverse(120), 21);
    console.log('PASSED: ' + 'reverse -123 should return -321');
} catch (err) {
    console.log(err);
}
