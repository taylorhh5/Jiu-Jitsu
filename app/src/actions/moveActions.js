import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth.js'
//firebase
import { collection, addDoc, doc, query, where, onSnapshot, deleteDoc, updateDoc } from 'firebase/firestore'

import { db } from '../utils/Firebase.js'

// //collection ref
const colRef = collection(db, 'moves')



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


export const EDIT_TAKEDOWN_START = "EDIT_TAKEDOWN_START"
export const EDIT_TAKEDOWN_SUCCESS = "EDIT_TAKEDOWN_SUCCESS"
export const EDIT_TAKEDOWN_FAILURE = "EDIT_TAKEDOWN_FAILURE"

export const EDIT_GUARD_START = "EDIT_GUARD_START"
export const EDIT_GUARD_SUCCESS = "EDIT_GUARD_SUCCESS"
export const EDIT_GUARD_FAILURE = "EDIT_GUARD_FAILURE"

export const EDIT_MOUNT_START = "EDIT_MOUNT_START"
export const EDIT_MOUNT_SUCCESS = "EDIT_MOUNT_SUCCESS"
export const EDIT_MOUNT_FAILURE = "EDIT_MOUNT_FAILURE"

export const EDIT_SIDEMOUNT_START = "EDIT_SIDEMOUNT_START"
export const EDIT_SIDEMOUNT_SUCCESS = "EDIT_SIDEMOUNT_SUCCESS"
export const EDIT_SIDEMOUNT_FAILURE = "EDIT_SIDEMOUNT_FAILURE"

export const EDIT_BACK_START = "EDIT_BACK_START"
export const EDIT_BACK_SUCCESS = "EDIT_BACK_SUCCESS"
export const EDIT_BACK_FAILURE = "EDIT_BACK_FAILURE"


export const fetchTakedown = () => {
    return dispatch => {
        dispatch({ type: TAKEDOWN_FETCHING });

        const takedownRef = query(collection(db, 'moves'), where('category', '==', 'takedown'));

        onSnapshot(takedownRef, snapshot => {
            const takedowns = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            dispatch({ type: TAKEDOWN_SUCCESS, payload: takedowns });
        }, error => {
            dispatch({ type: TAKEDOWN_FAILURE, payload: error });
        });
    };
};



export const fetchGuard = () => {
    return dispatch => {
        dispatch({ type: GUARD_FETCHING });

        const guardRef = query(collection(db, 'moves'), where('category', '==', 'guard'));

        onSnapshot(guardRef, snapshot => {
            const guards = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            dispatch({ type: GUARD_SUCCESS, payload: guards });
        }, error => {
            dispatch({ type: GUARD_FAILURE, payload: error });
        });
    };
};

export const fetchMount = () => {
    return dispatch => {
        dispatch({ type: MOUNT_FETCHING });

        const mountRef = query(collection(db, 'moves'), where('category', '==', 'mount'));

        onSnapshot(mountRef, snapshot => {
            const mounts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            dispatch({ type: MOUNT_SUCCESS, payload: mounts });
        }, error => {
            dispatch({ type: MOUNT_FAILURE, payload: error });
        });
    };
};

export const fetchBack = () => {
    return dispatch => {
        dispatch({ type: BACK_FETCHING });

        const backRef = query(collection(db, 'moves'), where('category', '==', 'back'));

        onSnapshot(backRef, snapshot => {
            const backs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            dispatch({ type: BACK_SUCCESS, payload: backs });
        }, error => {
            dispatch({ type: BACK_FAILURE, payload: error });
        });
    };
};

export const fetchSidemount = () => {
    return dispatch => {
        dispatch({ type: SIDEMOUNT_FETCHING });

        const sidemountRef = query(collection(db, 'moves'), where('category', '==', 'sidemount'));

        onSnapshot(sidemountRef, snapshot => {
            const sidemounts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            dispatch({ type: SIDEMOUNT_SUCCESS, payload: sidemounts });
        }, error => {
            dispatch({ type: SIDEMOUNT_FAILURE, payload: error });
        });
    };
};

export const addTakedown = (form, move, history) => {
    return dispatch => {
        dispatch({ type: POST_TAKEDOWN_START });

        const mapper = {
            Takedown: "takedown",
            Guard: "guard",
            Mount: "mount",
            Sidemount: "sidemount",
            Back: "back",
        };

        const category = mapper[move];

        const newTakedown = {
            category: category,
            name: form.name,
            description: form.description,
            image_url: form.image_url,
            user_id: form.user_id

        };

        addDoc(colRef, newTakedown)
            .then(() => {
                dispatch({ type: POST_TAKEDOWN_SUCCESS });
                history.push("/profile");
            })
            .catch(error => {
                dispatch({ type: POST_TAKEDOWN_FAILURE, payload: error });
            });
    };
};

