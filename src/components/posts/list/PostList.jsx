import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts, reset } from '../../../service/posts/postsSlice'

import PostDetails from './PostDetails'

const PostList = () => {
    const dispatch = useDispatch()
    const { posts, isLoading, isError, isSuccess, message } = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(getPosts())
        // return () => dispatch(reset())
    }, [dispatch])
    return (
        <div>
            { posts?.map((post, index) => (
                <PostDetails key={index} post={post} />
            ))}
        </div>
    )
}

export default PostList
