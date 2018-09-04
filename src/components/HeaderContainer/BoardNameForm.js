import React from "react";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";
import { string, func } from "prop-types";

class BoardNameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true,
      boardName: "Board"
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleDisabled = this.toggleDisabled.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.name !== this.state.boardName) {
      this.setState({
        boardName: nextProps.name
      });
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let { boardName } = this.state;

    if (!boardName) {
      return;
    }

    const eventObj = {
      target: { name: "boardName", type: "text", value: boardName }
    };

    this.toggleDisabled();
    this.props.handleInputChange(eventObj);
  }

  toggleDisabled() {
    this.setState(prevState => ({
      disabled: !prevState.disabled
    }));
  }

  handleEdit(e) {
    const { disabled } = this.state;
    if (!disabled) {
      this.handleSubmit(e);
    } else {
      this.toggleDisabled();
    }
  }

  render() {
    const { disabled, boardName } = this.state;

    return (
      <Form className="pull-left" onSubmit={this.handleSubmit} inline>
        <FormGroup controlId="formBoardName">
          <FormControl
            type="text"
            placeholder="Board Name"
            name="boardName"
            disabled={disabled}
            value={boardName}
            style={{ fontSize: "inherit" }}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button onClick={this.handleEdit}>{disabled ? "Edit" : "Save"}</Button>
      </Form>
    );
  }
}

BoardNameForm.propTypes = {
  handleInputChange: func.isRequired,
  name: string.isRequired
};

export default BoardNameForm;
