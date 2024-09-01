// reverse an array without using the built-in reverse() method

function reverseArrayOptimized(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
      // Swap elements using destructuring assignment
      [arr[left], arr[right]] = [arr[right], arr[left]];
      // Move towards the middle
      left++;
      right--;
  }
  return arr;
}

// Example usage:
let originalArray3 = [1, 2, 3, 4, 5];
let reversedArray3 = reverseArrayOptimized(originalArray3);
console.log(reversedArray3); // Output: [5, 4, 3, 2, 1]


// remove duplicate values from an array

function removeDuplicatesUsingObject(arr) {
  let uniqueArray = [];
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
      if (!seen[arr[i]]) {
          uniqueArray.push(arr[i]);
          seen[arr[i]] = true;
      }
  }
  return uniqueArray;
}

// Example usage:
let originalArray2 = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray2 = removeDuplicatesUsingObject(originalArray2);
console.log(uniqueArray2); // Output: [1, 2, 3, 4, 5]

// maximum and minimum values in an array

function findMaxMinSinglePass(arr) {
  let max = arr[0];
  let min = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i];
      }
      if (arr[i] < min) {
          min = arr[i];
      }
  }
  
  return { max, min };
}

// Example usage:
let originalArray2 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let result2 = findMaxMinSinglePass(originalArray2);
console.log(result2); // Output: { max: 9, min: 1 }

// sum of all elements in an array

const sumArrayOptimized = arr => arr.reduce((acc, val) => acc + val, 0);

// Example usage:
let originalArray3 = [1, 2, 3, 4, 5];
let sum3 = sumArrayOptimized(originalArray3);
console.log(sum3); // Output: 15

// rotate an array to the right by a given number of positions

function rotateArrayOptimized(arr, positions) {
  let length = arr.length;
  positions = positions % length; // Handle cases where positions > length
  return arr.slice(-positions).concat(arr.slice(0, -positions));
}

// Example usage:
let originalArray3 = [1, 2, 3, 4, 5];
let rotatedArray3 = rotateArrayOptimized(originalArray3, 2);
console.log(rotatedArray3); // Output: [4, 5, 1, 2, 3]