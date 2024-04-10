import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { getPost } from '../../../redux/posts/postsSlice'

const PostSingle = () => {
    const { id  }  = useParams()
    const dispatch = useDispatch()
    const { post, isLoading, isError, isSuccess, message } = useSelector((state) => state.posts)
    console.log(message)
    useEffect(() => {
        dispatch(getPost(id))
    }, [dispatch, id])
    return (
        <div>
            { post && (
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </div>
            )}
        </div>
    )
}

export default PostSingle
