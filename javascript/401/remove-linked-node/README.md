## `nodeRemoval(list, k)`

A function that removes a node from a singly linked list at a specific position, where the position is specified by the input parameter "k".

## Parameters

list: A singly linked list object
k: A number representing the position of the node to be removed

## Returns

Returns the modified linked list

## Approach & Efficiency

- The function first checks if the list is empty, in which case it returns null.

- If the position to be removed is the first node, the head of the list is updated to the next node and the list is returned.

- If the position to be removed is not the first node, the function iterates through the list starting at the second node, keeping track of the current node, the previous node, and the current position.

- When the desired position is reached, the previous node's next pointer is updated to the current node's next pointer, effectively removing the current node from the list.

- The function then returns the modified list.

## Time and Space Complexities

Time Complexity: O(n) - as the function iterates through the list one time.
Space Complexity: O(1) - as the function uses a constant amount of space for variables.
