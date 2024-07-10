// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.

function findLongestWord(str) {
    let words = str.split(' ');
    let longestWord = '';
  
    for (let word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
  }

// Write a function that takes a string and returns the number of vowels contained in that string.

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
  
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  }

// Create a function that takes a string and capitalizes the first letter of each word. 

function capitalizeWords(str) {
    let words = str.split(' ');
    let capitalizedWords = [];
  
    for (let word of words) {
      capitalizedWords.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
  
    return capitalizedWords.join(' ');
  }

// Implement a method to perform basic string compression using the counts of repeated characters.

function compressString(str) {
    let compressed = '';
    let count = 1;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        count++;
      } else {
        compressed += str[i] + String(count);
        count = 1;
      }
    }
  
    return compressed;
  }
  
// Write a function that counts the number of times a substring occurs in a given string.

function countSubstring(str, substring) {
    let count = 0;
    let index = 0;
  
    while ((index = str.indexOf(substring, index)) !== -1) {
      count++;
      index += substring.length;
    }
  
    return count;
  }