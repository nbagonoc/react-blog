import { configureStore } from "@reduxjs/toolkit"
import postsReducer from './service/posts/postsSlice'


export const store = configureStore({
    reducer: {
        posts: postsReducer,
    }
})