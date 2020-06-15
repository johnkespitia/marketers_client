/** @format */

import React from "react";
import { connect } from "react-redux";
import logo from "../../assets/logo.svg";
import { Button } from "react-bootstrap";
const Home = (props) => {
	return (
		<div className='App'>
			<header className='App-header'>
				<img
					src={logo}
					className='App-logo'
					alt='logo'
					width='303'
					height='303'
				/>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<Button className='App-link' rel='noopener noreferrer'>
					data
				</Button>
			</header>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};
export default connect(mapStateToProps, null)(Home);
