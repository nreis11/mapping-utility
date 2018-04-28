import React from 'react';
import { Well } from 'react-bootstrap';

class Tree extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {

        const style = {
          border: "solid",
          height: '500px'
        }

        return(
            <div className="col-sm-5">
              <Well style={style} bsSize="large">Data</Well>
            </div>
        )
    }
}

export default Tree;