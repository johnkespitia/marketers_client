/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./router/App";
import { createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import autoMergeLevel1 from "redux-persist/lib/stateReconciler/autoMergeLevel1";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { Provider } from "react-redux";
import reducer from "./reducers";
import * as serviceWorker from "./serviceWorker";
import reduxThunk from "redux-thunk";
import "bootstrap/dist/css/bootstrap.min.css";

const persistConfig = {
	key: "root",
	storage,
	stateReconciler: autoMergeLevel1,
};

const persistedReducer = persistReducer(persistConfig, reducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	persistedReducer,
	{},
	composeEnhancers(applyMiddleware(reduxThunk))
);
let persistor = persistStore(store);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
