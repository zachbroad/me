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
          <Nav.Link href="/Resume.pdf">Resume</Nav.Link>
          <Nav.Link as={NavLink} to="/contact/">Contact</Nav.Link>
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