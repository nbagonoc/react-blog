import { Link } from 'react-router-dom'

const PostDetails = ({ post }) => {
    if (!post) {
        return null
    }
    
    const shortenedContent = post.content.substring(0, 100) + '...';

    return (
        <div className='border-top pt-3'>
            <Link to={`/view/${post._id}`} className='text-decoration-none'>
                <h5 className='mb-0 text-capitalize'>{post.title}</h5>
            </Link>
            <p className='mb-0 text-muted'>{ post.user ? post.user.firstName : ''} {post.user ? post.user.lastName: ''}</p>
            <span className='text-muted'>{new Date(post.created).toLocaleString()}</span>
            <p className='mt-2'>{shortenedContent}</p>
        </div>
    )
}

export default PostDetails
