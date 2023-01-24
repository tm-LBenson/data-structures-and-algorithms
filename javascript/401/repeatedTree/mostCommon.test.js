"use strict";
const { BinaryTree } = require("../challenge-15/tree");
const mostCommon = require("./mostCommon");
describe("mostCommon", () => {
  let tree;
  beforeEach(() => {
    tree = new BinaryTree();
  });

  test("returns correct value for simple tree", () => {
    tree.add(5);
    tree.add(3);
    tree.add(7);
    tree.add(3);
    tree.add(3);
    tree.add(8);
    expect(mostCommon(tree)).toEqual(3);
  });

  test("returns correct value for larger tree", () => {
    tree.add(5);
    tree.add(5);
    tree.add(5);
    tree.add(3);
    tree.add(7);
    tree.add(3);
    tree.add(3);
    tree.add(8);
    tree.add(8);
    tree.add(8);
    expect(mostCommon(tree)).toEqual(5);
  });

  test("returns first value for tree with all unique values", () => {
    tree.add(5);
    tree.add(3);
    tree.add(7);
    tree.add(8);
    tree.add(2);
    tree.add(1);
    expect(mostCommon(tree)).toEqual(5);
  });
});
