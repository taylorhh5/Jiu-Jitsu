import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
       

  } from "../actions/authAction.js";
  
  const initialState = {
    
    user:[],
    loading: false,
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_START:
        return {
          ...state,
          loading: true,
          error: "",
        };
      case REGISTER_SUCCESS:
        return {
          ...state,
          loading: false,
          error: "",
          user: action.payload,
        };
  
      case REGISTER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        case LOGIN_START:
        return {
          ...state,
          loading: true,
          error: "",
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          error: "",
          user: action.payload,
        };
  
      case LOGIN_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
       
  
      default:
        return state;
    }
  };
  
  export default reducer;
  