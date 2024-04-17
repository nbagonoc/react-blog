import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
                <div className='mb-3'>
                    <label htmlFor='firstName' className='form-label'>
                        Firstname:
                    </label>
                    <input
                        type='text'
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleOnChange}
                        placeholder='First Name'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='lastName' className='form-label'>
                        Lastname:
                    </label>
                    <input
                        type='text'
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleOnChange}
                        placeholder='Last Name'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>
                        Email:
                    </label>
                    <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleOnChange}
                        placeholder='Email'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='password' className='form-label'>
                        Password:
                    </label>
                    <input
                        type='password'
                        name='password'
                        value={formData.password}
                        onChange={handleOnChange}
                        placeholder='Password'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='password2' className='form-label'>
                        Conform Password:
                    </label>
                    <input
                        type='password'
                        name='password2'
                        value={formData.password2}
                        onChange={handleOnChange}
                        placeholder='Confirm Password'
                        className='form-control'
                    />
                </div>
                <div className="d-grid mb-2">
                    <button
                        className='btn btn-primary full-width'
                        type='submit'
                    >
                        Register
                    </button>
                </div>
                <p className='text-center'>Already registered? <Link className='' to='/login'>Login here</Link></p>
            </form>
        </div>
    )
}

export default AuthsRegisterForm
