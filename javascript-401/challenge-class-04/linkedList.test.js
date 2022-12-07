'use strict';

const {LinkedList} = require('./linkedList');

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

  it('Can successfully add a node to the end of the linked list', () => {
    list.append('value5');

    let collection = list.collection();

    expect(collection.at(-1)).toEqual('value5');
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    list.append('value5');
    list.append('value6');
    list.append('value7');
    list.append('value8');
    let collection = list.collection();
    expect(collection).toHaveLength(9);
    expect(collection.at(-1)).toEqual('value8');
    expect(collection.at(-2)).toEqual('value7');
    expect(collection.at(-3)).toEqual('value6');
    expect(collection.at(-4)).toEqual('value5');
  });

  it('Can successfully insert a node before a node located i the middle of a linked list', () => {
    list.insertBefore('value5', 'insertedBefore5');

    let collection = list.collection();
    expect(collection.at(4)).toEqual('insertedBefore5');
    expect(collection).toHaveLength(10);
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    list.insertBefore('value1', 'insertedFirstNode');

    let collection = list.collection();
    expect(collection.at(0)).toEqual('insertedFirstNode');
    expect(collection).toHaveLength(11);
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    list.insertAfter('value4', 'AfterValue4');

    let collection = list.collection();
    expect(collection.at(5)).toEqual('AfterValue4');
    expect(collection).toHaveLength(12);
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    list.insertAfter('value8', 'insertLast');

    let collection = list.collection();
    expect(collection.at(-1)).toEqual('insertLast');
    expect(collection).toHaveLength(13);
  });

  test('Where k is greater than the length of the linked list', () => {


    expect(list.kth(14)).toEqual('Exception');
  });

  test('Where k and the length of the list are the same', () => {
    expect(list.kth(12)).toEqual('insertedFirstNode');
  });

  test('Where k is not a positive integer', () => {
    expect(list.kth(-12)).toEqual('Exception');
  });

  test('Where the linked list is of a size 1', () => {
    const lengthOfOne = new LinkedList();
    lengthOfOne.insert('lengthOfOne');

    expect(lengthOfOne.kth(0)).toEqual('lengthOfOne');
  });

  test('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {

    expect(list.kth(6)).toEqual('insertedBefore5');
  });

});


