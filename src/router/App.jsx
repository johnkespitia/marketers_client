/** @format */

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../containers/Page/Home";
import About from "../containers/Page/About";
import Login from "../containers/Page/Login";
import Register from "../containers/Page/Register";
import RegisterBusiness from "../containers/Business/RegisterBusiness";
import NotFound from "../containers/Page/NotFound";
import Layout from "../containers/Layout";

const App = () => (
	<BrowserRouter>
		<Layout>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/about' component={About} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/register' component={RegisterBusiness} />
				<Route exact path='/newuser' component={Register} />
				<Route component={NotFound} />
			</Switch>
		</Layout>
	</BrowserRouter>
);

export default App;
