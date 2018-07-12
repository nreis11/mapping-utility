import React from "react";
import {
  Form,
  FormControl,
  FormGroup,
  Button,
  InputGroup,
  Checkbox
} from "react-bootstrap";
import { string, func, number, bool } from "prop-types";
import FaSearch from "react-icons/lib/fa/search";

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
    const {
      searchString,
      searchFocusIndex,
      searchFoundCount,
      onSearchOptionChange,
      searchInternal
    } = this.props;

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
        style={{ display: "inline-block" }}
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <FormGroup controlId="searchInput">
          <InputGroup>
            <InputGroup.Addon>
              <FaSearch />
            </InputGroup.Addon>
            <FormControl
              type="text"
              placeholder={
                searchInternal ? "Search eQuest..." : "Search Board..."
              }
              value={searchString}
              onChange={this.handleChange}
            />
          </InputGroup>
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
        <FormGroup style={{ marginLeft: 10, color: "white" }}>
          <Checkbox
            name="searchInternal"
            checked={searchInternal}
            onChange={onSearchOptionChange}
            inline
          >
            Search eQuest
          </Checkbox>
        </FormGroup>
      </Form>
    );
  }
}

SearchBar.propTypes = {
  searchString: string,
  onSearchFocusChange: func.isRequired,
  handleSearch: func.isRequired,
  searchFocusIndex: number.isRequired,
  searchInternal: bool.isRequired
};

SearchBar.defaultProps = {
  searchString: ""
};

export default SearchBar;
