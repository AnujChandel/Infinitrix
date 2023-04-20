import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';





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
        <Link to="/FoxTale"><Button variant="primary" style={{ background: 'linear-gradient(to right, #f78ca0, #f9748f, #fd868c, #fe9a8b, #feca8a, #f9d989, #f7e988, #f7f987)', 
                  marginLeft: "-10px",
                  border: 'none',
                  color: 'white',
                  padding: '15px 32px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontSize: '16px',
                  margin: '4px 2px',
                  cursor: 'pointer'}} >Play Now</Button></Link>
                   
      </Card.Body>
      
    </Card></Col>
          <Col> <Card className="text-center mt-3 mb-3">
      <Card.Header>Platformer</Card.Header>
      <Card.Body>
        <Card.Title>Coming Soon</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary" style={{ background: 'linear-gradient(to right, #f78ca0, #f9748f, #fd868c, #fe9a8b, #feca8a, #f9d989, #f7e988, #f7f987)', 
                  marginLeft: "-10px",
                  border: 'none',
                  color: 'white',
                  padding: '15px 32px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontSize: '16px',
                  margin: '4px 2px',
                  cursor: 'pointer'}}>Coming Soon</Button>
      </Card.Body>
      
    </Card></Col>
          <Col> <Card className="text-center mt-3 mb-3">
      <Card.Header>Platformer</Card.Header>
      <Card.Body>
        <Card.Title>Coming Soon</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary" style={{ background: 'linear-gradient(to right, #f78ca0, #f9748f, #fd868c, #fe9a8b, #feca8a, #f9d989, #f7e988, #f7f987)', 
                  marginLeft: "-10px",
                  border: 'none',
                  color: 'white',
                  padding: '15px 32px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontSize: '16px',
                  margin: '4px 2px',
                  cursor: 'pointer'}}>Coming Soon</Button>
      </Card.Body>
      
    </Card></Col>
        </Row>
      </Container>
    
    )
}
