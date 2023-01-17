function nodeRemoval(list, k) {
  if (list.head === null) return null;

  if (k === 1) {
    list.head = list.next;

    return list;
  }

  let count = 1;

  let current = list.head.next;

  let previous = list.head;

  while (current !== null) {
    if (k === count) {
      previous = current.next;

      break;
    }

    current = current.next;

    previous = previous.next;

    count++;
  }

  return list;
}

module.exports = nodeRemoval;
