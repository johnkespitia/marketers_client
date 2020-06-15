/** @format */

import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { registerRequest } from "../../actions/usuariosActions";
import { logoutBusinessRequest } from "../../actions/businessActions";
import logo from "../../assets/logo.svg";
import { Redirect } from "react-router-dom";
import { FIRST_REGISTER_ROL } from "../../constants";

const Register = (props) => {
	const [form, setValues] = useState({
		email: "",
		business: props.businessData.mybusiness.id,
		rol: FIRST_REGISTER_ROL,
	});
	if (Object.keys(props.userData.user).length > 0) {
		return <Redirect to='/' />;
	}
	if (Object.keys(props.businessData.mybusiness).length < 1) {
		return <Redirect to='/' />;
	}
	const handleInput = (event) => {
		setValues({
			...form,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		props.registerRequest(form);
	};
	return (
		<Container fluid>
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<Card className='mx-auto mt-5'>
						<Card.Header as='h5'>Marketers</Card.Header>
						<Card.Body>
							<Card.Title>
								Registro de usuario en el sistema para el negocio{" "}
								<i>{props.businessData.mybusiness.name}</i>
							</Card.Title>
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
										Es importante que ingrese el email único
									</Form.Text>
								</Form.Group>

								<Form.Group controlId='formBasicNombre'>
									<Form.Label>Nombre</Form.Label>
									<Form.Control
										type='text'
										name='name'
										placeholder='Ingrese su Nombre'
										onChange={handleInput}
									/>
									<Form.Text className='text-muted'>
										Es importante que ingrese su nombre
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
								<Form.Group controlId='formBasicPassword'>
									<Form.Label>Confirmación de Contraseña</Form.Label>
									<Form.Control
										type='password'
										name='password_confirmation'
										placeholder='Ingrese nuevamente su contraseña'
										onChange={handleInput}
									/>
								</Form.Group>
								<Button variant='primary' type='submit'>
									Registrar
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
	registerRequest,
	logoutBusinessRequest,
};

const mapStateToProps = (state) => {
	return {
		businessData: state.businessReducer,
		userData: state.usuarioReducer,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
