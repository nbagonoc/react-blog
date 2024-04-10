import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from '../../service/posts/postsService'

const initialState = {
    posts: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}

export const getPosts = createAsyncThunk('posts/getPosts', async (thunkAPI) => {
    try {
        return await postService.getPosts()
    } catch (error) {
        const message = error.message
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
    }
})

export const { reset } = postsSlice.actions

export default postsSlice.reducer

//both action creators and reducers are in the same file