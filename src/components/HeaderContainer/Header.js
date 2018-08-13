import React from "react";
import { string, bool, func } from "prop-types";
import BoardNameForm from "./BoardNameForm";

const style = {
  fontSize: "1.5em"
};

const Header = ({ name, isInternal, handleInputChange }) => {
  return (
    <div>
      <h2 style={style}>
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
