import { combineReducers } from "redux";
import eventReducer from "../features/event/eventReducer";
import testReducer from "../features/testarea/testReducer";
import { reducer as FormReducer } from "redux-form";
import modalsReducer from '../features/modals/modalReducer';
import authReducer from "../features/auth/authReducer";

const rootReducer = combineReducers({
  test: testReducer,
  events: eventReducer,
  form: FormReducer,
  modals: modalsReducer,
  auth: authReducer
}); 

export default rootReducer;

