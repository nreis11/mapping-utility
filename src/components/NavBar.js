import React from "react";
import { Row, Navbar, ButtonGroup, Button, Nav } from "react-bootstrap";
import FaFloppyO from "react-icons/lib/fa/floppy-o";
import FaOpen from "react-icons/lib/fa/folder-open-o";

import "./NavBar.css";
import HelpModal from "./modals/HelpModal";

const NavBar = props => {
  const headerStyle = {
    color: "white",
    fontSize: ".5em",
    marginRight: "15px"
  };

  // const btnGroupStyle = {
  //   position: "absolute",
  //   left: "0",
  //   top: "0",
  //   height: "100%"
  // };

  // const navBtnStyle = {
  //   height: "100%"
  // };

  return (
    <Row className="show-grid">
      <Navbar className="padded" inverse fixedTop fluid>
        <h1 style={{ display: "inline" }}>
          <span style={headerStyle}>Mapping Utility</span>
          <ButtonGroup style={{}}>
            <Button style={{}}>
              <FaOpen />
            </Button>
            <Button style={{}}>
              <FaFloppyO />
            </Button>
          </ButtonGroup>
          <Nav pullRight>
            <HelpModal />
          </Nav>
        </h1>
      </Navbar>
    </Row>
  );
};

export default NavBar;
