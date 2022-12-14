'use strict';

const { AnimalQueue } = require('./animal-queue');


const queue = new AnimalQueue();

function animalBuilder(species, value) {
  return {
    species: species,
    value: value
  };
}

describe('Animal shelter testing', () => {
  it('Can successfully instantiate an empty queue', () => {
    expect(queue.catFront).toBeNull();
    expect(queue.dogFront).toBeNull();
  });

  it('Can successfully enqueue multiple values into a queue', () => {

    queue.enqueue(animalBuilder('cat', 'test1'));
    queue.enqueue(animalBuilder('cat', 'test2'));
    queue.enqueue(animalBuilder('cat', 'test3'));
    queue.enqueue(animalBuilder('dog', 'test4'));
    queue.enqueue(animalBuilder('dog', 'test5'));
    queue.enqueue(animalBuilder('dog', 'test6'));

    expect(queue.catFront.value.value).toEqual('test1');
    expect(queue.catFront.next.value.value).toEqual('test2');
    expect(queue.catFront.next.next.value.value).toEqual('test3');
    expect(queue.dogFront.value.value).toEqual('test4');
    expect(queue.dogFront.next.value.value).toEqual('test5');
    expect(queue.dogFront.next.next.value.value).toEqual('test6');
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    expect(queue.dequeue('cat')).toEqual('test1');
    expect(queue.dequeue('dog')).toEqual('test4');
    expect(queue.dequeue('dog')).toEqual('test5');
    expect(queue.dequeue('dog')).toEqual('test6');
    expect(queue.dequeue('cat')).toEqual('test2');
    expect(queue.dequeue('cat')).toEqual('test3');
  });
  it('Can successfully empty a queue after multiple dequeues', () => {
    expect(queue.dogFront).toBeNull();
    expect(queue.catFront).toBeNull();
  });

  it('returns null if no pref is passed', () => {
    expect(queue.dequeue()).toBeNull();

  });

  it('returns null if no pref is passed', () => {
    queue.enqueue(animalBuilder('cat', 'test1'));
    expect(queue.dequeue('dog')).toBeNull();
  });

});

//

//

//

//



//

// 'returns null if no animal match is found'

// 'raises an exception if the queue is empty and dequeue is called'


