const createWorkflow = (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const newWorkflow = {
    id: 'wf-3',
    title,
    description,
  };
  res.status(201).json({ message: 'Workflow created successfully', workflow: newWorkflow });
};

const getWorkflows = (req, res) => {
  const sampleWorkflows = [
    { id: 'wf-1', title: 'Photography Landing Page' },
    { id: 'wf-2', title: 'Onboarding New Developer' },
  ];
  res.status(200).json(sampleWorkflows);
};

const getWorkflowById = (req, res) => {
  const { id } = req.params;
  const sampleWorkflow = {
    id,
    title: `Workflow ${id}`,
    description: 'This is a sample workflow.',
    phases: [
      { id: 'phase-1', title: 'Planning' },
      { id: 'phase-2', title: 'Execution' },
    ],
    tasks: [
      { id: 'task-1', title: 'Define project scope', phase: 'phase-1' },
      { id: 'task-2', title: 'Create wireframes', phase: 'phase-1' },
      { id: 'task-3', title: 'Develop UI', phase: 'phase-2' },
    ],
  };
  res.status(200).json(sampleWorkflow);
};

const updateWorkflow = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Workflow ${id} updated successfully` });
};

const generateWorkflow = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `AI generation triggered for workflow ${id}` });
};

const reviewWorkflow = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `AI review triggered for workflow ${id}` });
};

const exportWorkflow = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Workflow ${id} export initiated` });
};

module.exports = {
  createWorkflow,
  getWorkflows,
  getWorkflowById,
  updateWorkflow,
  generateWorkflow,
  reviewWorkflow,
  exportWorkflow,
};
