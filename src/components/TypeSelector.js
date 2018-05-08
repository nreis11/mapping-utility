import React from 'react';
import { Col, Nav, NavItem } from 'react-bootstrap';

class TypeSelector extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        types: [
          {id: 1, name: "Category"},
          {id: 2, name: "Industry"},
          {id: 3, name: "State"},
          {id: 4, name: "Country"}
        ],
        activeKey: 1
      }

      this.handleSelect = this.handleSelect.bind(this);
      this.eachType = this.eachType.bind(this);
    }

    handleSelect(eventKey) {
      this.setState({
        activeKey: eventKey
      });
    }

    eachType(type, i) {
      return(
        <NavItem key={type.id} eventKey={type.id} title={type.name}>
          {type.name}
        </NavItem>
      )
    }

    render(props) {

        return(
          <Col>
            <Nav 
              bsStyle="pills"
              activeKey={this.state.activeKey}
              onSelect={k => this.handleSelect(k)}>
                {this.state.types.map(this.eachType)}
            </Nav>
          </Col>
        )
    }
}

export default TypeSelector;



