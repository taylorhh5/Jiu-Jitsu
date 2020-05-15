import axios from 'axios'
// import { axiosWithAuth } from '../utils/axiosWithAuth.js'

export const TAKEDOWN_FETCHING = "TAKEDOWN_FETCHING"
export const TAKEDOWN_SUCCESS = "TAKEDOWN_SUCCESS"
export const TAKEDOWN_FAILURE = "TAKEDOWN_FAILURE"

export const GUARD_FETCHING = "GUARD_FETCHING"
export const GUARD_SUCCESS = "GUARD_SUCCESS"
export const GUARD_FAILURE = "GUARD_FAILURE"

export const MOUNT_FETCHING = "MOUNT_FETCHING"
export const MOUNT_SUCCESS = "MOUNT_SUCCESS"
export const MOUNT_FAILURE = "MOUNT_FAILURE"

export const BACK_FETCHING = "BACK_FETCHING"
export const BACK_SUCCESS = "BACK_SUCCESS"
export const BACK_FAILURE = "BACK_FAILURE"

export const SIDEMOUNT_FETCHING = "SIDEMOUNT_FETCHING"
export const SIDEMOUNT_SUCCESS = "SIDEMOUNT_SUCCESS"
export const SIDEMOUNT_FAILURE = "SIDEMOUNT_FAILURE"

// export const POST_START = "FETCH_START"
// export const POST_SUCCESS = "TAKEDOWN_SUCCESS"
// export const POST_FAILURE = "TAKEDOWN_FAILURE"
// export const DELETE_SUCCESS = "DELETE_SUCCESS"
// export const DELETE_START = "DELETE_START"
// export const EDIT_SUCCESS = "EDIT_SUCCESS"
// export const EDIT_START = "EDIT_START"

export const fetchTakedown = () => {
    return dispatch => {
        dispatch({ type: TAKEDOWN_FETCHING });

        axios
            .get('http://localhost:5000/api/moves/takedown')
            // .then(response => console.log (response.data, "From API"))
            .then(response => dispatch({ type: TAKEDOWN_SUCCESS, payload: response.data })
            )
            
        .catch(error => dispatch({ type: TAKEDOWN_FAILURE, payload: error.response }))

    };
};

export const fetchGuard = () => {
    return dispatch => {
        dispatch({ type: GUARD_FETCHING });

        axios
            .get('http://localhost:5000/api/moves/guard')
            // .then(response => console.log (response.data, "From GUARD API"))
            .then(response => dispatch({ type: GUARD_SUCCESS, payload: response.data })
            )
            
        .catch(error => dispatch({ type: GUARD_FAILURE, payload: error.response }))

    };
};

export const fetchMount = () => {
    return dispatch => {
        dispatch({ type: MOUNT_FETCHING });

        axios
            .get('http://localhost:5000/api/moves/mount')
            // .then(response => console.log (response.data, "From GUARD API"))
            .then(response => dispatch({ type: MOUNT_SUCCESS, payload: response.data })
            )
            
        .catch(error => dispatch({ type: MOUNT_FAILURE, payload: error.response }))

    };
};


export const fetchBack = () => {
    return dispatch => {
        dispatch({ type: BACK_FETCHING });

        axios
            .get('http://localhost:5000/api/moves/back')
            // .then(response => console.log (response.data, "From GUARD API"))
            .then(response => dispatch({ type: BACK_SUCCESS, payload: response.data })
            )
            
        .catch(error => dispatch({ type: BACK_FAILURE, payload: error.response }))

    };
};


export const fetchSidemount = () => {
    return dispatch => {
        dispatch({ type: SIDEMOUNT_FETCHING });

        axios
            .get('http://localhost:5000/api/moves/sidemount')
            // .then(response => console.log (response.data, "From GUARD API"))
            .then(response => dispatch({ type: SIDEMOUNT_SUCCESS, payload: response.data })
            )
            
        .catch(error => dispatch({ type: SIDEMOUNT_FAILURE, payload: error.response }))

    };
};

// export const addTakedown = (inputs) => {
//     return dispatch => {
//         dispatch({ type: POST_START });

//         // axiosWithAuth()
//         axios
//             .post('http://localhost:5000/api/moves/takedown/add', inputs)
//             .then((response) => {
//                 // console.log(response, 'd r')
//                 window.location.reload();
//             })
//         // .then(response => dispatch({ type: POST_SUCCESS, payload: response.data }))
//         // .catch(error => dispatch({ type: POST_FAILURE, payload: error.response }))

//     };
// };


// export const deleteCase = (id) => {
//     return dispatch => {
//         dispatch({ type: DELETE_START });

//         axiosWithAuth()
//             .delete(`https://lindseyacason-miraclemessages.herokuapp.com/socialCases/socialCases/${id}`)
//             .then((response) => {
//                 // console.log(response, 'd r')
//                 window.location.reload();

//                 // .then(response => dispatch({ type: DELETE_SUCCESS, payload: response.data }))
//                 // .catch(error => dispatch({ type: DELETE_FAILURE, payload: error.response }))
//             })
//     };
// };


// export const editCase = (info) => {
//     return dispatch => {
//         dispatch({ type: EDIT_START });

//         axiosWithAuth()
//             .put(`https://lindseyacason-miraclemessages.herokuapp.com/socialCases/socialCase/${info.socialCaseId}, info`)
//             // .then(response => console.log (response, "edit"))
//             .then(response => dispatch({ type: EDIT_SUCCESS, payload: info }))
//         // .catch(error => dispatch({ type: DELETE_FAILURE, payload: error.response }))

//     };
// };