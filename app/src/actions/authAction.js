import axios from 'axios'



export const REGISTER_START = "REGISTER_START"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAILURE = "REGISTER_FAILURE"

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const register = (form, history) => {
    return dispatch => {
        dispatch({ type: REGISTER_START });

        // axiosWithAuth()
        axios
            .post('http://localhost:5000/api/users/register', form)
            // .then((response) => {
            //     console.log(response, 'POST takedown')
            //     // window.location.reload();
            // })
            .then(response =>{ dispatch({ type: REGISTER_SUCCESS, payload: response.data })
         history.push('/login')
    })

        .catch(error => {dispatch({ type: REGISTER_FAILURE, payload: error.response })
        alert("Please try registering with a different username and password.")

    })

    };
};


export const login = (form, history) => {
    return dispatch => {
        dispatch({ type: LOGIN_START });

        axios
        
            .post('http://localhost:5000/api/users/login', form)
            // .then((response) => {
            //     console.log(response, 'response')
            //     // window.location.reload();
            // })
        .then(response =>{ dispatch({ type: LOGIN_SUCCESS, payload: response.data })
        localStorage.setItem('token', response.data.token)
            localStorage.setItem('user_id', response.data.id)
            localStorage.setItem('email', response.data.email)


         history.push('/review')
    })
        .catch(error => {dispatch({ type: LOGIN_FAILURE, payload: error.response })
        alert("Incorrect username or password.")
    })

    };
};
