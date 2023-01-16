# Graph

## Challenge

A Graph class that has methods for adding a vertex, adding an edge, getting all nodes, getting all neighbors, and getting the size of the graph.

## API

### Methods

addVertex(value)
Arguments: value
Returns: The added node
Add a node to the graph

addDirectedEdge(startVertex, endVertex, weight)
Arguments: 2 nodes to be connected by the edge, weight (optional)
Returns: nothing
Adds a new edge between two nodes in the graph
If specified, assign a weight to the edge
Both nodes should already be in the Graph

getNeighbors(vertex)
Arguments: node
Returns: a collection of edges connected to the given node
Include the weight of the connection in the returned collection
Empty collection returned if there are no nodes

getNodes()
Arguments: none
Returns: all of the nodes in the graph as an array
Empty collection returned if there are no nodes

size()
Arguments: none
Returns: the total number of nodes in the graph
0 if there are none

Classes
Vertex
Properties: value

Edge
Properties: vertex, weight

Graph
Properties: adjacencyList

The adjacency list is a Map object where the keys are vertex objects and the values are arrays of Edge objects.
