import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark p-2">
            <Link to="/" className="navbar-brand">Home</Link>
            <Link to="/users" className="navbar-brand">Users</Link>
            <Link to="/roles" className="navbar-brand">Roles</Link>
            <div className="collapse navbar-collapse">
                {/* Add navigation links here */}
            </div>
        </nav>
    );
};

export default Navbar;
