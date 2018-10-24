import React from "react";

const Header = React.memo(props => {
  return (
    <div>
      <h2 style={{ fontSize: "1.5em" }}>{props.children}</h2>
    </div>
  );
});

export default Header;
