import React from "react";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";

class BoardNameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true
    };
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.props.handleBoardNameChange(name, value);
  }

  handleEdit(e) {
    e.preventDefault();
    this.setState(prevState => ({
      disabled: !prevState.disabled
    }));
  }

  render() {
    const { disabled } = this.state;
    const { name } = this.props;

    return (
      <Form className="pull-left" onSubmit={this.handleEdit} inline>
        <FormGroup controlId="formBoardName">
          <FormControl
            type="text"
            placeholder="Board Name"
            name="boardName"
            disabled={disabled}
            value={name}
            style={{ fontSize: "1em" }}
            onChange={e => this.handleChange(e)}
          />
        </FormGroup>
        <Button onClick={this.handleEdit}>{disabled ? "Edit" : "Save"}</Button>
      </Form>
    );
  }
}

export default BoardNameForm;
