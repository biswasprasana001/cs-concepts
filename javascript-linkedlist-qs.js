// Write a JavaScript class for a Singly Linked List

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  // Insert a node at the beginning
  insertAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Insert a node at the end
  insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Delete a node from the beginning
  deleteFromBeginning() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  // Delete a node from the end
  deleteFromEnd() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let prev = null;
    let current = this.head;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
  }

  // Print all the elements in the list

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Function to reverse the list
function reverseList(head) {
  let prev = null;
  let current = head;
  let next = null;
  while (current !== null) {
    next = current.next; // Save next
    current.next = prev; // Reverse
    prev = current; // Advance prev
    current = next; // Advance current
  }
  return prev; // New head of the reversed list
}

// function to determine if a given singly linked list has a cycle

function hasCycle(head) {
  let tortoise = head;
  let hare = head;
  while (hare && hare.next) {
    tortoise = tortoise.next; // Move one step
    hare = hare.next.next; // Move two steps
    if (tortoise === hare) {
      return true; // Cycle detected
    }
  }
  return false; // No cycle
}

// find the middle node of a singly linked list

function findMiddleNode(head) {
  let slow = head;
  let fast = head;
  // Move fast pointer two steps and slow pointer one step at a time
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // Slow pointer is now at the middle node
  return slow;
}

// merge two sorted singly linked lists into a single sorted linked list
function mergeSortedLists(l1, l2) {
  // Create a new head for the merged list
  let mergedHead = { val: -1, next: null };
  let current = mergedHead;
  
  // Traverse both lists
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  
  // If there are remaining nodes in l1 or l2, append them
  current.next = l1 === null ? l2 : l1;
  
  // Return the merged list, skipping the initial dummy node
  return mergedHead.next;
}

// Given a sorted singly linked list, write a function to remove all duplicates such that each element appears only once

function removeDuplicates(head) {
  let current = head;
  // Traverse the list
  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      // Skip the duplicate node
      current.next = current.next.next;
    } else {
      // Move to the next distinct element
      current = current.next;
    }
  }
  return head;
}

// function to find the nth node from the end of a singly linked list

function findNthFromEnd(head, n) {
  let first = head;
  let second = head;
  // Move first pointer n steps into the list
  for (let i = 0; i < n; i++) {
    first = first.next;
  }
  // Move both pointers until the first one reaches the end
  while (first !== null) {
    first = first.next;
    second = second.next;
  }
  // Second pointer is now at the nth node from the end
  return second;
}