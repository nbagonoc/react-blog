import axios from 'axios'

import { postsAPI } from '../API.js'
// import authenticator from '../../utils/authenticator.js'

const getPosts = async () => {
    try {
        const response = await axios.get(`${postsAPI}`)
        return response.data
    } catch (error) {
        const message = error.response.data.message;
        throw new Error(message)
    }
}

const getPost = async (id) => {
    try {
        const response = await axios.get(`${postsAPI}/${id}`)
        return response.data
    } catch (error) {
        const message = error.response.data.message;
        throw new Error(message);
    }
}

const postService = { getPosts, getPost }

export default postService