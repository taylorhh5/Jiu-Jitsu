import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth.js'



export const REGISTER_START = "REGISTER_START"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAILURE = "REGISTER_FAILURE"

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const register = (form) => {
    return dispatch => {
        dispatch({ type: REGISTER_START });

        // axiosWithAuth()
        axios
            .post('http://localhost:5000/api/users/register', form)
            // .then((response) => {
            //     console.log(response, 'POST takedown')
            //     // window.location.reload();
            // })
        .then(response => dispatch({ type: REGISTER_SUCCESS, payload: response.data }))
      

        .catch(error => dispatch({ type: REGISTER_FAILURE, payload: error.response }))

    };
};


export const login = (form) => {
    return dispatch => {
        dispatch({ type: LOGIN_START });

        axiosWithAuth()
        
            .post('http://localhost:5000/api/users/login', form)
            // .then((response) => {
            //     console.log(response, 'response')
            //     // window.location.reload();
            // })
        .then(response =>{ dispatch({ type: LOGIN_SUCCESS, payload: response.data })
        localStorage.setItem('token', response.data.token)
    })
        .catch(error => dispatch({ type: LOGIN_FAILURE, payload: error.response }))

    };
};
