
import "./AdminLogin.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaLock,
  FaUserShield,
  FaEye,
  FaEyeSlash,
  FaUserPlus,
  FaKey
} from "react-icons/fa";

import { supabase } from "../../lib/supabase";

import logo from "../../assets/image/logo.jpg";

export default function AdminLogin() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  async function login(e) {

    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {

      const {
        data,
        error
      } =
      await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {

        setError(error.message);

        return;

      }

      const {
        data: admin,
        error: adminError
      } =
      await supabase
      .from("admins")
      .select("*")
      .eq("email", email)
      .single();

      if (adminError || !admin) {

        await supabase.auth.signOut();

        setError(
          "You are not authorized to access this dashboard."
        );

        return;

      }

      navigate("/admin/dashboard");

    }

    catch (err) {

      setError(
        "Unable to login. Please try again."
      );

    }

    finally {

      setLoading(false);

    }

  }

  async function createAccount() {

    if (!email || !password) {

      setError(
        "Enter email and password first."
      );

      return;

    }

    try {

      setLoading(true);

      setError("");

      setSuccess("");

      const {
        data,
        error
      } =
      await supabase.auth.signUp({
        email,
        password
      });

      if (error) {

        setError(error.message);

        return;

      }

      const { error: adminError } =
      await supabase
      .from("admins")
      .upsert([
        {
          email,
          role: "super_admin"
        }
      ]);

      if (adminError) {

        setError(adminError.message);

        return;

      }

      setSuccess(
        "Account created successfully. You can now login."
      );

    }

    catch (err) {

      setError(
        "Failed to create account."
      );

    }

    finally {

      setLoading(false);

    }

  }

  async function resetPassword() {

    if (!email) {

      setError(
        "Enter your email first."
      );

      return;

    }

    const { error } =
    await supabase.auth.resetPasswordForEmail(
      email
    );

    if (error) {

      setError(error.message);

    }

    else {

      setSuccess(
        "Password reset email sent."
      );

    }

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

        <h1>
          Admin Portal
        </h1>

        <p>
          S&S One Family Foundation
          <br />
          Secure Control Center
        </p>

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

              {
                showPassword
                ? <FaEyeSlash />
                : <FaEye />
              }

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
              ? "Please Wait..."
              : "Login"
            }

          </button>

          <button
            type="button"
            className="register-btn"
            onClick={createAccount}
            disabled={loading}
          >

            <FaUserPlus />

            Create My Account

          </button>

          <button
            type="button"
            className="forgot-btn"
            onClick={resetPassword}
          >

            <FaKey />

            Forgot Password

          </button>

        </form>

        <span>
          Protected Dashboard Access
        </span>

      </div>

    </div>

  );

}

