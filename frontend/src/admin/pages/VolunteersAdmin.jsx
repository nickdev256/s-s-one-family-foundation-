import "./Volunteers.css";

import {
  FaSearch,
  FaCheck,
  FaTimes,
  FaEye,
  FaUsers,
  FaUserCheck,
  FaSpinner
} from "react-icons/fa";

import { useState, useEffect } from "react";

import AdminLayout from "../layout/AdminLayout";

export default function Volunteers() {

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    loadVolunteers();
  }, []);

  async function loadVolunteers() {
    try {

      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/volunteers"
      );

      const data = await response.json();

      if (data.success) {
        setVolunteers(data.volunteers);
      }

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  }

  async function approve(id) {

    try {

      await fetch(
        `http://localhost:5000/api/volunteers/${id}/status`,
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

      loadVolunteers();

    } catch (error) {

      console.error(error);

    }
  }

  async function reject(id) {

    try {

      await fetch(
        `http://localhost:5000/api/volunteers/${id}/status`,
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

      loadVolunteers();

    } catch (error) {

      console.error(error);

    }
  }

  function view(item) {

    alert(`
Name: ${item.name}

Email: ${item.email}

Phone: ${item.phone || "N/A"}

Program: ${item.program}

Status: ${item.status}
    `);

  }

  const filtered = volunteers.filter(item =>
    item.name
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <AdminLayout>

      <div className="volunteers-page">

        <div className="page-header">

          <div>

            <span>
              VOLUNTEER MANAGEMENT
            </span>

            <h1>
              Volunteer Applications
            </h1>

            <p>
              Review and manage volunteer requests.
            </p>

          </div>

        </div>

        <div className="stats">

          <div className="stat">

            <FaUsers />

            <div>

              <h3>
                {volunteers.length}
              </h3>

              <p>
                Applications
              </p>

            </div>

          </div>

          <div className="stat">

            <FaUserCheck />

            <div>

              <h3>
                {
                  volunteers.filter(
                    v => v.status === "Approved"
                  ).length
                }
              </h3>

              <p>
                Approved
              </p>

            </div>

          </div>

        </div>

        <div className="search-box">

          <FaSearch />

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search volunteer..."
          />

        </div>

        {loading ? (

          <div className="loading-box">

            <FaSpinner className="spin" />

            <h3>
              Loading Volunteers...
            </h3>

          </div>

        ) : (

          <div className="table-card">

            <table className="admin-table">

              <thead>

                <tr>

                  <th>Name</th>

                  <th>Email</th>

                  <th>Program</th>

                  <th>Status</th>

                  <th>Actions</th>

                </tr>

              </thead>

              <tbody>

                {filtered.length === 0 ? (

                  <tr>

                    <td
                      colSpan="5"
                      style={{
                        textAlign: "center",
                        padding: "40px"
                      }}
                    >
                      No volunteers found
                    </td>

                  </tr>

                ) : (

                  filtered.map(item => (

                    <tr key={item.id}>

                      <td>
                        {item.name}
                      </td>

                      <td>
                        {item.email}
                      </td>

                      <td>
                        {item.program}
                      </td>

                      <td>

                        <span
                          className={
                            item.status?.toLowerCase()
                          }
                        >
                          {item.status}
                        </span>

                      </td>

                      <td>

                        <div className="actions">

                          <button
                            className="view"
                            onClick={() =>
                              view(item)
                            }
                          >
                            <FaEye />
                          </button>

                          <button
                            className="approve"
                            disabled={
                              item.status === "Approved"
                            }
                            onClick={() =>
                              approve(item.id)
                            }
                          >
                            <FaCheck />
                          </button>

                          <button
                            className="reject"
                            disabled={
                              item.status === "Rejected"
                            }
                            onClick={() =>
                              reject(item.id)
                            }
                          >
                            <FaTimes />
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))

                )}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </AdminLayout>
  );
}