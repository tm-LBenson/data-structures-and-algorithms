'use strict';

const { Queue } = require('./stack-and-queue');


const queue = new Queue();


describe('Queue unit tests', () => {
  it('Can successfully instantiate an empty queue', () => {
    expect(queue.front).toBeNull;
  });
  it('Can successfully enqueue into a queue', () => {
    queue.enqueue('first-in');
    expect(queue.front.value).toEqual('first-in');
    expect(queue.rear.value).toEqual('first-in');
    expect(queue.rear.next).toBeNull();
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    queue.enqueue('second-in');
    queue.enqueue('third-in');
    expect(queue.front.value).toEqual('first-in');
    expect(queue.front.next.value).toEqual('second-in');
    expect(queue.rear.value).toEqual('third-in');
    expect(queue.rear.next).toBeNull();
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    queue.dequeue();
    expect(queue.front.value).toEqual('second-in');
    expect(queue.front.next.value).toEqual('third-in');
    expect(queue.rear.value).toEqual('third-in');
    expect(queue.rear.next).toBeNull();
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    expect(queue.peek()).toEqual('second-in');
    queue.dequeue();
    expect(queue.peek()).toEqual('third-in');
    expect(queue.rear.next).toBeNull();
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    queue.dequeue();
    expect(queue.front).toBeNull();
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    expect(() => {
      queue.peek().toThrow('UnsupportedMethodError: The top is null');
    });
    expect(() => {
      queue.dequeue().toThrow('UnsupportedMethodError: The top is null');
    });
  });
});
