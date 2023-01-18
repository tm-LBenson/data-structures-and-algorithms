## `reverseList(list)`

A function that reverses a singly linked list.

## Parameters

list: A singly linked list object

## Returns

Returns the reversed linked list

## Approach & Efficiency

- The function starts by creating a variable to keep track of the current node and a variable to keep track of the previous node, both initialized to the head of the list.

- The function then iterates through the list, reversing the next pointers for each node by pointing them to the previous node.

- Finally, it updates the head of the list to be the previous node and returns the reversed list.

## Time and Space Complexities

Time Complexity: O(n) - as the function iterates through the list one time.
Space Complexity: O(1) - as the function uses a constant amount of space for variables.
