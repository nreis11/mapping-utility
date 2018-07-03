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
    const { searchString, searchFocusIndex, searchFoundCount } = this.props;

    const selectPrevMatch = () => {
      const idx =
        searchFocusIndex !== null
          ? (searchFoundCount + searchFocusIndex - 1) % searchFoundCount
          : searchFoundCount - 1;
      this.props.onSearchFocusChange(idx);
    };

    const selectNextMatch = () => {
      const idx =
        searchFocusIndex !== null
          ? (searchFocusIndex + 1) % searchFoundCount
          : 0;
      this.props.onSearchFocusChange(idx);
    };

    return (
      // Can't use Navbar.Form. It doesn't allow next match on Enter.
      <Form
        inline
        style={{ display: "inline-block", paddingLeft: 0 }}
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <FormGroup controlId="searchInput">
          <FormControl
            type="text"
            placeholder="Search..."
            value={searchString}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button
          type="button"
          disabled={!searchFoundCount}
          onClick={selectPrevMatch}
        >
          &lt;
        </Button>
        <Button
          type="submit"
          disabled={!searchFoundCount}
          onClick={selectNextMatch}
        >
          &gt;
        </Button>
        <span style={{ color: "white" }}>
          &nbsp;
          {searchFoundCount > 0 ? searchFocusIndex + 1 : 0}
          &nbsp;/&nbsp;
          {searchFoundCount || 0}
        </span>
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
