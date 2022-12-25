import React from "react";

export const ToolBar = ({ openSidebar }) => {
  return (
    <div className="tool-bar">
      <div className="burger" onClick={openSidebar}>
        <i class="ri-menu-line"></i>
      </div>
      <div className="title">React App</div>
    </div>
  );
};
