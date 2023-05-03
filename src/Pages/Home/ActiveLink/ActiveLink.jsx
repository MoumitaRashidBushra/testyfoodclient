import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? "text-black font-bold me-5 ms-5" : " me-5 ms-5"
            }

        >
            {children}

        </NavLink>
    );
};

export default ActiveLink;