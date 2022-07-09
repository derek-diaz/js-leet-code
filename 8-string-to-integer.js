const assert = require('assert');
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {

    let numString = ""
    let isNegative = false;

    s = s.trimStart();
    let v = s.split("");

    // Remove symbols
    if (v[0] === "-") {
        isNegative = true
        v.shift();
    } else if (v[0] === "+") {
        isNegative = false
        v.shift();
    }

    while (v.length > 0) {
        let char = v.shift();
        if (char === " "){
            break
        }
        if (!isNaN(char)) {
            numString = numString.concat(char)
        } else {
            break;
        }
    }

    let number = parseInt(numString);

    if (isNegative) {
        number = number * -1;
    }

    if (number > 2147483647)
        return 2147483647

    if (number < -2147483648)
        return -2147483648

    if (isNaN(number)) {
        return 0
    }

    return number;
};

try {
    assert.equal(myAtoi("42"), 42);
    console.log('PASSED: ' + 'myAtoi 42 should return 42');
} catch (err) {
    console.log(err);
}

try {
    assert.equal(myAtoi("     -42"), -42);
    console.log('PASSED: ' + 'myAtoi -42 should return -42');
} catch (err) {
    console.log(err);
}


try {
    assert.equal(myAtoi("4193 with words"), 4193);
    console.log('PASSED: ' + 'myAtoi 4193 with words should return 4193');
} catch (err) {
    console.log(err);
}

try {
    assert.equal(myAtoi("+-12"), 0);
    console.log('PASSED: ' + '+-12 should return 0');
} catch (err) {
    console.log(err);
}

try {
    assert.equal(myAtoi("21474836460"), 2147483647);
    console.log('PASSED: ' + '21474836460 should return 2147483647');
} catch (err) {
    console.log(err);
}

try {
    assert.equal(myAtoi("  +  413"), 0);
    console.log('PASSED: ' + '  +  413 should return 0');
} catch (err) {
    console.log(err);
}