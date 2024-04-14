import axios from 'axios'
import authenticator from '../../utils/authenticator.js'

import { authsAPI } from '../API.js'

const login = async (data) => {
    try {
        const response = await axios.post(`${authsAPI}/login`, data)
        localStorage.setItem('token', response.data.token)
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
        const message = error.response.data.message;
        throw new Error(message);
    }
}

const logout = async () => {
    authenticator.unSetStorage()
}

const register = async (data) => {
    try {
        const response = await axios.post(`${authsAPI}/register`, data)
        // console.log(response)
        return response.data.message
    } catch (error) {
        console.log(error)
        const message = error.response.data;
        throw new Error(message);
    }
}

const postService = {
    register,
    login,
    logout,
}

export default postService