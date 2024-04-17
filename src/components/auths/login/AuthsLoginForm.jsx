import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { login, reset } from '../../../redux/auths/authsSlice'

import Spinner from 'react-bootstrap/Spinner'

const AuthsLoginForm = () => {
    const dispatch = useDispatch()
    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auths
    )
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    useEffect(() => {
        dispatch(reset())
    }, [dispatch])

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(login(formData))
    }

    if (isLoading) {
        return <Spinner animation='border' variant='primary' />
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor='email' className='form-label'>
                    Email:
                </label>
                <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleOnChange}
                    placeholder='Email'
                    className='form-control mb-3'
                />
                <label htmlFor='password' className='form-label'>
                    Password:
                </label>
                <input
                    type='password'
                    name='password'
                    value={formData.password}
                    onChange={handleOnChange}
                    placeholder='Password'
                    className='form-control mb-3'
                />
                <div className="d-grid mb-2">
                    <button
                        className='btn btn-primary full-width'
                        type='submit'
                    >
                        Login
                    </button>
                </div>
                <p className='text-center'>Not yet registered? <Link className='' to='/register'>Register here</Link></p>
            </form>
        </div>
    )
}

export default AuthsLoginForm
