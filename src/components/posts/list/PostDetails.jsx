import { Link } from 'react-router-dom'

const PostDetails = ({ post }) => {
    if (!post) {
        return null
    }
    
    return (
        <div>
            <Link to={`/view/${post._id}`} className='text-decoration-none'>
                <h5 className='mb-0 text-capitalize'>{post.title}</h5>
            </Link>
            <span className='text-muted'>{post.user.firstName} {post.user.lastName}</span>
            <p className='mb-0 text-muted'>{new Date(post.created).toLocaleString()}</p>
            <p className=''>{post.content}</p>
            <hr />
        </div>
    )
}

export default PostDetails
