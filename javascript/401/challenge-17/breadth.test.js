'use strict';

const { BinaryTree, breadthFirstTraverse } = require('./breadth-traverse');

describe('breadthFirstTraverse', () => {
  const tree = new BinaryTree();

  test('should return as values as expected', () => {

    tree.add(50);
    tree.add(40);
    tree.add(300);
    tree.add(2);
    tree.add(150);
    const values = breadthFirstTraverse(tree);
    expect(values).toHaveLength(5);
    expect(values[0]).toBe(50);
    expect(values[1]).toBe(40);
    expect(values[2]).toBe(300);
    expect(values[3]).toBe(2);
    expect(values[4]).toBe(150);
  });


});


// test('should return value for a tree with two levels', () => {
//   console.log('')
// });
// test('should return correct values with a tree with 3 levels', () => {
//   console.log('')
// });
// test('should return correct values with a tree that has 4 levels', () => {
//   console.log('')
// });
// test('should return correct values if the tree only has one left child', () => {
//   console.log('')
// });
// test('should return expected values for a tree with a single right child', () => {
//   console.log('')
// });
// test('should return expected values for a tree with a mix of even and odd values', () => {
//   console.log('')
// });
