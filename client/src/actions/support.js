import axios from "axios";
import { setAlert } from "./alert";
import { GET_SUPPORTS, SUPPORTS_ERROR, SET_FILTER } from "./types";
import { STATES } from "mongoose";

//Get all Supports when component is loaded
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

//Set search filter for Supports  
export const search = () => {
  try {
    return {
      ...state,
      type: SET_FILTER,
      searchFilter: action.payload
      
      }
      
    }
  } catch (err) {
    return {
      type: SUPPORTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    };
  };
