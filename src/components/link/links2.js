import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'


export default function Links() {
  return (
    <div>
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Link to='/' className='text'>Home</Link>
      <Link to="/logout" className='text'>Log Up</Link>
      
    </Nav>
    </Container>
  </Navbar>
  <br />
</>
    </div>
  )
}
