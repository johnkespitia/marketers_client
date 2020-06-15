/** @format */

import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { loginRequest } from "../../actions/usuariosActions";
import { businessGet } from "../../actions/businessActions";
import logo from "../../assets/logo.svg";
import { Redirect } from "react-router-dom";
const Login = (props) => {
	const [form, setValues] = useState({
		email: "",
	});
	const handleInput = (event) => {
		setValues({
			...form,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const loginData = {
			email: form.email,
			password: form.password,
		};
		props.loginRequest(loginData);
	};
	if (Object.keys(props.userData.user).length > 0) {
		props.businessGet(
			props.userData.user.api_token,
			props.userData.user.business_id
		);
	}
	if (Object.keys(props.businessData.mybusiness).length > 0) {
		return <Redirect to='/' />;
	}
	return (
		<Container fluid>
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<Card className='mx-auto mt-5'>
						<Card.Header as='h5'>Marketers</Card.Header>
						<Card.Body>
							<Card.Title>Ingreso al sistema</Card.Title>
							<Card.Img variant='top' src={logo} width='100' height='100' />
							<Form onSubmit={handleSubmit}>
								<Form.Group controlId='formBasicEmail'>
									<Form.Label>Email</Form.Label>
									<Form.Control
										type='email'
										name='email'
										placeholder='Ingrese su email'
										onChange={handleInput}
									/>
									<Form.Text className='text-muted'>
										Es importante que ingrese el email con el que fue registrado
									</Form.Text>
								</Form.Group>

								<Form.Group controlId='formBasicPassword'>
									<Form.Label>Contraseña</Form.Label>
									<Form.Control
										type='password'
										name='password'
										placeholder='Ingrese su contraseña'
										onChange={handleInput}
									/>
								</Form.Group>
								<Button variant='primary' type='submit'>
									Ingresar
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

const mapDispatchToProps = {
	loginRequest,
	businessGet,
};
const mapStateToProps = (state) => {
	return {
		userData: state.usuarioReducer,
		businessData: state.businessReducer,
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
