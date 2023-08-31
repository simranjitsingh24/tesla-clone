// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { CgProfile } from "react-icons/cg";
import { BsGlobe } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
function NavScrollExample() {
  return (
    <div className="nav-bar">
      <Navbar expand="lg">
        <Container>
          <img
            className="img-logo"
            src="/src/assets/image/icons8-tesla-32.png"
          />

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="icon">
            <Nav
              className="me-auto my-2 my-lg-0  navbar-button"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Navbar.Toggle className="icon-btn bi bi-x" />
              <Nav.Link className="white" href="#action1">
                Vehicles
              </Nav.Link>
              <Nav.Link className="white" href="#action2">
                Energy
              </Nav.Link>
              <Nav.Link className="white" href="#action3">
                Charging
              </Nav.Link>
              <Nav.Link className="white" href="#action4">
                Discover
              </Nav.Link>
              <Nav.Link className="white" href="#action5">
                Shop
              </Nav.Link>
            </Nav>

            <div className="Nav-icon">
              <button className="btn-icon">
                <BiHelpCircle className="icon" />
              </button>
              <button className="btn-icon">
                <BsGlobe />
              </button>
              <button className="btn-icon">
                <CgProfile />
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavScrollExample;
