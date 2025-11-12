// frontend/src/App.js
import React from 'react';
import WorkflowCanvas from './components/WorkflowCanvas';
import TaskPanel from './components/TaskPanel';

function App() {
  return (
    <div className="flex h-screen">
      <div className="w-2/3">
        <WorkflowCanvas />
      </div>
      <div className="w-1/3">
        <TaskPanel />
      </div>
    </div>
  );
}

export default App;
