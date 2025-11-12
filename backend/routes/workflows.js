const express = require('express');
const router = express.Router();
const {
  createWorkflow,
  getWorkflows,
  getWorkflowById,
  updateWorkflow,
  generateWorkflow,
  reviewWorkflow,
  exportWorkflow,
} = require('../controllers/workflows');

router.post('/', createWorkflow);
router.get('/', getWorkflows);
router.get('/:id', getWorkflowById);
router.put('/:id', updateWorkflow);
router.post('/:id/generate', generateWorkflow);
router.post('/:id/review', reviewWorkflow);
router.post('/:id/export', exportWorkflow);

module.exports = router;
