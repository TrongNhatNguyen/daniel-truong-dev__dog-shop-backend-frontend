import React from 'react';
import './NavigateStyle.scss';
import { NavLink } from 'react-router-dom';

class Navigate extends React.Component {
    render() {
        return (
            <>
                <div className="nav-container">
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Home
                    </NavLink>

                    <NavLink
                        to="/list-dog"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Dogs
                    </NavLink>

                    <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active' : '')}>
                        My Cart
                    </NavLink>
                </div>
            </>
        );
    }
}

export default Navigate;
