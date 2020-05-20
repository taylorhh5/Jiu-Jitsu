import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth.js'


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

export const POST_TAKEDOWN_START = "POST_TAKEDOWN_START"
export const POST_TAKEDOWN_SUCCESS = "POST_TAKEDOWN_SUCCESS"
export const POST_TAKEDOWN_FAILURE = "POST_TAKEDOWN_FAILURE"

export const POST_GUARD_START = "POST_GUARD_START"
export const POST_GUARD_SUCCESS = "POST_GUARD_SUCCESS"
export const POST_GUARD_FAILURE = "POST_GUARD_FAILURE"

export const POST_MOUNT_START = "POST_MOUNT_START"
export const POST_MOUNT_SUCCESS = "POST_MOUNT_SUCCESS"
export const POST_MOUNT_FAILURE = "POST_MOUNT_FAILURE"

export const POST_SIDEMOUNT_START = "POST_SIDEMOUNT_START"
export const POST_SIDEMOUNT_SUCCESS = "POST_SIDEMOUNT_SUCCESS"
export const POST_SIDEMOUNT_FAILURE = "POST_SIDEMOUNT_FAILURE"

export const POST_BACK_START = "POST_BACK_START"
export const POST_BACK_SUCCESS = "POST_BACK_SUCCESS"
export const POST_BACK_FAILURE = "POST_BACK_FAILURE"

// export const POST_START = "FETCH_START"
// export const POST_SUCCESS = "TAKEDOWN_SUCCESS"
// export const POST_FAILURE = "TAKEDOWN_FAILURE"
// export const DELETE_SUCCESS = "DELETE_SUCCESS"
// export const DELETE_START = "DELETE_START"
export const EDIT_TAKEDOWN_START = "EDIT_TAKEDOWN_START"
export const EDIT_TAKEDOWN_SUCCESS = "EDIT_TAKEDOWN_SUCCESS"
export const EDIT_TAKEDOWN_FAILURE = "EDIT_TAKEDOWN_FAILURE"


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

//POSTS

export const addTakedown = (form) => {
    return dispatch => {
        dispatch({ type: POST_TAKEDOWN_START });

        axiosWithAuth()
        
            .post('http://localhost:5000/api/moves/takedown', form)
            // .then((response) => {
            //     console.log(response, 'POST takedown')
            //     // window.location.reload();
            // })
        .then(response => dispatch({ type: POST_TAKEDOWN_SUCCESS, payload: response.data }))
        .catch(error => dispatch({ type: POST_TAKEDOWN_FAILURE, payload: error.response }))

    };
};

export const addGuard = (form) => {
    return dispatch => {
        dispatch({ type: POST_GUARD_START });

        axiosWithAuth()
        
            .post('http://localhost:5000/api/moves/guard', form)
            // .then((response) => {
            //     console.log(response, 'POST takedown')
            //     // window.location.reload();
            // })
        .then(response => dispatch({ type: POST_GUARD_SUCCESS, payload: response.data }))
        .catch(error => dispatch({ type: POST_GUARD_FAILURE, payload: error.response }))

    };
};

export const addMount = (form) => {
    return dispatch => {
        dispatch({ type: POST_MOUNT_START });

        axiosWithAuth()
        
            .post('http://localhost:5000/api/moves/mount', form)
            // .then((response) => {
            //     console.log(response, 'POST takedown')
            //     // window.location.reload();
            // })
        .then(response => dispatch({ type: POST_MOUNT_SUCCESS, payload: response.data }))
        .catch(error => dispatch({ type: POST_MOUNT_FAILURE, payload: error.response }))

    };
};

export const addSidemount = (form) => {
    return dispatch => {
        dispatch({ type: POST_SIDEMOUNT_START });

        axiosWithAuth()
        
            .post('http://localhost:5000/api/moves/sidemount', form)
            // .then((response) => {
            //     console.log(response, 'POST takedown')
            //     // window.location.reload();
            // })
        .then(response => dispatch({ type: POST_SIDEMOUNT_SUCCESS, payload: response.data }))
        .catch(error => dispatch({ type: POST_SIDEMOUNT_FAILURE, payload: error.response }))

    };
};

export const addBack = (form) => {
    return dispatch => {
        dispatch({ type: POST_BACK_START });

        axiosWithAuth()
        
            .post('http://localhost:5000/api/moves/back', form)
            // .then((response) => {
            //     console.log(response, 'POST takedown')
            //     // window.location.reload();
            // })
        .then(response => dispatch({ type: POST_BACK_SUCCESS, payload: response.data }))
        .catch(error => dispatch({ type: POST_BACK_FAILURE, payload: error.response }))

    };
};

export const editTakedown = (form) => {
    // console.log(editTakedown,"edit in action")
    return dispatch => {

    

        axiosWithAuth()
            .put(`http://localhost:5000/api/moves/takedown/${form.id}`, form)
            // .then(response => console.log (form, "edit"))
            .then(response => dispatch({ type: EDIT_TAKEDOWN_SUCCESS, payload:response.data }))
        // .catch(error => dispatch({ type: EDIT_TAKEDOWN_FAILURE, payload: error.response }))

    };
};
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


