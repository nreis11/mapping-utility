import React from "react";
import { Col, ButtonToolbar, DropdownButton, MenuItem } from "react-bootstrap";
import { func, string } from "prop-types";
import { TYPES } from "../../utilities/mappingHelpers";

const TypeSelector = ({ activeType, onSelect }) => {
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
};

TypeSelector.propTypes = {
  onSelect: func.isRequired,
  activeType: string.isRequired
};

export default React.memo(TypeSelector);
