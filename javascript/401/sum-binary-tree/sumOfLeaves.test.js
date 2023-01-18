const { BinaryTree } = require("../challenge-15/tree");
const sumOfLeaves = require("./sumOfLeaves");

describe("sumOfLeaves", () => {
  test("values of leaves sum to equal a certain amount", () => {
    const tree = new BinaryTree();
    tree.add(5);
    tree.add(3);
    tree.add(7);
    tree.add(2);
    tree.add(4);
    tree.add(6);
    tree.add(8);
    expect(sumOfLeaves(tree)).toBe(20);
  });

  test("an empty tree to return null", () => {
    const tree = new BinaryTree();
    expect(sumOfLeaves(tree)).toBe(null);
  });

  test("a tree with 1 node to return the value of that node", () => {
    const tree = new BinaryTree();
    tree.add(5);
    expect(sumOfLeaves(tree)).toBe(5);
  });
});
