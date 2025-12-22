import React, { useEffect, useState } from "react";
import API from "../api";
import "./admin-applications.css";

const AdminApplications = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    API.get("/api/admin/applications/")
      .then((res) => setApps(res.data.results || res.data))
      .catch(() => console.log("Error loading applications"));
  }, []);

  return (
    <div className="admin-applications">
      <h2>Applied Candidates</h2>

      <div className="applications-table-wrapper">
        <table className="applications-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Job</th>
              <th>Cover Note</th>
              <th>Resume</th>
            </tr>
          </thead>

          <tbody>
            {apps.map((a) => (
              <tr key={a.id}>
                <td>{a.full_name}</td>
                <td>{a.email}</td>
                <td>{a.phone}</td>
                <td>{a.job_title}</td>
                <td className="cover-note">{a.cover_note || "-"}</td>
                <td>
                  <a
                    href={a.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="resume-link"
                  >
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminApplications;