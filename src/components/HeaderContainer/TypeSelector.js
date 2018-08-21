import React from "react";
import { Col, ButtonToolbar, DropdownButton, MenuItem } from "react-bootstrap";
import { _isMapped } from "../../utilities/mappingHelpers";
import ChangeTypeAlert from "./ChangeTypeAlert";

const TYPES = {
  categories: "Category",
  industries: "Industry",
  states: "State",
  countries: "Country"
};

class TypeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      selectedKey: null
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleCancelAlert = this.handleCancelAlert.bind(this);
  }

  handleCancelAlert() {
    this.setState({
      showAlert: false,
      selectedKey: null
    });
  }

  handleCheck(key) {
    // Check for mapping. Alert user if mappings will be lost.
    if (_isMapped(this.props.treeData)) {
      this.setState({
        showAlert: true,
        selectedKey: key
      });
      return;
    }
    this.handleSelect(key);
  }

  handleSelect(key) {
    this.handleCancelAlert();
    this.props.onSelect(key);
  }

  render() {
    const { activeType } = this.props;
    const { showAlert, selectedKey } = this.state;

    return (
      <Col className="pull-right">
        {showAlert && (
          <ChangeTypeAlert
            handleCancel={this.handleCancelAlert}
            handleConfirm={() => this.handleSelect(selectedKey)}
          />
        )}
        <ButtonToolbar>
          <DropdownButton
            title={TYPES[activeType]}
            bsStyle="info"
            bsSize="small"
            id={`dropdown-basic-type`}
            style={{ width: 82 }}
          >
            {Object.keys(TYPES).map(type => (
              <MenuItem
                key={type}
                eventKey={type}
                onSelect={type => this.handleCheck(type)}
                active={activeType === type ? true : false}
              >
                {TYPES[type]}
              </MenuItem>
            ))}
          </DropdownButton>
        </ButtonToolbar>
      </Col>
    );
  }
}

export default TypeSelector;
