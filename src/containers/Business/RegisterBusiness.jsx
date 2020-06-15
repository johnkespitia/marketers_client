/** @format */

import React, { useState } from "react";
import { connect } from "react-redux";
import { businessRegister } from "../../actions/businessActions";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import logo from "../../assets/logo.svg";
import { Redirect } from "react-router-dom";

const RegisterBusiness = (props) => {
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
		props.businessRegister(form);
	};
	if (Object.keys(props.userData.user).length < 0) {
		return <Redirect to='/' />;
	}
	if (Object.keys(props.businessData.mybusiness).length > 0) {
		return <Redirect to='/newuser' />;
	}
	return (
		<Container fluid>
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<Card className='mx-auto mt-5'>
						<Card.Header as='h5'>Marketers</Card.Header>
						<Card.Body>
							<Card.Title>Registra tu negocio</Card.Title>
							<Card.Img variant='top' src={logo} width='100' height='100' />
							<Form onSubmit={handleSubmit}>
								<Form.Group controlId='formName'>
									<Form.Label>Nombre del Negocio:</Form.Label>
									<Form.Control
										type='text'
										onChange={handleInput}
										name='name'
										placeholder='Nombre del negocio'
									/>
									<Form.Text className='text-muted'>
										Ingrese el nombre o razón social del negocio
									</Form.Text>
								</Form.Group>
								<Form.Group controlId='formEmail'>
									<Form.Label>Email</Form.Label>
									<Form.Control
										type='email'
										name='email'
										onChange={handleInput}
										placeholder='Ingrese el email del negocio'
									/>
									<Form.Text className='text-muted'>
										Es importante que ingrese el email del negocio
									</Form.Text>
								</Form.Group>
								<Form.Group controlId='formAddress'>
									<Form.Label>Dirección:</Form.Label>
									<Form.Control
										type='text'
										onChange={handleInput}
										name='address'
										placeholder='Dirección del negocio'
									/>
									<Form.Text className='text-muted'>
										Es importante que ingrese la dirección del negocio incluida
										ciudad (Carrera 11a - 94, Madrid Cundinamarca)
									</Form.Text>
								</Form.Group>
								<Form.Group controlId='formPhone'>
									<Form.Label>Teléfono</Form.Label>
									<Form.Control
										type='tel'
										onChange={handleInput}
										name='phone'
										placeholder='Teléfono del negocio'
									/>
									<Form.Text className='text-muted'>
										Ingresé el teléfono fijo del negocio para que se contacten
										directamente vía llamada
									</Form.Text>
								</Form.Group>
								<Form.Group controlId='formWhatsapp'>
									<Form.Label>Whatsapp/Telegram</Form.Label>
									<Form.Control
										type='tel'
										onChange={handleInput}
										name='whatsapp'
										placeholder='Ingrese su celular'
									/>
									<Form.Text className='text-muted'>
										Es importante que ingrese el número de contacto de su
										whatsapp o telegram donde reciba contactos de sus clientes
									</Form.Text>
								</Form.Group>
								<Form.Group controlId='formWebsite'>
									<Form.Label>Website</Form.Label>
									<Form.Control
										type='url'
										onChange={handleInput}
										name='website'
										placeholder='Sitio web de su negocio'
									/>
									<Form.Text className='text-muted'>
										Si cuenta con website para su negocio ingreselo en este
										campo
									</Form.Text>
								</Form.Group>
								<Form.Group controlId='formBasicCoords'>
									<Form.Label>Coordenadas del negocio</Form.Label>
									<Form.Control
										type='text'
										onChange={handleInput}
										name='coordinates'
										placeholder='Ingrese la ubicación de su negocio'
									/>
									<Form.Text className='text-muted'>
										Ingrese si las tiene las coordenadas de su negocio, puede
										consultarlas de Google Maps (longitud, latitud) así
										(4.7270653,-74.2589658)
									</Form.Text>
								</Form.Group>
								<Form.Group controlId='formDescription'>
									<Form.Label>Descripción</Form.Label>
									<Form.Control
										as='textarea'
										rows='3'
										onChange={handleInput}
										name='description'
										placeholder='Describa su negocio'
									/>
									<Form.Text className='text-muted'>
										Describe tu negiocio y los servicios que ofreces
									</Form.Text>
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
	businessRegister,
};

const mapStateToProps = (state) => {
	return {
		businessData: state.businessReducer,
		userData: state.usuarioReducer,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterBusiness);
