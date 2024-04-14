import axios from 'axios'

import { postsAPI } from '../API.js'
import authenticator from '../../utils/authenticator.js'

const getPosts = async () => {
    try {
        const response = await axios.get(`${postsAPI}`)
        return response.data
    } catch (error) {
        const message = error.response.data.message;
        throw new Error(message)
    }
}

const getPostsByUserId = async (id) => {
    try {
        const response = await axios.get(`${postsAPI}/user/${id}`)
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

const createPost = async (data) => {
    try {
        const response = await authenticator
            .setAuthorization
            .post(`${postsAPI}`, data)
        // console.log(response.data)
        return response.data
    } catch (error) {
        const message = error.response.data.message;
        throw new Error(message);
    }
}

const updatePost = async (id, data) => {
    try {
        const response = await authenticator
            .setAuthorization
            .put(`${postsAPI}/${id}`, data)
        return response.data.message
    } catch (error) {
        const message = error.response.data.message;
        throw new Error(message);
    }
}

const deletePost = async (id) => {
    try {
        const response = await authenticator
            .setAuthorization
            .delete(`${postsAPI}/${id}`)
        return response.data.message
    } catch (error) {
        const message = error.response.data.message;
        throw new Error(message);
    }
}

const postService = {
    getPosts,
    getPostsByUserId,
    getPost,
    createPost,
    updatePost,
    deletePost
}

export default postService