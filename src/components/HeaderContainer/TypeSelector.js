import React from "react";
import { Col, Nav, NavItem } from "react-bootstrap";
import { checkForMapping } from "../../helpers";
import ChangeTypeAlert from "../MainContainer/ChangeTypeAlert";

class TypeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [
        { name: "categories", label: "Category" },
        { name: "industries", label: "Industry" },
        { name: "states", label: "State" },
        { name: "countries", label: "Country" }
      ],
      activeType: "categories",
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
    const isMapping = checkForMapping(this.props.treeData);
    if (isMapping) {
      this.setState({
        showAlert: true,
        selectedKey: key
      });
      return;
    }
    this.handleSelect(key);
  }

  handleSelect(key) {
    key = key || this.state.selectedKey;
    const { name } = this.state.types.find(type => type.name === key);
    // const { name } = type;
    this.setState({
      activeType: name
    });
    this.handleCancelAlert();
    this.props.onSelect(name);
  }

  render(props) {
    const { types, activeType, showAlert } = this.state;

    return (
      <Col className="pull-right">
        {showAlert && (
          <ChangeTypeAlert
            handleCancel={this.handleCancelAlert}
            handleConfirm={this.handleSelect}
          />
        )}
        <Nav
          bsStyle="pills"
          activeKey={activeType}
          onSelect={key => this.handleCheck(key)}
        >
          {types.map(type => (
            <NavItem key={type.name} eventKey={type.name} title={type.label}>
              {type.label}
            </NavItem>
          ))}
        </Nav>
      </Col>
    );
  }
}

export default TypeSelector;
