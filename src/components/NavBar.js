import React from 'react';
import { Row, Col, Navbar, ButtonGroup, Button } from 'react-bootstrap';
import FaFloppyO from 'react-icons/lib/fa/floppy-o';
import FaOpen from 'react-icons/lib/fa/folder-open-o';

const NavBar = (props) => {
    const headerStyle = {
      color: "white",
      fontSize: "2em",
    }

    const centered = {
      margin: "auto 0"
    }

    return(


      <Row className='show-grid'>
        <Col xs={12}>
          <Navbar style={{}} inverse fixedTop fluid>
          <div className="container centered">
            <h1 style={headerStyle}>Mapping Utility</h1>
            <ButtonGroup style={{position: "absolute", left: '0'}}>
              <Button><FaOpen /></Button>
              <Button><FaFloppyO /></Button>
            </ButtonGroup>
          </div>
          </Navbar>
        </Col>
      </Row>
    )
}

export default NavBar;