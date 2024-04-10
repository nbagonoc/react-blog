import { configureStore } from "@reduxjs/toolkit"
import postsReducer from './redux/posts/postsSlice'


export const store = configureStore({
    reducer: {
        posts: postsReducer,
    }
})