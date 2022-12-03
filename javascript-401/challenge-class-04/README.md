# Singly Linked List

<!-- Short summary or background information -->

## Challenge

Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
Create a Linked List class

## Approach & Efficiency

I used an iterative approach to each method to navigate the linked list
Each method included in the tests have a big O of O(n)
The insert method has a big O of O(1) due to it not needed to iterate, list insert to the front of the list.

## API

`list.insert()`

- Arguments: value
- Returns: nothing
- Adds a new node with that value to the head of the list with an O(1) Time performance.

`list.includes()`

- Arguments: value
- Returns: Boolean
  - Indicates whether that value exists as a Node’s value somewhere within the list.
    `list.toString()`
- Arguments: none
- Returns: a string representing all the values in the Linked List, formatted as:
  - `"{ a } -> { b } -> { c } -> NULL"`
