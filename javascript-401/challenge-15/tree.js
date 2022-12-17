'use strict';

const { not } = require('cheerio/lib/api/traversing');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    const values = [];
    const traverse = (node) => {

      values.push(node.value);

      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }

    };
    traverse(this.root);
    return values;
  }

  postOrder() {
    const values = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      values.push(node.value);
    };
    traverse(this.root);
    return values;
  }

  inOrder() {
    const values = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      values.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return values;
  }

}



class BinaryTree extends Tree {
  constructor() {
    super();
    this.root = null;
  }
  add(value) {
    const node = new Node(value);
    if (!this.root) return this.root = node;

    const traverse = (node) => {
      if (node.value > value) {
        if (node.left) {
          traverse(node.left);
        } else {
          node.left = new Node(value);
          return;
        }
      } else {
        if (node.right) {
          traverse(node.right);
        } else {
          node.right = new Node(value);
          return;
        }
      }
    };
    traverse(this.root);
  }

  contains(value) {
    return this.postOrder.contains(value);
  }

}
module.exports = { Node, Tree, BinaryTree };
