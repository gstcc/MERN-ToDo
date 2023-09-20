import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Edit from './pages/Edit'



function App() {
  return (
    <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/edit/task/:id' element={<Edit />} />
    </Routes>

  )
}

export default App
