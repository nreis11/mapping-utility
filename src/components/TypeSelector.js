import React from "react";
import { Col, Nav, NavItem } from "react-bootstrap";

class TypeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.eachType = this.eachType.bind(this);
  }

  eachType(type, i) {
    return (
      <NavItem key={type.name} eventKey={type.name} title={type.label}>
        {type.label}
      </NavItem>
    );
  }

  render(props) {
    const { activeKey, onSelect, types } = this.props;

    return (
      <Col className="pull-right">
        <Nav bsStyle="pills" activeKey={activeKey} onSelect={k => onSelect(k)}>
          {types.map(this.eachType)}
        </Nav>
      </Col>
    );
  }
}

export default TypeSelector;
