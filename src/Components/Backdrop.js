import React from "react";

export const Backdrop = ({ sidebar, closeSidebar }) => {
  return (
    <div
      className={sidebar ? "backdrop backdrop--open" : "backdrop"}
      onClick={closeSidebar}
    />
  );
};
