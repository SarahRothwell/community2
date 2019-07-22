import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import support from "./support";

export default combineReducers({
  alert,
  auth,
  support
});
