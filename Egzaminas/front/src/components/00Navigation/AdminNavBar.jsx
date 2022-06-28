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
                    {/* Renamed .ml-* and .mr-* to .ms-* and .me-*. */}

                            <li className="nav-item me-2">
                                <NavLink className="nav-link" id="navAdminAllBooks" to={"/home"}>All Books</NavLink>
                            </li>

                            <li className="nav-item me-2">
                                <NavLink className="nav-link" id="navAdminBookCategories" to={"/category/books"}>Books by categories</NavLink>
                            </li>

                            <li className="nav-item me-2">
                                <NavLink className="nav-link" id="navAdminNewBook" to={"/new"}>New Book</NavLink>
                            </li>

                            <li className="nav-item me-2">
                                <NavLink className="nav-link" id="navAdminDeleteBook" to={"/delete"}>Delete Book</NavLink>
                            </li>

                            <li className="nav-item me-2">
                                <NavLink className="nav-link" id="navAdminEditBook" to={"/edit"}>Edit Book</NavLink>
                            </li>

                            <li className="nav-item me-2">
                                <NavLink className="nav-link" id="navAdminCreateCategory" to={"/category/new"}>Create Category</NavLink>
                            </li>

                            <li className="nav-item me-2">
                                <NavLink className="nav-link" id="navAdminEditCategory" to={"/category/edit"}>Edit Category</NavLink>
                            </li>

                            <li className="nav-item me-2">
                                <NavLink className="nav-link" id="navAdminDeleteCategory" to={"/category/delete"}>Delete Category</NavLink>
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
