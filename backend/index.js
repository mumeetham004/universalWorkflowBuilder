// backend/index.js
const express = require('express');
const cors = require('cors');
const workflowRoutes = require('./routes/workflows');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/workflows', workflowRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('Workflow Builder API is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
