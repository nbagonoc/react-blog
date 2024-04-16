import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { login, reset } from '../../../redux/auths/authsSlice'

import Spinner from 'react-bootstrap/Spinner';

const AuthsLoginForm = () => {
    const dispatch = useDispatch()
    const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auths)
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

    const handleSubmit = (e) => {
        e.preventDefault()
        const loginData = {
            email: formData.email,
            password: formData.password,
        }
        dispatch(login(loginData))
    }

    if (isLoading) {
        return <Spinner animation='border' variant='primary'/>
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default AuthsLoginForm
