import React from 'react';
import { Col, Button } from 'react-bootstrap';

const AddDataButton = (props) => {
    return(
      <Col sm={12} md={5}>
        <Button bsStyle="success">Add/Edit</Button>
      </Col>
    ) 
    
}

export default AddDataButton;