'use strict';

const HashTable = require('./hashtable');

describe('Hash table implementation', () => {
  it('can set and get a value in the hash table', () => {
    const hashTable = new HashTable(10);
    hashTable.set('key', 'value');
    expect(hashTable.get('key')).toBe('value');
  });

  it('returns null for a key that does not exist in the hash table', () => {
    const hashTable = new HashTable(10);
    expect(hashTable.get('key')).toBe(null);
  });

  it('can return a list of all unique keys from the hash table', () => {
    const hashTable = new HashTable(10);
    hashTable.set('key1', 'value1');
    hashTable.set('key2', 'value2');
    hashTable.set('key3', 'value3');
    hashTable.set('key4', 'value4');
    expect(hashTable.keys()).toContain('key1');
    expect(hashTable.keys()).toContain('key2');
    expect(hashTable.keys()).toContain('key3');
    expect(hashTable.keys()).toContain('key4');
  });

  it('can handle a collision in the hash table', () => {
    const hashTable = new HashTable(10);
    hashTable.set('key1', 'newValue');
    hashTable.set('key2', 'newValue');
    hashTable.set('key2', 'newValue');
    hashTable.set('key3', 'value3');
    expect(hashTable.get('key1')).toBe('newValue');
    expect(hashTable.get('key2')).toBe('newValue');
    expect(hashTable.get('key3')).toBe('value3');
  });

  it('can retrieve a value from a bucket within the hash table that has a collision', () => {
    const hashTable = new HashTable(10);
    hashTable.set('key1', 'value1');
    hashTable.set('key2', 'value2');
    hashTable.set('key3', 'value3');
    expect(hashTable.get('key2')).toBe('value2');
  });

  it('can hash a key to an in-range value', () => {
    const hashTable = new HashTable(10);
    expect(hashTable.hash('key')).toBeLessThan(10);
  });

  it('returns a boolean if it contains a value', () => {
    const hashTable = new HashTable(10);
    hashTable.set('key1', 'value1');
    hashTable.set('key2', 'value2');
    hashTable.set('key3', 'value3');
    expect(hashTable.has('key1')).toBe(true);
  });
});
