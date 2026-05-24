import './Footer.css'

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa'

export default function Footer(){

  return(

    <footer className="footer">

      <div className="footer-overlay"></div>

      <div className="footer-container">

        {/* LEFT */}

        <div className="footer-about">

          <h1>
            S&S ONE FAMILY FOUNDATION
          </h1>

          <p>

            Building hope, restoring dignity and
            transforming communities through education,
            healthcare, empowerment and humanitarian support.

          </p>

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaYoutube />
            </a>

          </div>

        </div>

        {/* QUICK LINKS */}

        <div className="footer-links">

          <h2>
            Quick Links
          </h2>

          <a href="#">
            Home
          </a>

          <a href="#">
            About Us
          </a>

          <a href="#">
            Programs
          </a>

          <a href="#">
            Gallery
          </a>

          <a href="#">
            Volunteer
          </a>

          <a href="#">
            Contact
          </a>

        </div>

        {/* PROGRAMS */}

        <div className="footer-links">

          <h2>
            Our Programs
          </h2>

          <a href="#">
            Child Support
          </a>

          <a href="#">
            Education
          </a>

          <a href="#">
            Community Outreach
          </a>

          <a href="#">
            Health Support
          </a>

          <a href="#">
            Youth Empowerment
          </a>

        </div>

        {/* CONTACT */}

        <div className="footer-contact">

          <h2>
            Contact Info
          </h2>

          <div className="contact-item">

            <FaMapMarkerAlt />

            <p>
              Kampala, Uganda
            </p>

          </div>

          <div className="contact-item">

            <FaPhoneAlt />

            <p>
              +256 700 000000
            </p>

          </div>

          <div className="contact-item">

            <FaEnvelope />

            <p>
              info@ssonefamilyfoundation.org
            </p>

          </div>

          <div className="newsletter">

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>
              Subscribe
            </button>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>

          © 2026 S&S One Family Foundation.
          All Rights Reserved.

        </p>

      </div>

    </footer>

  )

}