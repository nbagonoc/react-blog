import { Link } from 'react-router-dom'

const PostDetails = ({ post }) => {
    return (
        <div>
            <Link to={`/view/${post._id}`} className='text-decoration-none'>
                <h3 className='mb-0 text-capitalize'>{post.title}</h3>
            </Link>
            <p>{post.content}</p>
        </div>
    )
}

export default PostDetails
