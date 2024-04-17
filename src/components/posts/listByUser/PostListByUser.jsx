import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPostsByUser, reset } from '../../../redux/posts/postsSlice'

import PostDetails from './PostDetails'
import Spinner from 'react-bootstrap/Spinner';

const PostListByUser = () => {
    const dispatch = useDispatch()
    const { posts, postsByUser, isLoading, isError, isSuccess, message } = useSelector((state) => state.posts)
    const { user } = useSelector((state) => state.auths)

    useEffect(() => {
        dispatch(getPostsByUser(user.id))
    }, [dispatch, user])

    if (isLoading) {
        return <Spinner animation='border' variant='primary'/>
    }

    if (postsByUser.length === 0) {
        return (
            <p>You have no posts. {<Link to='/create'>Create one now!</Link>}</p>
        )
    }

    return (
        <div>
            { postsByUser?.map((post, index) => (
                <PostDetails key={index} post={post} />
            ))}
        </div>
    )
}

export default PostListByUser
