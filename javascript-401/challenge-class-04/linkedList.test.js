'use strict';

const LinkedList = require('./linkedList');

describe('Linked List', () => {
  const list = new LinkedList();
  it('Can properly insert into the linked list and can properly insert multiple nodes into the linked list', () => {
    list.insert('value4');
    list.insert('value3');
    list.insert('value2');
    list.insert('value1');
    expect(list.head.value).toEqual('value1');
    expect(list.head.next.value).toEqual('value2');
    expect(list.head.next.next.value).toEqual('value3');
    expect(list.head.next.next.next.value).toEqual('value4');
  });

  it('returns a string when toString() is called', () => {
    const string = list.toString();
    expect(string).toEqual('{ value1 } -> { value2 } -> { value3 } -> { value4 } -> NULL');
  });

  it('Can successfully instantiate an empty linked list', () => {
    const emptyLinkedList = new LinkedList();
    expect(emptyLinkedList.head).toBeNull();
  });

  it('The head property will properly point to the first node in the linked list', () => {
    expect(list.head.value).toEqual('value1');
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    let node1 = list.includes('value1');
    let node2 = list.includes('value2');
    let node3 = list.includes('value3');
    let node4 = list.includes('value4');
    expect(node1).toEqual(true);
    expect(node2).toEqual(true);
    expect(node3).toEqual(true);
    expect(node4).toEqual(true);

  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    let notNode = list.includes('notValue');
    expect(notNode).toEqual(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    let collection = list.collection();

    expect(collection).toHaveLength(4);
    expect(collection[0]).toEqual('value1');
    expect(collection[1]).toEqual('value2');
    expect(collection[2]).toEqual('value3');
    expect(collection[3]).toEqual('value4');
  });

});
