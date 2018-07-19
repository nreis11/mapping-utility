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

    // Validate file
    if (this.isValidated(fileInput)) {
      this.props.handleOpen(fileInput);
    }
    // Reset form
    this.fileFormRef.reset();
  }

  isValidated(file) {
    if (file.type !== "application/json") {
      alert("File must be in JSON format.");
      return false;
    }
    return true;
  }

  render() {
    return (
      <form ref={el => (this.fileFormRef = el)}>
        <input
          type="file"
          id="file-input"
          ref={this.fileInput}
          onChange={this.handleOnChange}
          style={{ display: "none" }}
        />
      </form>
    );
  }
}

export default FileInput;
