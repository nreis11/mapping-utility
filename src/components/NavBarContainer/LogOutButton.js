import React from "react";
import { Button } from "react-bootstrap";
import { firebase } from "../../firebase";
import { withRouter } from "react-router-dom";

const LogOutButton = props => (
  <Button
    onClick={() =>
      firebase.auth
        .signOut()
        .then(() => {
          props.history.push("/login");
        })
        .catch(e => console.log(e))
    }
  >
    Log Out
  </Button>
);

export default withRouter(LogOutButton);
