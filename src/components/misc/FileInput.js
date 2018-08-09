import React from "react";

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

    if (type === "JSON" && file.type !== "application/json") {
      typeAlert(type);
      return false;
    } else if (type === "YAML" && file.type !== "application/x-yaml") {
      typeAlert(type);
      return false;
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

export default FileInput;
