import React from "react";
import Navbar from "./Navbar";

const PageLayout = ({ children }) => {
  return (
    <main className="app-wrapper">
      <div id="sidebar">
        <Navbar />
      </div>
      {children}
    </main>
  );
};

export default PageLayout;
