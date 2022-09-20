import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import HeaderImg from './components/headimg';
import DisplayStores from './components/StoreListing';




function App() {
  return (
    <div>
  <Navbar bg="light" expand="lg" >
    <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Instacart_logo_and_wordmark.svg/225px-Instacart_logo_and_wordmark.svg.png?20220330054201" style={{'height':'2vw'}} /> 
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"> 
        </Nav>
        <Nav>
            <Button variant='info'><Nav.Link href="#LogIn">Log In</Nav.Link></Button>
            <Button variant="success">Sign Up</Button>{' '}
        </Nav>
    </Navbar.Collapse>
</Navbar>

<HeaderImg/>
<DisplayStores/>

    </div>
  );
}

export default App;
