/** @format */

const INITIAL_STATE = {
	mybusiness: {},
	cargando: false,
	error: "",
	update_status: false,
};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "BUSINESS_REG":
			return {
				...state,
				mybusiness: action.payload,
				cargando: action.cargando,
				error: "",
				update_status: false,
			};
		case "BUSINESS_GET":
			return {
				...state,
				mybusiness: action.payload,
				cargando: action.cargando,
				error: "",
				update_status: false,
			};
		case "LOGOUT_BUSINESS":
			return {
				...state,
				mybusiness: action.payload,
				cargando: action.cargando,
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
