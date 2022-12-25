import React from "react";

export const Sidebar = ({ sidebar }) => {
  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <li>
        <i class="ri-home-line"></i>Home
      </li>
      <li>
        <i class="ri-contacts-line"></i>Contact
      </li>
      <li>
        <i class="ri-information-line"></i>About Us
      </li>
    </div>
  );
};
