// Write a function that flattens a nested array. Assume that you do not know the depth of the nested arrays.

function flattenBruteForce(array) {
  let flatArray = [];

  array.forEach(item => {
    if (Array.isArray(item)) {
      flatArray = flatArray.concat(flattenBruteForce(item));
    } else {
      flatArray.push(item);
    }
  });

  return flatArray;
}

// Duplicate Zeros: For a given array, duplicate each occurrence of zero, shifting the remaining elements to the right. Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place, do not return anything from your function.

function duplicateZeros(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      // Shift all elements to the right by one
      for (let j = arr.length - 1; j > i; j--) {
        arr[j] = arr[j - 1];
      }
      // Skip the next number after a zero is duplicated
      i++;
    }
  }
}

// Max Consecutive Ones: Given a binary array, write a function to compute the maximum number of consecutive 1s in the array.

function findMaxConsecutiveOnesBruteForce(array) {
  let maxConsecutive = 0;
  let currentConsecutive = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      currentConsecutive++;
      maxConsecutive = Math.max(maxConsecutive, currentConsecutive);
    } else {
      currentConsecutive = 0;
    }
  }

  return maxConsecutive;
}

// Check if N and its Double Exist: Write a function that checks whether there are two distinct indices i and j in the array such that nums[i] is 2 * nums[j]. 

function checkIfExist(nums) {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num * 2) || (num % 2 === 0 && seen.has(num / 2))) {
      return true;
    }
    seen.add(num);
  }
  return false;
}

// Replace Elements with Greatest Element on Right Side: Write a function that replaces every element in an array with the greatest element among the elements to its right, and replace the last element with -1. 

function replaceElements(arr) {
  let max = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    let newMax = Math.max(arr[i], max);
    arr[i] = max;
    max = newMax;
  }
  return arr;
}

// Move Zeroes: Write a function to move all 0’s to the end of an array while maintaining the relative order of the non-zero elements.

function moveZeroes(nums) {
  let lastNonZeroFoundAt = 0;

  // Move all the non-zero elements to the beginning of the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroFoundAt++] = nums[i];
    }
  }

  // Fill the rest of the array with zeros
  for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
    nums[i] = 0;
  }
}

// Balanced Parentheses: Given an array of parentheses, write a function that checks if the array is balanced.

function isBalanced(parentheses) {
  const stack = [];

  for (const char of parentheses) {
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.length === 0) {
        return false; // A closing parenthesis without a matching opening one
      }
      stack.pop();
    }
  }

  return stack.length === 0; // True if all open parentheses have been closed
}

// Maximum Product Subarray: Find the contiguous subarray within an array (containing at least one number) which has the largest product. 

function maxProductSubarray(nums) {
  let maxProduct = nums[0];
  let minProduct = nums[0];
  let result = maxProduct;

  for (let i = 1; i < nums.length; i++) {
    let choices = [nums[i], nums[i] * maxProduct, nums[i] * minProduct];
    maxProduct = Math.max(...choices);
    minProduct = Math.min(...choices);
    result = Math.max(maxProduct, result);
  }

  return result;
}

// Longest Consecutive Sequence: Write a function that finds the length of the longest consecutive elements sequence from an unsorted array of integers.

function longestConsecutiveBruteForce(nums) {
  if (nums.length === 0) {
    return 0;
  }

  nums.sort((a, b) => a - b);
  let longestStreak = 1;
  let currentStreak = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      if (nums[i] === nums[i - 1] + 1) {
        currentStreak += 1;
      } else {
        longestStreak = Math.max(longestStreak, currentStreak);
        currentStreak = 1;
      }
    }
  }

  return Math.max(longestStreak, currentStreak);
}
