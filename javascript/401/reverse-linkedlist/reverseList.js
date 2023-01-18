function reverseList(list) {
  if (!list.head) return null;

  let current = list.head;
  let prev = null;
  let tail = current; // keep track of the tail
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  list.head = prev;
  list.tail = tail; // assign the tail after reversing the list
  return list;
}

module.exports = reverseList;
