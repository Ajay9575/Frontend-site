import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Image from 'next/image';


export default function HomeNav() {
    return(
        <>
      <Navbar bg="black" data-bs-theme="black">
        <Container >
          <Navbar.Brand className='mx-0 '><Image src='/icon.png'  alt="Picture of the Logo"height={50} width={50}/>  </Navbar.Brand>
          <Nav className="ml-auto ">
            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#features"  className='text-white'>Services</Nav.Link>
            <Nav.Link href="#pricing"  className='text-white'>About Us</Nav.Link>
            <Nav.Link href="#features"  className='text-white'>Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    )
}