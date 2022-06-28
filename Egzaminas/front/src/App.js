import React, { useEffect, useReducer } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./index.css";
import "./App.css";
import Spinner from "./components/08CommonComponents/Spinner";
import swal from "sweetalert";

import Login from "./components/01Login/LoginContainer";
import NotFound from "./components/03NotFound/NotFound";
import Admin from "./components/04Admin/AdminContainer";
import AdminNavBar from "./components/00Navigation/AdminNavBar";
import UserNavBar from "./components/00Navigation/UserNavBar";

import AuthContext from "./components/11Context/AuthContext";
import http from "./components/10Services/httpService";
import CommonErrorHandler from "./components/10Services/CommonErrorHandler";
import apiEndpoint from "./components/10Services/endpoint";
import { UserHomeContainer } from "./components/02Main/UserHomeContainer";
import CreateNewBook from "./components/04Admin/CreateNewBook";
import { DeleteBook } from "./components/04Admin/DeleteBook";
import EditBook from "./components/04Admin/EditBook";
import CreateBookCategory from "./components/04Admin/CreateBookCategory";
import EditBookCategory from "./components/04Admin/EditBookCategory";
import { DeleteBookCategory } from "./components/04Admin/DeleteBookCategory";
import BooksByCategories from "./components/04Admin/BooksByCategories";
import BooksByCategoriesUser from "./components/02Main/BooksByCategoriesUser"
import FavoriteBooks from "./components/02Main/FavoriteBooks";

var initState = {
  isAuthenticated: null,
  username: null,
  role: null,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
        role: action.payload.role,
        error: null,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        username: null,
        role: null,
        error: null,
      };
    case "ERROR":
      return {
        ...state,
        isAuthenticated: false,
        username: null,
        role: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {

    if (state.isAuthenticated === null) {
      http
        .get(`${apiEndpoint}/api/loggedUserRole`)
        .then((resp) => {
          dispatch({
            type: "LOGIN",
            payload: { role: resp.data },
          });
        })
        .catch((error) => {
          const unexpectedError = error.response &&
                                  error.response.status >= 400 &&
                                  error.response.status < 500;
                                  
          if (!unexpectedError || (error.response && error.response.status === 404))
          {
            swal("An error occurred, the page at is not available");
            dispatch({
              type: "ERROR",
            });
          }
          else dispatch({
            type: "ERROR",
            payload: error.response.status,
          });
        });
    }
  }, [state.isAuthenticated]);

  if (state.isAuthenticated) {
    switch (state.role) {
      case "ADMIN":
        return (
          <AuthContext.Provider value={{ state, dispatch }}>
            <CommonErrorHandler>
              <div className="container-fluid px-0">
                <AdminNavBar>
                  <Switch>
                    <Route exact path="/" component={Admin} />
                    <Route exact path="/home" component={Admin} />
                    <Route exact path="/admin" component={Admin} />
                    <Route exact path="/new" component={CreateNewBook} />
                    <Route exact path="/delete" component={DeleteBook} />
                    <Route exact path="/edit" component={EditBook} />
                    <Route exact path="/category" component={CreateBookCategory} />
                    <Route exact path="/category/new" component={CreateBookCategory} />
                    <Route exact path="/category/edit" component={EditBookCategory} />
                    <Route exact path="/category/delete" component={DeleteBookCategory} />
                    <Route exact path="/category/books" component={BooksByCategoriesUser} />
                    <Route path="*" component={NotFound} />
                  </Switch>
                </AdminNavBar>
              </div>
            </CommonErrorHandler>
          </AuthContext.Provider>
        );
      case "USER":
        return (
          <AuthContext.Provider value={{ state, dispatch }}>
            <CommonErrorHandler>
              <div className="container-fluid px-0">
                <UserNavBar>
                  <Switch>
                    <Route exact path="/" component={UserHomeContainer} />
                    <Route exact path="/home" component={UserHomeContainer} />
                    <Route exact path="/category" component={BooksByCategories} />
                    <Route exact path="/favorites" component={FavoriteBooks} />
                    <Route path="*" component={NotFound} />
                  </Switch>
                </UserNavBar>
              </div>
            </CommonErrorHandler>
          </AuthContext.Provider>
        );
      default:
        return (
          <AuthContext.Provider value={{ state, dispatch }}>
            <div className="container-fluid px-0">
              <NotFound />
            </div>
          </AuthContext.Provider>
        );
    }
  } else if (state.isAuthenticated === false){
    return (
      <div>
        <AuthContext.Provider value={{ state, dispatch }}>
            <Switch>
               <Route exact path="/login" component={Login} />
                <Route path="*">
                  <Redirect to="/login" />
                </Route> 
            </Switch>
        </AuthContext.Provider>
      </div>
    );}
  else return <Spinner />;
}

export default App;
