const assert = require('assert');

function sumDigits(num) {
    const l = num.toString().length;
    if ( l === 1)
        return num;

    let sum = 0;
    for (let i = 0; i < l; i++) {
        sum += Number(num.toString().substring(i, 1+i))
    }
    return sumDigits(sum);
}

try {
    assert.equal(sumDigits(1), 1);

    console.log('PASSED: ' + 'sumDigits(1) should return 1');
} catch (err) {
    console.log(err);
}

try {
    assert.equal(sumDigits(49), 4);

    console.log('PASSED: ' + 'sumDigits(49) should return 4');
} catch (err) {
    console.log(err);
}

try {
    assert.equal(sumDigits(439230), 3);

    console.log('PASSED: ' + 'sumDigits(439230) should return 3');
} catch (err) {
    console.log(err);
}