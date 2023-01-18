function sumOfLeaves(tree) {
  if (!tree.root) return null;
  let total = 0;

  function traverse(node) {
    if (node.left) traverse(node.left);

    if (node.right) traverse(node.right);

    if (!node.right && !node.left) {
      total += node.value;
    }
  }
  traverse(tree.root);
  return total;
}

module.exports = sumOfLeaves;
