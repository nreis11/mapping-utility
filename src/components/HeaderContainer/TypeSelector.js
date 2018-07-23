import React from "react";
import { Col, Nav, NavItem } from "react-bootstrap";
import { isMapped } from "../../utilities/mappingHelpers";
import ChangeTypeAlert from "../MainContainer/ChangeTypeAlert";

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
      showAlert: false
    });
  }

  handleCheck(key) {
    // Check for mapping. Alert user if mappings will be lost.
    if (isMapped(this.props.treeData)) {
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
        <Nav
          bsStyle="pills"
          activeKey={activeType}
          onSelect={key => this.handleCheck(key)}
        >
          {Object.keys(TYPES).map(type => (
            <NavItem key={type} eventKey={type} title={TYPES[type]}>
              {TYPES[type]}
            </NavItem>
          ))}
        </Nav>
      </Col>
    );
  }
}

export default TypeSelector;
