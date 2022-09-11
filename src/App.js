import React from 'react';
import { useCallback, useState } from 'react';
import ReactFlow, { applyEdgeChanges, applyNodeChanges, addEdge, MiniMap } from 'react-flow-renderer';

import initialNodes from './components/nodes.js';
import initialEdges from './components/edges.js';

function Flow() {
  //Nodes
  const [nodes, setNodes] = useState(initialNodes);
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  )
  
  //Edges
  const [edges, setEdges] = useState(initialEdges);
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  )

  //connections
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );
  console.log([nodes,edges]);
  ;
  return (
    <div 
      className='App'
      style={{height:'100vh'}}
    >
      <ReactFlow 
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition="top-right"
      >
        <MiniMap/>
      </ReactFlow>
    </div>
    
  )
;}

export default Flow

