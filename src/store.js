import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './redux/posts/postsSlice'
import authsReducer from './redux/auths/authsSlice'


export const store = configureStore({
    reducer: {
        posts: postsReducer,
        auths: authsReducer,
    }
})