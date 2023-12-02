import { Stack } from "react-bootstrap"
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function AboutUs() {

    function LogoImage(){
        return( 
            <Container>
                <Row>
                    <Col xs={6} md={2}>
                        <Image src="https://images.unsplash.com/photo-1622821957331-77d317c2b32c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHBvcHNpY2xlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" rounded />
                    </Col>
                </Row>    
            </Container>
        );
        
        }

    return (
      <>
        {LogoImage()}
        <Stack direction="vertical" gap={3} >
        <h1 >About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris ultrices eros in cursus turpis massa tincidunt dui. Purus in mollis nunc sed id semper risus in. Vitae elementum curabitur vitae nunc sed velit. Venenatis tellus in metus vulputate eu scelerisque felis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci. Lorem ipsum dolor sit amet consectetur adipiscing.</p>
        </Stack>
      </>
      
    )
  }
  
  export default AboutUs