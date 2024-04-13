import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from '../../service/posts/postsService'

const initialState = {
    post: {},
    posts: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
    return await postService.getPosts()
})

export const createPost = createAsyncThunk('posts/createPost', async (req, thunkAPI) => {
    try {
        return await postService.createPost(req)
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

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
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
                state.message = action.payload
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
                state.message = action.payload
            })
    }
})

export const { reset } = postsSlice.actions

export default postsSlice.reducer

//both action creators and reducers are in the same file