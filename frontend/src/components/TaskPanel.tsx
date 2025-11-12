function TaskPanel() {
  return (
    <div className="p-4 border-l">
      <h2 className="text-lg font-bold">Task Details</h2>
      <div className="mt-4">
        <label className="block">
          <span className="text-gray-700">Title</span>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            placeholder="Enter task title"
          />
        </label>
        <label className="block mt-4">
          <span className="text-gray-700">Description</span>
          <textarea
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            rows={3}
            placeholder="Enter task description"
          />
        </label>
      </div>
    </div>
  );
}

export default TaskPanel;
