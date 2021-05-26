import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from './Header'
const Resume = () => {
    return (
        <div>
            <Header header='My resume' />      
        <Container className='Textalign resume'>
            <Row>
            <h5>Andy De Leon</h5>

            <p>
C: 623-522-6644  |  E: abcd@gmail.com


</p>
            </Row>
            <Row>
                <Col>
                <h5>Personal profile</h5>
                <p>
                Good listener, patient, second year Coding student who is Objective minded and Problem solving, seeking the position of coder.
                </p>
                </Col>
            </Row>
            <Row>
                <Col>
                <h5>Knowledge, Skills, and Abilities
</h5>
         <ul className='Resume-ul'>
             <li>Knowledge of problem-solving and troubleshooting strategies applicable to software development
</li>
             <li>Able to perform different methods of debugging (e/g/ hand-trace code or real time debugging tools)
</li>
             <li>Ability to apply industry standards in documentation (e.g. self-documenting code; functional-level, program-level, user-level documentation)
</li>
             <li>Able to construct web pages and applications that are compliant with ADA and sections 504 and 508 standards
</li>
             <li>Skilled in identifying errors in program modules
</li>

         </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                <h5>Education</h5>

                    <h6>West-mec coding program (Technical school)</h6>
                    <p>This two-year interactive program prepares students for a career as a software developer. The program teaches students how to design and develop software, build apps for phones, tablets, websites, and write and test computer code</p>
                    <h6>Cortez High School</h6>
                    <p>
                        Grad date :May 2021 
                    </p>
                    <p>Relevant coure work: Spanish</p>
                </Col>
            </Row>
        </Container>


        </div>
    )
}
export default Resume