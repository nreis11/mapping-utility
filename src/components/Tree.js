import React from 'react';
import { Col, Well } from 'react-bootstrap';
import './Tree.css';

class Tree extends React.Component {
    render() {

        const style = {
          border: "solid",
          height: '500px',
          overflow: "hidden",
        }

        // const treeClass = this.props.internal ? "internal" : "board";

        return(
            <Col md={5}>
              <Well className='' style={style} bsSize="small">
              </Well>
            </Col>
        )
    }
}

export default Tree;