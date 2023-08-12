import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { StoreState } from '../../store';

const Navbar: React.FC = () => {

    const auth = useSelector((state: StoreState) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth.isAuthenticate) {
            navigate("/login");
        }
    }, [navigate, auth.isAuthenticate]);

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
