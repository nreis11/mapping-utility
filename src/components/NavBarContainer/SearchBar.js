import React from "react";
import { Navbar, FormControl, FormGroup, Button } from "react-bootstrap";
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
          ? (searchFoundCount + searchFocusIndex + 1) % searchFoundCount
          : searchFoundCount + 1;
      this.props.onSearchFocusChange(idx);
    };

    return (
      <Navbar.Form
        style={{ display: "inline", paddingLeft: 0 }}
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
      </Navbar.Form>
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
