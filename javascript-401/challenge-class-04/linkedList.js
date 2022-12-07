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

  append(value) {
    const node = new Node(value)
    let current = this.head;
    if (!current) {
      current = node;
    } else {
      while (current) {
        current = current.next
        if (!current.next) {
          current.next = node;
          break
        }
      }
    }
  }

  insertBefore(value, newValue) {
    const node = new Node(newValue)
    let current = this.head;
    if (this.head.value === value) {
      this.insert(newValue);
    } else {
      while (current) {

        let next = current.next?.value || null
        if (next === value) {
          node.next = current.next
          current.next = node
          break
        }
        current = current.next
      }
    }
  }

  insertAfter(value, newValue) {
    let current = this.head;
    const node = new Node(newValue)
    while (current) {
      if (current.value === value) {
        node.next = current.next
        current.next = node
      }
      current = current.next
    }
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

  kth(k) {
    const list = this.collection()
    let index = -Math.abs(k + 1)
    if (k === 0) {
      index = -1;
    }
    if (k >= list.length) {
      return 'Exception';
    } else if (k < 0) {
      return 'Exception';
    }
    return list.at(index);
  }

}


module.exports = LinkedList;
