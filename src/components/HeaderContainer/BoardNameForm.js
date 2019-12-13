import React from "react";
import {
  Form,
  FormGroup,
  FormControl,
  Button,
  InputGroup
} from "react-bootstrap";
import { string, func } from "prop-types";
import { FaPencilAlt } from "react-icons/fa";
import "./BoardNameForm.css";

class BoardNameForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleDisabled = this.toggleDisabled.bind(this);
  }

  handleChange(e) {
    this.props.handleInputChange(e);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.props.boardName) {
      return;
    }

    this.toggleDisabled();
  }

  toggleDisabled() {
    this.setState(prevState => ({
      disabled: !prevState.disabled
    }));
  }

  handleEdit(e) {
    const { disabled } = this.state;
    !disabled ? this.handleSubmit(e) : this.toggleDisabled();
  }

  render() {
    const { disabled } = this.state;
    const { boardName } = this.props;

    return (
      <Form onSubmit={this.handleSubmit} inline>
        <FormGroup controlId="form-board-name">
          <FormControl
            type="text"
            placeholder="Board Name"
            name="boardName"
            isInvalid={!boardName}
            disabled={disabled}
            value={boardName}
            onChange={this.handleChange}
          />
        </FormGroup>
        <InputGroup.Append>
          <InputGroup.Text id="board-name-addon1">
            <Button variant="light" onClick={this.handleEdit}>
              <FaPencilAlt />
            </Button>
          </InputGroup.Text>
        </InputGroup.Append>
      </Form>
    );
  }
}

BoardNameForm.propTypes = {
  handleInputChange: func.isRequired,
  boardName: string.isRequired
};

export default BoardNameForm;
