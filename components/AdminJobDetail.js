import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import API from "../api";
import "./admin-job-detail.css";
import AdminLoader from "./AdminLoader";

const AdminJobDetail = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const isEditMode = searchParams.get("edit") === "true";

  const [job, setJob] = useState(null);
  const [form, setForm] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    API.get(`/api/admin/jobs/${id}/`)
      .then((res) => {
        setJob(res.data);
        setForm(res.data);
      })
      .catch(() => console.log("Error"));
  }, [id]);

  if (!job) return <AdminLoader label="Fetching job details…" />;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    setSaving(true);

    API.patch(`/api/admin/jobs/${id}/`, form)
      .then((res) => {
        setJob(res.data);
        alert("Job updated successfully");
      })
      .finally(() => setSaving(false));
  };

  return (
    <div className="job-detail-card">
      {isEditMode ? (
        <>
          <input
            className="job-input"
            name="title"
            value={form.title}
            onChange={handleChange}
          />

          <div className="job-meta">
            <input
              className="job-input"
              name="experience"
              value={form.experience}
              onChange={handleChange}
            />
            <input
              className="job-input"
              name="job_type"
              value={form.job_type}
              onChange={handleChange}
            />
            <input
              className="job-input"
              name="location"
              value={form.location}
              onChange={handleChange}
            />
          </div>

          <textarea
            className="job-textarea"
            name="short_description"
            value={form.short_description}
            onChange={handleChange}
          />

          <textarea
            className="job-textarea"
            name="full_description"
            value={form.full_description}
            onChange={handleChange}
          />

          <textarea
            className="job-textarea"
            name="requirements"
            value={form.requirements}
            onChange={handleChange}
          />

          <textarea
            className="job-textarea"
            name="qualifications"
            value={form.qualifications}
            onChange={handleChange}
          />

          <div className="job-actions">
            <button className="btn-primary" onClick={saveChanges} disabled={saving}>
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="job-title">{job.title}</h2>

          <div className="job-meta">
            <span>{job.experience}</span>
            <span>{job.job_type}</span>
            <span>{job.location}</span>
          </div>

          <div className="job-section">
            <h4>Short Description</h4>
            <p>{job.short_description}</p>
          </div>

          <div className="job-section">
            <h4>Full Description</h4>
            <p>{job.full_description}</p>
          </div>

          <div className="job-section">
            <h4>Requirements</h4>
            <p>{job.requirements}</p>
          </div>

          <div className="job-section">
            <h4>Qualifications</h4>
            <p>{job.qualifications}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminJobDetail;