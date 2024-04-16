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
            <h5 className='mb-1 text-capitalize'>{post.title}</h5>
            <div className='action-container mb-3'>
                <Link
                    to={`/view/${post._id}`}
                    className='btn btn-sm btn-secondary me-1'
                >
                    View
                </Link>
                <Link
                    to={`/edit/${post._id}`}
                    className='btn btn-sm btn-secondary me-1'
                >
                    Edit
                </Link>
                <button
                    className='btn btn-sm btn-secondary'
                    onClick={() => handleOnDelete(post._id)}
                >
                    Delete
                </button>
            </div>
            <hr />
        </div>
    )
}

export default PostDetails
