import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authsService from '../../service/auths/authsService'
import authenticator from '../../utils/authenticator';

const initialState = {
    user: authenticator.setUser() ? authenticator.setUser() : null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}

export const login = createAsyncThunk('auths/login', async (req, thunkAPI) => {
    try {
        return await authsService.login(req)
    } catch (error) {
        const message = error
        return thunkAPI.rejectWithValue(message)
    }
})

export const register = createAsyncThunk('auths/register', async (req, thunkAPI) => {
    try {
        return await authsService.register(req)
    } catch (error) {
        const message = error
        return thunkAPI.rejectWithValue(message)
    }
})

const authsSlice = createSlice({
    name: 'auths',
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
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = authsSlice.actions

export default authsSlice.reducer