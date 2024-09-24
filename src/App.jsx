import { useState } from 'react'
import './App.css';
import Dashboard from './routes/dashboard/Dashboard';
import Login from './routes/login/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}  />
        <Route path='/dashboard' element={<Dashboard />} />

      </Routes>

   </BrowserRouter>
  )
}

export default App
