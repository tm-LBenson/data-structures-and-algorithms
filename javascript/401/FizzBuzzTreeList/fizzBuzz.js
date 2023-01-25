function fizzBuzzList(tree) {
  if (!tree.root) {
    return null;
  }
  let linkedList = {};
  let current = linkedList;
  function traverse(node) {
    if (node) {
      switch (true) {
        case node.value % 3 === 0 && node.value % 5 === 0:
          current.value = "FizzBuzz";
          break;
        case node.value % 3 === 0:
          current.value = "Fizz";
          break;
        case node.value % 5 === 0:
          current.value = "Buzz";
          break;
        default:
          current.value = node.value;
          break;
      }
      current.next = {};
      current = current.next;
      traverse(node.left);
      traverse(node.right);
    }
  }
  traverse(tree.root);
  return linkedList;
}
module.exports = fizzBuzzList;
