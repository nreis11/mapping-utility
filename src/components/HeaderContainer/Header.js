import React from "react";

const Header = props => {
  return (
    <h2 style={{ fontSize: "1.5em", display: "inline" }}>{props.children}</h2>
  );
};

export default React.memo(Header);
