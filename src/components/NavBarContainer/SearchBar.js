import React from "react";
import {
  Form,
  FormControl,
  FormGroup,
  Button,
  InputGroup,
  Checkbox
} from "react-bootstrap";
import { shape, string, func, number, bool } from "prop-types";
import { FaSearch } from "react-icons/fa";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(e) {
    const { handleInputChange } = this.props.searchValues;
    handleInputChange(e);
  }

  handleKeyDown(e) {
    // Needed because handleChange does not fire with ESC
    const { keyCode } = e;
    if (keyCode === 27) {
      // "ESC"
      // Refocus tree to allow navigation and mapping
      e.preventDefault();
      const scrollableTreeContainer = document.querySelectorAll(
        ".ReactVirtualized__Grid"
      )[this.props.searchInternal ? 1 : 0];
      if (scrollableTreeContainer) {
        scrollableTreeContainer.focus();
      }
    }
    return;
  }

  render() {
    const {
      searchString,
      searchFocusIndex,
      searchFoundCount,
      searchInternal
    } = this.props.searchValues;

    const selectPrevMatch = e => {
      const idx =
        searchFocusIndex !== null
          ? (searchFoundCount + searchFocusIndex - 1) % searchFoundCount
          : searchFoundCount - 1;
      e.target.value = idx;
      this.props.searchValues.handleInputChange(e);
    };

    const selectNextMatch = e => {
      const idx =
        searchFocusIndex !== null
          ? (searchFocusIndex + 1) % searchFoundCount
          : 0;
      e.target.value = idx;
      this.props.searchValues.handleInputChange(e);
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
              name={"searchString"}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
            />
          </InputGroup>
        </FormGroup>
        <Button
          type="button"
          name="searchFocusIndex"
          disabled={!searchFoundCount}
          onClick={selectPrevMatch}
        >
          &lt;
        </Button>
        <Button
          type="submit"
          name="searchFocusIndex"
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
            onChange={this.handleChange}
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
  searchValues: shape({
    searchString: string.isRequired,
    handleInputChange: func.isRequired,
    searchFocusIndex: number.isRequired,
    searchInternal: bool.isRequired
  })
};

export default SearchBar;
