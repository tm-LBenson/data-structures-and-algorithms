'use strict';

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
      values.push(node.values);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return values;
  }

}


module.exports = { Node, Tree };
