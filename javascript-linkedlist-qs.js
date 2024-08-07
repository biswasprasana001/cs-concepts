// Implement a Node class that has properties for storing data and a reference to the next node.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Implement a LinkedList class with methods to insert a new node at the end, insert a new node at the beginning, and display the list.

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null; // Keep track of the last node
  }

  // Insert a new node at the beginning
  insertAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode; // If the list was empty, tail is also the new node
    }
  }

  // Insert a new node at the end
  insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode; // New node is now both head and tail
    } else {
      this.tail.next = newNode; // Tail's next points to new node
      this.tail = newNode; // New node becomes the new tail
    }
  }

  // Display the list
  display() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Write a function to reverse a singly linked list.

function reverseLinkedList(head) {
  let previous = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next; // Save next node
    current.next = previous; // Reverse the link
    previous = current; // Move previous up
    current = next; // Move current up
  }

  return previous; // Previous is the new head of the reversed list
}

// Write a function that checks if a singly linked list has a cycle.

function hasCycle(head) {
  let tortoise = head; // Slow-moving pointer
  let hare = head; // Fast-moving pointer

  while (hare && hare.next) {
    tortoise = tortoise.next; // Move tortoise one step
    hare = hare.next.next; // Move hare two steps

    if (tortoise === hare) {
      return true; // If they meet, there's a cycle
    }
  }

  return false; // If hare reaches the end, there's no cycle
}

// Write a function to find the middle element of a singly linked list. If the list has an even number of elements, return the second middle element.

function findMiddle(head) {
  let tortoise = head;
  let hare = head;

  // Move hare two steps and tortoise one step
  while (hare && hare.next) {
    hare = hare.next.next;
    tortoise = tortoise.next;
  }

  // Tortoise is now pointing to the middle element
  return tortoise.data;
}

// Write a function to remove duplicates from an unsorted linked list.

function removeDuplicates(head) {
  let current = head;
  while (current != null) {
    let runner = current;
    while (runner.next != null) {
      if (runner.next.data === current.data) {
        runner.next = runner.next.next; // Remove duplicate
      } else {
        runner = runner.next; // Move to next element
      }
    }
    current = current.next; // Move to next element
  }
}

function removeDuplicatesOptimized(head) {
  let elements = new Set();
  let prev = null;
  let current = head;
  while (current) {
    if (elements.has(current.data)) {
      prev.next = current.next;
    } else {
      elements.add(current.data);
      prev = current;
    }
    current = current.next;
  }
}

// Write a function that takes two sorted linked lists and merges them into a single sorted linked list.

function mergeLists(head1, head2) {
  let dummy = new Node(0);
  let current = dummy;
  while (head1 && head2) {
    if (head1.data > head2.data) {
      current.next = head1;
      head1 = head1.next;
    } else {
      current.next = head2;
      head2 = head2.next;
    }
    current = current.next;
  }
  current.next = head1 ? head1 : head2;
  return dummy.next;
}

function mergeListsOptimized(head1, head2) {
  if (head1) return head2;
  if (head2) return head1;

  if (head1.data < head2.data) {
    head1.next = mergeListsOptimized(head1.next, head2);
    return head1;
  } else {
    head2.next = mergeListsOptimized(head1, head2.next);
    return head2;
  }
}

// Write a function to find the nth node from the end of a linked list.
function findNthFromEnd(head, n) {
  let length = 0;
  let current = head;

  while (current) {
    length++;
    current = current.next;
  }

  let target = length - n + 1;
  if (target <= null) return null;
  current = head;
  for (let i = 0; i < target; i++) {
    current = current.next;
  }
  return current;
}

function findNthFromEndOptimized(head, n) {
  let first = head;
  let second = head;

  for (let i = 0; i < n; i++) {
    if (second == null) {
      return null;
    }
    second = second.next;
  }

  while (second) {
    second = second.next;
    first = first.next;
  }

  return first;
}

// Write a function to check if a linked list is a palindrome.

function isPalindrom(head) {
  if (!head || !head.next) {
    return true;
  }

  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  while (slow) {
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  let left = head;
  let right = prev;
  while (right) {
    if (left.data !== right.data) {
      return false;
    }
    left = left.next;
    right = right.next;
  }

  return true;
}
