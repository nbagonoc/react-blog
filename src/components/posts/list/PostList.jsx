import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts, reset } from '../../../redux/posts/postsSlice'

import PostDetails from './PostDetails'

import Spinner from 'react-bootstrap/Spinner'

const PostList = () => {
    const dispatch = useDispatch()
    const { posts, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.posts
    )

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    if (isLoading) {
        return <Spinner animation='border' variant='primary' />
    }

    return (
        <div>
            {posts && posts.length === 0 ? (
                <p>No posts</p>
            ) : (
                posts?.map((post, index) => (
                    <PostDetails key={index} post={post} />
                ))
            )}
        </div>
    )
}

export default PostList
