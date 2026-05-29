import "./PartnersAdmin.css";

import {
  FaHandshake,
  FaSearch,
  FaCheck,
  FaTimes,
  FaBuilding,
  FaSpinner
} from "react-icons/fa";

import { useState, useEffect } from "react";

import AdminLayout from "../layout/AdminLayout";

export default function PartnersAdmin() {

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  const [partners, setPartners] = useState([]);

  useEffect(() => {
    loadPartners();
  }, []);

  async function loadPartners() {
    try {

      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/partners"
      );

      const data = await response.json();

      if (data.success) {
        setPartners(data.partners);
      }

    } catch (error) {
      console.error("Failed loading partners:", error);
    } finally {
      setLoading(false);
    }
  }

  async function approve(id) {
    try {

      await fetch(
        `http://localhost:5000/api/partners/${id}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            status: "Approved"
          })
        }
      );

      loadPartners();

    } catch (error) {
      console.error(error);
    }
  }

  async function reject(id) {
    try {

      await fetch(
        `http://localhost:5000/api/partners/${id}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            status: "Rejected"
          })
        }
      );

      loadPartners();

    } catch (error) {
      console.error(error);
    }
  }

  const filtered = partners.filter(item =>
    item.organization
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <AdminLayout>

      <div className="partners-page">

        {/* HEADER */}

        <div className="page-header">

          <div>

            <span>
              PARTNERSHIPS
            </span>

            <h1>
              Partner Requests
            </h1>

            <p>
              Manage NGO partnership requests
              and collaborations.
            </p>

          </div>

          <div className="partner-total">

            <FaHandshake />

            {partners.length}

          </div>

        </div>

        {/* SEARCH */}

        <div className="partner-search">

          <FaSearch />

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search partner..."
          />

        </div>

        {/* LOADING */}

        {loading ? (

          <div className="loading-box">

            <FaSpinner className="spin" />

            <h3>Loading Partners...</h3>

          </div>

        ) : (

          <div className="partners-grid">

            {filtered.length === 0 ? (

              <div className="empty-state">

                <h3>No Partner Requests Found</h3>

              </div>

            ) : (

              filtered.map((item) => (

                <div
                  key={item.id}
                  className="partner-card"
                >

                  <div className="partner-icon">

                    <FaBuilding />

                  </div>

                  <h2>
                    {item.organization}
                  </h2>

                  <h4>
                    {item.contact}
                  </h4>

                  <p>
                    {item.type}
                  </p>

                  {item.email && (
                    <small>
                      {item.email}
                    </small>
                  )}

                  <span
                    className={
                      item.status?.toLowerCase()
                    }
                  >
                    {item.status}
                  </span>

                  <div className="partner-actions">

                    <button
                      className="approve"
                      onClick={() =>
                        approve(item.id)
                      }
                      disabled={
                        item.status === "Approved"
                      }
                    >

                      <FaCheck />

                      Approve

                    </button>

                    <button
                      className="reject"
                      onClick={() =>
                        reject(item.id)
                      }
                      disabled={
                        item.status === "Rejected"
                      }
                    >

                      <FaTimes />

                      Reject

                    </button>

                  </div>

                </div>

              ))

            )}

          </div>

        )}

      </div>

    </AdminLayout>
  );
}