import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'Phase 1' } },
  { id: '2', position: { x: 250, y: 0 }, data: { label: 'Task 1' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

function WorkflowCanvas() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
      >
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}

export default WorkflowCanvas;
