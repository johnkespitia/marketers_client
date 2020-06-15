/** @format */
import axios from "axios";
import { URL_BASE } from "../constants";
export const businessRegister = (payload) => async (dispatch) => {
	dispatch({
		type: "CARGANDO",
	});
	try {
		const respuesta = await axios.post(URL_BASE + "business", payload);
		dispatch({
			type: "BUSINESS_REG",
			payload: respuesta.data,
			cagando: false,
		});
		console.log(respuesta.data);
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error.response.data,
			cagando: false,
		});
	}
};

export const businessGet = (token, id) => async (dispatch) => {
	dispatch({
		type: "CARGANDO",
	});
	try {
		const headers = {
			"Content-Type": "application/json",
			Authorization: "Bearer ".concat(token),
		};
		const respuesta = await axios.get(URL_BASE + "business/" + id, {
			headers: headers,
		});
		dispatch({
			type: "BUSINESS_GET",
			payload: respuesta.data,
			cagando: false,
		});
		console.log(respuesta.data);
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error.response.data,
			cagando: false,
		});
	}
};

export const logoutBusinessRequest = () => async (dispatch) => {
	dispatch({
		type: "LOGOUT_BUSINESS",
		payload: {},
		cagando: false,
	});
};
