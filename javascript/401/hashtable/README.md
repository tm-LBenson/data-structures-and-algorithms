# Hashtables

A hash table is a data structure that is used to store keys and values. The keys are used to access the values in the hash table, and the values are stored in an array. The keys are used to calculate the index at which the value should be stored in the array using a hash function. The hash function is designed to minimize the number of collisions, which occur when two or more keys hash to the same index in the array.

## Challenge

The challenge is to implement a hash table class with the following methods: set, get, has, keys, and hash. The set method should take in a key and a value and store the key-value pair in the hash table. The get method should take in a key and return the value associated with the key in the hash table. The has method should take in a key and return a boolean indicating whether or not the key exists in the hash table. The keys method should return a collection of all the keys in the hash table. The hash method should take in a key and return the index in the array at which the value associated with the key should be stored.

## Approach & Efficiency

When two or more keys hash to the same index in the array, the new value overwrites the existing value at that index.

The time complexity for the set, get, has, and keys methods is O(1) on average, since the hash function is designed to distribute the keys evenly across the array and minimize collisions. The space complexity is O(n), where n is the number of key-value pairs stored in the hash table.

## API

`set(key, value)`
This method takes in a key and a value and stores the key-value pair in the hash table. If the key already exists, the value is updated.

Arguments
key: The key to store in the hash table.
value: The value to store in the hash table.
Returns
Nothing.

`get(key)`
This method takes in a key and returns the value associated with the key in the hash table. If the key does not exist, it returns null.

Arguments
key: The key to search for in the hash table.
Returns
The value associated with the key in the hash table, or null if the key does not exist.

`has(key)`
This method takes in a key and returns a boolean indicating whether or not the key
