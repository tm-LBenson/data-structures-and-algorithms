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
    if (pref !== 'cat' || pref !== 'dog') return null;
    if (!this.front) throw new UnsupportedMethodError('The top is null');

    if (pref === 'cat') {
      let temp = this.catFront;
      this.catFront = this.catFront.next;
      temp.next = null;
      return temp.value;
    } else if (pref === 'dog') {
      let temp = this.dogFront;
      this.dogFront = this.dogFront.next;
      temp.next = null;
      return temp.value;
    }

  }

}


module.exports = { AnimalQueue };
