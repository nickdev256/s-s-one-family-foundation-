import "./AdminLogin.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaLock,
  FaUserShield,
  FaEye,
  FaEyeSlash
} from "react-icons/fa";

import { supabase } from "../../config/supabase";

import logo from "../../assets/image/logo.jpg";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [error, setError] =
    useState("");

  async function login(e) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const { data, error } =
        await supabase.auth.signInWithPassword({
          email,
          password
        });

      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }

      if (data.session) {
        navigate("/admin/dashboard");
      }
    } catch (err) {
      setError(
        "Unable to login. Please try again."
      );
    }

    setLoading(false);
  }

  return (
    <div className="admin-login">
      <div className="admin-overlay"></div>

      <div className="login-card">

        <img
          src={logo}
          alt="S&S One Family Foundation"
          className="admin-logo"
        />

        <div className="admin-badge">
          <FaUserShield />
        </div>

        <h1>Admin Login</h1>

        <p>
          S&S One Family Foundation
          <br />
          Control Center
        </p>

        {error && (
          <div className="login-error">
            {error}
          </div>
        )}

        <form onSubmit={login}>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <div className="password-wrapper">

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              required
            />

            <button
              type="button"
              className="toggle-password"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
            >
              {showPassword
                ? <FaEyeSlash />
                : <FaEye />}
            </button>

          </div>

          <button
            type="submit"
            disabled={loading}
          >
            <FaLock />

            {loading
              ? "Logging In..."
              : "LOGIN"}
          </button>

        </form>

        <span>
          Protected Dashboard Access
        </span>

      </div>
    </div>
  );
}