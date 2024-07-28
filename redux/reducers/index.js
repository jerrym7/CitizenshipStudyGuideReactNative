import { combineReducers } from "redux";
import languageReducer from "./languageReducer";
import questionReducer from "./questionReducer";

const rootReducer = combineReducers({
  language: languageReducer,
  question: questionReducer,
});

export default rootReducer;
