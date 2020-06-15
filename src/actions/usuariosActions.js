/** @format */
import axios from "axios";
import { URL_BASE } from "../constants";
export const loginRequest = (payload) => async (dispatch) => {
	dispatch({
		type: "CARGANDO",
	});
	try {
		const respuesta = await axios.post(URL_BASE + "login", payload);
		dispatch({
			type: "LOGIN",
			payload: respuesta.data.data,
			cagando: false,
		});
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error.response.data,
			cagando: false,
		});
	}
};

export const logoutRequest = (token) => async (dispatch) => {
	dispatch({
		type: "CARGANDO",
	});
	try {
		const headers = {
			"Content-Type": "application/json",
			Authorization: "Bearer ".concat(token),
		};
		await axios.post(URL_BASE + "logout", null, {
			headers: headers,
		});
		dispatch({
			type: "LOGOUT",
			payload: {},
			cagando: false,
		});
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error.response.data,
			cagando: false,
		});
	}
};

export const registerRequest = (payload) => async (dispatch) => {
	dispatch({
		type: "CARGANDO",
	});
	try {
		const respuesta = await axios.post(URL_BASE + "register", payload);
		dispatch({
			type: "USER_REGISTER",
			payload: respuesta.data.data,
			cagando: false,
		});
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error.response.data,
			cagando: false,
		});
	}
};
