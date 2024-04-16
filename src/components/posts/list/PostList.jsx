import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts, reset } from '../../../redux/posts/postsSlice'

import PostDetails from './PostDetails'

import Spinner from '../../partials/Spinner'

const PostList = () => {
    const dispatch = useDispatch()
    const { posts, isLoading, isError, isSuccess, message } = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <div>
            { posts?.map((post, index) => (
                <PostDetails key={index} post={post} />
            ))}
        </div>
    )
}

export default PostList
