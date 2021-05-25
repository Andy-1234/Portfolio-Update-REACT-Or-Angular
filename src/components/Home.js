import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import "bootstrap/dist/css/bootstrap.min.css"
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'
import Headimg from './images/header.jpg' 
//const thing = require("./images/header.jpg")
const Home = () => {
    return (
        <>
            
<Container style={{textAlign:'center',marginTop:'5px'}}>
<Row>
    <Col>        
        <a href='./About'>
        <Image src={Headimg} rounded/>
        About me
        </a>
    </Col>

    <Col> 
        <a href='./About'>
        <Image src={Headimg} rounded/>
        Resume        
        </a>
    </Col>
  </Row>  
  <Row>
    
<Link href='./About' ></Link>    
    <Col> 
        <a href='./About'>
        <Image src={Headimg} rounded/>
        <p>Past Projects</p>        
        </a>
    </Col>
    <Col> 
    <a href='./About'>
        <Image src={Headimg} rounded/>
        About me
        </a>
    </Col>
  </Row>

</Container>

        </>
    )
}
export default Home