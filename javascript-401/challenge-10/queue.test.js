'use strict';

const { Queue } = require('./stack-and-queue');


const queue = new Queue();


describe('Queue unit tests', () => {
  test('Can successfully instantiate an empty queue', () => {
    expect(queue.front).toBeNull;
  });
});

// Can successfully enqueue into a queue
// Can successfully enqueue multiple values into a queue
// Can successfully dequeue out of a queue the expected value
// Can successfully peek into a queue, seeing the expected value
// Can successfully empty a queue after multiple dequeues

// Calling dequeue or peek on empty queue raises exception
