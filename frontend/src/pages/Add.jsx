import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const navigate = useNavigate();

  const handleCreateTask = () => {
    const data = {
      title,
      dueDate,
      completed: false,
    };
    console.log(data)
    axios
      .post('http://localhost:5555/task', data)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        alert('An error occurred, please check the console');
        console.error(error);
      });
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto mt-10">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Add Task</h1>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-600 font-medium mb-2">
            Task Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dueDate" className="block text-gray-600 font-medium mb-2">
            Due Date:
          </label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={handleDueDateChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          onClick={handleCreateTask}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Add;
