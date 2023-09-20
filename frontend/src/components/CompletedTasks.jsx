import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsCircle, BsInfoCircle, BsCheckCircle } from 'react-icons/bs';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const CompletedTaskTable = ({ tasks, onUpdateTask, onDeleteTask, onNewTask }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };


    const handleDeleteTask = (taskId) => {
        axios
            .delete(`http://localhost:5555/task/${taskId}`)
            .then(() => {
                onDeleteTask(taskId);
                handleClose(); // Close the menu after deletion
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleCompleteTask = (task) => {
        const data = {
            title: task.title,
            course: task.course,
            dueDate: task.dueDate,
            completed: true,
        };

        axios
            .put(`http://localhost:5555/task/${task._id}`, data)
            .then(() => {
                task.completed = true;
                onUpdateTask(task);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const unCompleteTask = (task) => {
        const data = {
            title: task.title,
            dueDate: task.dueDate,
            completed: false,
        };

        axios
            .put(`http://localhost:5555/task/${task._id}`, data)
            .then(() => {
                task.completed = false;
                onUpdateTask(task);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <table className="w-full bg-white shadow-md rounded-lg">
                <thead className="bg-gray-500 text-white">
                    <tr>
                        <th className="py-2 px-4">Task</th>
                        <th className='py -2 px-4'>Course</th>
                        <th className="py-2 px-4">Due Date</th>
                        <th className="py-2 px-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task._id} className="border-b hover:bg-gray-100">
                            <td className="py-2 px-4 text-center">{task.title}</td>
                            <td className="py-2 px-4 text-center">{task.course}</td>
                            <td className="py-2 px-4 text-center">
                                {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : '-'}
                            </td>
                            <td className="py-2 px-4 text-center">
                                <div>
                                    <button
                                        className="py-1 px-2 hover:bg-gray-300"
                                        onClick={() => unCompleteTask(task)}
                                    >
                                        <BsCheckCircle />
                                    </button>
                                    <button
                                        onClick={handleClick}
                                        className='py-1 px-2 hover:bg-gray-300 hover:cursor-pointer text'
                                    >
                                        <BsInfoCircle />
                                    </button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        <MenuItem>
                                            <Link to={`/edit/task/${task._id}`}>
                                                <button className="py-1 px-2">Edit</button>
                                            </Link>
                                        </MenuItem>
                                        <MenuItem onClick={() => handleDeleteTask(task._id)}>Delete</MenuItem>
                                    </Menu>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CompletedTaskTable;
