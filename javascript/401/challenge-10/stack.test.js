'use strict';

const { Stack } = require('./stack-and-queue');


const stack = new Stack();




describe('Stack unit tests', () => {
  test('Can successfully instantiate an empty queue', () => {
    expect(stack.top).toBeNull();
  });

  test('Can successfully push onto a stack', () => {
    stack.push('first-in');
    expect(stack.top.value).toEqual('first-in');
  });

  test('Can successfully push multiple values onto a stack', () => {
    stack.push('second-in');
    stack.push('third-in');
    stack.push('fourth-in');
    expect(stack.top.value).toEqual('fourth-in');
    expect(stack.top.next.value).toEqual('third-in');
    expect(stack.top.next.next.value).toEqual('second-in');
    expect(stack.top.next.next.next.value).toEqual('first-in');
  });


  test('Can successfully pop off the stack', () => {
    stack.pop();
    expect(() => {
      stack.pop().toEqual('fourth-in');
    });
  });

  test('Can successfully pop off the stack', () => {
    stack.pop();
    expect(() => {
      stack.pop().toEqual('fourth-in');
    });
  });

  test('Can successfully pop off the stack', () => {
    stack.pop();
    stack.pop();

    expect(stack.top).toBeNull;
  });
  test('Can successfully peek the next item on the stack', () => {
    stack.push('first-in');
    expect(stack.peek()).toEqual('first-in');
  });

  test('Can successfully return false on an nonempty stack with isEmpty', () => {

    expect(stack.isEmpty()).toEqual(false);
  });

  test('Can successfully return true on an empty stack with isEmpty', () => {
    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
  });

  test('Calling pop or peek on empty stack raises exception', () => {

    expect(() => {
      stack.peek();
    }).toThrow();
    expect(() => {
      stack.pop();
    }).toThrow();
  });


});

