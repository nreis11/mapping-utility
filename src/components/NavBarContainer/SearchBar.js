import React from "react";
import { Form, FormControl, FormGroup, Button } from "react-bootstrap";
import { string } from "prop-types";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const searchString = e.target.value;
    this.props.handleSearch(searchString);
  }

  render() {
    const { searchString } = this.props;

    return (
      <Form
        style={{ display: "inline" }}
        onSubmit={e => e.preventDefault()}
        inline
      >
        <FormGroup controlId="searchInput">
          <FormControl
            type="text"
            placeholder="Search..."
            value={searchString}
            onChange={this.handleChange}
          />
        </FormGroup>{" "}
        <Button type="submit">Search</Button>
      </Form>
    );
  }
}

SearchBar.propTypes = {
  searchString: string
};

SearchBar.defaultProps = {
  searchString: ""
};

export default SearchBar;
