// - - - PROMPT - - -
// LINKED LIST CYCLE
// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
// Internally, pos is used to denote the index of the node that tail's next pointer is connected to. 
// Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. 
// Otherwise, return false.

// Defining the ListNode class
class ListNode {
    constructor(value=0, next=null) {
      this.val = value;
      this.next = next;
    }
}

// Creating the Looped Linked List Cycle head = [3,2,0,-4], pos = 1
// Step 1: Create the nodes
const node1 = new ListNode(3);
const node2 = new ListNode(2);
const node3 = new ListNode(0);
const node4 = new ListNode(-4);
// Step 2: Link the nodes to form a chain
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;

// Creating Looped Linked List Cycle head = [1], pos = -1
// Step 1: Create the node
const node5 = new ListNode(1);
// Step 2: Link the nodes to form a chain
node5.next = null;

function linkedListCycle(head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true
        }
    }
    return false
}

// Space Complexity O(1), No extra memory required
// Time Complexity O(n), slow and fast are iterating through the list
// Test head
console.log(linkedListCycle(node1))
// Output: true
console.log(linkedListCycle(node5))
// Output: false