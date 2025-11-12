function PromptInput() {
  return (
    <div className="p-4 border-b">
      <h2 className="text-lg font-bold">Generate Workflow</h2>
      <div className="mt-4">
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Enter your prompt here..."
        />
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          Generate Workflow
        </button>
      </div>
    </div>
  );
}

export default PromptInput;
