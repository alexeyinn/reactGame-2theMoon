import { combineReducers } from "redux";

import environment from "./environment";
import doge from "./doge";
import coins from "./coins";
import user from "./user";

const rootReducer = combineReducers({
  environment,
  doge,
  coins,
  user,
});

export default rootReducer;