export const editTakedown = (form, history) => {
    return dispatch => {
        const movesRef = doc(db, "moves", form.id);

        updateDoc(movesRef, form)
            .then(() => {
                history.push("/profile");
            })
            .catch(error => {
                dispatch({ type: EDIT_TAKEDOWN_FAILURE, payload: error });
            });
    };
};






//EVERYTHING BELOW HERE FOR OLD BACKEND WITHOUT FIREBASE

// export const fetchTakedown = () => {
//     return dispatch => {
//         dispatch({ type: TAKEDOWN_FETCHING });
//         console.log('ran takedown')

//         // axios
//         //     .get('https://jiujitsux.herokuapp.com/api/moves/takedown')
//             // .then(response => console.log (response.data, "From API"))
//             getDocs(colRef)
//                         .then(snapshot => console.log (snapshot.docs, "From API"))

//             // .then(response => dispatch({ type: TAKEDOWN_SUCCESS, payload: response.data })
//             // )

//         .catch(error => dispatch({ type: TAKEDOWN_FAILURE, payload: error }))

//     };
// };


// export const fetchGuard = () => {
//     return dispatch => {
//         dispatch({ type: GUARD_FETCHING });

//         axios
//             .get('https://jiujitsux.herokuapp.com/api/moves/guard')
//             // .then(response => console.log (response.data, "From GUARD API"))
//             .then(response => dispatch({ type: GUARD_SUCCESS, payload: response.data })
//             )

//         .catch(error => dispatch({ type: GUARD_FAILURE, payload: error.response }))

//     };
// };


// export const fetchMount = () => {
//     return dispatch => {
//         dispatch({ type: MOUNT_FETCHING });

//         axios
//             .get('https://jiujitsux.herokuapp.com/api/moves/mount')
//             // .then(response => console.log (response.data, "From GUARD API"))
//             .then(response => dispatch({ type: MOUNT_SUCCESS, payload: response.data })
//             )

//         .catch(error => dispatch({ type: MOUNT_FAILURE, payload: error.response }))

//     };
// };


// export const fetchBack = () => {
//     return dispatch => {
//         dispatch({ type: BACK_FETCHING });

//         axios
//             .get('https://jiujitsux.herokuapp.com/api/moves/back')
//             // .then(response => console.log (response.data, "From GUARD API"))
//             .then(response => dispatch({ type: BACK_SUCCESS, payload: response.data })
//             )

//         .catch(error => dispatch({ type: BACK_FAILURE, payload: error.response }))

//     };
// };


// export const fetchSidemount = () => {
//     return dispatch => {
//         dispatch({ type: SIDEMOUNT_FETCHING });

//         axios
//             .get('https://jiujitsux.herokuapp.com/api/moves/sidemount')
//             // .then(response => console.log (response.data, "From GUARD API"))
//             .then(response => dispatch({ type: SIDEMOUNT_SUCCESS, payload: response.data })
//             )

//         .catch(error => dispatch({ type: SIDEMOUNT_FAILURE, payload: error.response }))

//     };
// };

//POSTS
// export const addTakedown = (form, history) => {
//   return dispatch => {
//     dispatch({ type: POST_TAKEDOWN_START });

//     const db = getFirestore();
//     const colRef = db.collection('moves');

//     // Add the new takedown move to Firestore
//     colRef.add({
//       category: form.category,
//       name: form.name,
//       description: form.description,
//       image_url: form.image_url
//     }).then(docRef => {
//       // Takedown move added successfully
//       dispatch({ type: POST_TAKEDOWN_SUCCESS });
//       history.push("/profile");
//     }).catch(error => {
//       // Error adding takedown move
//       dispatch({ type: POST_TAKEDOWN_FAILURE, payload: error });
//     });
//   };
// };
// import { getFirestore, collection, addDoc } from 'firebase/firestore';

// export const addTakedown = (form, history) => {
//   return async (dispatch) => {
//     dispatch({ type: POST_TAKEDOWN_START });

//     try {
//       const db = getFirestore();
//       const takedownColRef = collection(db, 'moves');

