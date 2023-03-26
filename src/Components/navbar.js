import React from 'react';
import AllGames from './AllGames';
import Home from './Home';
import About from './About';
import AddGames from './AddGames';
import Infx from './infx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes , Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Unitygame from './Unitygame';
export default function navbar(){
    
return( 
<Router>
    
  <header className="bg-black text-white py-3">
    <Navbar bg="black" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>Infinitrix</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to={"/Home"}>Home</Nav.Link>
          <Nav.Link as={Link} to={"/AllGames"}>All Games</Nav.Link>
          <Nav.Link as={Link} to={"/AddGame"}>Add Game</Nav.Link>
          <Nav.Link as={Link} to={"/AboutUs"}>About Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </header>
 
  <Routes>
      <Route exact path="/" element = {<Infx/>} />
      <Route path="/Home" element={<Home />} />
      <Route path="/AboutUs" element={<About />} />
      <Route path="/AllGames" element={<AllGames />} />
      <Route path="/AddGame" element={<AddGames />} />
      <Route exact path="/playDemo" element = {<Unitygame/>} />
   </Routes>
</Router>
  
      
)
}