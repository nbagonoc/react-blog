import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { deletePost, reset } from '../../../redux/posts/postsSlice'

const PostDetails = ({ post }) => {
    const dispatch = useDispatch()

    const handleOnDelete = (id) => {
        dispatch(deletePost(id))
    }

    return (
        <div>
            <Link to={`/view/${post._id}`} className='text-decoration-none'>
                <h3 className='mb-0 text-capitalize'>{post.title}</h3>
            </Link>
            <p className='mb-1'>{post.content}</p>
            <div className='action-container mb-3'>
                <Link
                    to={`/edit/${post._id}`}
                    className='btn btn-secondary me-1'
                >
                    Edit
                </Link>
                <button
                    className='btn btn-secondary'
                    onClick={() => handleOnDelete(post._id)}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default PostDetails
