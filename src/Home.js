import { Image } from "react-bootstrap";
import desserts from './dessert-data.js';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { Link, Outlet } from "react-router-dom"


function Home(props) {

    function PopLogo() {
        return 'https://plus.unsplash.com/premium_photo-1684952847030-4cf914a2046a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHBvcHNpY2xlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
      }

     //   function desserts() {
    //     return props.desserts.map((dessert) => <desserts dessert={dessert}/>)   
    //   }

    return (
        <>
        <Navbar bg="light" variant="light">
            <Container>
                <Nav className="me-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about-us" className="nav-link">About Us</Link>
                    <Link to="/product" className="nav-link">Products</Link>
                </Nav>
            </Container>
        </Navbar>

        <Image src={PopLogo()} />
        <Stack gap={3} className="col-md-10 mx-auto">
        <Outlet />
      </Stack>
      
        {/* {desserts()} */}
        
        
        </>
    )
    
}
  
  export default Home