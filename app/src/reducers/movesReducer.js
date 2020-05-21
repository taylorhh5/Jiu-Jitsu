import {
  TAKEDOWN_FETCHING,
  TAKEDOWN_SUCCESS,
  TAKEDOWN_FAILURE,
  GUARD_FETCHING,
  GUARD_SUCCESS,
  GUARD_FAILURE,
  MOUNT_FETCHING,
  MOUNT_SUCCESS,
  MOUNT_FAILURE,
  BACK_FETCHING,
  BACK_SUCCESS,
  BACK_FAILURE,
  SIDEMOUNT_FETCHING,
  SIDEMOUNT_SUCCESS,
  SIDEMOUNT_FAILURE,
  POST_TAKEDOWN_START,
  POST_TAKEDOWN_SUCCESS,
  POST_TAKEDOWN_FAILURE,
  POST_GUARD_START,
  POST_GUARD_SUCCESS,
  POST_GUARD_FAILURE,
  POST_MOUNT_START,
  POST_MOUNT_SUCCESS,
  POST_MOUNT_FAILURE,
  POST_SIDEMOUNT_START,
  POST_SIDEMOUNT_SUCCESS,
  POST_SIDEMOUNT_FAILURE,
  POST_BACK_START,
  POST_BACK_SUCCESS,
  POST_BACK_FAILURE,
  EDIT_TAKEDOWN_START,
  EDIT_TAKEDOWN_SUCCESS,
  EDIT_TAKEDOWN_FAILURE,
  EDIT_BACK_START,
  EDIT_BACK_SUCCESS,
  EDIT_BACK_FAILURE,
  EDIT_GUARD_START,
  EDIT_GUARD_SUCCESS,
  EDIT_GUARD_FAILURE,
  EDIT_MOUNT_START,
  EDIT_MOUNT_SUCCESS,
  EDIT_MOUNT_FAILURE,
  EDIT_SIDEMOUNT_START,
  EDIT_SIDEMOUNT_SUCCESS,
  EDIT_SIDEMOUNT_FAILURE
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

      case MOUNT_FETCHING:
        return {
          ...state,
          loading: true,
          error: "",
        };
      case MOUNT_SUCCESS:
        return {
          ...state,
          loading: false,
          error: "",
          mount: action.payload,
        };
  
      case MOUNT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

        case BACK_FETCHING:
          return {
            ...state,
            loading: true,
            error: "",
          };
        case BACK_SUCCESS:
          return {
            ...state,
            loading: false,
            error: "",
            back: action.payload,
          };
    
        case BACK_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload,
          };

          
        case SIDEMOUNT_FETCHING:
          return {
            ...state,
            loading: true,
            error: "",
          };
        case SIDEMOUNT_SUCCESS:
          return {
            ...state,
            loading: false,
            error: "",
            sidemount: action.payload,
          };
    
        case SIDEMOUNT_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload,
          };

          //POSTS          
          
        case POST_TAKEDOWN_START:
          return {
            ...state,
            loading: true,
            error: "",
          };
        case POST_TAKEDOWN_SUCCESS:
          return {
            ...state,
            loading: false,
            error: "",
            moves:[...state.takedown, action.payload]
          };
    
        case POST_TAKEDOWN_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload,
          };

          case POST_GUARD_START:
          return {
            ...state,
            loading: true,
            error: "",
          };
        case POST_GUARD_SUCCESS:
          return {
            ...state,
            loading: false,
            error: "",
            moves:[...state.guard, action.payload]
          };
    
        case POST_GUARD_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload,
          };

          case POST_MOUNT_START:
            return {
              ...state,
              loading: true,
              error: "",
            };
          case POST_MOUNT_SUCCESS:
            return {
              ...state,
              loading: false,
              error: "",
              moves:[...state.mount, action.payload]
            };
      
          case POST_MOUNT_FAILURE:
            return {
              ...state,
              loading: false,
              error: action.payload,
            };

            case POST_SIDEMOUNT_START:
              return {
                ...state,
                loading: true,
                error: "",
              };
            case POST_SIDEMOUNT_SUCCESS:
              return {
                ...state,
                loading: false,
                error: "",
                moves:[...state.sidemount, action.payload]
              };
        
            case POST_SIDEMOUNT_FAILURE:
              return {
                ...state,
                loading: false,
                error: action.payload,
              };

              case POST_BACK_START:
                return {
                  ...state,
                  loading: true,
                  error: "",
                };
              case POST_BACK_SUCCESS:
                return {
                  ...state,
                  loading: false,
                  error: "",
                  moves:[...state.back, action.payload]
                };
          
              case POST_BACK_FAILURE:
                return {
                  ...state,
                  loading: false,
                  error: action.payload,
                };

                //EDIT
                // case EDIT_TAKEDOWN_START:
                // return {
                //   ...state,
                //   loading: true,
                //   error: "",
                // };
              case EDIT_TAKEDOWN_SUCCESS:
                return {
                  ...state,
                  loading: false,
                  error: "",
                  moves:[...state.takedown, action.payload]
                };
          
              case EDIT_TAKEDOWN_FAILURE:
                return {
                  ...state,
                  loading: false,
                  error: action.payload,
                };

                case EDIT_GUARD_SUCCESS:
                  return {
                    ...state,
                    loading: false,
                    error: "",
                    moves:[...state.guard, action.payload]
                  };
            
                case EDIT_GUARD_FAILURE:
                  return {
                    ...state,
                    loading: false,
                    error: action.payload,
                  };
                  case EDIT_MOUNT_SUCCESS:
                    return {
                      ...state,
                      loading: false,
                      error: "",
                      moves:[...state.mount, action.payload]
                    };
              
                  case EDIT_MOUNT_FAILURE:
                    return {
                      ...state,
                      loading: false,
                      error: action.payload,
                    };
                    case EDIT_SIDEMOUNT_SUCCESS:
                      return {
                        ...state,
                        loading: false,
                        error: "",
                        moves:[...state.sidemount, action.payload]
                      };
                
                    case EDIT_SIDEMOUNT_FAILURE:
                      return {
                        ...state,
                        loading: false,
                        error: action.payload,
                      };
                      case EDIT_BACK_SUCCESS:
                        return {
                          ...state,
                          loading: false,
                          error: "",
                          moves:[...state.back, action.payload]
                        };
                  
                      case EDIT_BACK_FAILURE:
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
