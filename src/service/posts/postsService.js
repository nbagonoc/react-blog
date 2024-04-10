import axios from 'axios'
import { API } from './postsApi.js'
// import authenticator from '../../utils/authenticator.js'

const getPosts = async () => {
    const response = await axios.get(`${API}`)
    if (response.data.success === false) throw new Error(response.data.message)
    return response.data
}

const postService = { getPosts }

export default postService