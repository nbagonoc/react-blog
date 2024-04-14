import { jwtDecode } from 'jwt-decode'
import axios from "axios"

const getStorage = localStorage.getItem('token')

const setStorage = res => localStorage.setItem('token', res)

const unSetStorage = () => localStorage.removeItem('token')

const setUser = () => {
    const payload = getStorage ? jwtDecode(getStorage) : null
    const user = payload !== null ? { firstName: payload.firstName, role: payload.role, token: getStorage } : null
    console.log(user)
    return user
}

const setAuthorization = axios.create({
    headers: { Authorization: getStorage }
})

const authenticator = { setStorage, setUser, setAuthorization, unSetStorage }

export default authenticator