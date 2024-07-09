import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Toggler = ({ isCollapsed, toggleIsOpen, classes }) => {
  return (
    <span onClick={() => toggleIsOpen(!isCollapsed)}>
      {isCollapsed ? (
        <FontAwesomeIcon icon={faBars} />
      ) : (
        <FontAwesomeIcon icon={faClose} />
      )}
    </span>
  );
};

export default Toggler;
