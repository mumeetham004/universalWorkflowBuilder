# Universal Workflow Builder AI Web App

This project is a full-stack web application that allows users to generate structured, actionable workflows from a simple prompt. The application uses AI to generate the workflow, which can then be visualized, edited, and exported.

## Tech Stack

- **Frontend:** React, Vite, React Flow, Tailwind CSS
- **Backend:** Node.js, Express
- **AI Worker:** Python, Google Gemini
- **Database & Auth:** Supabase (Postgres)

## Project Structure

- `frontend/`: Contains the React frontend application.
- `backend/`: Contains the Node.js Express backend API.
- `worker/`: Contains the Python AI worker.
- `supabase/`: Contains the Supabase database schema.

## Getting Started

### Prerequisites

- Node.js
- Python
- Supabase account
- Google Gemini API key

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Install frontend dependencies:**
   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies:**
   ```bash
   cd ../backend
   npm install
   ```

4. **Install worker dependencies:**
   ```bash
   cd ../worker
   pip install -r requirements.txt
   ```

### Configuration

1. **Set up Supabase:**
   - Create a new project on Supabase.
   - Run the SQL schema from `supabase/migrations/0001_initial_schema.sql` in the Supabase SQL editor.
   - Add your Supabase project URL and anon key to a `.env` file in the `frontend` directory.

2. **Set up Google Gemini:**
   - Obtain a Google Gemini API key.
   - Add your API key to a `.env` file in the `worker` directory.

### Running the Application

1. **Start the frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

2. **Start the backend:**
   ```bash
   cd ../backend
   npm start
   ```

3. **Run the AI worker:**
   The AI worker is designed to be run as a separate service that the backend can communicate with. You can run it directly for testing:
   ```bash
   cd ../worker
   python worker.py
   ```
