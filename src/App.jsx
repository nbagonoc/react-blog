import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Navigation from './components/partials/Navigation'

import Home from './pages/Home'
import Create from './pages/Create'
import Edit from './pages/Edit'
import View from './pages/View'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

import './App.css'

function App() {
    const { user } = useSelector(state => state.auths)

    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route
                    path='/create'
                    element={user ? <Create /> : <Navigate to='/login' />}
                />
                <Route
                    path='/edit/:id'
                    element={user ? <Edit /> : <Navigate to='/login' />}
                />
                <Route path='/view/:id' element={<View />} />
                <Route
                    path='/login'
                    element={user ? <Navigate to='/dashboard' /> : <Login />}
                />
                <Route
                    path='/register'
                    element={user ? <Navigate to='/dashboard' /> : <Register />}
                />
                <Route
                    path='/dashboard'
                    element={user ? <Dashboard /> : <Navigate to='/login' />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App
