'use strict';
class UnsupportedMethodError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnsupportedMethodError';
  }
}

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
    if (!this.top) throw new UnsupportedMethodError('The top is null');
    let temp = this.top;

    this.top = this.top.next;
    temp.next = null;
    return temp.value;
  }

  peek() {
    if (!this.top) throw new UnsupportedMethodError('The top is null');
    return this.top.value;
  }

  isEmpty() {
    if (!this.top) return true;
    return false;
  }

}


class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.front === null) {
      this.rear = node;
      this.front = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }

  dequeue() {
    if (!this.front) throw new UnsupportedMethodError('The top is null');
    let temp = this.front;
    this.front = this.front.next;
    temp.next = null;
    return temp.value;
  }

  peek() {
    if (!this.front) throw new UnsupportedMethodError('The top is null');
    return this.front.value;
  }

  isEmpty() {
    if (!this.front) return true;
    return false;
  }

}

module.exports = { Stack, Queue };
