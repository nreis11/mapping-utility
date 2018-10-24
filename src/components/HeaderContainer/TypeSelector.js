import React from "react";
import { Col, ButtonToolbar, DropdownButton, MenuItem } from "react-bootstrap";
import { func, string } from "prop-types";

const TYPES = {
  categories: "Category",
  industries: "Industry",
  states: "State",
  countries: "Country"
};

const TypeSelector = React.memo(({ activeType, onSelect }) => {
  return (
    <Col className="pull-right">
      <ButtonToolbar>
        <DropdownButton
          title={TYPES[activeType]}
          bsStyle="info"
          bsSize="small"
          id={`dropdown-basic-type`}
          style={{ width: 82 }}
        >
          {Object.keys(TYPES).map(type => (
            <MenuItem
              key={type}
              eventKey={type}
              onSelect={type => onSelect(type)}
              active={activeType === type ? true : false}
            >
              {TYPES[type]}
            </MenuItem>
          ))}
        </DropdownButton>
      </ButtonToolbar>
    </Col>
  );
});

TypeSelector.propTypes = {
  onSelect: func.isRequired,
  activeType: string.isRequired
};

export default TypeSelector;
