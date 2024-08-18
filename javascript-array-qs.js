// Write a function to find and return the maximum element in an array of numbers without using built-in methods like Math.max

function findMaximum(arr) {
  return arr.reduce((max, current) => (current > max ? current : max), arr[0]);
}

// Write a function to reverse an array.

function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

// Write a function to remove duplicate elements from an array.

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Write a function to rotate an array k times to the right.

function rotateArrayOptimized(arr, k) {
  k = k % arr.length; // In case the number of rotations exceeds the length of the array
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  return arr;
}

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

// Given an array of n-1 numbers in the range from 1 to n, write a function to find the missing number.

function findMissingNumber(arr, n) {
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

// Write a function to merge two sorted arrays into a single sorted array.

function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // If there are remaining elements in arr1 or arr2, add them to mergedArray
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

// Write a function that takes a nested array and returns a flattened version of the array.

function flattenArrayBruteForce(arr) {
  let flatArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArray = flatArray.concat(flattenArrayBruteForce(arr[i]));
    } else {
      flatArray.push(arr[i]);
    }
  }
  return flatArray;
}

// Write a function that takes an array of numbers and a target sum, and returns indices of the two numbers that add up to the target.

function twoSum(arr, target) {
  let numIndices = new Map();
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (numIndices.has(complement)) {
      return [numIndices.get(complement), i];
    }
    numIndices.set(arr[i], i);
  }
}

// Maximum product of three numbers in an array

function maxProductOfThree(arr) {
  arr.sort((a, b) => a - b);
  let n = arr.length;
  let product1 = arr[0] * arr[1] * arr[n - 1]; // Product of two smallest and one largest
  let product2 = arr[n - 1] * arr[n - 2] * arr[n - 3]; // Product of three largest
  return Math.max(product1, product2);
}
