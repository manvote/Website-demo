import React, { useEffect, useState } from "react";
import API from "../api";
import "./admin-home.css";
import AdminLoader from "./AdminLoader";


const AdminHome = () => {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    API.get("/api/admin/dashboard/summary/")
      .then((res) => setSummary(res.data))
      .catch(() => console.log("Error"));
  }, []);

  if (!summary) return <AdminLoader label="Loading dashboard insights…" />;

  return (
    <div className="dashboard-grid">
      <div className="dashboard-card">
        <span>Total Jobs</span>
        <h3>{summary.total_jobs}</h3>
      </div>

      <div className="dashboard-card">
        <span>Applications</span>
        <h3>{summary.total_applications}</h3>
      </div>

      <div className="dashboard-card">
        <span>Last 7 Days</span>
        <h3>{summary.recent_applications}</h3>
      </div>
    </div>
  );
};

export default AdminHome;