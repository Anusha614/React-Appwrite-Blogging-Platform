import React from "react";
import { useDispatch } from 'react-redux';
import { logout } from '../../src/store/authSlice';
import authService from '../../Appwrite/Auth';

export default function LogoutBtn() {
    const dispatch = useDispatch();

    const logouthandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
        });
    };

    return (
        <button 
            className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
            onClick={logouthandler} 
        >
            Logout
        </button>
    );
}
