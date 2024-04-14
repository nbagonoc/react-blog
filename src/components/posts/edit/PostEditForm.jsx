import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updatePost, reset } from '../../../redux/posts/postsSlice';

const PostEditForm = () => {
    const dispatch = useDispatch()
    const { post, isLoading, isError, isSuccess, message } = useSelector((state) => state.posts);
    const [formData, setFormData] = useState({
        title: post.title,
        content: post.content,
    });

    // const handleOnChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value,
    //     });
    // }

    const handleOnChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const postData = {
            title: formData.title,
            content: formData.content,
        };
        dispatch(updatePost(postData));
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