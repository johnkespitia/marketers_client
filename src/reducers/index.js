/** @format */
import { combineReducers } from "redux";
import usuarioReducer from "./usuarioReducer";
import businessReducer from "./businessReducer";
export default combineReducers({
	usuarioReducer,
	businessReducer,
});
