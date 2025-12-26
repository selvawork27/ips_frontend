import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="mobile-header">
        <button className="menu-btn" onClick={() => setOpen(true)}>
          ☰
        </button>
        <h3>ZAM_TRUE_TECH PAYMENT SYSTEM</h3>
      </header>
      <div className="app-layout">
        <Sidebar open={open} onClose={() => setOpen(false)} />
        <main className="content">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
