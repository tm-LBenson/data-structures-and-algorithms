const insertionSort = require('./insertSort');

describe('Insertion Sort', () => {
  it('sorts an array of numbers in ascending order', () => {
    const arr = [5, 3, 8, 1, 2, 4];
    const sortedArray = insertionSort(arr);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5, 8]);
  });

  it('sorts an array of strings in alphabetical order', () => {
    const arr = ['c', 'a', 'b', 'e', 'd'];
    const sortedArray = insertionSort(arr);
    expect(sortedArray).toEqual(['a', 'b', 'c', 'd', 'e']);
  });

  it('returns an empty array for an empty input array', () => {
    const arr = [];
    const sortedArray = insertionSort(arr);
    expect(sortedArray).toEqual([]);
  });
});
