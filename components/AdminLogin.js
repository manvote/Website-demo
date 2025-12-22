import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import "./admin-login.css";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await API.post("/api/admin/auth/login/", {
        username,
        password,
      });

      localStorage.setItem("adminToken", res.data.access);
      localStorage.setItem("adminUser", res.data.username);

      navigate("/admin");
    } catch {
      setError("Invalid admin credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-wrapper">
      <form onSubmit={handleLogin} className="admin-login-card">
        <h2>Admin Access</h2>
        <p className="admin-login-sub">
          Secure access to Manovate Admin Panel
        </p>

        {error && <p className="admin-login-error">{error}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Authenticating..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;