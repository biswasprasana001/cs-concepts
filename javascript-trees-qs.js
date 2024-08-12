// Write a TreeNode class in JavaScript that represents a node in a binary tree with properties for the value, left child, and right child.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function insertNode(root, value) {
  const newNode = new TreeNode(value);
  if (!root) {
    return newNode;
  }

  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();

    if (!current.left) {
      current.left = newNode;
      return root; // Return the updated tree root
    } else {
      queue.push(current.left);
    }

    if (!current.right) {
      current.right = newNode;
      return root; // Return the updated tree root
    } else {
      queue.push(current.right);
    }
  }
}

// Write functions for in-order, pre-order, and post-order traversal of a binary tree in JavaScript.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function inOrderTraversal(node) {
  if (node !== null) {
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
  }
}

function preOrderTraversal(node) {
  if (node !== null) {
    console.log(node.value);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
  }
}

function postOrderTraversal(node) {
  if (node !== null) {
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    console.log(node.value);
  }
}

// Create a function that finds the height of a given binary tree

function findHeight(node) {
  if (node === null) {
    return -1; // Base case: the height of an empty tree is -1
  }
  // Recursive case: compute the height of each subtree
  const leftHeight = findHeight(node.left);
  const rightHeight = findHeight(node.right);

  // The height of the tree is the maximum of the heights of its subtrees, plus one
  return Math.max(leftHeight, rightHeight) + 1;
}

// Write a JavaScript function that checks if a binary tree is balanced.

function checkHeight(node) {
  if (node === null) {
    return -1;
  }

  let leftHeight = checkHeight(node.left);
  if (leftHeight === Number.MIN_SAFE_INTEGER) return Number.MIN_SAFE_INTEGER; // Left subtree is not balanced

  let rightHeight = checkHeight(node.right);
  if (rightHeight === Number.MIN_SAFE_INTEGER) return Number.MIN_SAFE_INTEGER; // Right subtree is not balanced

  let heightDiff = Math.abs(leftHeight - rightHeight);
  if (heightDiff > 1) {
    return Number.MIN_SAFE_INTEGER; // Current node is not balanced
  } else {
    return Math.max(leftHeight, rightHeight) + 1; // Return the height if balanced
  }
}

function isBalancedOptimized(node) {
  return checkHeight(node) !== Number.MIN_SAFE_INTEGER;
}

// Write a JavaScript function that finds the lowest common ancestor (LCA) of two given nodes in a binary tree.

function findLCA(root, n1, n2) {
  while (root !== null) {
    // If both n1 and n2 are smaller than root, LCA lies in left
    if (root.value > n1 && root.value > n2) {
      root = root.left;
    }
    // If both n1 and n2 are greater than root, LCA lies in right
    else if (root.value < n1 && root.value < n2) {
      root = root.right;
    }
    // If we reach a point where n1 and n2 split, we've found the LCA
    else break;
  }
  return root;
}

// Given a binary tree and a sum, write a function that returns true if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

function hasPathSum(node, sum, currentSum = 0) {
  if (node === null) {
    return false;
  }
  currentSum += node.value;
  if (node.left === null && node.right === null) {
    // Check if it's a leaf node
    return currentSum === sum;
  }
  // Recursively check the left and right subtree with the updated sum
  return (
    hasPathSum(node.left, sum, currentSum) ||
    hasPathSum(node.right, sum, currentSum)
  );
}
