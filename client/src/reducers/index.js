import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import support from "./support";
import blog from "./blog";

export default combineReducers({
  alert,
  auth,
  support,
  blog
});
