import React from "react";
import { Row, Navbar, ButtonGroup, Button, Nav } from "react-bootstrap";
import FaFloppyO from "react-icons/lib/fa/floppy-o";
import FaOpen from "react-icons/lib/fa/folder-open-o";

import "./NavBar.css";
import SearchBar from "./SearchBar";
import HelpModal from "./HelpModal";

const NavBar = props => {
  const { handleSearch, searchString } = props;

  return (
    <Row className="show-grid">
      <Navbar className="padded" inverse fixedTop fluid>
        <h1 style={{ display: "inline" }}>
          <span className="nav-header">Mapping Utility</span>
          <ButtonGroup>
            <Button>
              <FaOpen />
            </Button>
            <Button>
              <FaFloppyO />
            </Button>
          </ButtonGroup>
          <SearchBar searchString={searchString} handleSearch={handleSearch} />
          <Nav pullRight>
            <HelpModal />
          </Nav>
        </h1>
      </Navbar>
    </Row>
  );
};

export default NavBar;
