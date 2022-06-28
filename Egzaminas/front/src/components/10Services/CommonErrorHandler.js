import React from 'react';
import { useHistory } from 'react-router';
import AuthContext from "../11Context/AuthContext";
import swal from "sweetalert";
import axios from 'axios';

const CommonErrorHandler = ({children}) => {
    const history = useHistory();
    const { dispatch } = React.useContext(AuthContext);
    
    React.useMemo(() => {
        axios.interceptors.response.use(response => response, async(error) => {
            const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
            if (!expectedError) {
                swal('An error occurred, the page is not available');
                dispatch({
                    type: "ERROR",
                    payload: null
                })
            } else if (error.response.status === 401) {
                swal('Not logged in')
                dispatch({
                    type: "ERROR",
                    payload: error.response.status
                })
            } else if (error.response.status === 403) {
                swal('Access denied')
                dispatch({
                    type: "ERROR",
                    payload: error.response.status
                })
            }
            else return Promise.reject(error);
            history.push("/")
        });
    }, [dispatch, history])
    return children;
}

export default CommonErrorHandler
