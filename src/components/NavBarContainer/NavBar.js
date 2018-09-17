import React from "react";
import {
  Navbar,
  NavItem,
  Button,
  Nav,
  Tooltip,
  OverlayTrigger
} from "react-bootstrap";
import { FaFolderOpen, FaSave } from "react-icons/fa";
import LogOutButton from "./LogOutButton";
import SearchBar from "./SearchBar";
import HelpModal from "./HelpModal";
import FileInput from "../misc/FileInput";
import { func, string, number, bool, shape } from "prop-types";
import "./NavBar.css";

const NavBar = props => {
  const { handleOpen, handleSave, ...restProps } = props;

  const handleLoad = () => {
    // Prompt user for file. Simulate click. Keeping ugly default button hidden
    let fileInput = document.getElementById("file-input-json");
    fileInput.click();
  };

  const tooltip = text => <Tooltip id={`tooltip-${text}`}>{text}</Tooltip>;

  return (
    <Navbar inverse fluid>
      <Navbar.Header>
        <Navbar.Brand>Mapping Utility</Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <FileInput handleOpen={handleOpen} type="json" />
        <NavItem>
          <OverlayTrigger placement="bottom" overlay={tooltip("Open")}>
            <Button onClick={handleLoad}>
              <FaFolderOpen size="1.25em" className="react-icons" />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger placement="bottom" overlay={tooltip("Save")}>
            <Button onClick={handleSave}>
              <FaSave size="1.25em" className="react-icons" />
            </Button>
          </OverlayTrigger>
        </NavItem>
        <NavItem>
          <SearchBar {...restProps} />
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem>
          <HelpModal />
        </NavItem>
        <NavItem>
          <LogOutButton />
        </NavItem>
      </Nav>
    </Navbar>
  );
};

NavBar.propTypes = {
  handleOpen: func.isRequired,
  handleSave: func.isRequired,
  searchValues: shape({
    searchString: string.isRequired,
    searchFocusIndex: number.isRequired,
    searchFoundCount: number.isRequired,
    handleInputChange: func.isRequired,
    searchInternal: bool.isRequired
  })
};

export default NavBar;
