import { Box } from "@mui/system";
import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
// import useAuth from "../../../Hooks/useAuth";

import logo from "../../../Images/logo.png";
import "./Heading.css";

const Heading = () => {
  const { user, logout } = useAuth();
  //   const { user, logout } = useAuth();

  // const { user, logout } = useFirebase();
  return (
    <div>
      <Navbar
        className="shadow fw-bold"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo" src={logo} alt=""></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="mx-1" href="/home">
                Home
              </Nav.Link>

              <Nav.Link className="mx-1" href="/About">
                About
              </Nav.Link>
              <Nav.Link className="mx-1" href="/contact">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            {user?.email ? (
              <Box className="d-flex">
                <Nav.Link
                  className="mx-3 border-2 bg-warning rounded text-black"
                  href="/dashboard"
                >
                  Dashboard
                </Nav.Link>

                <Button
                  className=" btn btn-warning text-black"
                  onClick={logout}
                  color="inherit"
                >
                  logout
                </Button>
              </Box>
            ) : (
              <Nav.Link className="mx-1" href="/login">
                Login
              </Nav.Link>
            )}

            <Navbar.Text>
              <a className="m-4 p-4 text-decoration-none" href="#login">
                {user.displayName}
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Heading;