//       // Add the new takedown document to the "moves" collection
//       const newTakedownRef = await addDoc(takedownColRef, {
//         category: 'takedown',
//         name: form.name,
//         description: form.description,
//         image_url: form.image_url,
//       });

//       dispatch({ type: POST_TAKEDOWN_SUCCESS, payload: newTakedownRef.id });
//       history.push('/profile');
//     } catch (error) {
//       dispatch({ type: POST_TAKEDOWN_FAILURE, payload: error });
//     }
//   };
// };





// export const addTakedown = (form, history) => {
//     return dispatch => {
//         dispatch({ type: POST_TAKEDOWN_START });

//         axiosWithAuth()

//             .post('https://jiujitsux.herokuapp.com/api/moves/takedown', form)
//             // .then((response) => {
//             //     console.log(response, 'POST takedown')
//             //     // window.location.reload();
//             // })
//             .then(response => {
//                 dispatch({ type: POST_TAKEDOWN_SUCCESS, payload: response.data })
//                 history.push("/profile");

//             })
//             .catch(error => dispatch({ type: POST_TAKEDOWN_FAILURE, payload: error.response }))

//     };
// };

export const addGuard = (form, history) => {
    return dispatch => {
        dispatch({ type: POST_GUARD_START });

 
        const newGuard = {
            category: 'guard',
            name: form.name,
            description: form.description,
            image_url: form.image_url,
            user_id: form.user_id

        };

        addDoc(colRef, newGuard)
            .then(response => {
                dispatch({ type: POST_GUARD_SUCCESS, payload: response.data })
                history.push("/profile");

            })
            .catch(error => dispatch({ type: POST_GUARD_FAILURE, payload: error.response }))

    };
};

export const addMount = (form, history) => {
    return dispatch => {
        dispatch({ type: POST_MOUNT_START });

    
        const newMount = {
            category: 'mount',
            name: form.name,
            description: form.description,
            image_url: form.image_url,
            user_id: form.user_id

        };

        addDoc(colRef, newMount)
            .then(response => {
                dispatch({ type: POST_MOUNT_SUCCESS, payload: response.data })
                history.push("/profile");

            })
            .catch(error => dispatch({ type: POST_MOUNT_FAILURE, payload: error.response }))

    };
};

export const addSidemount = (form, history) => {
    return dispatch => {
        dispatch({ type: POST_SIDEMOUNT_START });

  
        const newSidemount = {
            category: 'sidemount',
            name: form.name,
            description: form.description,
            image_url: form.image_url,
            user_id: form.user_id

        };

        addDoc(colRef, newSidemount)
            .then(response => {
                dispatch({ type: POST_SIDEMOUNT_SUCCESS, payload: response.data })
                history.push("/profile");

            })
            .catch(error => dispatch({ type: POST_SIDEMOUNT_FAILURE, payload: error.response }))

    };
};

export const addBack = (form, history) => {
    return dispatch => {
        dispatch({ type: POST_BACK_START });

      
        const newBack = {
            category: 'back',
            name: form.name,
            description: form.description,
            image_url: form.image_url,
            user_id: form.user_id

        };

        addDoc(colRef, newBack)
            .then(response => {
                dispatch({ type: POST_BACK_SUCCESS, payload: response.data })
                history.push("/profile");

            })
            .catch(error => dispatch({ type: POST_BACK_FAILURE, payload: error.response }))

    };
};



// export const editTakedown = (form, history) => {
//     // console.log(editTakedown,"edit in action")
//     return dispatch => {



//         axiosWithAuth()
//             .put(`https://jiujitsux.herokuapp.com/api/moves/takedown/${form.id}`, form)
//             // .then(response => console.log (form, "edit"))
//             .then(response => {
//                 dispatch({ type: EDIT_TAKEDOWN_SUCCESS, payload: response.data })
//                 history.push("/profile");

//             })
//         // .catch(error => dispatch({ type: EDIT_TAKEDOWN_FAILURE, payload: error.response }))

//     };
// };


export const editGuard = (form, history) => {
    // console.log(editTakedown,"edit in action")
    return dispatch => {



        axiosWithAuth()
            .put(`https://jiujitsux.herokuapp.com/api/moves/guard/${form.id}`, form)
            // .then(response => console.log (form, "edit"))
            .then(response => {
                dispatch({ type: EDIT_GUARD_SUCCESS, payload: response.data })
                history.push("/profile");

            })
        // .catch(error => dispatch({ type: EDIT_TAKEDOWN_FAILURE, payload: error.response }))

    };
};

