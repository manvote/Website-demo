import React, { useEffect, useState } from "react";
import API from "../api";
import "./add-job-modal.css";


const JobFormModal = ({ onClose, onSuccess, job }) => {
  const isEdit = Boolean(job);

  const [form, setForm] = useState({
    title: "",
    short_description: "",
    experience: "",
    job_type: "",
    location: "",
    full_description: "",
    requirements: "",
    qualifications: "",
  });

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (job) {
      setForm({
        title: job.title,
        short_description: job.short_description,
        experience: job.experience,
        job_type: job.job_type,
        location: job.location,
        full_description: job.full_description,
        requirements: job.requirements,
        qualifications: job.qualifications,
      });
    }
  }, [job]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitJob = () => {
    if (!form.title || !form.short_description) {
      alert("Title and short description are required");
      return;
    }

    setSaving(true);

    const request = isEdit
      ? API.put(`/api/admin/jobs/${job.id}/`, form)
      : API.post("/api/admin/jobs/", form);

    request
      .then(() => {
        onSuccess();
        onClose();
      })
      .finally(() => setSaving(false));
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h2>{isEdit ? "Edit Job" : "Add New Job"}</h2>

        <input
          name="title"
          placeholder="Job Title"
          value={form.title}
          onChange={handleChange}
        />

        <textarea
          name="short_description"
          placeholder="Short description (shown in listings)"
          value={form.short_description}
          onChange={handleChange}
        />

        <input
          name="experience"
          placeholder="Experience"
          value={form.experience}
          onChange={handleChange}
        />

        <input
          name="job_type"
          placeholder="Job Type"
          value={form.job_type}
          onChange={handleChange}
        />

        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
        />

        <textarea
          name="full_description"
          placeholder="Full Description"
          value={form.full_description}
          onChange={handleChange}
        />

        <textarea
          name="requirements"
          placeholder="Requirements"
          value={form.requirements}
          onChange={handleChange}
        />

        <textarea
          name="qualifications"
          placeholder="Qualifications"
          value={form.qualifications}
          onChange={handleChange}
        />

        <div className="modal-actions">
          <button className="btn-outline" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-primary" onClick={submitJob} disabled={saving}>
            {saving ? "Saving…" : isEdit ? "Update Job" : "Add Job"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobFormModal;