import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const [title, setTitle] = useState('');
    const [completed, setCompleted] = useState('');
    const [loading, setLoading] = useState(false);
    const [dueDate, setDueDate] = useState('')
    const { id } = useParams();
    const navigate = useNavigate();

    const handleEditTask = () => {
        const data = {
            title,
            dueDate,
            completed,
        }
        console.log(data)
        setLoading(true);
        axios
            .put(`http://localhost:5555/task/${id}`, data)
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                alert('an error happend please check console')
                console.log(error)
            })
    }

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/task/${id}`)
            .then((response) => {
                setCompleted(response.data.completed)
                setTitle(response.data.title)
                setDueDate(response.data.dueDate)
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happend please check console')
                console.log(error);
            })
    }, [])

    return (
        <div className='p-4'>
            <h1 className='text-3xl my-4 text-center'>Edit Task</h1>
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Title</label>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>  
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Due Date</label>
                    <input
                        type='date'
                        value={dueDate ? new Date(dueDate).toISOString().split('T')[0] : ''}
                        onChange={(e) => setDueDate(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <button className='p-2 bg-sky-200 m-8' onClick={handleEditTask}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default Edit