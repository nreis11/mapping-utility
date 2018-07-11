import React from "react-sortable-tree";

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.isValidated = this.isValidated.bind(this);
    this.fileInput = React.createRef();
  }
  handleOnChange(event) {
    event.preventDefault();
    const fileInput = this.fileInput.current.files[0];

    // Validate file
    if (this.isValidated(fileInput)) {
      this.props.handleFileInputChange(fileInput);
    }
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
      <input
        type="file"
        id="file-input"
        ref={this.fileInput}
        onChange={this.handleOnChange}
        style={{ display: "none" }}
      />
    );
  }
}

export default FileInput;
