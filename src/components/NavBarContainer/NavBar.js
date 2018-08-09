import React from "react";
import {
  Navbar,
  NavItem,
  Button,
  Nav,
  Tooltip,
  OverlayTrigger
} from "react-bootstrap";
import { FaSave } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import LogOutButton from "./LogOutButton";
import "./NavBar.css";
import SearchBar from "./SearchBar";
import HelpModal from "./HelpModal";
import FileInput from "../misc/FileInput";

const NavBar = props => {
  const { handleOpen, onSave, ...restProps } = props;

  const handleLoad = () => {
    // Prompt user for file. Simulate click. Keeping ugly default button hidden
    let fileInput = document.getElementById("file-input-JSON");
    fileInput.click();
  };

  const tooltip = text => <Tooltip id={`tooltip-${text}`}>{text}</Tooltip>;

  return (
    <Navbar inverse fixedTop fluid>
      <Navbar.Header>
        <Navbar.Brand>Mapping Utility</Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <FileInput handleOpen={handleOpen} type="JSON" />
        <NavItem>
          <OverlayTrigger placement="bottom" overlay={tooltip("Open")}>
            <Button onClick={handleLoad}>
              <FaFolderOpen size="1.25em" className="react-icons" />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger placement="bottom" overlay={tooltip("Save")}>
            <Button onClick={onSave}>
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

export default NavBar;
