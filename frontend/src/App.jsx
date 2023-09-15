import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Edit from './pages/Edit'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/edit/task/:id' element={<Edit />} />
    </Routes>

  )
}

export default App
