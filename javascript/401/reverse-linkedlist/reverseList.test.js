const { LinkedList } = require("../challenge-class-04/linkedList");
const reverseList = require("./reverseList");
describe("reverseList function test", () => {
  const list = new LinkedList();
  test("it should return null for an empty list", () => {
    const list2 = new LinkedList();
    const value = reverseList(list2);

    expect(value).toBeNull();
  });
  list.insert("D");
  list.insert("C");
  list.insert("B");
  list.insert("A");
  test("it should return the same list but reversed", () => {
    const newList = reverseList(list);
    const firstNode = newList.head.value;
    const secondNode = newList.head.next.value;
    const thirdNode = newList.head.next.next.value;
    const lastNode = newList.head.next.next.next.value;

    expect(firstNode).toEqual("D");
    expect(secondNode).toEqual("C");
    expect(thirdNode).toEqual("B");
    expect(lastNode).toEqual("A");
  });

  test("it should the value of the only node", () => {
    const list3 = new LinkedList();
    list3.insert("G");
    const firstNode = reverseList(list3);
    expect(firstNode.head.value).toEqual("G");
  });
});
