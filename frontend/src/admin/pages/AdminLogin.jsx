
import "./AdminLogin.css";

import { useState } from "react";

import {
  FaLock,
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaUserShield
} from "react-icons/fa";

import logo from "../../assets/image/logo.jpg";

export default function AdminLogin() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  return (

    <div className="admin-login">

      <div className="admin-container">

        {/* LEFT */}

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

        {/* RIGHT */}

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
                    setEmail(e.target.value)
                  }
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
                    setPassword(e.target.value)
                  }
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
                className="forgot-btn"
              >
                Forgot Password?
              </button>

            </div>

            <button
              className="login-btn"
            >

              <FaLock />

              Sign In

            </button>

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

