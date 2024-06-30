// 1. Write a javascript function that takes a string and returns it reversed without using built-in methods.

// Brute Force
function reverseString(str) {
    let reversed = ''; // This will hold the reversed string
    for (let i = str.length - 1; i >= 0; i--) { // Start from the end of the string
        reversed += str[i]; // Concatenate each character to 'reversed'
    }
    return reversed; // Return the reversed string
}

// Optimised
function reverseStringOptimized(str) {
    let reversed = '';
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        reversed = str[i] + reversed + str[str.length - 1 - i];
    }
    if (str.length % 2 === 1) {
        reversed = str[Math.floor(str.length / 2)] + reversed;
    }
    return reversed;
}


// 2. Implement a function that checks if a given string is a palindrome.

// Brute Force
function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false; // If characters don't match, it's not a palindrome
        }
    }
    return true; // If all characters match, it is a palindrome
}

// Optimised
function isPalindromeOptimized(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

// 3. Create a function that finds and returns the longest word in a provided sentence.

// Brute Force
function findLongestWord(sentence) {
    let words = sentence.split(' '); // Split the sentence into words
    let longestWord = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i]; // Update longestWord if current word is longer
        }
    }
    return longestWord; // Return the longest word found
}

// Optimised
function findLongestWordOptimized(sentence) {
    let maxLength = 0;
    let currentLength = 0;
    let longestWord = '';
    let currentWord = '';

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        if (char === ' ' || i === sentence.length - 1) {
            if (i === sentence.length - 1) currentWord += char; // Add last character
            if (currentLength > maxLength) {
                maxLength = currentLength;
                longestWord = currentWord;
            }
            currentWord = ''; // Reset current word
            currentLength = 0; // Reset current word length
        } else {
            currentWord += char;
            currentLength++;
        }
    }
    return longestWord;
}

// 4. Write a function that counts the number of vowels in a given string.

// Brute Force
function countVowels(str) {
    let count = 0; // Initialize a counter
    const vowels = 'aeiouAEIOU'; // String of vowels to check against

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++; // Increment count if the character is a vowel
        }
    }
    return count; // Return the total count of vowels
}

// Optimised
function countVowelsOptimized(str) {
    let count = 0;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    for (let char of str) {
        if (vowels.has(char)) {
            count++;
        }
    }
    return count;
}

// 5. Write a function that capitalizes the first letter of each word in a string. 

// Brute Force
function capitalizeWords(str) {
    let result = str[0].toUpperCase(); // Capitalize the first character

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            result += str[i].toUpperCase(); // Capitalize if the previous character is a space
        } else {
            result += str[i]; // Otherwise, just add the character
        }
    }
    return result;
}

// Optimised
function capitalizeWordsOptimized(str) {
    const words = str.split(' ');
    const capitalizedWords = words.map(word =>
        word[0].toUpperCase() + word.substring(1)
    );
    return capitalizedWords.join(' ');
}  

// 6. Implement a function that determines if two strings are anagrams of each other.

// Brute Force
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
      return false; // Early return if lengths differ
    }
  
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');
  
    return sortedStr1 === sortedStr2; // Compare sorted strings
  }

// Optimised
function areAnagramsOptimized(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    const charCount = {};
  
    for (let char of str1) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    for (let char of str2) {
      if (!charCount[char]) {
        return false; // Character in str2 not found in str1
      }
      charCount[char]--;
    }
  
    return Object.values(charCount).every(count => count === 0);
  }
  
// 7. Write a function that converts a string from snake_case to camelCase.

// Brute Force
function snakeToCamel(str) {
    let camelCase = '';
    let capitalizeNext = false; // Flag to determine when to capitalize
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '_') {
        capitalizeNext = true; // Next character should be uppercase
      } else {
        camelCase += capitalizeNext ? str[i].toUpperCase() : str[i];
        capitalizeNext = false; // Reset the flag
      }
    }
    return camelCase;
  }

// Optimised
function snakeToCamelOptimized(str) {
    const chars = []; // Use an array to store characters
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== '_') {
        // If not an underscore, check if the previous character was an underscore
        const char = str[i - 1] === '_' ? str[i].toUpperCase() : str[i];
        chars.push(char);
      }
    }
    return chars.join(''); // Join the array into a string
  }

// 8. Create a function that finds the character that appears the most times in a string.

// Brute Force
function mostFrequentChar(str) {
    let maxCount = 0;
    let maxChar = '';
  
    for (let i = 0; i < str.length; i++) {
      let count = 0;
      for (let j = 0; j < str.length; j++) {
        if (str[i] === str[j]) {
          count++;
        }
      }
      if (count > maxCount) {
        maxCount = count;
        maxChar = str[i];
      }
    }
    return maxChar;
  }

// Optimised
function mostFrequentCharOptimized(str) {
    const charCounts = {};
    let maxCount = 0;
    let maxChar = '';
  
    for (let char of str) {
      charCounts[char] = (charCounts[char] || 0) + 1;
      if (charCounts[char] > maxCount) {
        maxCount = charCounts[char];
        maxChar = char;
      }
    }
    return maxChar;
  }

// 9. Write a function that mimics the behavior of the trim() method, removing whitespace from both ends of a string.

// Brute Force
function trimString(str) {
    let start = 0; // Index to track the start of non-whitespace characters
    let end = str.length - 1; // Index to track the end of non-whitespace characters
  
    // Find the first non-whitespace character from the start
    while (start < str.length && str[start] === ' ') {
      start++;
    }
  
    // Find the first non-whitespace character from the end
    while (end >= 0 && str[end] === ' ') {
      end--;
    }
  
    // Build the trimmed string
    let trimmed = '';
    for (let i = start; i <= end; i++) {
      trimmed += str[i];
    }
    return trimmed;
  }

// Optimised
function trimStringOptimized(str) {
    let start = 0;
    let end = str.length - 1;
  
    while (start < str.length && str[start] === ' ') {
      start++;
    }
  
    while (end >= 0 && str[end] === ' ') {
      end--;
    }
  
    // Use substring to directly create the trimmed string
    return str.substring(start, end + 1);
  }

// 10. Write a function that encodes a string using the Caesar cipher with a given shift.

// Brute Force
function caesarCipher(str, shift) {
    let result = '';
  
    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);
  
      if (charCode >= 65 && charCode <= 90) {
        // Uppercase letters
        result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        // Lowercase letters
        result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
      } else {
        // Non-alphabetic characters
        result += str[i];
      }
    }
    return result;
  }

// Optimised
function shiftChar(charCode, base, shift) {
    return String.fromCharCode(((charCode - base + shift) % 26) + base);
  }
  
  function caesarCipherOptimized(str, shift) {
    return str.split('').map(char => {
      let charCode = char.charCodeAt(0);
  
      if (char >= 'A' && char <= 'Z') {
        return shiftChar(charCode, 65, shift);
      } else if (char >= 'a' && char <= 'z') {
        return shiftChar(charCode, 97, shift);
      } else {
        return char;
      }
    }).join('');
  }  