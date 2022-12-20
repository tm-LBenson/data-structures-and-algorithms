'use strict';

const { Node, Tree, BinaryTree } = require('./max-tree');

describe('Tree', () => {
  it('can be created as expected', () => {
    let tree = new Tree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);
    expect(tree.root.value).toEqual(10);
    expect(tree.root.left.value).toEqual(5);
  });

  it('returns a preOrder traversal array as expected', () => {
    let tree = new Tree();
    tree.root = new Node(11);
    tree.root.left = new Node(15);
    tree.root.right = new Node(45);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(3);
    tree.root.right.right = new Node(9);
    expect(tree.preOrder()).toEqual([11, 15, 1, 3, 45, 9]);
  });

  it('Can successfully instantiate an empty tree', () => {
    let tree = new BinaryTree();
    expect(tree.root).toBeNull();
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    let tree = new BinaryTree();
    tree.add(45);
    expect(tree.root.value).toEqual(45);
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();

  });

  test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    let tree = new BinaryTree();
    tree.add(45);
    tree.add(30);
    tree.add(50);

    expect(tree.root.value).toEqual(45);
    expect(tree.root.left.value).toEqual(30);
    expect(tree.root.right.value).toEqual(50);

  });

  test('Can successfully return a collection from a preorder traversal', () => {
    let tree = new BinaryTree();
    tree.add(45);
    tree.add(30);
    tree.add(50);
    tree.add(25);
    tree.add(55);

    expect(tree.preOrder()).toEqual([45, 30, 25, 50, 55]);
  });

  test('Can successfully return a collection from an inorder traversal', () => {
    let tree = new BinaryTree();
    tree.add(45);
    tree.add(30);
    tree.add(50);
    tree.add(25);
    tree.add(55);

    expect(tree.inOrder()).toEqual([25, 30, 45, 50, 55]);
  });

  test('Can successfully return a collection from a postorder traversal', () => {
    let tree = new BinaryTree();
    tree.add(45);
    tree.add(30);
    tree.add(50);
    tree.add(25);
    tree.add(55);
    expect(tree.postOrder()).toEqual([25, 30, 55, 50, 45]);
  });

  test('Can successfully return a collection from a postorder traversal', () => {
    let tree = new BinaryTree();
    tree.add(45);
    tree.add(30);
    tree.add(50);
    tree.add(25);
    tree.add(55);
    expect(tree.postOrder()).toEqual([25, 30, 55, 50, 45]);
  });


  test('Can return true if value is contained within the tree when contains method is called', () => {
    let tree = new BinaryTree();
    tree.add(45);
    tree.add(30);
    tree.add(50);
    tree.add(25);
    tree.add(55);
    expect(tree.contains(30)).toBe(true);
  });

  test('Can return false if value is not contained within the tree when contains method is called', () => {
    let tree = new BinaryTree();
    tree.add(45);
    tree.add(30);
    tree.add(50);
    tree.add(25);
    tree.add(55);
    expect(tree.contains(31)).toBe(false);
  });

  test('Can return the max value', () => {
    let tree = new BinaryTree();
    tree.add(45);
    tree.add(30);
    tree.add(50);
    tree.add(25);
    tree.add(55);
    expect(tree.maxValue()).toEqual(55);
  });

});



