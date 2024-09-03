// Write a javascript function that takes a string as input and returns the string reversed.

function reverseStringOptimized(str) {
  let arr = str.split('');
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
  }

  return arr.join('');
}

// Example usage:
console.log(reverseStringOptimized("hello")); // Output: "olleh"

// Write a function to determine if a given string is a palindrome (a string that reads the same backward as forward).

function isPalindromeOptimized(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
      if (str[left] !== str[right]) {
          return false;
      }
      left++;
      right--;
  }

  return true;
}

// Example usage:
console.log(isPalindromeOptimized("racecar")); // Output: true
console.log(isPalindromeOptimized("hello"));   // Output: false

// Write a function that counts the number of vowels (a, e, i, o, u) in a given string.

function countVowelsOptimized(str) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let count = 0;

  for (let char of str) {
      if (vowels.has(char)) {
          count++;
      }
  }

  return count;
}

// Example usage:
console.log(countVowelsOptimized("hello")); // Output: 2
console.log(countVowelsOptimized("world")); // Output: 1

// Write a function that returns the first non-repeating character in a string. 

function firstNonRepeatingCharacterOptimized(str) {
  const charCount = new Map();
  for (let char of str) {
      charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  for (let char of str) {
      if (charCount.get(char) === 1) {
          return char;
      }
  }
  return null;
}

// Example usage:
console.log(firstNonRepeatingCharacterOptimized("swiss")); // Output: "w"
console.log(firstNonRepeatingCharacterOptimized("hello")); // Output: "h"
console.log(firstNonRepeatingCharacterOptimized("aabb"));  // Output: null

// Write a function to check if two strings are anagrams of each other (i.e., they contain the same characters in a different order). 

function areAnagramsOptimized(str1, str2) {
  if (str1.length !== str2.length) {
      return false;
  }
  const charCount = new Map();
  for (let char of str1) {
      charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  for (let char of str2) {
      if (!charCount.has(char) || charCount.get(char) === 0) {
          return false;
      }
      charCount.set(char, charCount.get(char) - 1);
  }
  return true;
}

// Example usage:
console.log(areAnagramsOptimized("listen", "silent")); // Output: true
console.log(areAnagramsOptimized("hello", "world"));   // Output: false

// Write a function that counts the number of occurrences of each character in a string and returns an object with the counts.

function countCharacterOccurrencesOptimized(str) {
  const charCount = new Map();
  for (let char of str) {
      charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  const result = {};
  charCount.forEach((value, key) => {
      result[key] = value;
  });
  return result;
}

// Example usage:
console.log(countCharacterOccurrencesOptimized("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }
console.log(countCharacterOccurrencesOptimized("world")); // Output: { w: 1, o: 1, r: 1, l: 1, d: 1 }

// Write a function that takes a sentence and returns the longest word in that sentence.

function findLongestWordOptimized(sentence) {
  const words = sentence.split(' ');
  let longestWord = '';

  for (let word of words) {
      if (word.length > longestWord.length) {
          longestWord = word;
      }
  }

  return longestWord;
}

// Example usage:
console.log(findLongestWordOptimized("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
console.log(findLongestWordOptimized("Hello world")); // Output: "Hello"


// Write a function that capitalizes the first letter of each word in a given string. 

function capitalizeFirstLetterImproved(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Example usage:
console.log(capitalizeFirstLetterImproved("hello world")); // Output: "Hello World"
console.log(capitalizeFirstLetterImproved("javascript is fun")); // Output: "Javascript Is Fun"

// Write a function that checks if a given substring exists within a string.

function isSubstringImproved(str, substr) {
  return str.includes(substr);
}

// Example usage:
console.log(isSubstringImproved("hello world", "world")); // Output: true
console.log(isSubstringImproved("hello world", "planet")); // Output: false

// Write a function to remove all duplicate characters from a string. 

function removeDuplicatesOptimized(str) {
  const seen = new Set();
  return Array.from(str).filter(char => {
      if (seen.has(char)) {
          return false;
      } else {
          seen.add(char);
          return true;
      }
  }).join('');
}

// Example usage:
console.log(removeDuplicatesOptimized("hello")); // Output: "helo"
console.log(removeDuplicatesOptimized("world")); // Output: "world"