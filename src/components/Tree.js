import React from 'react';
import { Button, Col, Well } from 'react-bootstrap';
import './Tree.css';

class Tree extends React.Component {

    render() {

        const style = {
          border: "solid",
          height: '500px'
        }

        return(
            <div className="col-sm-5">
              <Well style={style} bsSize="small">
                {!this.props.internal && 
                  <div className="container vertical-center">
                      <Button bsStyle="success">Add/Edit</Button>
                  </div>
                }
              </Well>
            </div>
        )
    }
}

export default Tree;