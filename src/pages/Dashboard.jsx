import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import PostListByUser from '../components/posts/listByUser/PostListByUser'

const Dashboard = () => {
    const navigate = useNavigate()
    const { user } = useSelector(state => state.auths)

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user, navigate])

  return (
    <div>
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard, {user ? user.firstName : '' }</p>
        <h1>Your posts:</h1>
        <PostListByUser/>
    </div>
  )
}

export default Dashboard