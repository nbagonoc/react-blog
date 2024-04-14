import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { login } from '../../../redux/auths/authsSlice'

const AuthsLoginForm = () => {
    const dispatch = useDispatch()
    const { isLoading, isError, isSuccess, message } = useSelector((state) => state.posts)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleOnChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleOnChange}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default AuthsLoginForm