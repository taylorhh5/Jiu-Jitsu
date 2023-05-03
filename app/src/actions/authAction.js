import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/Firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";

export const REGISTER_START = "REGISTER_START"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAILURE = "REGISTER_FAILURE"

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const register = (form, history) => {
    return dispatch => {
        console.log('called register')
        dispatch({ type: REGISTER_START });

        createUserWithEmailAndPassword(auth, form.email, form.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                dispatch({ type: REGISTER_SUCCESS, payload: user });
                localStorage.setItem('token', user.accessToken
                );
                localStorage.setItem('user_id', user.uid);
                localStorage.setItem('email', user.email);
                history.push('/review')
            })
            .catch((error) => {
                dispatch({ type: REGISTER_FAILURE, payload: error });
                alert(error.message)
            });
    };
};


export const login = (form, history) => {
    return dispatch => {
        dispatch({ type: LOGIN_START });

        signInWithEmailAndPassword(auth, form.email, form.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user, 'USER DETAILS')
                console.log(user.idToken, user.accessToken, 'USER token')

                dispatch({ type: LOGIN_SUCCESS, payload: user });
                // Save the user's token, ID, and email to local storage
                localStorage.setItem('token', user.accessToken
                );
                localStorage.setItem('user_id', user.uid);
                localStorage.setItem('email', user.email);
                history.push('/review')
            })
            .catch((error) => {
                dispatch({ type: LOGIN_FAILURE, payload: error });
                console.log(error.message, 'err here')
                alert(error.message)

            });
    };
};



//old backend
// export const register = (form, history) => {
//     return dispatch => {
//         dispatch({ type: REGISTER_START });

//         // axiosWithAuth()
//         axios
//             .post('https://jiujitsux.herokuapp.com/api/users/register', form)
//             // .then((response) => {
//             //     console.log(response, 'POST takedown')
//             //     // window.location.reload();
//             // })
//             .then(response =>{ dispatch({ type: REGISTER_SUCCESS, payload: response.data })
//             dispatch(login(form, history))

//     })

//         .catch(error => {dispatch({ type: REGISTER_FAILURE, payload: error.response })
//         alert("Please try registering with a different username and password.")

//     })

//     };
// };




//old backend
// export const login = (form, history) => {
//     return dispatch => {
//         dispatch({ type: LOGIN_START });

//         axios

//             .post('https://jiujitsux.herokuapp.com/api/users/login', form)
//             // .then((response) => {
//             //     console.log(response, 'response')
//             //     // window.location.reload();
//             // })
//         .then(response =>{ dispatch({ type: LOGIN_SUCCESS, payload: response.data })
//         localStorage.setItem('token', response.data.token)
//             localStorage.setItem('user_id', response.data.id)
//             localStorage.setItem('email', response.data.email)


//          history.push('/review')
//     })
//         .catch(error => {dispatch({ type: LOGIN_FAILURE, payload: error.response })
//         alert("Incorrect username or password.")
//     })

//     };
// };
///
