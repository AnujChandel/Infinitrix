import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





export default function Features(){
    return( 
        <Container>
        <Row>
          <Col> <Card className="text-center mt-3 mb-3">
      <Card.Header>Platformer</Card.Header>
      <Card.Body>
        <Card.Title>Coming Soon</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      
    </Card></Col>
          <Col> <Card className="text-center mt-3 mb-3">
      <Card.Header>Platformer</Card.Header>
      <Card.Body>
        <Card.Title>Coming Soon</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      
    </Card></Col>
          <Col> <Card className="text-center mt-3 mb-3">
      <Card.Header>Platformer</Card.Header>
      <Card.Body>
        <Card.Title>Coming Soon</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      
    </Card></Col>
        </Row>
      </Container>
    
    )
}
