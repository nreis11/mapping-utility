import React from 'react';
import { Col, DropdownButton, MenuItem } from 'react-bootstrap';

class TypeSelector extends React.Component {
    render() {
      const style = {
        margin: "0 15px"
      }

        return(
            <Col>
              <DropdownButton 
                style={style}
                title="Type"
                key='type'
                id='dropdown-type'>
                  <MenuItem eventKey="1" active>Category</MenuItem>
                  <MenuItem eventKey="2">Industry</MenuItem>
                  <MenuItem eventKey="3">State</MenuItem>
                  <MenuItem eventKey="4">Country</MenuItem>
              </DropdownButton>
            </Col>
        )
    }
}

export default TypeSelector;



