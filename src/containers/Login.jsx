/** @format */

import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import logo from "../assets/logo.svg";
const Login = () => {
	return (
		<Container fluid>
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<Card className='mx-auto mt-5'>
						<Card.Header as='h5'>Marketers</Card.Header>
						<Card.Body>
							<Card.Title>Ingreso al sistema</Card.Title>
							<Card.Img variant='top' src={logo} width='100' height='100' />
							<Form>
								<Form.Group controlId='formBasicEmail'>
									<Form.Label>Email</Form.Label>
									<Form.Control
										type='email'
										name='email'
										placeholder='Ingrese su email'
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

export default Login;
