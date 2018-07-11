import React from "react";
import { Navbar, NavItem, Button, Nav } from "react-bootstrap";
import FaFloppyO from "react-icons/lib/fa/floppy-o";
import FaOpen from "react-icons/lib/fa/folder-open-o";

import "./NavBar.css";
import SearchBar from "./SearchBar";
import HelpModal from "./HelpModal";
import FileInput from "./FileInput";

const NavBar = props => {
  const { handleFileInputChange, onSave, ...restProps } = props;

  const handleLoad = () => {
    // Prompt user for file. Simulate click. Keeping ugly default button hidden
    let fileInput = document.getElementById("file-input");
    fileInput.click();
  };

  return (
    <Navbar inverse fixedTop fluid>
      <Navbar.Header>
        <Navbar.Brand>Mapping Utility</Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <FileInput handleFileInputChange={handleFileInputChange} />
        <NavItem>
          <Button onClick={handleLoad}>
            <FaOpen />
          </Button>
          <Button onClick={onSave}>
            <FaFloppyO />
          </Button>
        </NavItem>
        <NavItem>
          <SearchBar {...restProps} />
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
