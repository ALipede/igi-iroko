import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useRouter } from 'next/router';

function Footer() {
  const router = useRouter();

  return (
    <div>
      {' '}
      <Navbar bg="dark" expand="lg" variant="dark" fixed="bottom">
        <Container fixed>
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
                className={
                  router.pathname == '/web-development' ? 'active' : ''
                }
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
