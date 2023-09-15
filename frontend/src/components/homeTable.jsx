import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomeTable = ({ tasks, onUpdateTask, onDeleteTask }) => {

    const handleDeleteTask = (taskId) => {
        axios
            .delete(`http://localhost:5555/task/${taskId}`)
            .then(() => {
                onDeleteTask(taskId)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleCompleteTask = (task) => {
        const data = {
            title: task.title,
            dueDate: task.dueDate,
            description: task.description,
            completed: true
        };

        axios
            .put(`http://localhost:5555/task/${task._id}`, data)
            .then(() => {
                task.completed = true
                onUpdateTask(task); // Call the function with updated tasks
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const unCompleteTask = (task) => {
        const data = {
            title: task.title,
            dueDate: task.dueDate,
            description: task.description,
            completed: false
        };

        axios
            .put(`http://localhost:5555/task/${task._id}`, data)
            .then(() => {
                task.completed = false
                onUpdateTask(task); // Call the function with updated tasks
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <table className="w-full bg-white shadow-md rounded-lg">
                <thead className="bg-blue-500 text-white">
                    <tr>
                        <th className="py-2 px-4">Task</th>
                        <th className="py-2 px-4">Description</th>
                        <th className="py-2 px-4">Due Date</th>
                        <th className="py-2 px-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task._id} className="border-b hover:bg-gray-100">
                            <td className="py-2 px-4">{task.title}</td>
                            <td className="py-2 px-4">{task.description || '-'}</td>
                            <td className="py-2 px-4">{task.dueDate || '-'}</td>
                            <td className="py-2 px-4">
                                <div className="flex items-center">
                                    <Link to={`/edit/task/${task._id}`}>
                                        <button className="bg-blue-500 text-white py-1 px-2 rounded-md mr-2 hover:bg-blue-600">
                                            Edit
                                        </button>
                                    </Link>
                                    <button
                                        className="bg-red-500 text-white py-1 px-2 rounded-md mr-2 hover:bg-red-600"
                                        onClick={() => handleDeleteTask(task._id)}>
                                        Delete
                                    </button>
                                    {task.completed ?
                                        <button
                                            className="bg-green-500 text-white py-1 px-2 rounded-md hover:bg-blue-600"
                                            onClick={() => unCompleteTask(task)}
                                        >
                                            Uncomplete
                                        </button> :
                                        <button
                                            className="bg-green-500 text-white py-1 px-2 rounded-md hover:bg-green-600"
                                            onClick={() => handleCompleteTask(task)}
                                        >
                                            Complete
                                        </button>


                                    }
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default HomeTable


