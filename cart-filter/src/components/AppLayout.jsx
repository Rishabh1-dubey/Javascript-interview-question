import React from "react";
import Home from "./Home";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div>
      <header className="p-6">
        <Header />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
