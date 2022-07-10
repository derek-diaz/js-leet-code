const assert = require('assert');

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.split(" ");
    let filter = arr.filter(word => word !== "")
    return filter[filter.length - 1].length;
};


try {
    assert.equal(lengthOfLastWord("Hello World"), 5);
    console.log('PASSED: ' + ' lengthOfLastWord should return 5');
} catch (err) {
    console.log(err);
}

try {
    assert.equal(lengthOfLastWord("   fly me   to   the moon  "), 4);
    console.log('PASSED: ' + ' lengthOfLastWord should return 4');
} catch (err) {
    console.log(err);
}

try {
    assert.equal(lengthOfLastWord("luffy is still joyboy"), 6);
    console.log('PASSED: ' + ' lengthOfLastWord should return 6');
} catch (err) {
    console.log(err);
}
