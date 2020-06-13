/** @format */

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
const NotFound = () => (
	<Container fluid>
		<Row>
			<Col md={{ span: 6, offset: 3 }}>
				<Card className='mx-auto mt-5'>
					<Card.Header as='h5'>Marketers</Card.Header>
					<Card.Body>
						<Card.Title>Página no encontrada</Card.Title>
						<h3>Página no encontrada</h3>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	</Container>
);

export default NotFound;
