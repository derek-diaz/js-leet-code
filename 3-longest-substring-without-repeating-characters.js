const assert = require('assert');

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var longestSubstring = new Map();
    var currentStreak = new Map();

    for (var )



};

try {
    assert.equal(lengthOfLongestSubstring("abcabcbb"), 3);

    console.log('PASSED: ' + 'lengthOfLongestSubstring("abcabcbb") should return 3');
} catch (err) {
    console.log(err);
}


try {
    assert.equal(lengthOfLongestSubstring("bbbbb"), 1);

    console.log('PASSED: ' + 'lengthOfLongestSubstring("bbbbb") should return 1');
} catch (err) {
    console.log(err);
}

try {
    assert.equal(lengthOfLongestSubstring("pwwkew"), 3);

    console.log('PASSED: ' + 'lengthOfLongestSubstring("pwwkew") should return 3');
} catch (err) {
    console.log(err);
}