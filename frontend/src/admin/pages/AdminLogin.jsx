
import "./AdminLogin.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaLock,
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaUserShield
} from "react-icons/fa";

import { supabase } from "../../lib/supabase";

import logo from "../../assets/image/logo.jpg";

export default function AdminLogin() {

  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  useEffect(() => {

    checkSession();

  }, []);

  async function checkSession() {

    try {

      const {
        data: { session }
      } =
      await supabase.auth.getSession();

      if (!session) return;

      const {
        data: admin
      } =
      await supabase
      .from("admins")
      .select("*")
      .eq(
        "email",
        session.user.email
      )
      .single();

      if (admin) {

        navigate(
          "/admin/dashboard"
        );

      }

    }

    catch {

      // ignore

    }

  }

  async function login(e) {

    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {

      const {
        error
      } =
      await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {

        setError(
          error.message
        );

        return;

      }

      const {
        data: admin,
        error: adminError
      } =
      await supabase
      .from("admins")
      .select("*")
      .eq(
        "email",
        email
      )
      .single();

      if (
        adminError ||
        !admin
      ) {

        await supabase.auth.signOut();

        setError(
          "You are not authorized to access this dashboard."
        );

        return;

      }

      setSuccess(
        "Login successful."
      );

      navigate(
        "/admin/dashboard"
      );

    }

    catch {

      setError(
        "Unable to login. Please try again."
      );

    }

    finally {

      setLoading(false);

    }

  }

  async function resetPassword() {

    setError("");
    setSuccess("");

    if (!email) {

      setError(
        "Enter your email address first."
      );

      return;

    }

    const {
      error
    } =
    await supabase.auth.resetPasswordForEmail(
      email,
      {
        redirectTo:
          window.location.origin +
          "/admin/reset-password"
      }
    );

    if (error) {

      setError(
        error.message
      );

    }

    else {

      setSuccess(
        "Password reset link sent to your email."
      );

    }

  }

  return (

    <div className="admin-login">

      <div className="admin-container">

        <div className="admin-left">

          <img
            src={logo}
            alt="Foundation Logo"
            className="left-logo"
          />

          <h1>
            S&S One Family
            <br />
            Foundation
          </h1>

          <div className="logo-divider">
            <span></span>
            ❤
            <span></span>
          </div>

          <p>
            Making a Difference,
            One Family at a Time
          </p>

        </div>

        <div className="admin-right">

          <div className="login-card">

            <div className="shield-icon">
              <FaUserShield />
            </div>

            <h2>
              Admin Control Center
            </h2>

            <p className="subtitle">
              Sign in to access your secure dashboard
            </p>

            <div className="color-line">
              <span className="blue"></span>
              <span className="yellow"></span>
              <span className="red"></span>
              <span className="green"></span>
            </div>

            {error && (
              <div className="login-error">
                {error}
              </div>
            )}

            {success && (
              <div className="login-success">
                {success}
              </div>
            )}

            <form
              onSubmit={login}
            >

              <div className="form-group">

                <label>
                  Email Address
                </label>

                <div className="input-box">

                  <FaEnvelope />

                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e)=>
                      setEmail(
                        e.target.value
                      )
                    }
                    required
                  />

                </div>

              </div>

              <div className="form-group">

                <label>
                  Password
                </label>

                <div className="input-box">

                  <FaLock />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e)=>
                      setPassword(
                        e.target.value
                      )
                    }
                    required
                  />

                  <button
                    type="button"
                    className="eye-btn"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                  >

                    {
                      showPassword
                        ? <FaEyeSlash />
                        : <FaEye />
                    }

                  </button>

                </div>

              </div>

              <div className="login-options">

                <label>

                  <input
                    type="checkbox"
                  />

                  Remember me

                </label>

                <button
                  type="button"
                  className="forgot-btn"
                  onClick={
                    resetPassword
                  }
                >
                  Forgot Password?
                </button>

              </div>

              <button
                type="submit"
                className="login-btn"
                disabled={loading}
              >

                <FaLock />

                {
                  loading
                    ? "Signing In..."
                    : "Sign In"
                }

              </button>

            </form>

            <div className="protected">

              <span></span>

              Protected Access

              <span></span>

            </div>

            <small>
              Your data is safe,
              secure and protected
            </small>

          </div>

        </div>

      </div>

    </div>

  );

}

