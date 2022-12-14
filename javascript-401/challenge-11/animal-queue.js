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



class AnimalQueue {
  constructor() {
    this.catFront = null;
    this.catRear = null;
    this.dogFront = null;
    this.dogRear = null;
  }

  enqueue(animal) {
    if (animal.species === 'cat') {
      const node = new Node(animal);
      if (this.catFront === null) {
        this.catRear = node;
        this.catFront = node;
      } else {
        this.catRear.next = node;
        this.catRear = node;
      }
    } else if (animal.species === 'dog') {
      const node = new Node(animal);
      if (this.dogFront === null) {
        this.dogRear = node;
        this.dogFront = node;
      } else {
        this.dogRear.next = node;
        this.dogRear = node;
      }
    } else {
      return 'invalid animal';
    }

  }

  dequeue(pref) {

    if (pref === 'cat') {
      if (this.catFront === null) return null;
      let temp = this.catFront.value.value;
      this.catFront = this.catFront.next;
      return temp;
    } else if (pref === 'dog') {
      if (this.dogFront === null) return null;
      let temp = this.dogFront.value.value;
      this.dogFront = this.dogFront.next;
      return temp;
    }
    if (pref !== 'cat' || pref !== 'dog') return null;
  }

}


module.exports = { AnimalQueue };
