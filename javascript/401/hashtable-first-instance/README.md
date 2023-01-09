# Hashtables

A hash table is a data structure that is used to store keys and values. The keys are used to access the values in the hash table, and the values are stored in an array. The keys are used to calculate the index at which the value should be stored in the array using a hash function. The hash function is designed to minimize the number of collisions, which occur when two or more keys hash to the same index in the array.

## Challenge

The challenge is to implement a function called firstInstance that takes in a string and returns the first word that appears more than once in the string. The function should use a hash table to store the words in the string and keep track of the number of times each word appears.

## Approach & Efficiency

The time complexity for the firstInstance function is O(n), where n is the number of words in the string, since the function must iterate through the array of words to find the first repeated word. The space complexity is O(n), since the function uses a hash table to store the words in the string.



## API

`firstInstance(string)`
This function takes in a string and returns the first word that appears more than once in the string. If no repeated words are found, the function returns null.

Arguments
string: The string to search for repeated words.
Returns
The first word that appears more than once in the string, or null if no repeated words are found.
