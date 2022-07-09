//Breadth-First Search (BFS) - https://jarednielsen.com/data-structure-graph-breadth-first-search/
// Vertex = basically the circle/object in tree structure.
// Adjacent = all the objects connected to the vertex

class Graph{
    constructor(){
        this.vertices = [];
        this.adjacent = {};
        this.edges = 0;
    }

    addVertex(vertex){
        this.vertices.push(vertex);
        this.adjacent[vertex] = [];
    }

    addEdge(vertex, edge){
        this.adjacent[vertex].push(edge);
        this.adjacent[edge].push(vertex);
        this.edges++;
    }

    bfs(goal, root = this.vertices[0]) {
        let adj = this.adjacent;

        const queue = [];
        queue.push(root);

        const discovered = [];
        discovered[root] = true;

        while(queue.length) {
            //shift = remove and get the first element from the queue
            let vertex = queue.shift();
            console.log(vertex);

            // Is the vertex what we are looking for?
            if (vertex === goal){
                return true;
            }

            // If we are here then the vertex is not what we are looking for
            // Time to add all adjacent vertices of the vertex we just checked to the queue
            for (let i = 0; i < adj[vertex].length; i++){
                // If we already visited this vertex then we don't need to add it to the queue
                if(!discovered[adj[vertex][i]]){
                    discovered[adj[vertex][i]] = true;
                    queue.push(adj[vertex][i]);
                }
            }
        }

        // Goal was not found
        return false;
    }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addVertex("G");

g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("A","D");
g.addEdge("B","C");
g.addEdge("B","D");
g.addEdge("C","D");
g.addEdge("C","E");
g.addEdge("D","F");
g.addEdge("F","G");

console.log(g.bfs("G"))
