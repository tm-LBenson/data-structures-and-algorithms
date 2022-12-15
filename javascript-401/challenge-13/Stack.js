class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    if (!this.top) null;
    let temp = this.top;

    this.top = this.top.next;
    temp.next = null;
    return temp.value;
  }

  peek() {
    if (!this.top) null;
    return this.top.value;
  }

  isEmpty() {
    if (!this.top) return true;
    return false;
  }

}

module.exports = Stack;
