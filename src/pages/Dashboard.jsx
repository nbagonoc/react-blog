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
        <h2 className='mb-3'>Welcome to your dashboard, {user ? user.firstName : '' }</h2>
        <h3>Your posts:</h3>
        <PostListByUser/>
    </div>
  )
}

export default Dashboard