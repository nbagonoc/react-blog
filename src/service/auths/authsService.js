import axios from 'axios'

import { authsAPI } from '../API.js'

const login = async (data) => {
    try {
        const response = await axios.post(`${authsAPI}/login`, data)
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
        const message = error.response.data.message;
        throw new Error(message);
    }
}

const register = async (data) => {
    try {
        const response = await axios.post(`${authsAPI}/register`, data)
        console.log(response)
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
}

export default postService