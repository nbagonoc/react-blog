import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../redux/auths/authsSlice'
import { resetPostsByUser } from '../../redux/posts/postsSlice'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Navigation = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auths)

    const handleOnLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem('token')
        dispatch(logout())
        dispatch(resetPostsByUser())
        dispatch(reset())
        navigate('/login')
    }

    return (
        <Navbar expand='lg' bg='dark' data-bs-theme='dark'>
            <Container>
                <Navbar.Brand as={Link} to='/'>
                    React-Blog
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link as={Link} to='/'>
                            Home
                        </Nav.Link>
                        {user && (
                            <Nav className='me-auto'>
                                <Nav.Link as={Link} to='/create'>
                                    Create
                                </Nav.Link>
                            </Nav>
                        )}
                    </Nav>
                    {user ? (
                        <Nav className='ml-auto'>
                            <NavDropdown
                                title='User'
                                id='basic-nav-dropdown'
                                className=''
                            >
                                <NavDropdown.Item as={Link} to='/dashboard'>
                                    Dashboard
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={handleOnLogout}>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    ) : null}
                    {user ? null : (
                        <Nav className='ms-auto'>
                            <Nav.Link as={Link} to='/login'>
                                Login
                            </Nav.Link>
                            <Nav.Link as={Link} to='/register'>
                                Register
                            </Nav.Link>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
