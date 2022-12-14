# Singly Linked List

Code Challenge 5-6-7-8

[Link to code](https://github.com/tm-LBenson/data-structures-and-algorithms/tree/main/javascript-401/challenge-class-04)

## Challenge

Lab 5:
Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
Create a Linked List class

Lab 6:
Add 3 more methods to the linked list

## Approach & Efficiency

I used an iterative approach to each method to navigate the linked list
Each method included in the tests have a big O of O(n)
The insert method has a big O of O(1) due to it not needed to iterate, list insert to the front of the list.

## API

### Feature 1:

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

### Feature 2:

`list.append()`

- arguments: new value
- adds a new node with the given value to the end of the list

`list.insertBefore()`

- arguments: value, new value
- adds a new node with the given new value immediately before the first node that has the value specified

`list.insertAfter()`

- arguments: value, new value
- adds a new node with the given new value immediately after the first node that has the value specified

### Feature 3:

`list.kth(k)`

- Arguments: number
- Returns: the value of the node kth from the tail of the linked list

### Feature 4:

`mergeLists(list1, list2)`

- Arguments: linked list, linked list
- Returns: a new linked list that combines the two lists

![Whiteboard](./whiteboard.png)
![Whiteboard2](./whiteboard2.png)
![Whiteboard3](./whiteboard3.png)
