import assert from "assert";

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {


};

try {
    assert.deepEqual(jobScheduling([1,2,3,3], [3,4,5,6], [50,10,40,70]), 120);
    console.log('PASSED: ' + 'maxProductOfThree[1, 2, 3,3], [3,4,5,6], [50,10,40,70] should equal 120');
} catch (err) {
    console.log(err);
}

try {
    assert.deepEqual(jobScheduling([1,2,3,4,6], [3,5,10,6,9], [20,20,100,70,60]), 150);
    console.log('PASSED: ' + 'maxProductOfThree[1,2,3,4,6], [3,5,10,6,9], [20,20,100,70,60] should equal 150');
} catch (err) {
    console.log(err);
}