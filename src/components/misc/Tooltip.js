import React from "react";
import { Tooltip } from "react-bootstrap";

const tooltip = (text) => <Tooltip id={`tooltip-${text}`}>{text}</Tooltip>;

export default tooltip;
