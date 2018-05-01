import React from 'react';
import { Col, Button } from 'react-bootstrap';

const ExportButton = (props) => {

    const btnStyle = {
      position: "absolute",
      right: 15,
      bottom: 15,
    }

    const colStyle = {
      paddingLeft: "15px",
      paddingRight: "15px",
      flex: "1",
    }

    return(
      <Col sm={12} md={5} mdOffset={2} style={colStyle}>
        <Button style={btnStyle} bsStyle="success">Export</Button>
      </Col>
    )
}

export default ExportButton;