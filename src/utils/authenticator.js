import { jwtDecode } from 'jwt-decode'
import axios from "axios"

const getStorage = localStorage.getItem('token')

const setStorage = token => localStorage.setItem('token', token)

const unSetStorage = () => localStorage.removeItem('token')

const setUser = () => {
    const payload = getStorage ? jwtDecode(getStorage) : null
    const user = payload !== null ? { id: payload._id, firstName: payload.firstName, role: payload.role, token: getStorage } : null
    return user
}

const setAuthorization = axios.create({
    headers: { Authorization: getStorage }
})

const authenticator = { setStorage, setUser, setAuthorization, unSetStorage }

export default authenticator