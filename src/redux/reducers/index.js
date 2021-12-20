import { combineReducers } from "redux";

import environment from "./environment";
import doge from "./doge";
import coins from "./coins";

const rootReducer = combineReducers({
  environment,
  doge,
  coins,
});

export default rootReducer;
