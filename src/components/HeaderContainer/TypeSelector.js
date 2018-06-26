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
      showAlert: false
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleCancel() {
    this.setState({
      showAlert: false
    });
  }

  handleSelect(key) {
    // Check for mapping
    const isMapping = checkForMapping(this.props.treeData);
    if (isMapping) {
      const showAlert = true;
      this.setState({
        showAlert
      });
      return;
    }
    const type = this.state.types.find(type => type.name === key);
    const name = type.name;
    this.setState({
      activeType: name
    });
    this.props.onSelect(name);
  }

  render(props) {
    const { types, activeType, showAlert } = this.state;

    return (
      <Col className="pull-right">
        {showAlert && <ChangeTypeAlert handleCancel={this.handleCancel} />}
        <Nav
          bsStyle="pills"
          activeKey={activeType}
          onSelect={this.handleSelect}
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
