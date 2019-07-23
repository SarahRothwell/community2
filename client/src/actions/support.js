import axios from "axios";
import { setAlert } from "./alert";
import { GET_SUPPORTS, SUPPORTS_ERROR, SET_FILTER } from "./types";

//Get all Supports
export const getSupports = () => async dispatch => {
  try {
    const res = await axios.get("./api/support");
    dispatch({
      type: GET_SUPPORTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SUPPORTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Set search filter
export const search = filterValue => {
  try {
    return {
      type: SET_FILTER,
      filterValue
    };
  } catch (err) {
    return {
      type: SUPPORTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    };
  }
};
