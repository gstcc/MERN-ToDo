import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/task')
            .then((response) => {
                setTasks(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

  return (
    <div></div> //fix so iterate over everthing in tasks and display every task avaiable
  )
}

export default Home