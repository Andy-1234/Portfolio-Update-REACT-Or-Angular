import background from "./images/header.jpg"
import button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"
//https://www.creative-tim.com/blog/web-design/how-to-use-bootstrap-with-reactjs/

//https://www.pluralsight.com/guides/how-to-import-components-from-react-bootstrap
//https://react-bootstrap.github.io/layout/grid/
function App() {
  return (
    <div classnameName="App">
        <header>

  <div classname="p-5 text-center bg-light">
    <h1 classname="mb-3">Heading</h1>
    <h4 classname="mb-3">Subheading</h4>
    <a classname="btn btn-primary" href="" role="button">Call to action</a>
  </div>
  <div style={{backgroundImage: `url(${background})`,height:'100'}}>
  
</div>
<Container>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>

<ul>
  <li><a classname="active" href="#home">Home</a></li>
  <li><a href="#news">About me</a></li>
  <li><a href="#contact">Resume</a></li>
</ul>

  
</header>
    </div>
  );
}

export default App;
/*
<header>

</header>

*/