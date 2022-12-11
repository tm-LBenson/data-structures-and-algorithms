'use strict';

const { Stack } = require('./stack-and-queue');


const stack = new Stack();




describe('Stack unit tests', () => {
  test('Can successfully instantiate an empty queue', () => {
    expect(stack.top).toBeNull;
  });

  test('Can successfully instantiate an empty queue', () => {
    expect(stack.top).toBeNull;
  });
});


// Can successfully push onto a stack
// Can successfully push multiple values onto a stack
// Can successfully pop off the stack
// Can successfully empty a stack after multiple pops
// Can successfully peek the next item on the stack

// Calling pop or peek on empty stack raises exception

