const assert = require('assert');

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var longestSubstring = new Map();
    var currentStreak = new Map();

    for (var i = 0; i < s.length; i++) {
        if (currentStreak.has(s.charAt(i))){
          if (currentStreak.size > longestSubstring.size) {
              longestSubstring = new Map(currentStreak);
          }
          currentStreak.clear();
          currentStreak.set(s.charAt(i), s.charAt(i));
        }else {
            currentStreak.set(s.charAt(i), s.charAt(i));
        }
    }
    if  ((currentStreak.size > 0 && longestSubstring.size === 0) || currentStreak.size > longestSubstring.size) {
        return currentStreak.size;
    }
    return longestSubstring.size;
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

try {
    assert.equal(lengthOfLongestSubstring("pwwkew"), 3);

    console.log('PASSED: ' + 'lengthOfLongestSubstring("pwwkew") should return 3');
} catch (err) {
    console.log(err);
}

try {
    assert.equal(lengthOfLongestSubstring(" "), 1);

    console.log('PASSED: ' + 'lengthOfLongestSubstring(" ") should return 1');
} catch (err) {
    console.log(err);
}

try {
    assert.equal(lengthOfLongestSubstring("aab"), 2);

    console.log('PASSED: ' + 'lengthOfLongestSubstring("aab") should return 2');
} catch (err) {
    console.log(err);
}