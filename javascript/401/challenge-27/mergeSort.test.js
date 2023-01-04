const mergeSort = require('./mergeSort');

describe('Merge Sort', () => {
  it('sorts an array of numbers in ascending order', () => {
    const arr = [5, 3, 8, 1, 2, 4];
    const sortedArray = mergeSort(arr);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5, 8]);
  });

  it('sorts an array of strings in alphabetical order', () => {
    const arr = ['c', 'a', 'b', 'e', 'd'];
    const sortedArray = mergeSort(arr);
    expect(sortedArray).toEqual(['a', 'b', 'c', 'd', 'e']);
  });

  it('preserves the relative order of elements with equal values', () => {
    const arr = [5, 3, 3, 8, 1, 2, 4, 4];
    const sortedArray = mergeSort(arr);
    expect(sortedArray).toEqual([1, 2, 3, 3, 4, 4, 5, 8]);
  });

  it('returns an empty array for an empty input array', () => {
    const arr = [];
    const sortedArray = mergeSort(arr);
    expect(sortedArray).toEqual([]);
  });
});

