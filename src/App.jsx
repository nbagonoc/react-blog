import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Navigation from './components/navigation/Navigation'

import Home from './pages/Home'
import Create from './pages/Create'
import View from './pages/View'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

import './App.css'


function App() {

  return (
    <BrowserRouter>
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/view/:id" element={<View />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
