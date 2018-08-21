import React from "react";
import { Button } from "react-bootstrap";
import { firebase } from "../../firebase";
import { FaSignOutAlt } from "react-icons/fa";

const LogOutButton = () => {
  const logOut = () => {
    firebase.auth.signOut().catch(e => console.log(e));
    let localStorage = window.localStorage;
    if (localStorage) {
      localStorage.clear();
    }
  };

  return (
    <Button onClick={logOut}>
      <FaSignOutAlt className="react-icons" /> Log Out
    </Button>
  );
};

export default LogOutButton;
