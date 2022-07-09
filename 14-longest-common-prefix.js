const assert = require('assert');

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let a = [];
    let smallestLength = 99999999;
    let common = [];
    for (let i = 0; i < strs.length; i++){
      a.push(strs[i].split(""))
        if (strs[i].length < smallestLength){
            smallestLength = strs[i].length;
        }
    }

    for (let c = 0; c < smallestLength; c++){
        if (allEqual(arrayColumn(a,c))){
            common.push(a[0][c]);
        }else{
            break;
        }
    }

    return common.join("");

};

const arrayColumn = (arr, c) => arr.map(x => x[c]);

const allEqual = arr => arr.every( v => v === arr[0] )

try {
    assert.equal(longestCommonPrefix(["flower","flow","flight"]), "fl");
    console.log('PASSED: ' + ' longestCommonPrefix should return fl');
} catch (err) {
    console.log(err);
}

try {
    assert.equal(longestCommonPrefix(["dog","racecar","car"]), "");
    console.log('PASSED: ' + ' longestCommonPrefix should return nothing');
} catch (err) {
    console.log(err);
}