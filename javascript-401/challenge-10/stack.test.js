'use strict';

const { Stack } = require('./stack-and-queue');


const stack = new Stack();




describe('Stack unit tests', () => {
  test('Can successfully instantiate an empty queue', () => {
    expect(stack.top).toBeNull;
  });
});
