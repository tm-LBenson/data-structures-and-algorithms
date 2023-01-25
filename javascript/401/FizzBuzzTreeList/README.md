# fizzBuzzList(tree)

A function that returns a linked list of the values in a binary tree, replacing multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of 3 and 5 with "FizzBuzz".

## Parameters

tree: A binary tree object

## Returns

Returns a linked list object with the modified values of the tree. Returns null if the tree is empty.

## Approach & Efficiency

The function first checks if the tree is empty, in which case it returns null.

If the tree is not empty, the function creates an empty object to represent the linked list and a variable to keep track of the current node in the linked list.

The function then uses a helper function called traverse to recursively iterate through the tree starting at the root node.

The traverse function uses a switch statement to check the value of the current node and assigns the appropriate string ("Fizz", "Buzz", or "FizzBuzz") to the current node in the linked list, or the value of the node if it is not a multiple of 3 or 5.

The function then updates the current node to the next property of the current node in the linked list and calls itself on the left and right children of the current node.

The final linked list is returned.

![image](https://user-images.githubusercontent.com/105423307/214479706-fbf75048-7c8a-43df-9a55-ada9fef46b1b.png)

## Time and Space Complexities

Time Complexity: O(n) - as the function iterates through the tree one time.
Space Complexity: O(n) - as the function uses a space proportional to the number of nodes in the tree for the linked list.
