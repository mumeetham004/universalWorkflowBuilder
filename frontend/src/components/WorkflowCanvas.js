// frontend/src/components/WorkflowCanvas.js
import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';

import 'reactflow/dist/style.css';
import sampleWorkflow from '../sample-workflow.json';

const initialNodes = sampleWorkflow.tasks.map((task, i) => ({
  id: task.id,
  position: { x: i * 250, y: 100 },
  data: { label: task.title },
}));

const initialEdges = sampleWorkflow.tasks.flatMap((task) =>
  task.dependencies.map((dep) => ({
    id: `e${dep}-${task.id}`,
    source: dep,
    target: task.id,
  }))
);


export default function WorkflowCanvas() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
