import React, { useState } from 'react';
import axios from 'axios';

const Add = ({ onAddTask }) => {
  // New state variables for the task input fields
  const [newTitle, setNewTitle] = useState('');
  const [newDueDate, setNewDueDate] = useState('');
  const [newCourse, setNewCourse] = useState('');

  // Event handlers for input field changes
  const handleNewTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleNewCourseChange = (e) => {
    setNewCourse(e.target.value);
  };

  const handleNewDueDateChange = (e) => {
    setNewDueDate(e.target.value);
  };

  const handleCreateTask = () => {
    const data = {
      title: newTitle,
      course: newCourse,
      dueDate: newDueDate,
      completed: false,
    };

    axios
      .post('http://localhost:5555/task', data)
      .then(() => {
        onAddTask(data);
        setNewTitle('');
        setNewCourse('');
        setNewDueDate('');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <tr>
      <td className="py-2 px-4 text-center">
        <input
          type="text"
          id="newTitle"
          value={newTitle}
          onChange={handleNewTitleChange}
          required
        />
      </td>
      <td className="py-2 px-4 text-center">
        <input
          type="text"
          id="newCourse"
          value={newCourse}
          onChange={handleNewCourseChange}
          required
        />
      </td>
      <td className="py-2 px-4 text-center">
        <input
          type="date"
          id="newDueDate"
          value={newDueDate}
          onChange={handleNewDueDateChange}
          required
        />
      </td>
      <td className="py-2 px-4 text-center">
        <button
          type="button"
          onClick={handleCreateTask}
          className='hover:bg-gray-300'
        >
          Add Task
        </button>
      </td>
    </tr>
  );
};

export default Add;
