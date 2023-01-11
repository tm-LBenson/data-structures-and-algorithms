# Hashtables

A hash table is a data structure that is used to store keys and values. The keys are used to access the values in the hash table, and the values are stored in an array. The keys are used to calculate the index at which the value should be stored in the array using a hash function. The hash function is designed to minimize the number of collisions, which occur when two or more keys hash to the same index in the array.

## Challenge

The challenge is to implement a function called repeatedValues That takes in two binary trees and finds the values that are the same. The function will return an array of values, and should use a hash map to implement this search.

## Approach & Efficiency

The time complexity for the repeatedValues function is O(n), where n is the number of nodes in each tree, since the function must iterate through the map of values. The space complexity is O(n), since the function uses a hash table to store the values.

![image](https://user-images.githubusercontent.com/105423307/211716376-f7123e80-276a-42f1-9bc9-f29ba46fcf6f.png)


## API

`repeatedValues(tree, tree2)`
This function takes in two linked lists and returns the all matched values that appears more than once in the string. If no repeated words are found, the function returns null.

Arguments
binary tree, binary tree2
Returns
array of strings
