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
    const { boardName } = this.state;

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
    !disabled ? this.handleSubmit(e) : this.toggleDisabled();
  }

  render() {
    const { disabled, boardName } = this.state;

    return (
      <Form onSubmit={this.handleSubmit} inline>
        <FormGroup controlId="formBoardName">
          <FormControl
            type="text"
            placeholder="Board Name"
            name="boardName"
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
  name: string.isRequired
};

export default BoardNameForm;
