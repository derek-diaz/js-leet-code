const assert = require('assert');

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let roman = s.split("");
    let sum = 0;
    while (roman.length > 0){
        let r = roman.shift();
        if (r === "I"){
            if (roman[0] === "V"){
                roman.shift();
                sum += 4;
            }else if (roman[0] === "X"){
                roman.shift();
                sum += 9;
            }else {
                sum += 1;
            }
        } else if ( r === "X"){
            if (roman[0] === "L"){
                roman.shift();
                sum += 40;
            }else if (roman[0] === "C"){
                roman.shift();
                sum += 90;
            }else {
                sum += 10;
            }
        } else if (r === "C"){
            if (roman[0] === "D"){
                roman.shift();
                sum += 400;
            }else if (roman[0] === "M"){
                roman.shift();
                sum += 900;
            }else {
                sum += 100;
            }
        } else if (r === "V"){
            sum += 5;
        } else if (r === "L"){
            sum += 50;
        } else if (r === "D"){
            sum += 500;
        }else if (r === "M"){
            sum += 1000;
        }
    }
    return sum;
};


try {
    assert.equal(romanToInt("III"), 3);
    console.log('PASSED: ' + ' romanToInt III should return 3');
} catch (err) {
    console.log(err);
}

try {
    assert.equal(romanToInt("LVIII"), 58);
    console.log('PASSED: ' + ' romanToInt LVIII should return 58');
} catch (err) {
    console.log(err);
}

try {
    assert.equal(romanToInt("MCMXCIV"), 1994);
    console.log('PASSED: ' + ' romanToInt MCMXCIV should return 1994');
} catch (err) {
    console.log(err);
}