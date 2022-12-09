'use strict';

const { Queue } = require('./stack-and-queue');


const queue = new Queue();


describe('Queue unit tests', () => {
  test('Can successfully instantiate an empty queue', () => {
    expect(queue.front).toBeNull;
  });
});
