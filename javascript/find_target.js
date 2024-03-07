class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function findTarget(root, target) {
  // type your code here
  if (!root) {
    return null;
  }

  if (root.value === target) {
    return root;
  }
  if (root.value > target) {
    if (root.left) {
      return findTarget(root.left, target);
    }
    else {
      return null;
    }
  }
  if (root.value < target) {
    if (root.right) {
      return findTarget(root.right, target)
    }
    else {
      return null;
    }
  }
}

if (require.main === module) {
  // add your own tests in here
  let root = new Node(1, new Node(-1), new Node(2));
  console.log("Expecting: Node with value 2");
  console.log(findTarget(root, 2));

  console.log("");

  console.log("Expecting: null");
  console.log(findTarget(root, 5));

  console.log("");

  root = new Node(1, new Node(-1), new Node(4, new Node(3), new Node(6)))
  console.log("Expecting: null");
  console.log(findTarget(root, 0));
}

module.exports = { findTarget, Node };

// Please add your pseudocode to this file
// And a written explanation of your solution
