const Graph = require('./Graph');

const graph = new Graph();
describe('Tests for Graph', () => {
  test('Node can be successfully added to the graph', () => {
    const vertexA = graph.addVertex('A');
    expect(vertexA).toEqual({ value: 'A' });
  });

  test('An edge can be successfully added to the graph', () => {
    const vertexA = graph.addVertex('A');
    const vertexB = graph.addVertex('B');
    graph.addDirectedEdge(vertexA, vertexB, 5);
    expect(graph.getNeighbors(vertexA)).toEqual([
      { vertex: { value: 'B' }, weight: 5 },
    ]);
  });

  test('A collection of all nodes can be properly retrieved from the graph', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    const nodes = graph.getNodes();
    expect(nodes[0].value).toEqual('A');
    expect(nodes[2].value).toEqual('B');
  });

  test('All appropriate neighbors can be retrieved from the graph', () => {
    const vertexA = graph.addVertex('A');
    const vertexB = graph.addVertex('B');
    const vertexC = graph.addVertex('C');
    graph.addDirectedEdge(vertexA, vertexB, 5);
    graph.addDirectedEdge(vertexA, vertexC, 10);
    expect(graph.getNeighbors(vertexA)).toEqual([
      { vertex: { value: 'B' }, weight: 5 },
      { vertex: { value: 'C' }, weight: 10 },
    ]);
  });

  test('Neighbors are returned with the weight between nodes included', () => {
    const vertexA = graph.addVertex('A');
    const vertexB = graph.addVertex('B');
    graph.addDirectedEdge(vertexA, vertexB, 5);
    expect(graph.getNeighbors(vertexA)).toEqual([
      { vertex: { value: 'B' }, weight: 5 },
    ]);
  });

  test('The proper size is returned, representing the number of nodes in the graph', () => {
    expect(graph.size()).toEqual(10);
  });

  test('A graph with only one node and edge can be properly returned', () => {
    const graph2 = new Graph();
    const vertexA = graph2.addVertex('A');
    graph2.addDirectedEdge(vertexA, vertexA);
    expect(graph2.size()).toEqual(1);
    expect(graph2.getNeighbors(vertexA)).toEqual([
      { vertex: { value: 'A' }, weight: 0 },
    ]);
  });

});
