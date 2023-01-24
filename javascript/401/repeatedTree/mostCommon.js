const mostCommon = (tree) => {
  if (!tree.root) {
    return null;
  }
  const hashMap = new Map();
  const traverse = (node) => {
    if (node) {
      if (hashMap.has(node.value)) {
        hashMap.set(node.value, hashMap.get(node.value) + 1);
      } else {
        hashMap.set(node.value, 1);
      }
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
  };
  traverse(tree.root);
  let max = -Infinity;
  let maxValue = null;
  for (let [value, key] of hashMap.entries()) {
    if (key > max) {
      max = key;
      maxValue = value;
    }
  }
  return maxValue;
};
module.exports = mostCommon;
