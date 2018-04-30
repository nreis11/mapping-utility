import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import FaForward from 'react-icons/lib/fa/forward';
import FaBackward from 'react-icons/lib/fa/backward';

class ActionBar extends React.Component {
    render() {

        const buttonGroupStyle = {
          marginBottom: "15%",
        }

        return(
            <div className="col-sm-2 text-center">
              <ButtonGroup style={buttonGroupStyle}>
                <Button bsStyle="primary" block>&gt; Map &gt;<br /> (single) </Button>
                <Button bsStyle="primary" block><FaForward /> Map Node <FaForward /><br /> (preserve) </Button>
                <Button bsStyle="primary" block><FaForward /> Map Node <FaForward /><br /> (overwrite) </Button>
              </ButtonGroup>
              <ButtonGroup style={buttonGroupStyle}>
                <Button bsStyle="primary" block>Highlight Missing Maps</Button>
                <Button bsStyle="primary" block><FaBackward /> Clear this map</Button>
                <Button bsStyle="primary" block><FaBackward /> Cleat Entire Node</Button>
              </ButtonGroup>
              <ButtonGroup style={buttonGroupStyle}>
                <Button bsStyle="primary"><FaBackward /></Button><Button disabled>Expand All</Button><Button bsStyle="primary"><FaForward /></Button>
              </ButtonGroup>
              <ButtonGroup style={buttonGroupStyle}>
                <Button bsStyle="primary"><FaBackward /></Button><Button disabled>Collapse All</Button><Button bsStyle="primary"><FaForward /></Button>
              </ButtonGroup>
            </div>
        )
    }
};

export default ActionBar;