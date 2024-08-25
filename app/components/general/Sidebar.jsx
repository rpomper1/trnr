import React, { useState, useEffect } from "react";
import Toggler from "./Toggler";

const Sidebar = ({ children, isCollapsed }) => {
  const [isOpen, toggleIsOpen] = useState(isCollapsed);
  const [prevIsCollapseFromParent, setParentCollapse] = useState(!isCollapsed);
  const color = "bg-white";
  const [classCollapsed, setCollapsed] = useState("");

  useEffect(() => {
    const c = isOpen ? ` collapsed ` : "";
    setCollapsed(c);
    if (isCollapsed === prevIsCollapseFromParent) {
      toggleIsOpen(isCollapsed);
      setParentCollapse(!isCollapsed);
    }
  }, [isOpen, isCollapsed, prevIsCollapseFromParent]);

  const toggleIsOpenCustom = (val) => {
    isCollapsed = val;
    toggleIsOpen(val);
  };

  return (
    <div
      className={`container-wrapper ${color} ${classCollapsed} flex flex-col gap-2`}
    >
      <Toggler isCollapsed={isOpen} toggleIsOpen={toggleIsOpen} />
      {isOpen ? "" : children}
    </div>
  );
};

export default Sidebar;
