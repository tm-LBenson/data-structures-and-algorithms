## mostCommon(tree)
A function that returns the most common value in a binary tree.

## Parameters
tree: A binary tree object

## Returns
Returns a number representing the most common value in the tree. Returns null if all the elements are unique.

## Approach & Efficiency
The function first checks if the tree is empty, in which case it returns null.

If the tree is not empty, the function creates a new Map object to store the frequency of each value in the tree.

The function then uses a helper function called traverse to recursively iterate through the tree starting at the root node.

The traverse function first calls itself on the left child of the current node, then on the right child of the current node, before checking if the current node's value already exists in the Map and updating its count or adding it to the Map with a count of 1.

The function then iterates through the Map to find the most common value and returns it.

## Time and Space Complexities
Time Complexity: O(n) - as the function iterates through the tree one time.
Space Complexity: O(n) - as the function uses a space proportional to the number of nodes in the tree for the hash map.
