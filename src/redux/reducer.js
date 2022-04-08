import * as types from "./actionType";

//defining initial state of application
const initialState = {
  users: [],
  Requirement: {},
  loading: false,
};

const requirementReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
    case types.FILTER_USER:
    case types.SORT_USER:
     
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    // case types.DELETE_USER:
    case types.ADD_USER:
    case types.UPDATE_USER:
      return {
        ...state,
        loading: false,
      };
    case types.GET_SINGLE_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default requirementReducers;
