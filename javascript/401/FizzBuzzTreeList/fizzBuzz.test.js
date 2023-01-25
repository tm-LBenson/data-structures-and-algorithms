"use strict";
const { BinaryTree } = require("../challenge-15/tree");
const fizzBuzzList = require("./fizzBuzz");
describe("fizzBuzzList", () => {
  let tree;

  beforeEach(() => {
    tree = new BinaryTree();
  });

  test("should return correct linked list for tree with values 1-2-3-4-5", () => {
    tree.add(1);
    tree.add(2);
    tree.add(3);
    tree.add(4);
    tree.add(5);
    expect(fizzBuzzList(tree)).toEqual({
      value: 1,
      next: {
        value: 2,
        next: {
          value: "Fizz",
          next: { value: 4, next: { value: "Buzz", next: {} } },
        },
      },
    });
  });

  test("should return correct linked list", () => {
    tree.add(1);
    tree.add(2);
    tree.add(5);
    tree.add(9);
    tree.add(15);
    tree.add(20);
    expect(fizzBuzzList(tree)).toHaveProperty("next");
  });

  test("should return correct linked list for tree with values 15-45-60", () => {
    tree.add(15);
    tree.add(45);
    tree.add(60);
    expect(fizzBuzzList(tree)).toEqual({
      value: "FizzBuzz",
      next: { value: "FizzBuzz", next: { value: "FizzBuzz", next: {} } },
    });
  });
});
