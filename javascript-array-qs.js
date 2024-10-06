function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

function removeDuplicates(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

function removeDuplicates(arr) {
  let uniqueSet = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueSet.has(arr[i])) {
      uniqueSet.add(arr[i]);
    }
  }
  return Array.from(uniqueSet);
}

function flattenArray(arr) {
  let result = [];
  arr.forEach(element => {
    if (Array.isArray(element)) {
      result = result.concat(flattenArray(element));
    } else {
      result.push(element);
    }
  })
  return result;
}

function flattenArray(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}


function mergeArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0, j = 0;
  
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  
  while (i < arr1.length) {
    mergedArray.push(arr1[i])
    i++;
  }
  
  while (j < arr2.length) {
    mergedArray.push(arr2[j])
    j++;
  }
  
  return mergedArray;
}

function findCommonElements(arr1, arr2) {
  let commonElements = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j] && !commonElements.includes(arr1[i])) {
        commonElements.push(arr1[i]);
      }
    }
  }
  return commonElements;
}

function findCommonElements(arr1, arr2) {
  let set1 = new Set(arr1);
  let commonElements = arr2.filter(element => set1.has(element));
  return commonElements;
}

function findCommonElements(arr1, arr2) {
  let map = new Map();
  arr1.forEach(element => map.set(element, true));
  let commonElements = arr2.filter(element => map.has(element));
  return commonElements;
}

function rotateArray(arr, k) {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}

function rotateArray(arr, k) {
  function reverse(arr, start, end) {
    while(start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  
  k = k % arr.length;
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  return arr;
}

function findMissingNumber(arr) {
  let n = arr.length + 1;
  for (let i = 1; i <= n; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
}

function findMissingNumber(arr) {
  let n = arr.length + 1;
  let actualSum = arr.reduce((acc, val) => acc + val, 0);
  let expectedSum = (n * (n + 1)) / 2;
  return expectedSum - actualSum;
}

function isPalindrome (arr) {
  let reversedArr = arr.slice().reverse();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== reversedArr[i]) {
      return false;
    }
  }
  return true;
}

function isPalindrome(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    if (arr[start] !== arr[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

function isPalindrome(arr) {
  return arr.every((val, index) => val == arr[arr.length - 1 - index]);
}

function chunkArray (arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

function chunkArray(arr, size) {
  return arr.reduce((acc, val, index) => {
    if (index % size == 0) acc.push([]);
    acc[acc.length - 1].push(arr[index]);
    return acc;
  }, [])
}

function findPairs(arr, target) {
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs;
}

function findPairs(arr, target) {
  let pairs = [];
  let seen = new Set();
  for (let num of arr) {
    let complement = target - num;
    if (seen.has(complement)) {
      pairs.push([complement, num]);
    }
    seen.add(num);
  }
  return pairs;
}

function findPairs(arr, target) {
  arr.sort((a, b) => a - b);
  let pairs = [];
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    if (arr[start] + arr[end] == target) {
      pairs.push([arr[start], arr[end]]);
      start++;
      end--;
    }
    else if (arr[start] + arr[end] < target) {
      start++;
    } else {
      end--;
    }
  }
  return pairs;
}

function firstNonRepeatingElement(arr) {
  for (let i = 0; i < arr.length; i++) {
  let isRepeating = false;
    for (let j = 0; j < arr.length; j++) {
      if (i != j && arr[i] == arr[j]) {
        isRepeating = true;
        break;
      }
    }
    if (!isRepeating) {
      return arr[i];
    }
  }
  return null;
}

function firstNonRepeatingElement(arr) {
  let frequencyMap = new Map();
  for (let num of arr) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }
  for(let num of arr){
    if (frequencyMap.get(num) === 1) {
      return num;
    }
  }
  return null;
}

function firstNonRepeatingElement(arr) {
  let frequencyMap = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {})
  
  for (let num of arr) {
    if (frequencyMap[num] == 1) {
      return num;
    }
  }
  return null;
}

function moveZerosToEnd(arr) {
  let result = [];
  let zeros = [];
  for (let num of arr) {
    if (num == 0) {
      zeros.push(num);
    } else {
      result.push(num);
    }
  }
  return result.concat(zeros);
}

function moveZerosToEnd(arr) {
  let index = 0;
  for (let num of arr) {
    if (num !== 0) {
      arr[index++] = num;
    }
  }
  for (let i = index; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

function moveZerosToEnd(arr) {
  let nonZeros = arr.filter(num => num !== 0);
  let zeros = arr.filter(num => num == 0);
  return nonZeros.concat(zeros);
}


function longestConsecutiveSequence(arr) {
  let numSet = new Set(arr);
  return arr.reduce((longestStreak, num) => {
    if (!numSet.has(num - 1)) {
      let currentStreak = 1;
      let currentNum = num;
      while(numSet.has(currentNum + 1)) {
        currentStreak++;
        currentNum++;
      }
      return Math.max(longestStreak, currentStreak);
    }
    return longestStreak;
  }, 0)
}

function maxProductBruteForce(arr) {
  let maxProduct = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
            let product = arr[i] * arr[j];
            if (product > maxProduct) {
                maxProduct = product;
            }
    }
  }
  return maxProduct;
}

function maxProductUsingSorting(arr) {
  arr.sort((a, b) => a - b);
  n = arr.length;
  return Math.max(arr[0] * arr[1], arr[n - 1] * arr[n - 2]);
}

function maxProductUsingLinearScan(arr) {
  let max1 = -Infinity, max2 = -Infinity;
  let min1 = Infinity. min2 = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] > max2) {
      max2 = arr[i];
    }
    
    if (arr[i] < min1) {
      min2 = min1;
      min1 = arr[i];
    } else if (arr[i] < min2) {
      min2 = arr[i];
    }
  }
  return Math.max(max1 * max2, min1 * min2);
}

function findMajorityElementBruteForce(arr) {
  let n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count > n / 2) {
      return arr[i];
    }
  }
  return null;
}

function findMajorityElementUsingHashMap(arr) {
  let frequencyMap = new Map();
  let n = arr.length;
  for (let num of arr) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    if (frequencyMap.get(num) > n / 2) {
      return num;
    }
  }
  return null;
}

function findMajorityElementBoyerMoore(arr) {
  let count = 0;
  let candidate = null;
  for (let num of arr) {
    if (count == 0) {
      candidate = num;
    }
    count += candidate == num ? 1 : -1;
   }
   
  count = 0;
  let n = arr.length;
  for (let num of arr) {
    if (num == candidate) {
      count++;
    }
  if (count > n / 2) {
    return num;
  }
  }
  return null;
}

let arr = [3, 3, 4, 2, 4, 4, 2, 4, 4];
console.log(findMajorityElementBoyerMoore(arr)); // Output: 4
