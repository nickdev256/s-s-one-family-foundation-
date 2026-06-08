import "./AdminLogin.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
FaLock,
FaUserShield,
FaEye,
FaEyeSlash,
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

    <form
      onSubmit={login}
    >

      <input
        type="email"
        placeholder="Enter Email Address"
        value={email}
        onChange={(e) =>
          setEmail(
            e.target.value
          )
        }
        autoComplete="email"
        required
      />

      <div className="password-wrapper">

        <input
          type={
            showPassword
              ? "text"
              : "password"
          }
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          autoComplete="current-password"
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
            ? "Signing In..."
            : "Login"
        }

      </button>

      <button
        type="button"
        className="forgot-btn"
        onClick={
          resetPassword
        }
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
