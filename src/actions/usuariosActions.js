/** @format */
import axios from "axios";
let url = "http://localhost/marketers/public/api/login";
export const loginRequest = (payload) => async (dispatch) => {
	dispatch({
		type: "CARGANDO",
	});
	try {
		const respuesta = await axios.post(url, payload);
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

export const logoutRequest = () => async (dispatch) => {
	dispatch({
		type: "LOGOUT",
		payload: {},
		cagando: false,
	});
};
