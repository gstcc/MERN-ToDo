import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Edit from './pages/Edit'
import Add from './pages/Add'



function App() {

  return (
    <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/edit/task/:id' element={<Edit />} />
        <Route path='add/task/' element={<Add />} />
    </Routes>

  )
}

export default App
