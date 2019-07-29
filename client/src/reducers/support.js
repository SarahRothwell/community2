import { GET_SUPPORTS, SUPPORTS_ERROR, SET_FILTER } from "../actions/types";

const initialState = {
  supports: [],
  support: null,
  searchFilter: {},
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
    case SET_FILTER_SUCCESS:
      return {
        ...state,
        searchFilter: [action.location, action.condition],
        loading: false
      };
    default:
      return state;
  }
}
