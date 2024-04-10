import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Navigation from './components/navigation/Navigation'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

import './App.css'

function App() {

  return (
    <BrowserRouter>
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
