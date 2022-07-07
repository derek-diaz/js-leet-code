const assert = require('assert');

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

        if (l1 === null){
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