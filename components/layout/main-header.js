import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useRouter } from 'next/router';

function MainHeader() {
  const router = useRouter();

  return (
    <Navbar bg="light" expand="lg" variant="light" fixed="top">
      <Container fixed>
        <Navbar.Brand href="/">igi iroko | multimedia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="/"
              className={router.pathname == '/' ? 'active' : ''}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/web-development"
              className={router.pathname == '/web-development' ? 'active' : ''}
            >
              Web Development
            </Nav.Link>
            <Nav.Link
              href="/ui-design"
              className={router.pathname == '/ui-design' ? 'active' : ''}
            >
              UI Design
            </Nav.Link>
            <Nav.Link
              href="/digital-arts"
              className={router.pathname == '/digital-arts' ? 'active' : ''}
            >
              Digital Arts
            </Nav.Link>
            <Nav.Link
              href="/alipede"
              className={router.pathname == '/alipede' ? 'active' : ''}
            >
              A.Lipẹdé
            </Nav.Link>
            <Nav.Link
              href="/contact"
              className={router.pathname == '/contact' ? 'active' : ''}
            >
              Contact
            </Nav.Link>
            <NavDropdown title="CV" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="https://www.linkedin.com/in/alipede/"
                target="blank"
              >
                LinkedIn Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Download CV
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainHeader;
