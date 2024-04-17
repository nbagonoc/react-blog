import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { getPost, updatePost, reset } from '../../../redux/posts/postsSlice'

import Spinner from 'react-bootstrap/Spinner';

const PostEditForm = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const dispatch = useDispatch()
    const { post, isLoading, isError, isSuccess, message } = useSelector(state => state.posts)
    const [formData, setFormData] = useState({
        title: '',
        content: '',
    })

    useEffect(() => {
        dispatch(getPost(id))
    }, [dispatch, id])

    useEffect(() => {
        if (post) {
            setFormData({
                title: post.title || '',
                content: post.content || '',
            })
        }
    }, [post, dispatch])

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const data = {
            title: formData.title,
            content: formData.content,
        }

        try {
            dispatch(updatePost({ id, data }))
            navigate('/dashboard')
        } catch (error) {
            console.log(error)
        }
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
                    className='btn btn-sm btn-secondary me-1'
                    type='submit'
                >
                    Edit
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

export default PostEditForm
