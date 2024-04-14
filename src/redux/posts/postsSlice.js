import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from '../../service/posts/postsService'

const initialState = {
    post: {},
    posts: [],
    postsByUser: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
    return await postService.getPosts()
})

export const getPostsByUser = createAsyncThunk('posts/getPostsByUser', async (id) => {
    return await postService.getPostsByUserId(id)
})

export const createPost = createAsyncThunk('posts/createPost', async (req, thunkAPI) => {
    try {
        await postService.createPost(req)
        return 'Post created successfully'
    } catch (error) {
        const message = error
        return thunkAPI.rejectWithValue(message)
    }
})

export const updatePost = createAsyncThunk('posts/updatePost', async (req, thunkAPI) => {
    try {
        await postService.updatePost(req.id, req.data)
        const state = thunkAPI.getState()
        const findToUpdatePost = state.posts.posts.find(post => post._id === req.id)
        if(findToUpdatePost) {
            findToUpdatePost.title = req.data.title
            findToUpdatePost.content = req.data.content
        }
        return 'Post udpated successfully'
    } catch (error) {
        const message = error
        return thunkAPI.rejectWithValue(message)
    }
})

export const getPost = createAsyncThunk('posts/getPost', async (id, thunkAPI) => {
    try {
        return await postService.getPost(id)
    } catch (error) {
        const message = error
        return thunkAPI.rejectWithValue(message)
    }
})

export const deletePost = createAsyncThunk('posts/deletePost', async (id, thunkAPI) => {
    try {
        await postService.deletePost(id)
        const state = thunkAPI.getState()
        const updatedPostsByUser = state.posts.postsByUser.filter(post => post._id !== id)
        const updatedPosts = state.posts.posts.filter(post => post._id !== id)
        thunkAPI.dispatch(setPostsByUser(updatedPostsByUser))
        thunkAPI.dispatch(setPosts(updatedPosts))
        return 'Post deleted successfully'
    } catch (error) {
        const message = error
        return thunkAPI.rejectWithValue(message)
    }
})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        },
        setPostsByUser: (state, action) => {
            state.postsByUser = action.payload
        },
        setPosts: (state, action) => {
            state.posts = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.posts = action.payload
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload.message
            })
            .addCase(getPostsByUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPostsByUser.fulfilled, (state, action) => {
                state.postsByUser = action.payload
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(getPostsByUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload.message
            })
            .addCase(getPost.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPost.fulfilled, (state, action) => {
                state.post = action.payload
                state.isLoading = false
                state.isError = false
                state.message = action.payload
            })
            .addCase(getPost.rejected, (state, action) => {
                state.post = {}
                state.isLoading = false
                state.isError = true
                state.message = action.payload.message
            })
            .addCase(createPost.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = action.payload
            })
            .addCase(createPost.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload.message
            })
            .addCase(updatePost.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = action.payload
            })
            .addCase(updatePost.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload.message
            })
            .addCase(deletePost.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = action.payload
            })
            .addCase(deletePost.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload.message
            })
    }
})

export const { reset, setPosts, setPostsByUser } = postsSlice.actions

export default postsSlice.reducer

//both action creators and reducers are in the same file