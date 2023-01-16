"use strict";

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    const neighbor = this.adjacencyList.get(startVertex);
    neighbor.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {
    return [...this.adjacencyList.get(vertex)];
  }

  getNodes() {
    return Array.from(this.adjacencyList.keys());
  }

  size() {
    return [...this.adjacencyList.keys()].length;
  }

}

module.exports = Graph;
