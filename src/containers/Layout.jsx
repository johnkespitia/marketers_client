/** @format */

import React from "react";
import HeaderComp from "../components/Header";

const Layout = ({ children }) => (
	<div className='App'>
		<HeaderComp />
		{children}
	</div>
);

export default Layout;
