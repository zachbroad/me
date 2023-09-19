import {Container, Nav, Navbar} from "react-bootstrap";
import PropTypes from "prop-types";
import {Link, NavLink} from "react-router-dom";

const Navigation = () => (
  <Navbar expand="lg" className="bg-body-secondary">
    <Container>
      <Navbar.Brand as={Link} to={"/"}><b>Zach Broad</b></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/projects/">Projects</Nav.Link>
          <Nav.Link as={NavLink} to="/resume/">Resume</Nav.Link>
          <Nav.Link as={NavLink} to="/contact/">Contact</Nav.Link>
          {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
          {/*  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
          {/*  <NavDropdown.Item href="#action/3.2">*/}
          {/*    Another action*/}
          {/*  </NavDropdown.Item>*/}
          {/*  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
          {/*  <NavDropdown.Divider />*/}
          {/*  <NavDropdown.Item href="#action/3.4">*/}
          {/*    Separated link*/}
          {/*  </NavDropdown.Item>*/}
          {/*</NavDropdown>*/}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

const Layout = ({children}) => (
  <>
    <Navigation />
    <Container>
      {children}
    </Container>
  </>
)

Layout.propTypes = {
  children: PropTypes.array,
}

export default Layout;