import React from "react";
import { Col, Nav, NavItem } from "react-bootstrap";

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
      activeType: "categories"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key) {
    const type = this.state.types.find(type => type.name === key);
    const name = type.name;
    this.setState({
      activeType: name
    });
    this.props.onSelect(name);
  }

  render(props) {
    const { types, activeType } = this.state;

    return (
      <Col className="pull-right">
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
