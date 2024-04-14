import axios from 'axios'
import authenticator from '../../utils/authenticator.js'

import { authsAPI } from '../API.js'

const login = async (data) => {
    try {
        const response = await axios.post(`${authsAPI}/login`, data)
        const user = authenticator.setUser()
        authenticator.setStorage(response.data.token)
        return user
    } catch (error) {
        const message = error.response.data.message;
        throw new Error(message);
    }
}

const register = async (data) => {
    try {
        const response = await axios.post(`${authsAPI}/register`, data)
        return response.data.message
    } catch (error) {
        const message = error.response.data;
        throw new Error(message);
    }
}

const postService = {
    register,
    login,
}

export default postService