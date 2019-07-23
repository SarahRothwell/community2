/*NOT USED YET

import axios from "axios";
import { setAlert } from "./alert";
import { GET_POSTS, BLOG_ERROR } from "./types";

//Get all blog posts
export const getBlogPosts = () => async dispatch => {
  try {
    const res = await axios.get("./api/blog");
    console.log(res.data);
    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: BLOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

*/
