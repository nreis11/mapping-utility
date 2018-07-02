import React from "react";
import { Navbar, NavItem, Button, Nav } from "react-bootstrap";
import FaFloppyO from "react-icons/lib/fa/floppy-o";
import FaOpen from "react-icons/lib/fa/folder-open-o";

import "./NavBar.css";
import SearchBar from "./SearchBar";
import HelpModal from "./HelpModal";

const NavBar = props => {
  const {
    handleSearch,
    searchString,
    searchFoundCount,
    searchFocusIndex,
    onSearchFocusChange
  } = props;

  return (
    <Navbar inverse fixedTop fluid>
      <Navbar.Header>
        <Navbar.Brand>Mapping Utility</Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem>
          <Button>
            <FaOpen />
          </Button>
          <Button>
            <FaFloppyO />
          </Button>
        </NavItem>
        <NavItem>
          <SearchBar
            searchString={searchString}
            handleSearch={handleSearch}
            searchFoundCount={searchFoundCount}
            searchFocusIndex={searchFocusIndex}
            onSearchFocusChange={onSearchFocusChange}
          />
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem>
          <HelpModal />
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
