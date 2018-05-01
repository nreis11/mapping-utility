import React from 'react';
import { Well } from 'react-bootstrap';
import './Tree.css';

class Tree extends React.Component {

    render() {

        const style = {
          border: "solid",
          height: '500px',
          overflow: "hidden",
          marginBottom: '0'
        }

        return(
            <div className="col-sm-5">
              <Well style={style} bsSize="small">
              </Well>
            </div>
        )
    }
}

export default Tree;