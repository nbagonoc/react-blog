import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { register, reset } from '../../../redux/auths/authsSlice'

import Spinner from 'react-bootstrap/Spinner';

const AuthsRegisterForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isLoading, isError, isSuccess, message } = useSelector(state => state.auths)
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password2: '',
    })

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const registerData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
            password2: formData.password2,
        }
        dispatch(register(registerData))
    }

    if (isLoading) {
        return <Spinner animation='border' variant='primary'/>
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleOnChange}
                    placeholder='First Name'
                />
                <input
                    type='text'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleOnChange}
                    placeholder='Last Name'
                />
                <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleOnChange}
                    placeholder='Email'
                />
                <input
                    type='password'
                    name='password'
                    value={formData.password}
                    onChange={handleOnChange}
                    placeholder='Password'
                />
                <input
                    type='password'
                    name='password2'
                    value={formData.password2}
                    onChange={handleOnChange}
                    placeholder='Confirm Password'
                />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default AuthsRegisterForm
