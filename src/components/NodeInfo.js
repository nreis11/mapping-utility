import React from 'react';
import './NodeInfo.css';

import { Col } from 'react-bootstrap';

const NodeInfo = (props) => {

    return(
        <Col sm={12} md={5}>
            <p style={{marginBottom: 0}}>
              <span className="info">Node Info</span>
            </p>
            <div className="info pull-left">
              <p>Label</p>
            </div>
            <div className="info pull-right">
              <p className="text-right">Value</p>
            </div>
            <div className="clearfix"></div>
        </Col>

    )
}

export default NodeInfo;