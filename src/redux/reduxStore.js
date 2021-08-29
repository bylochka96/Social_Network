import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let allReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

let reduxStore = createStore(allReducers);
window.store = reduxStore;
export default reduxStore;