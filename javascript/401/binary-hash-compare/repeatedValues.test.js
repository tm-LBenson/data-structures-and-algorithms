"use strict";
const { BinaryTree } = require("../challenge-15/tree");
const repeatedValues = require("./repeatedValues");

const tree = new BinaryTree();
const tree2 = new BinaryTree();
tree.add(50);
tree.add(100);
tree.add(70);
tree.add(60);
tree.add(10);
tree.add(200);
tree.add(5);
tree2.add(501);
tree2.add(1001);
tree2.add(701);
tree2.add(601);
tree2.add(110);
tree2.add(2001);
tree2.add(51);

describe("Repeated Values Unit testing", () => {
  it("returns null if no match is made", () => {
    expect(repeatedValues(tree, tree2)).toBeNull();
  });

  it("Returns an array of values when a match is found", () => {
    tree2.add(5);
    tree2.add(51);
    const values = repeatedValues(tree, tree2);
    expect(values.includes(5)).toBe(true);
    expect(values.includes(51)).toBe(true);
    expect(values.includes(2001)).toBe(false);
  });

});
