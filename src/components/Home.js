import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import "bootstrap/dist/css/bootstrap.min.css"
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'
import Headimg from './images/header.jpg' 
import Aboutimg from './images/About-home.jpg'
import Resumeimg from './images/resume.png'
import Projectsimg from './images/Projects.jpg'
import Skillsimg from './images/skills.jpg'
import Header from './Header'
//const thing = require("./images/header.jpg")
const Home = () => {
    return (
        <>
            <Header header='Andy De Leon' section="Homepage" />
<Container className='home' style={{textAlign:'center',marginTop:'5px',backgroundColor:'lightgray'}}>
<Row>
    <Col>        
        <a href='./About'>
        <Image src={Aboutimg} rounded fluid/>
        <p>About me</p>
        </a>
    </Col>

    <Col> 
        <a href='./About'>
        <Image src={Resumeimg} rounded fluid/>
        <p>Resume</p>        
        </a>
    </Col>
  </Row>  
  <Row>
    
<Link href='./About' ></Link>    
    <Col> 
        <a style={{color:'rgb(71, 71, 71)',textDecoration:'none'}} className='disabled-link' href='./About'>
        <Image src={Projectsimg} rounded fluid/>
        <p >Past Projects</p>        
        </a>
    </Col>
    <Col> 
    <a style={{color:'rgb(71, 71, 71)',textDecoration:'none'}} className='disabled-link' href='./About'>
        <Image src={Skillsimg} rounded fluid/>
        <p>My skills</p>
        </a>
    </Col>
  </Row>

</Container>

        </>
    )
}
export default Home