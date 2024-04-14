import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts, reset } from '../../../redux/posts/postsSlice'

import PostDetails from './PostDetails'

const PostList = () => {
    const dispatch = useDispatch()
    const { posts, isLoading, isError, isSuccess, message } = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(getPosts())
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
