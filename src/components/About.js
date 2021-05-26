import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from './Header'
const About = () => {
    return (
        <div>
<Header header='About me' />      
<Container>
    <Row>

        <Col className='Textalign' style={{paddingBottom:'10px'}}>
<ul  style={{backgroundColor:'lightgray'}}>
    <li><h3>A bit about me</h3></li>
</ul>

        Hello i am Andy I was born in the united states in a state called Arizona .I've spent all my life in arizona and have never lived out of state. For the past several years i have been learning many different coding languages such as react which was used to build this site.
        </Col>

<br/>
    </Row>
    <Row>
        <Col className='Textalign'>
        <h3>What I do </h3>
        I code in several differnet languages a few of them being languages such as Javascript, HTML,CSS, and several deviations from those labguages such as Reactjs and several others like TypeScript. Most of the languages are used at what I have mostly learned which would be Web design. 
        </Col>
    </Row>

    <Row style={{marginTop:'10px'}}>
<Col className='Textalign'>
<h3>Contact info</h3>
You can Contact me at <a className='header-link'>abcd@gmail.com</a> or via phone at <a className='header-link'>(623)522-4466</a>
</Col>

    </Row>


</Container>

</div>
    )
}
export default About