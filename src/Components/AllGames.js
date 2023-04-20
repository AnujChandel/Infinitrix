import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';





export default function Features(){
    return( 
        <Container>
        <Row>
          <Col> <Card className="text-center mt-3 mb-3">
      <Card.Header>Anuj Chandel</Card.Header>
      <Card.Body>
        <Card.Title>Fox Tale</Card.Title>
        <Card.Text>
          A 2D Platformer game to enjoy the difficulties and challenges.
        </Card.Text>
        <Link to="/FoxTale">
                  <MDBBtn style={{ background: 'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))' }}>
                  Play Now
                  </MDBBtn></Link>
                   {/* this button is to check */} 
                   
                   {/* this button is to check */} 
      </Card.Body>
      
    </Card></Col>
          <Col> <Card className="text-center mt-3 mb-3">
      <Card.Header>Platformer</Card.Header>
      <Card.Body>
        <Card.Title>Coming Soon</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <MDBBtn style={{ background: 'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))' }}>
                  Coming soon
                  </MDBBtn>
      </Card.Body>
      
    </Card></Col>
          <Col> <Card className="text-center mt-3 mb-3">
      <Card.Header>Platformer</Card.Header>
      <Card.Body>
        <Card.Title>Coming Soon</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <MDBBtn style={{ background: 'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))' }}>
                  Coming soon
                  </MDBBtn>
      </Card.Body>
      
    </Card></Col>
        </Row>
      </Container>
    
    )
}
