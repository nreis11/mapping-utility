import React from "react";
import { Row, Navbar, ButtonGroup, Button } from "react-bootstrap";
import FaFloppyO from "react-icons/lib/fa/floppy-o";
import FaOpen from "react-icons/lib/fa/folder-open-o";

const NavBar = props => {
  const headerStyle = {
    color: "white",
    fontSize: ".5em"
  };

  const btnGroupStyle = {
    position: "absolute",
    left: "0",
    top: "0",
    height: "100%"
  };

  const navBtnStyle = {
    height: "100%"
  };

  return (
    <Row className="show-grid">
      <Navbar className="text-center" inverse fixedTop>
        <h1 style={{ display: "inline" }}>
          <ButtonGroup style={btnGroupStyle}>
            <Button style={navBtnStyle}>
              <FaOpen />
            </Button>
            <Button style={navBtnStyle}>
              <FaFloppyO />
            </Button>
          </ButtonGroup>
          <span style={headerStyle}>Mapping Utility</span>
        </h1>
      </Navbar>
    </Row>
  );
};

export default NavBar;
