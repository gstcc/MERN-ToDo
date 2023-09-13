import React from 'react'

const Home = () => {
    const [task, setTask] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/task')
            .then((response) => {
                setTask(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

  return (
    <div>Home</div>
  )
}

export default Home