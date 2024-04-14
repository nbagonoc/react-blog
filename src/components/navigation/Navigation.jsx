import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../redux/auths/authsSlice'

const Navigation = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auths)

    const handleOnLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem('token')
        dispatch(logout())
        dispatch(reset())
        navigate('/login')
    }

    return (
        <nav className="bg-gray-800 py-4">
            <div className="max-w-7xl mx-auto px-4">
                <ul className="flex justify-between">
                    <li>
                        <Link to='/' className="text-white hover:text-gray-300">
                            Home
                        </Link>
                    </li>
                    {user && (
                        <>
                            <li>
                                <Link to='/create' className="text-white hover:text-gray-300">
                                    Create
                                </Link>
                            </li>
                            <li>
                                <Link to='/dashboard' className="text-white hover:text-gray-300">
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/logout'
                                    className="text-white hover:text-gray-300"
                                    onClick={handleOnLogout}
                                >
                                    Logout
                                </Link>
                            </li>
                        </>
                        
                    )}
                    {!user && (
                        <>
                            <li>
                                <Link to='/login' className="text-white hover:text-gray-300">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link to='/register' className="text-white hover:text-gray-300">
                                    Register
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    )
}

export default Navigation
