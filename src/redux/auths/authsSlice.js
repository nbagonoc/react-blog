import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jwtDecode } from 'jwt-decode'
import authsService from '../../service/auths/authsService'
import authenticator from '../../utils/authenticator';

const initialState = {

    user: authenticator.setUser(),
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}

export const login = createAsyncThunk('auths/login', async (req, thunkAPI) => {
    try {
        const response = await authsService.login(req)
        localStorage.setItem('token', response.data.token)
        const token = localStorage.getItem('token')
        const decodedToken = jwtDecode(token)
        const user = decodedToken !== null ? { id: decodedToken._id, firstName: decodedToken.firstName, role: decodedToken.role } : null

        return user
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
        },
        logout: (state) => {
            state.user = null
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

export const { reset, logout } = authsSlice.actions

export default authsSlice.reducer