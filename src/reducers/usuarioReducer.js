/** @format */

const INITIAL_STATE = {
	usuarios: [],
	cargando: false,
	error: "",
	user: {},
	update_status: false,
};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "USER_ALL":
			return {
				...state,
				usuarios: action.payload,
				cargando: action.cargando,
				error: "",
				update_status: false,
			};
		case "USER_UPDATE":
			return {
				...state,
				update_status: action.payload,
				cargando: action.cargando,
				error: "",
			};
		case "LOGIN":
			return {
				...state,
				user: action.payload,
				cargando: false,
				error: "",
				update_status: false,
			};
		case "LOGOUT":
			return {
				...state,
				user: action.payload,
				cargando: false,
				error: "",
				update_status: false,
			};
		case "LOADING":
			return { ...state, cargando: true, error: "", update_status: false };
		case "ERROR":
			return {
				...state,
				error: action.payload,
				cargando: false,
				update_status: false,
			};
		default:
			return state;
	}
};
