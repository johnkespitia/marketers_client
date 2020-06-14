/** @format */

import React from "react";
import { logoutRequest } from "../actions";
import { connect } from "react-redux";
import {
	Navbar,
	//NavDropdown,
	Form,
	FormControl,
	Button,
	Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const HeaderComp = (props) => {
	const handleLogout = () => {
		props.logoutRequest({});
	};
	const hasUser = Object.keys(props.user).length > 0;
	return (
		<Navbar bg='light' expand='lg'>
			<Navbar.Brand>
				<img
					src={logo}
					width='30'
					height='30'
					className='d-inline-block align-top'
					alt='React Bootstrap logo'
				/>{" "}
				Marketers
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto'>
					<Link className='nav-link' to='/'>
						Home
					</Link>
					<Link className='nav-link' to='/about'>
						About
					</Link>
				</Nav>
				{!hasUser ? (
					<Nav className='col-auto'>
						<Link className='nav-link' to='/login'>
							Login
						</Link>
						<Link className='nav-link' to='/register'>
							Register
						</Link>
					</Nav>
				) : (
					<Nav className='col-auto'>
						<Link className='nav-link' to='/login'>
							Account {props.user.name}
						</Link>
						<Nav.Link onClick={handleLogout}>Logout</Nav.Link>
					</Nav>
				)}

				<Form inline className='mr-auto'>
					<FormControl type='text' placeholder='Search' className='mr-sm-2' />
					<Button variant='outline-success'>Search</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};
const mapDispatchToProps = {
	logoutRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderComp);

/*
<NavDropdown title='Dropdown' id='basic-nav-dropdown'>
					<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
					<NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
					<NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
				</NavDropdown> 
*/
