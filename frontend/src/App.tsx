import WorkflowCanvas from './components/WorkflowCanvas';
import TaskPanel from './components/TaskPanel';
import PromptInput from './components/PromptInput';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <PromptInput />
      <div className="flex flex-grow">
        <div className="w-2/3">
          <WorkflowCanvas />
        </div>
        <div className="w-1/3">
          <TaskPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
