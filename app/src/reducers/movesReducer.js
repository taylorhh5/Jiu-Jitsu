import {
  TAKEDOWN_FETCHING,
  TAKEDOWN_SUCCESS,
  TAKEDOWN_FAILURE,
  GUARD_FETCHING,
  GUARD_SUCCESS,
  GUARD_FAILURE
  // POST_START,
  // POST_SUCCESS,
  // POST_FAILURE,
  // DELETE_SUCCESS,
  // DELETE_START,
  // EDIT_START,
  // EDIT_SUCCESS,
} from "../actions/moveActions.js";

const initialState = {
  
  takedown:[],
  guard:[],
  mount:[],
  back:[],
  sidemount:[],
  loading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TAKEDOWN_FETCHING:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case TAKEDOWN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        takedown: action.payload,
      };

    case TAKEDOWN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case GUARD_FETCHING:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case GUARD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        guard: action.payload,
      };

    case GUARD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    // case POST_START:
    //   return {
    //     ...state,
    //     loading: true,
    //     error: "",
    //   };

    // case POST_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: "",
    //     cases: [...state.cases, action.payload],
    //   };

    // case POST_FAILURE:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload,
    //   };

    // case DELETE_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: "",
    //     cases: action.payload,
    //   };

    // case DELETE_START:
    //   return {
    //     ...state,
    //     loading: true,
    //     error: "",
    //   };
    // case EDIT_START:
    //   return {
    //     ...state,
    //     loading: true,
    //     error: "",
    //   };

    // case EDIT_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: "",
    //     cases: action.payload,
    //   };

    default:
      return state;
  }
};

export default reducer;
