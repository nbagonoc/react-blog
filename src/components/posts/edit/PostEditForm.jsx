import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

import { getPost, updatePost, reset } from '../../../redux/posts/postsSlice';

const PostEditForm = () => {
    const { id  }  = useParams()
    const dispatch = useDispatch()
    const { post, isLoading, isError, isSuccess, message } = useSelector((state) => state.posts)
    const [formData, setFormData] = useState({
        title: '',
        content: '',
    });

    useEffect(() => {
        dispatch(getPost(id))
    }, [dispatch, id])

    useEffect(() => {
        if (post) {
            setFormData({
                title: post.title || '',
                content: post.content || '',
            });
        }
    }, [post, dispatch])

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const postData = {
            title: formData.title,
            content: formData.content,
        };
        dispatch(updatePost(id, postData));
        setFormData({
            title: '',
            content: '',
        });
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleOnChange}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={formData.content}
          onChange={handleOnChange}
          placeholder="Content"
        ></textarea>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default PostEditForm