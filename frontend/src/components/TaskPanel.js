// frontend/src/components/TaskPanel.js
import React from 'react';

export default function TaskPanel() {
  return (
    <div className="p-4 bg-gray-100 h-full">
      <h2 className="text-lg font-bold mb-4">Task Details</h2>
      {/* Placeholder for task details and editing */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Task Title</label>
        <input
          type="text"
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter task title"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          rows="3"
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter task description"
        ></textarea>
      </div>
    </div>
  );
}
