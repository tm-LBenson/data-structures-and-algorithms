const nodeRemoval = require('./nodeRemoval');
const { LinkedList } = require('../challenge-class-04/linkedList');
const list1 = new LinkedList();

describe('nodeRemoval tests', () => {
  list1.insert(1);
  list1.insert(3);
  list1.insert(5);
  list1.insert(7);

  test('it should return null if the list is empty', () => {
    const list2 = new LinkedList();
    const result = nodeRemoval(list2, 5);
    expect(result).toBeNull();
  });

  test('returns updated list with node removed', () => {
    const result = nodeRemoval(list1, 2);
    expect(result.head.next.value).toEqual(5);
  });

  test('returns entire linked list if no match is found', () => {
    const result = nodeRemoval(list1, 11);
    expect(result.head.next.next.next.value).toEqual(1);
  });
});
