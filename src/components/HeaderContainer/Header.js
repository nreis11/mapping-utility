import React from "react";
import { string, bool, func } from "prop-types";
import BoardNameForm from "./BoardNameForm";

const Header = ({ name, isInternal, handleInputChange }) => {
  return (
    <div>
      <h2 style={{ fontSize: "1.5em" }}>
        {/* LEFT HEADER */}
        {isInternal && <span className="pull-left">{name}</span>}
        {/* RIGHT HEADER */}
        {!isInternal && (
          <BoardNameForm name={name} handleInputChange={handleInputChange} />
        )}
      </h2>
    </div>
  );
};

Header.propTypes = {
  name: string.isRequired,
  isInternal: bool,
  handleInputChange: func
};

Header.defaultProps = {
  isInternal: false,
  handleInputChange: null
};

export default Header;
