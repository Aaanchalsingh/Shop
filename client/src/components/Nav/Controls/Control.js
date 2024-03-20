import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Badge from '@mui/material/Badge';
import Cart from '../../Card/Cart/Cart';
import { WishItemsContext } from '../../../Context/WishItemsContext';

const Control=() => {
    const wishItems=useContext(WishItemsContext);
    const isLoggedIn=localStorage.getItem('token')!==null;
    const handleLogout=() => {
        localStorage.removeItem('token');
        window.location.href='/account/login';
    };

    return (
        <div className="control__bar__container">
            <div className="controls__container flex">
                {isLoggedIn? (
                    <button
                        className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                ):(
                    <>
                        <NavLink
                            className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
                            to="/account/login"
                        >
                            Login
                        </NavLink>
                    </>
                )}
                <div className="control">
                    <Link to="/wishlist">
                        <Badge badgeContent={wishItems.items.length} color="error">
                            <FavoriteBorderIcon color="black" sx={{ width: '35px' }} />
                        </Badge>
                    </Link>
                </div>
                <div className="control">
                    <Cart />
                </div>
            </div>
        </div>
    );
}

export default Control;
