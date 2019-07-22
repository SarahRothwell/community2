import { GET_SUPPORTS, SUPPORTS_ERROR } from "../actions/types";

const initialState = {
  supports: [],
  support: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SUPPORTS:
      return {
        ...state,
        supports: payload,
        loading: false
      };
    case SUPPORTS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    /*case SET_FILTER:
      return {
        ...state,
        supports: payload,
        filter: action.filter,
        loading: false
      } */
    default:
      return state;
  }
}
