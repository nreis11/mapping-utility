import React from "react";
import { string } from "prop-types";
import BoardNameForm from "./BoardNameForm";

const style = {
  fontSize: "1.5em"
};

const Header = ({ name, isInternal, handleBoardNameChange }) => {
  return (
    <div>
      <h2 style={style}>
        {isInternal && <span className="pull-left">{name}</span>}
        {!isInternal && (
          <BoardNameForm
            name={name}
            handleBoardNameChange={handleBoardNameChange}
          />
        )}
      </h2>
    </div>
  );
};

Header.propTypes = {
  name: string.isRequired
};

export default Header;
