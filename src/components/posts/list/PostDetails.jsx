import { Link } from 'react-router-dom'

const PostDetails = ({ post }) => {
    return (
        <div>
            <Link to={`/view/${post._id}`}>
                <h1>{post.title}</h1>
            </Link>
            <p>{post.body}</p>
        </div>
    )
}

export default PostDetails
