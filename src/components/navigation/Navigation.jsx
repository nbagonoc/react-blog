import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="bg-gray-800 py-4">
            <div className="max-w-7xl mx-auto px-4">
                <ul className="flex justify-between">
                    <li>
                        <Link to='/' className="text-white hover:text-gray-300">Home</Link>
                    </li>
                    <li>
                        <Link to='/create' className="text-white hover:text-gray-300">Create</Link>
                    </li>
                    <li>
                        <Link to='/login' className="text-white hover:text-gray-300">Login</Link>
                    </li>
                    <li>
                        <Link to='/register' className="text-white hover:text-gray-300">Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
