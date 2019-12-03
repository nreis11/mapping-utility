import React from "react";
import { Dropdown } from "react-bootstrap";
import { func, string } from "prop-types";
import { TYPES } from "../../utils/mappingHelpers";

const TypeSelector = ({ activeType, onSelect }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="info"
        id="dropdown-basic-type"
        style={{ width: 100 }}
      >
        {TYPES[activeType]}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {Object.keys(TYPES).map(type => (
          <Dropdown.Item
            key={type}
            eventKey={type}
            onSelect={type => onSelect(type)}
            active={activeType === type ? true : false}
          >
            {TYPES[type]}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

TypeSelector.propTypes = {
  onSelect: func.isRequired,
  activeType: string.isRequired
};

export default React.memo(TypeSelector);
