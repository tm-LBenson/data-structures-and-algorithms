'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


class BinaryTree {
  constructor() {
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

}

function breadthFirstTraverse(tree) {

  const values = [];
  const queue = [tree.root];
  while (queue.length) {
    const current = queue.shift();

    values.push(current.value);
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return values;
}



module.exports = { BinaryTree, breadthFirstTraverse };
