import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { createPost, reset } from '../../../redux/posts/postsSlice'

import Spinner from 'react-bootstrap/Spinner';

const PostCreateForm = () => {
    const dispatch = useDispatch()
    const { isLoading, isError, isSuccess, message } = useSelector(state => state.posts)
    const [formData, setFormData] = useState({
        title: '',
        content: '',
    })

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const postData = {
            title: formData.title,
            content: formData.content,
        }
        dispatch(createPost(postData))
        setFormData({
            title: '',
            content: '',
        })
    }

    if (isLoading) {
        return <Spinner animation='border' variant='primary'/>
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='title'
                    value={formData.title}
                    onChange={handleOnChange}
                    placeholder='Title'
                />
                <textarea
                    name='content'
                    value={formData.content}
                    onChange={handleOnChange}
                    placeholder='Content'
                ></textarea>
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default PostCreateForm
