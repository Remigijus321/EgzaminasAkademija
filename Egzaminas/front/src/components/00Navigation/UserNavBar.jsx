import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../App.css';

import LogoutContainer from './LogoutContainer';


function Navigation(props) {

    return (
        <div className="pb-4" >
            <nav className="navbar navbar-expand-lg py-4 navbar-light bg-light">
                <div className="container">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto ">

                            <li className="nav-item me-1">
                                <NavLink className="nav-link" id="navUserMyApplications" to={"/home"}>All books</NavLink>
                            </li>

                            <li className="nav-item me-1">
                                <NavLink className="nav-link" id="navUserMyApplications" to={"/category"}>Books by Category</NavLink>
                            </li>

                            <li className="nav-item me-1">
                                <NavLink className="nav-link" id="navUserMyApplications" to={"/favorites"}>Favorite Books</NavLink>
                            </li>

                            <li className="nav-item nav-item me-2">
                                <LogoutContainer />
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
            <div>{props.children}</div>
        </div >

    );
}

export default Navigation;
