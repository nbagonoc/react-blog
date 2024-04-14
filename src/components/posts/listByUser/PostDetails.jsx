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
            <Link to={`/view/${post._id}`}>
                <h1>{post.title}</h1>
            </Link>
            <p>{post.body}</p>
            <Link to={`/edit/${post._id}`}>
                <h1>Edit</h1>
            </Link>
            <button onClick={() => handleOnDelete(post._id) }>
                Delete
            </button>
        </div>
    )
}

export default PostDetails
