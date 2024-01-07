import { combineReducers } from "redux";
import bnbReducer from "./bnbReducer";

const rootReducer = combineReducers({
  bnbs: bnbReducer,
});

export default rootReducer;
