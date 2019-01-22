import { combineReducers } from "redux";
import EmailDataReducer from './reducers/emailDataReducer';

export default combineReducers({
   email_data: EmailDataReducer
});