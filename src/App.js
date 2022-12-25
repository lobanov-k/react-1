import React, { useState } from "react";
import { Backdrop } from "./Components/Backdrop";
import { Sidebar } from "./Components/Sidebar";
import { ToolBar } from "./Components/ToolBar";
import { Counter } from "./Components/Counter";

export const App = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };

  return (
    <>
      <ToolBar openSidebar={toggleSidebar} />
      <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
      <Sidebar sidebar={sidebar} />
      <Counter />
    </>
  );
};
