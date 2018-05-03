import React from 'react';
import { Col, Button } from 'react-bootstrap';

const ExportButton = (props) => {

    const btnStyle = {
      position: "absolute",
      right: 15,
      bottom: 0,
    }

    const colStyle = {
      paddingLeft: "15px",
      paddingRight: "15px",
      flex: "1",
    }

    return(
      <Col sm={4} md={1} style={colStyle}>
        <Button style={btnStyle} bsStyle="success">Export</Button>
      </Col>
    )
}

export default ExportButton;