import { Link } from 'react-router-dom'

const PostDetails = ({ post }) => {
    return (
        <div>
            <Link to={`/view/${post._id}`} className='text-decoration-none'>
                <h5 className='mb-0 text-capitalize'>{post.title}</h5>
            </Link>
            <p>{post.content}</p>
            <hr />
        </div>
    )
}

export default PostDetails
