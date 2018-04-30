import React from 'react';
import { Row, Col, Navbar, ButtonGroup, Button } from 'react-bootstrap';
import FaFloppyO from 'react-icons/lib/fa/floppy-o';
import FaOpen from 'react-icons/lib/fa/folder-open-o';

const NavBar = (props) => {
    return(
      <Row className='show-grid'>
        <Col xs={2}>
        <Navbar style={{padding: "0 5%"}} inverse fixedTop fluid>
          <ButtonGroup>
            <Button><FaOpen /></Button>
            <Button><FaFloppyO /></Button>
          </ButtonGroup>
        </Navbar>
        </Col>
      </Row>
    )
}

export default NavBar;