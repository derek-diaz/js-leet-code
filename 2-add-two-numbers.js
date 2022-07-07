const assert = require('assert');

try {
    assert.equal(sumDigits(1), 1);

    console.log('PASSED: ' + 'sumDigits(1) should return 1');
} catch (err) {
    console.log(err);
}

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    return addTwoNumbersCarry(l1, l2, 0);
};

var addTwoNumbersCarry = function (l1, l2, carry) {
    if (l1 || l2) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        let sum = val1 + val2 + carry;
        let remainder = Math.trunc(sum/10);
        if (l1 === null && l2 === null && sum > 0){
            return new ListNode(Number(sum), addTwoNumbersCarry(l1, l2, remainder));
        }else if (l1 === null){
            return new ListNode(Number(String(sum).slice(-1)), addTwoNumbersCarry(l1, l2.next, remainder));
        }else if (l2 === null){
            return new ListNode(Number(String(sum).slice(-1)), addTwoNumbersCarry(l1.next, l2, remainder));
        }else {
            return new ListNode(Number(String(sum).slice(-1)), addTwoNumbersCarry(l1.next, l2.next, remainder));
        }
    }else if (carry > 0){
        return new ListNode(carry, null)
    }
}


try {
    const l1t = new ListNode(3, new ListNode(4, new ListNode(2, null)))
    const l2t = new ListNode(4, new ListNode(6, new ListNode(5, null)))

    const expected = new ListNode(7, new ListNode(0, new ListNode(8, null)))

    assert.equal(addTwoNumbers(l1t, l2t), expected);

    console.log('PASSED: ' + 'addTwoNumbers() should return [7,0,8]');

} catch (err) {
    console.log(err);
}
