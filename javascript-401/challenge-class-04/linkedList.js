'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  toString() {
    let current = this.head;
    let str = '';
    while (current) {
      str += `{ ${current.value} } -> `;

      current = current.next;
    }
    str += 'NULL';
    return str;
  }

  includes(value) {
    let current = this.head;
    let result = false;
    let currentValue = this.head.value;
    while (current && !result) {
      if (currentValue === value) result = true;
      current = current.next;
      if (current?.value) currentValue = current.value;
    }
    return result;
  }

  collection() {
    const collectionArray = [];
    let current = this.head;
    while (current) {
      collectionArray.push(current.value)
      current = current.next;
    }
    return collectionArray;
  }

}
const list = new LinkedList();
list.insert('value4');
list.insert('value3');
list.insert('value2');
list.insert('value1');
list.toString();
module.exports = LinkedList;
