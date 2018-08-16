import React from "react";
import { string, func } from "prop-types";

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.isValidated = this.isValidated.bind(this);
    this.fileInput = React.createRef();
    this.fileFormRef = React.createRef();
  }
  handleOnChange(event) {
    event.preventDefault();
    const fileInput = this.fileInput.current.files[0];

    if (this.isValidated(fileInput)) {
      this.props.handleOpen(fileInput);
    }
    // Reset form
    this.fileFormRef.reset();
  }

  isValidated(file) {
    const { type } = this.props;
    const typeAlert = type => alert(`File must be in ${type} format.`);
    const fileName = file.name.toLowerCase();

    switch (type) {
      case "json":
        if (fileName.indexOf(".json") === -1) {
          typeAlert(type);
          return false;
        }
        break;
      case "yaml":
        if (
          fileName.indexOf(".yaml") === -1 &&
          fileName.indexOf(".yml") === -1
        ) {
          typeAlert(type);
          return false;
        }
        break;
      default:
        break;
    }
    return true;
  }

  render() {
    const { type } = this.props;

    return (
      <form ref={el => (this.fileFormRef = el)}>
        <input
          type="file"
          id={`file-input-${type}`}
          ref={this.fileInput}
          onChange={this.handleOnChange}
          style={{ display: "none" }}
        />
      </form>
    );
  }
}

FileInput.propTypes = {
  type: string.isRequired,
  handleOpen: func.isRequired
};

export default FileInput;
