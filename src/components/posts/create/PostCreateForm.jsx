import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

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

    const handleOnSubmit = (e) => {
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
            <form onSubmit={handleOnSubmit}>
                <div>
                    <label htmlFor='title' className='form-label'>
                        Title:
                    </label>
                    <input
                        type='text'
                        name='title'
                        value={formData.title}
                        onChange={handleOnChange}
                        placeholder='Title'
                        className='form-control mb-3'
                    />
                </div>
                <div>
                    <label htmlFor='content' className='form-label'>
                        Content:
                    </label>
                    <textarea
                        name='content'
                        value={formData.content}
                        onChange={handleOnChange}
                        placeholder='Content'
                        className='form-control mb-3'
                        rows='15'
                    />
                </div>
                <button
                    className='btn btn-sm btn-primary me-1'
                    type='submit'
                >
                    Create
                </button>
                <Link
                    className='btn btn-sm btn-secondary'
                    to='/dashboard'
                >
                    Cancel
                </Link>
            </form>
        </div>
    )
}

export default PostCreateForm
