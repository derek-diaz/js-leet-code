const assert = require('assert');


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if (head.next === null){
        return null
    }
    //count total number of nodes
    let pointer = head;
    let count = 0;
    while (pointer){
        count++
        pointer = pointer.next;
    }

    if (count === 2 && n === 2){
        return head.next;
    }

    let parentToRemove = count - (n + 1);

    if (n === count){
        return head.next
    }

    pointer = head
    let currentCount = 0;
    while (pointer){
        if (parentToRemove === currentCount){
            let parent = pointer;
            let nodeRm = pointer.next
            parent.next = nodeRm.next;
            break;
        }
        currentCount++
        pointer = pointer.next;
    }
    return head
};

try {
    let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))));
    let expected =  new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5, null))));
    assert.equal(removeNthFromEnd(head, 2), expected);
    console.log('PASSED: ' + ' removeNthFromEnd should return the correct ll');
} catch (err) {
    console.log(err);
}
