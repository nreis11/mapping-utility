import React from "react";
import {
  Form,
  FormControl,
  Button,
  InputGroup,
  FormCheck,
  Col
} from "react-bootstrap";
import { shape, string, func, number, bool } from "prop-types";
import { FaSearch } from "react-icons/fa";

class SearchBar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(e) {
    e.stopPropagation();
    this.props.handleInputChange(e);
  }

  handleKeyDown(e) {
    // Needed because handleChange does not fire with ESC
    const { searchInternal } = this.props.searchValues;
    e.stopPropagation();
    if (e.keyCode === 27) {
      // "ESC"
      // Refocus tree to allow navigation and mapping
      e.preventDefault();
      const scrollableTreeContainer = document.querySelectorAll(
        ".ReactVirtualized__Grid"
      )[searchInternal ? 1 : 0];
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
      this.props.handleInputChange(e);
    };

    const selectNextMatch = e => {
      const idx =
        searchFocusIndex !== null
          ? (searchFocusIndex + 1) % searchFoundCount
          : 0;
      e.target.value = idx;
      this.props.handleInputChange(e);
    };

    return (
      // Can't use Navbar.Form. It doesn't allow next match on Enter.
      <Form
        inline
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <Form.Group controlId="searchInput">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">
                <FaSearch />
              </InputGroup.Text>
            </InputGroup.Prepend>
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
        </Form.Group>
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
        {/* <Form.Group style={{ marginLeft: 10, color: "white" }}> */}
        {/* Needed to create div to reflect change visually. State was updating, but
        visually no change occured */}
        {/* <div onClick={this.handleChange}> */}
        <Col>
          <FormCheck
            // name="searchInternal"
            style={{ color: "white" }}
            label="Search eQuest"
            type="checkbox"
            checked={searchInternal}
            onChange={this.handleChange}
            inline
          ></FormCheck>
        </Col>
        {/* </div> */}
        {/* </Form.Group> */}
      </Form>
    );
  }
}

SearchBar.propTypes = {
  handleInputChange: func.isRequired,
  searchValues: shape({
    searchString: string.isRequired,
    searchFocusIndex: number.isRequired,
    searchFoundCount: number.isRequired,
    searchInternal: bool.isRequired
  })
};

export default SearchBar;
