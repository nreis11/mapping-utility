import React from "react";
import { Col, Nav, NavItem } from "react-bootstrap";

class TypeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.eachType = this.eachType.bind(this);
  }

  eachType(type, i) {
    return (
      <NavItem key={type.id} eventKey={type.id} title={type.label}>
        {type.label}
      </NavItem>
    );
  }

  render(props) {
    return (
      <Col>
        <Nav
          bsStyle="pills"
          activeKey={this.props.activeKey}
          onSelect={k => this.props.onSelect(k)}
        >
          {this.props.types.map(this.eachType)}
        </Nav>
      </Col>
    );
  }
}

export default TypeSelector;
