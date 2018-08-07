import React from "react";
import { Button } from "react-bootstrap";
import { firebase } from "../../firebase";
import { FaSignOutAlt } from "react-icons/fa";

const LogOutButton = () => (
  <Button onClick={() => firebase.auth.signOut().catch(e => console.log(e))}>
    <FaSignOutAlt className="react-icons" /> Log Out
  </Button>
);

export default LogOutButton;
