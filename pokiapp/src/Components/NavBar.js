import { useAuth } from "../Hooks/Auth";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
	
	const auth = useAuth();

	return (
		<div>
		<h3>{auth.userEmail && `Current User: ${auth.userEmail}`}</h3>
		<Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/blogs">Blogs blogs and bloooogs</Nav.Link> */}
          <Nav.Link href="/Pokimon ">Pokemon</Nav.Link>
          <br></br>
          <Nav.Link href="/registration">Registration</Nav.Link>
          <br></br>
			    <Nav.Link href="/login">Login</Nav.Link>
            {/* <NavDropdown title="Members only" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/create-one">Create Blog</NavDropdown.Item>
              
			  <NavDropdown.Divider />
              <NavDropdown.Item href="deleteBlog">Update & Delete Blogs</NavDropdown.Item>
              
            </NavDropdown> */}
          </Nav>
         
        </Navbar.Collapse>
    </Navbar>
	</div>
	);
  }

export default NavBar