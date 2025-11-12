# Universal Workflow Builder AI Web App

This project is a full-stack application that allows users to generate structured, actionable workflows from a simple prompt. The app uses a combination of React, Node.js, Python, and Supabase to provide a comprehensive solution for workflow management.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- **AI-Powered Workflow Generation:** Automatically generate workflows from a user prompt.
- **Visual Workflow Editor:** A drag-and-drop interface for editing workflows.
- **AI Review and Optimization:** Get suggestions for improving your workflows.
- **Versioning and History:** Track changes to your workflows over time.
- **Exporting:** Export your workflows to PDF, Markdown, or Notion.
- **Collaboration:** Work with your team in real-time.

## Tech Stack

- **Frontend:** React, React Flow, Tailwind CSS
- **Backend:** Node.js, Express
- **AI Worker:** Python, Gemini
- **Database:** Supabase (PostgreSQL)

## Project Structure

The project is divided into four main directories:

- `frontend/`: The React frontend application.
- `backend/`: The Node.js backend API.
- `worker/`: The Python AI worker.
- `supabase/`: The Supabase database schema and migrations.

Each directory contains its own `README.md` with specific instructions.

## Getting Started

To get started with this project, you will need to have the following installed:

- Node.js
- Python
- Docker (optional)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/universal-workflow-builder.git
   ```

2. **Set up the backend:**
   - Navigate to the `backend/` directory and run `npm install`.
   - Create a `.env` file and add the necessary environment variables.
   - Run `npm start` to start the backend server.

3. **Set up the frontend:**
   - Navigate to the `frontend/` directory and run `npm install`.
   - Run `npm start` to start the frontend development server.

4. **Set up the AI worker:**
   - Navigate to the `worker/` directory and run `pip install -r requirements.txt`.
   - Set the `GOOGLE_API_KEY` environment variable.
   - Run `python worker.py` to start the worker.

5. **Set up the database:**
   - Create a new project on [Supabase](https://supabase.io/).
   - Apply the database schema by running the SQL commands in `supabase/migrations/0001_initial_schema.sql`.

## Usage

Once the application is running, you can open your browser to `http://localhost:3000` to start using the app.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your changes.
