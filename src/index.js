/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./router/App";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

const initialState = {
	user: {},
	playing: {},
	mylist: [{ greeting: "hola", complement: "mundo" }],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
