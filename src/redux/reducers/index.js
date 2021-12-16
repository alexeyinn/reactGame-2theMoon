import { combineReducers } from "redux";

import environment from "./environment";
import doge from "./doge";

const rootReducer = combineReducers({
  environment,
  doge,
});

export default rootReducer;
