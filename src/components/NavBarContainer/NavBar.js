import React from "react";
import {
  Navbar,
  NavItem,
  Button,
  Nav,
  Tooltip,
  OverlayTrigger,
  Col
} from "react-bootstrap";
import { FaFolderOpen, FaSave } from "react-icons/fa";
import SearchBar from "./SearchBar";
import HelpModal from "./HelpModal";
import FileInput from "../misc/FileInput";
import { func, string, number, bool, shape } from "prop-types";
import "./NavBar.css";

const NavBar = props => {
  const { handleOpen, handleSave, handleAlert, ...restProps } = props;

  const handleLoad = () => {
    // Prompt user for file. Simulate click. Keeping ugly default button hidden
    let fileInput = document.getElementById("file-input-json");
    fileInput.click();
  };

  const tooltip = text => <Tooltip id={`tooltip-${text}`}>{text}</Tooltip>;

  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <FileInput
          handleOpen={handleOpen}
          handleAlert={handleAlert}
          type="json"
        />
        <NavItem>
          <OverlayTrigger placement="bottom" overlay={tooltip("Open")}>
            <Button onClick={handleLoad}>
              <FaFolderOpen className="react-icons" />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger placement="bottom" overlay={tooltip("Save")}>
            <Button onClick={handleSave}>
              <FaSave className="react-icons" />
            </Button>
          </OverlayTrigger>
        </NavItem>
        <NavItem>
          <Col>
            <SearchBar {...restProps} />
          </Col>
        </NavItem>
      </Nav>
      <Nav className="mr-sm-2">
        <NavItem>
          <HelpModal />
        </NavItem>
      </Nav>
    </Navbar>
  );
};

NavBar.propTypes = {
  handleOpen: func.isRequired,
  handleSave: func.isRequired,
  handleInputChange: func.isRequired,
  handleAlert: func.isRequired,
  searchValues: shape({
    searchString: string.isRequired,
    searchFocusIndex: number.isRequired,
    searchFoundCount: number.isRequired,
    searchInternal: bool.isRequired
  })
};

export default React.memo(NavBar);
