import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeTable from '../components/unCompletedTasks';
import { FcExpand, FcCollapse } from 'react-icons/fc'
import CompletedTaskTable from '../components/CompletedTasks';

const Home = () => {
  const [uncompletedTasks, setUncompletedTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:5555/task')
      .then((response) => {
        const allTasks = response.data.data;

        const uncompleted = allTasks.filter((task) => !task.completed);
        const completed = allTasks.filter((task) => task.completed);

        setUncompletedTasks(uncompleted);
        setCompletedTasks(completed);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onDeleteTask = (taskId) => {
    const updatedUncompletedTasks = uncompletedTasks.filter((task) => task._id !== taskId);
    setUncompletedTasks(updatedUncompletedTasks);
    const updatedCompletedTasks = completedTasks.filter((task) => task._id !== taskId);
    setCompletedTasks(updatedCompletedTasks);
  };

  const handleUpdateTask = (updatedTask) => {
    if (updatedTask.completed) {
      const updatedUncompletedTasks = uncompletedTasks.filter((task) => task._id !== updatedTask._id);
      setUncompletedTasks(updatedUncompletedTasks);
      const updatedCompletedTasks = [...completedTasks, updatedTask];
      setCompletedTasks(updatedCompletedTasks);
    } else {
      const updatedCompletedTasks = completedTasks.filter((task) => task._id !== updatedTask._id);
      setCompletedTasks(updatedCompletedTasks);
      const updatedUncompletedTasks = [...uncompletedTasks, updatedTask];
      setUncompletedTasks(updatedUncompletedTasks);
    }
  };

  const handleAddTask = (addedTask) => {
    const updatedUncompletedTasks = [...uncompletedTasks, addedTask];
    setUncompletedTasks(updatedUncompletedTasks);
  }

  return (
    <div className="max-w-screen-md mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4 my-4">Study Schedule</h1>
      <HomeTable tasks={uncompletedTasks} onUpdateTask={handleUpdateTask} onDeleteTask={onDeleteTask} onNewTask={handleAddTask} />

      {completedTasks.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-semibold my-4">Completed tasks</h1>
            <button
              className="text-gray-500 hover:text-blue-500 focus:outline-none"
              onClick={() => setShowCompleted(!showCompleted)}
            >
              {showCompleted ? <FcExpand /> : < FcCollapse />}
            </button>
          </div>
          {showCompleted && (
            <CompletedTaskTable tasks={completedTasks} onUpdateTask={handleUpdateTask} onDeleteTask={onDeleteTask} />
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
