import React, { useEffect, useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import AdminLoader from "./AdminLoader";
import JobFormModal from "./JobFormModal";
import "./admin-jobs.css";

const AdminJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);

  const navigate = useNavigate();

  const loadJobs = () => {
    setLoading(true);
    API.get("/api/admin/jobs/")
      .then((res) => setJobs(res.data.results || res.data))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadJobs();
  }, []);

  const deleteJob = (id) => {
    if (!window.confirm("Delete this job?")) return;

    API.delete(`/api/admin/jobs/${id}/`).then(() => {
      setJobs((prev) => prev.filter((j) => j.id !== id));
    });
  };

  if (loading) {
    return <AdminLoader label="Loading job openings…" />;
  }

  return (
    <div className="admin-jobs-wrapper">
      {/* HEADER */}
      <div className="admin-jobs-header">
        <h2>Job Openings</h2>

        <button
          className="admin-primary-btn"
          onClick={() => {
            setEditingJob(null);   // ADD MODE
            setShowModal(true);
          }}
        >
          + Add Job
        </button>
      </div>

      {/* JOB GRID */}
      <div className="admin-jobs-grid">
        {jobs.map((job) => (
          <div key={job.id} className="admin-job-card">
            <h3>{job.title}</h3>

            <p className="job-short-desc">
              {job.short_description}
            </p>

            <p className="job-meta">
              {job.experience} • {job.job_type}
            </p>

            <p className="job-location">{job.location}</p>

            <div className="job-actions">
              <button
                className="btn-outline"
                onClick={() => navigate(`/admin/jobs/${job.id}`)}
              >
                View
              </button>

              <button
                className="btn-primary"
                onClick={() => {
                  setEditingJob(job);   // EDIT MODE
                  setShowModal(true);
                }}
              >
                Edit
              </button>

              <button
                className="btn-danger"
                onClick={() => deleteJob(job.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ADD / EDIT MODAL */}
      {showModal && (
        <JobFormModal
          job={editingJob}
          onClose={() => setShowModal(false)}
          onSuccess={loadJobs}
        />
      )}
    </div>
  );
};

export default AdminJobs;