export const editMount = (form, history) => {
    // console.log(editTakedown,"edit in action")
    return dispatch => {



        axiosWithAuth()
            .put(`https://jiujitsux.herokuapp.com/api/moves/mount/${form.id}`, form)
            // .then(response => console.log (form, "edit"))
            .then(response => {
                dispatch({ type: EDIT_MOUNT_SUCCESS, payload: response.data })
                history.push("/profile");

            })
        // .catch(error => dispatch({ type: EDIT_TAKEDOWN_FAILURE, payload: error.response }))

    };
};

export const editSidemount = (form, history) => {
    // console.log(editTakedown,"edit in action")
    return dispatch => {



        axiosWithAuth()
            .put(`https://jiujitsux.herokuapp.com/api/moves/sidemount/${form.id}`, form)
            // .then(response => console.log (form, "edit"))
            .then(response => {
                dispatch({ type: EDIT_SIDEMOUNT_SUCCESS, payload: response.data })
                history.push("/profile");

            })
        // .catch(error => dispatch({ type: EDIT_TAKEDOWN_FAILURE, payload: error.response }))

    };
};
export const editBack = (form, history) => {
    // console.log(editTakedown,"edit in action")
    return dispatch => {



        axiosWithAuth()
            .put(`https://jiujitsux.herokuapp.com/api/moves/back/${form.id}`, form)
            // .then(response => console.log (form, "edit"))
            .then(response => {
                dispatch({ type: EDIT_BACK_SUCCESS, payload: response.data })
                history.push("/profile");

            })
        // .catch(error => dispatch({ type: EDIT_TAKEDOWN_FAILURE, payload: error.response }))

    };
};

export const deleteTakedown = (id, history) => {
    return dispatch => {
        const movesRef = doc(db, "moves", id);

        deleteDoc(movesRef, id)

            .then(() => {
                // console.log(response, 'd r')
                history.push("/profile");


                // .then(response => dispatch({ type: DELETE_SUCCESS, payload: response.data }))
                // .catch(error => dispatch({ type: DELETE_FAILURE, payload: error.response }))
            })
    };
};

export const deleteGuard = (id, history) => {
    return dispatch => {
        // dispatch({ type: DELETE_TAKEDOWN_START });

        axiosWithAuth()
            .delete(`https://jiujitsux.herokuapp.com/api/moves/guard/${id}`)
            .then((response) => {
                // console.log(response, 'd r')
                history.push("/profile");

            //     .then(response =>{ dispatch({ type: DELETE_SUCCESS, payload: response.data })
            //     props.history.push("/profile");
            // })
            //     .catch(error => dispatch({ type: DELETE_FAILURE, payload: error.response }))
            })
    };
};
export const deleteMount = (id, history) => {
    return dispatch => {
        // dispatch({ type: DELETE_TAKEDOWN_START });

        axiosWithAuth()
            .delete(`https://jiujitsux.herokuapp.com/api/moves/mount/${id}`)
            .then((response) => {
                // console.log(response, 'd r')
                history.push("/profile");


                // .then(response => dispatch({ type: DELETE_SUCCESS, payload: response.data }))
                // .catch(error => dispatch({ type: DELETE_FAILURE, payload: error.response }))
            })
    };
};
export const deleteSidemount = (id, history) => {
    return dispatch => {
        // dispatch({ type: DELETE_TAKEDOWN_START });

        axiosWithAuth()
            .delete(`https://jiujitsux.herokuapp.com/api/moves/sidemount/${id}`)
            .then((response) => {
                // console.log(response, 'd r')
                history.push("/profile");


                // .then(response => dispatch({ type: DELETE_SUCCESS, payload: response.data }))
                // .catch(error => dispatch({ type: DELETE_FAILURE, payload: error.response }))
            })
    };
};
export const deleteBack = (id, history) => {
    return dispatch => {
        // dispatch({ type: DELETE_TAKEDOWN_START });

        axiosWithAuth()
            .delete(`https://jiujitsux.herokuapp.com/api/moves/back/${id}`)
            .then((response) => {
                // console.log(response, 'd r')
                history.push("/profile");


                // .then(response => dispatch({ type: DELETE_SUCCESS, payload: response.data }))
                // .catch(error => dispatch({ type: DELETE_FAILURE, payload: error.response }))
            })
    };
};

