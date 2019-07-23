import { GET_SUPPORTS, SUPPORTS_ERROR, SET_FILTER } from "../actions/types";

const initialState = {
  supports: [],
  support: null,
  filterValue: "",
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
    case SET_FILTER:
      const { filterValue } = action;
      // const filteredSupports = state.supports.filter((filterValue)=>) //STILL NEED TO FINISH

      return {
        ...state,
        // supports: filteredSupports,
        filterValue: action,
        loading: false
      };
    default:
      return state;
  }
}
