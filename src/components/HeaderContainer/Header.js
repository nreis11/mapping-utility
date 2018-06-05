import React from "react";
import { string } from "prop-types";

const style = {
  fontSize: "1.5em"
};

const Header = ({ name }) => (
  <h2 style={style}>
    <span className="pull-left">{name}</span>
  </h2>
);

Header.propTypes = {
  name: string.isRequired
};

export default Header;
