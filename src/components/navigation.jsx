import {Navbar,Nav,Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./comp.css";
function Bar(){
  return(
    <Navbar bg="light" expand="lg" className="navbar">
      <Navbar.Brand href="#home"><img src="images\logo 1.png" alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse  className="links" id="basic-navbar-nav">
        <Nav className="ms-auto" id="links">
          <Nav.Link className="p-3 link" href="#home">Category</Nav.Link>
          <Nav.Link className="p-3 link" href="#home">FAQs</Nav.Link>
          <Nav.Link className="p-3 link" href="#link">My Cart</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Button variant="primary" className="button" >Login</Button>
    </Navbar>
  )
}
export default Bar;