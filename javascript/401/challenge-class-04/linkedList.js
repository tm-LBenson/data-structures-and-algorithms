"use strict";

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
    let str = "";
    while (current) {
      str += `{ ${current.value} } -> `;

      current = current.next;
    }
    str += "NULL";
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
    const node = new Node(value);
    let current = this.head;
    if (!current) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  insertBefore(value, newValue) {
    const node = new Node(newValue);
    let current = this.head;
    if (this.head.value === value) {
      node.next = this.head;
      this.head = node;
    } else {
      while (current) {
        let next = current.next;
        if (next?.value === value) {
          node.next = current.next;
          current.next = node;
          break;
        }
        current = current.next;
      }
    }
  }

  insertAfter(value, newValue) {
    let current = this.head;
    const node = new Node(newValue);
    while (current) {
      if (current.value === value) {
        node.next = current.next;
        current.next = node;
      }
      current = current.next;
    }
  }

  collection() {
    const collectionArray = [];
    let current = this.head;
    while (current) {
      collectionArray.push(current.value);
      current = current.next;
    }
    return collectionArray;
  }

  kth(k) {
    const list = this.collection();
    let index = -Math.abs(k + 1);
    if (k === 0) {
      index = -1;
    }
    if (k >= list.length) {
      return "Exception";
    } else if (k < 0) {
      return "Exception";
    }
    return list.at(index);
  }
}

// collaborated with Trace to get this solution
function zipLists(l1, l2) {
  let list1 = l1.head;
  let list2 = l2.head;
  let list3 = new LinkedList();
  list3.insert("removeLater");
  let current = list3.head;

  while (list1 !== null || list2 !== null) {
    if (list1 === null) {
      current.next = list2;
      list2 = list2.next;
      continue;
    }
    if (list2 === null) {
      current.next = list1;
      list1 = list1.next;
      continue;
    }
    if (list1.value >= list2.value) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  list3.head = list3.head.next;
  return list3;
}

// const list1 = new LinkedList()
// list1.insert(1)
// list1.insert(3)
// list1.insert(5)
// list1.insert(7)
// const list2 = new LinkedList()
// list2.insert(2)
// list2.insert(4)
// list2.insert(6)
// list2.insert(8)

module.exports = { LinkedList, zipLists };
