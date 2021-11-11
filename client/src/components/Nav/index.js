import React from 'react';
import Auth from '../../utils/auth';
import { 
    Navbar,
    Container,
    Nav,
} from 'react-bootstrap';

function NavBar() {
    function navigation() {
        if (Auth.loggedIn()) {
            return (
                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">Home Chef</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#searchRecipes">Search Recipes</Nav.Link>
                        <Nav.Link href="#submitRecipe">Submit Recipe</Nav.Link>
                        <Nav.Link href="#logOut">Sign Out</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
            ); 
        } else {
            return (
                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">Home Chef</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#logIn">Sign In</Nav.Link>
                        <Nav.Link href="#signUp">Sign Up</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
            );
        }
    }
};

export default NavBar;
