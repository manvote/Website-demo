import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import PublicAPI from "../publicApi";
import "./career-job-detail.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FullPageLoader from "./FullPageLoader";


const CareerJobDetail = () => {
  const { id } = useParams();
  const fileRef = useRef(null);

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    cover_note: "",
    resume: null,
  });

  /* ---------------- FETCH JOB ---------------- */
  useEffect(() => {
    PublicAPI.get(`/api/careers/jobs/${id}/`)
      .then((res) => setJob(res.data))
      .catch(() => alert("Failed to load job details"))
      .finally(() => setLoading(false));
  }, [id]);

  /* ---------------- FORM HANDLER ---------------- */
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  /* ---------------- SUBMIT ---------------- */
  const submitApplication = async (e) => {
    e.preventDefault();

    if (!form.resume) {
      alert("Please upload your resume");
      return;
    }

    const data = new FormData();
    data.append("job", Number(id)); // 🔥 required
    data.append("full_name", form.full_name);
    data.append("email", form.email);
    data.append("phone", form.phone);
    data.append("cover_note", form.cover_note || "");
    data.append("resume", form.resume);

    try {
      setSubmitting(true);

      await PublicAPI.post("/api/careers/apply/", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Application submitted successfully");

      setForm({
        full_name: "",
        email: "",
        phone: "",
        cover_note: "",
        resume: null,
      });

      if (fileRef.current) {
        fileRef.current.value = "";
      }
    } catch (err) {
      console.error("Apply error:", err.response?.data);
      alert(
        err.response?.data?.detail ||
          "Submission failed. Please check all fields."
      );
    } finally {
      setSubmitting(false);
    }
  };

  /* ---------------- STATES ---------------- */
  if (loading) {
  return (
    <>
      <Navbar />
      <FullPageLoader text="Loading job details…" />
      <Footer />
    </>
  );
}

  if (!job) return <p>Job not found</p>;

  /* ---------------- UI ---------------- */
  return (
    <>
    <Navbar />
    <section className="career-job-detail">
      {/* JOB DETAILS */}
      <div className="job-info">
        <h1>{job.title}</h1>
        <p className="job-meta">
          {job.experience} • {job.job_type} • {job.location}
        </p>

        <h3>Description</h3>
        <p>{job.full_description}</p>

        <h3>Requirements</h3>
        <p>{job.requirements}</p>

        <h3>Qualifications</h3>
        <p>{job.qualifications}</p>
      </div>

      {/* APPLICATION FORM */}
      <form className="job-apply-form" onSubmit={submitApplication}>
        <h2>Apply for this position</h2>

        <input
          name="full_name"
          value={form.full_name}
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          value={form.email}
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          value={form.phone}
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />

        <textarea
          name="cover_note"
          value={form.cover_note}
          placeholder="Cover Note (optional)"
          onChange={handleChange}
        />

        <input
          ref={fileRef}
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="career-btn"
          disabled={submitting}
        >
          {submitting ? "Submitting…" : "Submit Application →"}
        </button>
      </form>
    </section>
    <Footer />
    </>
  );
};

export default CareerJobDetail;