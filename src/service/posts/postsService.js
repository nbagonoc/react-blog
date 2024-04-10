import axios from 'axios'

import { postsAPI } from '../API.js'
// import authenticator from '../../utils/authenticator.js'

const getPosts = async () => {
    const response = await axios.get(`${postsAPI}`)
    if (response.data.success === false) throw new Error(response.data.message)
    return response.data
}

const postService = { getPosts }

export default postService