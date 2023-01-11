function repeatedValues(tree1, tree2) {
  let hashMap = new Map();
  let result = [];

  function traversal(root) {
    if (root === null) {
      return;
    }

    if (hashMap.has(root.value)) {
      let count = hashMap.get(root.value);
      hashMap.set(root.value, count + 1);
    } else {
      hashMap.set(root.value, 1);
    }

    traversal(root.left);
    traversal(root.right);
  }

  traversal(tree1.root);
  traversal(tree2.root);

  hashMap.forEach((value, key) => {
    if (value > 1) {
      result.push(key);
    }
  });

  if (result.length > 0) {
    return result;
  } else {
    return null;
  }
}

module.exports = repeatedValues;
