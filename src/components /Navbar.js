import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Tomato</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Menu</Nav.Link>
            <NavDropdown title="Locations" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Indore</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Ujjain
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Bhopal
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Gwalior
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Dewas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Jabalpur
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
               Search on map
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              
            </Nav.Link>
          </Nav>
          <Form className="d-flex" style={{width:'800px'}}>
            <Form.Control
              type="search"
              placeholder="Search for restaurant, cuisine or a dish"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;