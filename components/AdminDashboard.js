import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./admin-dashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="admin-wrapper">
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <h2 className="admin-logo">Manovate</h2>

        <nav className="admin-nav">
          <p onClick={() => navigate("/admin")} className="admin-link">
            Dashboard
          </p>
          <p onClick={() => navigate("/admin/jobs")} className="admin-link">
            Jobs
          </p>
          <p onClick={() => navigate("/admin/applications")} className="admin-link">
            Applications
          </p>
        </nav>

        <button className="admin-logout" onClick={logout}>
          Logout
        </button>
      </aside>

      {/* CONTENT */}
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;