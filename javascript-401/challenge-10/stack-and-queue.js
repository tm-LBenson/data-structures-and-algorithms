'use strict';

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

  }

  peep() {

  }

  isEmpty() {

  }

}


class Queue {
  constructor() {
    this.front = null;
  }

  enqueue(value) {
    const node = new Node(value);
    node.next = this.front;
    this.front = node;
  }

  dequeue() {

  }

  peep() {

  }

  isEmpty() {

  }

}

module.exports = { Stack, Queue };
