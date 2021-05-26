import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import twitter from './images/twitter.png'
import instagram from './images/instagram.png'
import facebook from './images/facebook.png'
const Footer = () => {
    return (
        <div className='footer-main'>
            
                <Container>
                <Row className='footer-color Textalign'
>
                    <Col className='Textalign'> <h6>Contact me </h6>    
      <ul className='footer-color Textalign'
>
          <li className='Textalign'>   </li><br/>
          <li>Email: <a className='footer-link'>abcd@gmail.com</a></li>
          <li>Phone#:<a className='footer-link'>(623)522-4466</a></li>

      </ul>
      </Col>
      <Col className='Textalign'> <h6>My socials </h6>    
      <ul className='footer-color Textalign'
>
          <li className='Textalign'>   </li><br/>
          <li><a className='footer-link'>Facebook <img src={facebook} /> </a></li>
          <li><a className='footer-link'>Instagram <img src={instagram} /></a></li>
          <li><a className='footer-link's>Twitter <img src={twitter} /></a></li>

      </ul>
      </Col>
        </Row >
                <Row className='footer-color'
>
                    <Col>      <p>Copyright &copy; 2021</p>
</Col>

                </Row>

                </Container>
        
        </div>
    )
}

/** */


export default Footer