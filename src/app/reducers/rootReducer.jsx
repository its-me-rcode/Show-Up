import { combineReducers } from "redux";
import eventReducer from "../features/event/eventReducer";
import testReducer from "../features/testarea/testReducer";
import { reducer as FormReducer } from "redux-form";

const rootReducer = combineReducers({
  test: testReducer,
  events: eventReducer,
  form: FormReducer,
});

export default rootReducer;
