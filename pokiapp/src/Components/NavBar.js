import { useState, useContext } from 'react';
import { useAuth } from "../Hooks/Auth";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Modal } from 'react-bootstrap';
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";
import { removeUserToken } from "../Hooks/authLocalStorage";
import { useNavigate } from "react-router-dom"

const NavBar = () => {
	
	const { isVerified } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async()=>{
    const logoutResult = await removeUserToken();
    if(logoutResult) navigate("/login");
  }
  const cart = useContext(CartContext);
  const auth = useAuth();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const checkout = async () =>{
    await fetch('http://localhost:3000/checkout', {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({items: cart.items})
    }).then((response)=>{
      return response.json();
    }).then((response)=>{
      if(response.url){
        window.location.assign(response.url); //Forwarding user to Stripe
      }
    })
  }

  const productsCount = cart.items.reduce((sum, product)=> sum + product.quantity, 0);


	return (
		<div className="NavBar">
		<h3>{auth.userEmail && `Current User: ${auth.userEmail}`}</h3>
		<Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Registration">Register</NavDropdown.Item>
			      <NavDropdown.Divider />
           

            {/* <Nav.Link href="/blogs">Blogs blogs and bloooogs</Nav.Link> */}
          <Nav.Link href="/Pokemon ">Pokemon</Nav.Link>
          <br></br>
          <Nav.Link href="/registration">Registration</Nav.Link>
          <br></br>
			    <Nav.Link href="/login">Login</Nav.Link>
          <br></br>
          <Nav.Link href="/Catalog">Catalog</Nav.Link>
          <br></br>
          <Nav.Link href="/Shoppingcart">Cart</Nav.Link>
          </NavDropdown>
            {/* <NavDropdown title="Members only" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/create-one">Create Blog</NavDropdown.Item>
              
			  <NavDropdown.Divider />
              <NavDropdown.Item href="deleteBlog">Update & Delete Blogs</NavDropdown.Item>
              
            </NavDropdown> */}
          </Nav>
          <Navbar.Text>
            {/* Signed in as: <a href="#login"></a> */}
          </Navbar.Text>
          <Button onClick={handleShow}> Cart ({productsCount}) items</Button>
          {isVerified && <button  className="btn btn-danger navbar-btn"onClick={()=>{ navigate("/")
				auth.logout()
			}}>Logout</button>}
        
        </Navbar.Collapse>
    </Navbar>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {productsCount > 0 ?
              <>
                <p>Items in your cart:</p>
                {cart.items.map((currentProduct, idx) =>(

                    <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                ))}

                  <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                  <Button variant="success" onClick={checkout}>
                    Purchase items!
                  </Button>
              </>
            
            :
                  <h1>There are no items in your cart!</h1>
            }
        </Modal.Body>
      </Modal>
			
	</div>
	);
  }

export default NavBar