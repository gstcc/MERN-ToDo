import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import HomeTable from '../components/homeTable';

const Home = () => {
    const [uncompletedTasks, setUnCompletedTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/task')
            .then((response) => {
                const allTasks = response.data.data;

                const uncompleted = allTasks.filter((task) => !task.completed);
                const completed = allTasks.filter((task) => task.completed);

                setUnCompletedTasks(uncompleted);
                setCompletedTasks(completed);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const onDeleteTask = (taskId) => {
        const updatedUnCompletedTasks = uncompletedTasks.filter((task) => task._id !== taskId);
        setUnCompletedTasks(updatedUnCompletedTasks);
        const updatedcompletedTasks = completedTasks.filter((task) => task._id !== taskId);
        setCompletedTasks(updatedcompletedTasks);
    }


    const handleUpdateTask = (updatedTask) => {
        console.log(updatedTask)
        if (updatedTask.completed) {
            const updatedUnCompletedTasks = uncompletedTasks.filter((task) => task._id !== updatedTask._id);
            setUnCompletedTasks(updatedUnCompletedTasks);
            const updatedCompletedTasks = [...completedTasks, updatedTask];
            setCompletedTasks(updatedCompletedTasks);
        } else {
            const updatedcompletedTasks = completedTasks.filter((task) => task._id !== updatedTask._id);
            setCompletedTasks(updatedcompletedTasks);
            const updatedUncompletedTasks = [...uncompletedTasks, updatedTask];
            setUnCompletedTasks(updatedUncompletedTasks);
        }
    };


    return (
        <div className="max-w-screen-md mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">Uncompleted tasks</h1>
            <HomeTable tasks={uncompletedTasks} onUpdateTask={handleUpdateTask} onDeleteTask={onDeleteTask}/>
            {completedTasks.length != 0 ?
                <div>
                    <h1 className="text-2xl font-semibold mb-4">Completed tasks</h1>
                    <HomeTable tasks={completedTasks} onUpdateTask={handleUpdateTask} onDeleteTask={onDeleteTask} />
                </div>
                :
                ''
            }

        </div>
    );
};

export default Home;
