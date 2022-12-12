'use strict';
const { PseudoQueue } = require('./stack-and-queue');


describe('PseudoQueue method testing', () => {
  const pseudo = new PseudoQueue();
  it('Can successfully instantiate an empty Pseudoqueue', () => {
    expect(pseudo.inputStack.top).toBeNull();
    expect(pseudo.outputStack.top).toBeNull();
  });

  it('Can successfully enqueue into a queue', () => {
    pseudo.enqueue('first');
    expect(pseudo.inputStack.top.value).toEqual('first');
    expect(pseudo.outputStack.top).toBeNull();
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    pseudo.enqueue('second');
    pseudo.enqueue('third');
    pseudo.enqueue('fourth');
    expect(pseudo.inputStack.top.value).toEqual('fourth');
    expect(pseudo.inputStack.top.next.value).toEqual('third');
    expect(pseudo.inputStack.top.next.next.value).toEqual('second');
    expect(pseudo.inputStack.top.next.next.next.value).toEqual('first');
    expect(pseudo.outputStack.top).toBeNull();
  });

  it('Can successfully denqueue values from a queue', () => {

    expect(pseudo.dequeue()).toEqual('first');
    expect(pseudo.inputStack.top.value).toEqual('fourth');
    expect(pseudo.inputStack.top.next.value).toEqual('third');
    expect(pseudo.inputStack.top.next.next.value).toEqual('second');

    expect(pseudo.outputStack.top).toBeNull();
  });

  it('Can successfully denqueue multiple values from a queue', () => {


    expect(pseudo.dequeue()).toEqual('second');
    expect(pseudo.dequeue()).toEqual('third');
    expect(pseudo.dequeue()).toEqual('fourth');
    expect(pseudo.outputStack.top).toBeNull();
  });

});
