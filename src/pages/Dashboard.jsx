import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

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
    </div>
  )
}

export default Dashboard