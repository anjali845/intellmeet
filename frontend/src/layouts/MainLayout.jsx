import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import "./MainLayout.css";

const PAGE_TITLES = {
  "/dashboard": "Dashboard",
  "/profile": "Profile",
};

function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const title = PAGE_TITLES[location.pathname] ?? "IntellMeet";

  return (
    <div className="main-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="main-layout__content">
        <Navbar title={title} onMenuClick={() => setSidebarOpen(true)} />
        <main className="main-layout__page">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;