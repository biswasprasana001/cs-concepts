// Write a function to check if a given string is a palindrome. Consider alphanumeric characters only and ignore case sensitivity.


function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false; // If characters don't match, it's not a palindrome
        }
    }
    return true; // If all characters match, it is a palindrome
}

// Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the “compressed” string would not become smaller than the original string, your method should return the original string.

function compressString(str) {
    let compressed = '';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count++;
        if (i + 1 >= str.length || str[i] !== str[i + 1]) {
            compressed += str[i] + count;
            count = 0;
        }
    }
    return compressed.length < str.length ? compressed : str;
}

// Write a function that determines if two strings are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false; // Early return if lengths differ
    }

    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2; // Compare sorted strings
}

// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

function isUnique(str) {
    let charSet = new Set();
    for (let char of str) {
        if (charSet.has(char)) {
            return false;
        }
        charSet.add(char);
    }
    return true;
}

// Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g., “waterbottle” is a rotation of “erbottlewat”).

function isSubstring(str1, str2) {
    return str1.includes(str2);
}

// Write a function that takes a string and returns the first character that does not repeat itself in that string.

function firstNonRepeatingCharacter(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return str[i];
        }
    }
    return null;
}

// Implement a myAtoi(string s) function which converts a string to an integer, following the rules of C’s atoi() function.

function myAtoi(str) {
    let num = 0;
    let sign = 1;
    let i = 0;
    while (i < str.length && str[i] === ' ') {
        i++;
    }   
    if (i < str.length && (str[i] === '+' || str[i] === '-')) {
        sign = str[i] === '+' ? 1 : -1;
        i++;
    }   
    while (i < str.length && str[i] >= '0' && str[i] <= '9') {
        num = num * 10 + (str[i] - '0');
        i++;
    }   
    num *= sign;
    return Math.min(Math.max(num, -Math.pow(2, 31)), Math.pow(2, 31) - 1);
}

// Given a string, find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(str) {
    let longest = 0;
    let start = 0;
    let charSet = new Set();
    for (let end = 0; end < str.length; end++) {
        while (charSet.has(str[end])) {
            charSet.delete(str[start]);
            start++;
        }   
        charSet.add(str[end]);
        longest = Math.max(longest, end - start + 1);
    }   
    return longest;
}
