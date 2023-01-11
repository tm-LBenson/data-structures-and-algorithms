# Hashtables

A hash table is a data structure that is used to store keys and values. The keys are used to access the values in the hash table, and the values are stored in an array. The keys are used to calculate the index at which the value should be stored in the array using a hash function. The hash function is designed to minimize the number of collisions, which occur when two or more keys hash to the same index in the array.

## Challenge

The challenge is to implement a function called leftJoin that takes in two hash tables and performs a left join on the data. The function should return an array of arrays, where each array contains a key, its value from the left table, and its value from the right table.

## Approach & Efficiency

The time complexity for the `leftJoin` function is O(n), where n is the number of keys in the left hash table, since the function must iterate through the left hash table and check if each key is present in the right hash table. The space complexity is O(n), since the function uses an array to store the results of the join operation, where n is the number of keys in the left hash table.

## API

`leftJoin(leftMap, rightMap)`
This function takes in two hash tables, performs a left join on the data and returns an array of arrays, where each array contains a key, its value from the left table, and its value from the right table.

Arguments
leftMap: The primary hash table to be used for the join operation.
rightMap: The secondary hash table to be used for the join operation.

Returns
An array of arrays where each array contains a key, its value from the left table, and its value from the right table.
