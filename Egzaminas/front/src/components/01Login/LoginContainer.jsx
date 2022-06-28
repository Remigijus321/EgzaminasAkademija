import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "../../App.css";

import apiEndpoint from "../10Services/endpoint";
import AuthContext from "../11Context/AuthContext";
import swal from "sweetalert";

axios.defaults.withCredentials = true;

export const LoginContainer = () => {
  const initState = {
    username: "",
    password: "",
    loginError: false,
    loggingIn: false,
  };

  const [data, setData] = React.useState(initState);
  const { dispatch } = React.useContext(AuthContext);
  const history = useHistory();

  const loginInstance = axios.create();

  loginInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
      if (!expectedError) {
        swal("An error occurred, the page is not available");
        dispatch({
          type: "ERROR",
          payload: null,
        });
        setData({
          ...data,
          loginError: false,
          loggingIn: false,
          username: "",
          password: "",
        });
      } else if (error.response) {
       if (error.response.status === 401) {
        setData({
          ...data,
          loginError: true,
          loggingIn: false,
          username: "",
          password: "",
        });
      } else if (error.response.status === 403){
        swal("Access denied")
        setData({
          ...data,
          loginError: false,
          loggingIn: false,
          username: "",
          password: "",
        });
      } 
    }
    } 
  );

  const handleChange = (event) => {
    validateText(event);
    setData({
      ...data,
      loginError: false,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setData({
      ...data,
      loginError: false,
      loggingIn: true,
    });
    let userData = new URLSearchParams();
    userData.append("username", data.username);
    userData.append("password", data.password);
    console.log(userData)
    loginInstance
      .post(`${apiEndpoint}/login`, userData, {
        headers: { "Content-type": "application/x-www-form-urlencoded" },
      })
      .then((resp) => {
        dispatch({
          type: "LOGIN",
          payload: resp.data,
        });
        history.push("/home");
      })
     .catch(() => {})
  };

  const validateText = (event) => {
    const target = event.target;

    if (target.validity.valueMissing && target.id === "username") {
      target.setCustomValidity("You must enter username");
    } else if (target.validity.valueMissing && target.id === "password") {
      target.setCustomValidity("You must enter password");
    } else {
      target.setCustomValidity("");
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <div className="card p-5">
        <form onSubmit={handleSubmit}>
          <h3>Log in:</h3>
          <div className="mt-3 mb-3">
            <label htmlFor="username" className="form-label">
              Username <span className="fieldRequired">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="username"
              id="username"
              value={data.username}
              onChange={handleChange}
              onInvalid={validateText}
              required
              data-toggle="tooltip"
              data-placement="top"
              title="Enter your username"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password <span className="fieldRequired">*</span>
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              value={data.password}
              onChange={handleChange}
              onInvalid={validateText}
              required
              data-toggle="tooltip"
              data-placement="top"
              title="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary float-center"
            id="btnLogin"
            disabled={data.loggingIn}
          >
            {data.loggingIn ? "Connecting..." : "Connect"}
          </button>
        </form>
        {data.loginError && (
          <span
            className="alert alert-danger mt-3"
            role="alert"
            id="incorrectLoginData"
          >
            Invalid username and/or password!
          </span>
        )}
      </div>
    </div>
  );
};

export default LoginContainer;
