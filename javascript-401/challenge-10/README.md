# Singly Linked List

Code Challenge 10

[Link to code](https://github.com/tm-LBenson/data-structures-and-algorithms/tree/main/javascript-401/challenge-class-10)

## Challenge

Lab 10:
Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue

## Approach & Efficiency

My approach for each data structure is to move the point at the entry point, and move the pointer at the output when applicable giving the methods and approaches both a space and time complexity of O(1)

## API

### Feature 1:

#### Building a stack with a top property that creates an empty stack when instantiated.

#### The class should contain the following methods:

`push`
Arguments: value
adds a new node with that value to the top of the stack with an O(1) Time performance.

`pop`
Arguments: none
Returns: the value from node from the top of the stack
Removes the node from the top of the stack
Should raise exception when called on empty stack

`peek`
Arguments: none
Returns: Value of the node located at the top of the stack
Should raise exception when called on empty stack

`isEmpty`
Arguments: none
Returns: Boolean indicating whether or not the stack is empty.
