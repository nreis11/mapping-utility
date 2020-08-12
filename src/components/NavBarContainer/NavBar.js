import React from "react";
import {
  Navbar,
  NavItem,
  Button,
  Nav,
  OverlayTrigger,
  Col,
} from "react-bootstrap";
import tooltip from "../misc/Tooltip";
import { FaFolderOpen, FaSave } from "react-icons/fa";
import SearchBar from "./SearchBar";
import HelpModal from "./HelpModal";
import FileInput from "../misc/FileInput";
import { func, string, number, bool, shape } from "prop-types";
import "./NavBar.css";

const NavBar = (props) => {
  const { handleOpen, handleSave, handleAlert, ...restProps } = props;

  const handleLoad = () => {
    // Prompt user for file. Simulate click. Keeping ugly default button hidden
    let fileInput = document.getElementById("file-input-json");
    fileInput.click();
  };

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
            <Button variant="light" onClick={handleLoad}>
              <FaFolderOpen />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger placement="bottom" overlay={tooltip("Save")}>
            <Button variant="light" onClick={handleSave}>
              <FaSave />
            </Button>
          </OverlayTrigger>
        </NavItem>
        <NavItem>
          <Col>
            <SearchBar {...restProps} />
          </Col>
        </NavItem>
      </Nav>
      <Nav>
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
    searchInternal: bool.isRequired,
  }),
};

export default React.memo(NavBar);
