// Write a JavaScript class for a Stack. Include methods for push, pop, peek, and isEmpty.

class Stack {
    constructor() {
      this.items = [];
    }
    
    push(item) {
      this.items.push(item);
    }
    
    isEmpty() {
      return this.items.length == 0;
    }
    
    pop() {
      if (this.isEmpty()) {
        return null;
      } 
      return this.items.pop();
    }
    
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[items.length - 1];
    }
  }
  
  // Write a JavaScript class for a Queue. Include methods for enqueue, dequeue, peek, and isEmpty.
  
  class Queue {
    constructor() {
      this.items = [];
      this.frontIndex = 0;
    }
    
    enqueue(item) {
      this.items.push(item);
    }
    
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      
      const item = this.items[this.frontIndex++];
      
      if (this.frontIndex * 2 > this.items.length) {
        this.items = this.items.slice(this.frontIndex);
        this.frontIndex = 0;
      }
      
      return item;
    }
    
    isEmpty() {
      return this.frontIndex >= this.items.length;
    }
    
    peek() {
      return this.isEmpty() ? null : this.items[frontIndex];
    }
  }
  
  // Given a string containing just the characters (, ), {, }, [, ], write a function to check if the input string is valid.
  
  function isValid(str) {
    let stack = [];
    
    for (let char of str) {
      if (char == '(' || char == '{' || char == ']') {
        stack.push(char);
      } else {
        if (stack.length == 0) return false;
        let top = stack.pop();
        if ((char === ')' && top !== '(') ||
            (char === '}' && top !== '{') ||
            (char === ']' && top !== '[')) {
              return false;
            }
      }
    }
    return stack.length == 0;
  }
  
  function isValid(str) {
    let stack = [];
    let bracketMap = new Map([[')', '('], ['}', '{'], [']', '[']]);
    
    for (let char of str) {
      if (bracketMap.has(char)) {
        if (stack.pop() != bracketMap.get(char)) {
          return false;
        }
      } else {
        stack.push(char);
      }
    }
    return stack.length == 0;
  }
  
  // Write a function that takes a string as input and returns the string reversed. Use a stack to reverse the characters of the string.
  
  function reverseString(str) {
    let stack = [];
    let reversed = '';
    
    for (let char of str) {
      stack.push(char);
    }
    
    while(stack.length !== 0) {
      reversed += stack.pop();
    }
    
    return reversed;
  }
  
  function reverseString(str) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
      stack.push(str[i]);
    }
    
    for (let i = 0; i < str.length; i++) {
      str[i] = stack.pop();
    }
    
    return str;
  }