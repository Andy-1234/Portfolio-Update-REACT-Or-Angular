import {BrowserRouter as Router, Route} from 'react-router-dom'
import background from "./components/images/header.jpg"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./components/Home"
import About from './components/About'
import Header from "./components/Header"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//just resources for self

//import  //"react-bootstrap/container"
//https://www.creative-tim.com/blog/web-design/how-to-use-bootstrap-with-reactjs/
//https://www.pluralsight.com/guides/how-to-import-components-from-react-bootstrap
//https://react-bootstrap.github.io/layout/grid/
function App() {
  return (
    <Router>
    <div className="App">
      <Route path='/' exact render={(prop)=> (
        <>
                <Header></Header>
                <Home/>

        </>
      )} />
      <Route path='/About' component={About} />        


    </div>
    </Router>
  );
}

export default App;




/*

        <header>

  <div classname="p-5 text-center bg-light">
    <h1 classname="mb-3">Heading</h1>
    <h4 classname="mb-3">Subheading</h4>
    <a classname="btn btn-primary" href="" role="button">Call to action</a>
  </div>
  <div style={{backgroundImage: `url(${background})`,height:'100'}}>
  
</div>


<ul>
  <li><a classname="active" href="#home">Home</a></li>
  <li><a href="#news">About me</a></li>
  <li><a href="#contact">Resume</a></li>
</ul>

  
</header>


*/