
import React from 'react';
import "./css/Header.css";
import { Link } from "react-router-dom";

import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
import { useHistory } from 'react-router-dom';



function Header() {
    const user = useSelector(selectUser);
    const history = useHistory();
    
    return (
        <header>
            <div className="header-container">
                <div className="header-left">
                         <Link to="/">
                         <img src="https://i.imgur.com/ZOghmEM.png" alt="logo" />
                         </Link>
                </div>
                <div className="header-middle">
                </div>
                <div className="header-right">
                    <div className="header-right-container">
                        <span onClick = {()=> {
                            auth.signOut()
                            history.push('/auth')
                        }}> 
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header
